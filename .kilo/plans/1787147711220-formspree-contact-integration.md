# Plan: Integrate Formspree for Contact Form

## Goal
Replace the EmailJS-based contact form submission with Formspree so that contact form data is sent to `fythclothings@gmail.com`. Keep EmailJS unchanged for registration confirmation emails.

## Context
- Project: React + Vite
- Existing Contact form: `src/pages/Contact.jsx` (manual state + previous `sendContactNotification` via EmailJS)
- Formspree form ID: `mrpzjgwa`
- Endpoint: `https://formspree.io/f/mrpzjgwa`
- `@formspree/react` already installed

## Changes Required

### 1. Update `src/pages/Contact.jsx`
- Replace `sendContactNotification` import with `useForm` from `@formspree/react`
- Replace manual `formData`, `submitStatus`, `submitError` state with Formspree's `state` and `handleSubmit`
- Remove `handleChange` and controlled input bindings; let Formspree manage form data natively
- Update `<form onSubmit>` to use Formspree's `handleSubmit`
- Update button to use `state.submitting` for disabled state
- Update success/error UI to use `state.succeeded` and `state.errors`
- Keep existing styling, labels, placeholders, and layout

### 2. Clean up `src/services/email.js`
- Remove unused `sendContactNotification` export (kept in place for now, but should be removed)

## Validation
- Run `npm run dev`
- Navigate to Contact page
- Submit form with valid data
- Verify email arrives at `fythclothings@gmail.com` via Formspree dashboard
- Verify success message renders
- Verify error state renders on invalid submission

## Notes
- Formspree free tier: 50 submissions/month, 1 form
- Formspree sends emails to `fythclothings@gmail.com` because that is configured as the notification email in the Formspree dashboard
- No backend changes required
