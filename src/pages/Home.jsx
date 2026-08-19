import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
    const [isVisible, setIsVisible] = useState({});
    const sectionRefs = useRef({});

    useEffect(() => {
        const observers = {};
        Object.keys(sectionRefs.current).forEach((key) => {
            observers[key] = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible((prev) => ({ ...prev, [key]: true }));
                        }
                    });
                },
                { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
            );
            if (sectionRefs.current[key]) {
                observers[key].observe(sectionRefs.current[key]);
            }
        });

        return () => {
            Object.keys(observers).forEach((key) => {
                if (observers[key]) observers[key].disconnect();
            });
        };
    }, []);

    const stats = [
        { number: '50+', label: 'Students Trained' },
        { number: '15+', label: 'Workshops Held' },
        { number: '100%', label: 'Hands-on Learning' },
        { number: '4.9', label: 'Student Rating' },
    ];

    const offerings = [
        {
            icon: '👩‍🏫',
            title: 'In-Person Training',
            desc: 'Hands-on learning with direct guidance in a supportive, creative environment.',
        },
        {
            icon: '💻',
            title: 'Online Classes',
            desc: 'Learn at your own pace with flexible virtual sessions from anywhere.',
        },
        {
            icon: '🤝',
            title: 'One-on-One Mentoring',
            desc: 'Personalized attention tailored to your specific goals and skill level.',
        },
    ];

    const services = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 6.5h9M7.5 6.5a2.25 2.25 0 012.25-2.25h.008v.008h-.008a2.25 2.25 0 01-2.25 2.25H7.5A2.25 2.25 0 015.25 7.5v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-.008v-.008h.008a2.25 2.25 0 012.25 2.25H7.5z" />
                </svg>
            ),
            title: 'Bespoke Tailoring',
            desc: 'Bespoke tailoring crafted with precision and care, ensuring a perfect fit and timeless elegance.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM7.5 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
            ),
            title: 'Fashion Design',
            desc: 'Creative fashion design that blends modern aesthetics with timeless sophistication.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                </svg>
            ),
            title: 'Ready-to-Wear',
            desc: 'Ready-to-wear pieces that combine style, comfort, and quality for every occasion.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-3.399 8.25-7.594 8.25S5.812 16.556 5.812 12H21z" />
                </svg>
            ),
            title: 'Consultations',
            desc: 'Personalized consultations to bring your fashion vision to life with expert guidance.',
        },
    ];

    return (
        <>
            <SEO
                title="Home"
                description="FYTHCLOTHINGS - We create beautifully crafted, quality garments and share practical fashion knowledge that helps aspiring designers and sewing enthusiasts develop their skills, express their creativity, and turn their passion into purposeful opportunities."
            />

            {/* ─── HERO ─── */}
            <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
                {/* Background with parallax effect */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(/fythlanding.png)',
                        backgroundAttachment: 'fixed',
                        backgroundSize: '150% auto',
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />


                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <img src="/logo.jpg" alt="Fyth Clothings" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-6 shadow-2xl border-4 border-white/20" />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-md">
                        FYTHCLOTHINGS
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-orange-200 mb-4 tracking-wide drop-shadow-md">
                        Elevate Your Style 
                    </h1>

                    <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-white drop-shadow-lg">
                        Where Masterful Tailoring Meets Modern Fashion Design.
                        Discover Bespoke Elegance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/register"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink to-[#9d174d] text-white font-bold py-3 px-8 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-pink/30"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── SERVICES ─── */}
            <section className="py-20 bg-gradient-to-b from-sky-100/60 to-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-wide">
                            Our Services
                        </h2>
                        <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="flex justify-center mb-4 text-sky-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── STATS BAR ─── */}
            <section className="py-12 bg-white border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="text-center"
                                ref={(el) => (sectionRefs.current[`stat-${i}`] = el)}
                            >
                                <div className={`text-3xl md:text-4xl font-bold text-gold transition-all duration-700 ${
                                    isVisible[`stat-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                                }`}>
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 text-sm mt-1 tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── MISSION & VISION ─── */}
            <section
                className="py-24 bg-white relative overflow-hidden"
                ref={(el) => (sectionRefs.current.mission = el)}
            >
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className={`text-center mb-16 transition-all duration-700 ${
                        isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <span className="inline-block text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                            Our Foundation
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-black">
                            Mission & Vision
                        </h2>
                        <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Our Mission',
                                desc: 'We create beautifully crafted, quality garments and share practical fashion knowledge that helps aspiring designers and sewing enthusiasts develop their skills, express their creativity, and turn their passion into purposeful opportunities.',
                                icon: '🎯',
                            },
                            {
                                title: 'Our Vision',
                                desc: 'To build a community where creativity is nurtured, skills are empowered and every individual has the confidence to Sew, Style and Shine.',
                                icon: '✨',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`group bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 ${
                                    isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className="flex items-start gap-5">
                                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gold mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg leading-relaxed text-gray-700">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FOUNDER ─── */}
            <section
                className="py-24 bg-gray-50 relative overflow-hidden"
                ref={(el) => (sectionRefs.current.founder = el)}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                        isVisible.founder ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        {/* Image */}
                        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                            <div className="relative">
                                <img src="/RonkeOyeniyi.jpeg" alt="Ronke Faith Oyeniyi" className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-xl ring-4 ring-white" />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="order-1 lg:order-2">
                            <span className="inline-block text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                                Founder
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                                Ronke Faith Oyeniyi
                            </h2>
                            <div className="w-12 h-1 bg-gold rounded-full mb-6" />
                            <p className="text-lg leading-relaxed text-gray-700 mb-4">
                                Ronke Faith Oyeniyi founded FYTHCLOTHINGS with a
                                passion for sewing and a vision to empower
                                others through fashion education. With years of
                                experience in garment construction and design
                                training, she established FYTHCLOTHINGS as a
                                space where creativity meets skill-building.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                The fashion school offers structured training
                                programs for beginners through advanced
                                learners, covering everything from basic sewing
                                techniques to complete garment construction.
                            </p>
                            <div className="flex gap-4 mt-6">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="w-2 h-2 rounded-full bg-gold" />
                                    <span>10+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="w-2 h-2 rounded-full bg-gold" />
                                    <span>50+ Students</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── WHAT WE OFFER ─── */}
            <section
                className="py-24 bg-white relative overflow-hidden"
                ref={(el) => (sectionRefs.current.offer = el)}
            >
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className={`text-center mb-16 transition-all duration-700 ${
                        isVisible.offer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <span className="inline-block text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                            Programs
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-black">
                            What We Offer
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                            Comprehensive training programs designed to take you
                            from beginner to confident creator.
                        </p>
                        <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {offerings.map((item, i) => (
                            <div
                                key={i}
                                className={`group bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 ${
                                    isVisible.offer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-xl text-black mb-2 group-hover:text-gold transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="mt-4 h-0.5 w-12 bg-gold/30 group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="relative py-28 overflow-hidden bg-gradient-to-br from-gold via-gold/90 to-gold/80">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, black 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }} />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-block mb-4 px-4 py-1 bg-black/10 rounded-full text-black/70 text-sm tracking-wider uppercase backdrop-blur-sm">
                        Join the Community
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                        Ready to <span className="underline decoration-white/30 underline-offset-8">Sew</span>,{' '}
                        <span className="underline decoration-white/30 underline-offset-8">Style</span>, and{' '}
                        <span className="underline decoration-white/30 underline-offset-8">Shine</span>?
                    </h2>
                    <p className="text-lg text-black/80 mb-10 max-w-xl mx-auto">
                        Join our community today and start your creative journey
                        with FYTHCLOTHINGS.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/register"
                            className="group inline-flex items-center gap-2 bg-black text-gold font-bold py-3.5 px-9 rounded-full text-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-black/20 overflow-hidden relative"
                        >
                            <span className="relative z-10">Register Now</span>
                            <svg
                                className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                        <Link
                            to="/courses"
                            className="inline-flex items-center gap-2 text-black font-medium py-3.5 px-8 rounded-full border-2 border-black/30 hover:border-black/60 transition-all duration-300 backdrop-blur-sm hover:bg-black/5"
                        >
                            Explore Courses
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── CUSTOM STYLES ─── */}
            <style>{`
                @keyframes fade-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-up {
                    animation: fade-up 1s ease-out forwards;
                }

                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .bg-300\\% {
                    background-size: 300% 300%;
                }
                .animate-gradient {
                    animation: gradient 6s ease infinite;
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(8px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2.5s ease-in-out infinite;
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </>
    );
};

export default Home;
