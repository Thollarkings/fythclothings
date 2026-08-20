# Plan: Fix Registration Submit Error Handling

## Problem
User sees `Registration saved, but Failed to fetch` after submitting the registration form. This is a browser network-level failure from the EmailJS `fetch()` call inside `sendAdminNotification()`. Because `handleSubmit` awaits `sendAdminNotification` before `sendUserConfirmation`, the admin failure blocks the student welcome email and prevents the success state from showing.

## Current Flow (Registration.jsx:128-150)
```
setSubmitStatus('loading')
await sendAdminNotification(formData)   ← blocks here on network error
await sendUserConfirmation(formData)
// PDF generation + success state
catch → setSubmitError('Registration saved, but Failed to fetch')
```

## Desired Behavior
1. Student confirmation email is **never blocked** by admin notification failure
2. Admin notification failure is logged but does not prevent success state
3. PDF still downloads on successful validation
4. Error message is user-friendly if student confirmation actually fails

## Proposed Change

In `src/pages/Registration.jsx`, update the submit block:

```js
setSubmitStatus('loading')

// Fire both emails in parallel; admin failure is non-blocking
const adminPromise = sendAdminNotification(formData).catch(err => {
  console.error('Admin notification failed:', err)
})

const userPromise = sendUserConfirmation(formData).catch(err => {
  console.error('User confirmation failed:', err)
  throw err
})

try {
  await Promise.all([adminPromise, userPromise])
} catch (error) {
  setSubmitError('Registration saved, but confirmation email failed. We will contact you shortly.')
  setSubmitStatus('error')
  return
}

// PDF generation + success state
```

## Why This Works
- `adminPromise` catches its own error and resolves to `undefined`, so `Promise.all` only fails if `userPromise` rejects
- Student still gets their welcome email even if admin notification has a transient network issue
- Success state and PDF generation proceed when student confirmation succeeds

## Validation
1. Submit a registration with ad blocker enabled (to reproduce "Failed to fetch")
2. Verify student confirmation email still sends
3. Verify success state and PDF download trigger
4. Verify admin notification retry works when network is restored
