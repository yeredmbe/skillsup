import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    return (
        <div className="relative flex min-h-screen flex-col">


            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 lg:px-20 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-primary p-1.5 rounded text-white flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">school</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tighter text-primary uppercase">
                            SkillsUp
                        </h1>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link className="text-sm font-semibold hover:text-primary/70" to="/teachers">Teachers</Link>
                        <Link className="text-sm font-semibold hover:text-primary/70" to="/verify">Become a Tutor</Link>
                        <Link className="text-sm font-semibold hover:text-primary/70" to="/settings">How it Works</Link>
                    </div>

                    {/* Desktop auth */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/signin" className="text-sm font-bold px-4 py-2 hover:bg-slate-50 rounded-lg">
                            Log In
                        </Link>
                        <Link to="/signup" className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg">
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex items-center"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {menuOpen ? "menu" : "close"}
                        </span>
                    </button>

                </div>
            </nav>

            <div className={`md:hidden fixed left-0 right-0 top-[7%] bg-white z-40 px-6 py-6 space-y-6 ${menuOpen ? "-translate-y-100 opacity-0" : "translate-y-0 opacity-100"} transition-all duration-500 `}>

                <Link to="/teachers" className="block font-semibold" onClick={() => setMenuOpen(false)}>
                    Teachers
                </Link>

                <Link to="/verify" className="block font-semibold" onClick={() => setMenuOpen(false)}>
                    Become a Tutor
                </Link>

                <Link to="/settings" className="block font-semibold" onClick={() => setMenuOpen(false)}>
                    How it Works
                </Link>

                <div className="pt-4 border-t space-y-2">
                    <Link to="/signin" className="block text-center py-2 bg-slate-100 rounded-lg font-bold">
                        Log In
                    </Link>

                    <Link to="/signup" className="block text-center py-2 bg-primary text-white rounded-lg font-bold">
                        Sign Up
                    </Link>
                </div>

            </div>


            <header className="relative overflow-hidden bg-white pt-16 pb-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold tracking-wide uppercase text-slate-600">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Trusted by 10,000+ students
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-primary">
                            Master any skill with personalized <span className="underline decoration-4 underline-offset-8">home tutoring</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            Connect with expert tutors for 1-on-1 home lessons tailored to your specific pace, schedule, and learning goals.
                        </p>

                        <div className="p-2 bg-slate-100 rounded-xl max-w-xl">
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="flex-1 relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                    <input className="w-full pl-10 pr-4 py-4 rounded-lg border-none focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="What do you want to learn?" type="text" />
                                </div>
                                <div className="md:w-40 relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                                    <input className="w-full pl-10 pr-4 py-4 rounded-lg border-none focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="City" type="text" />
                                </div>
                                <button className="bg-primary text-white font-bold py-4 px-8 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-3">
                                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Female student portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWjGW8AW-7EcBOLr4zH7z_8fiy0N62SjlNiy_a55vmZK_3ZUSJwp6SsoOZGAFX9TGuvxsYsYX5umSzOZBVSaU2bIBDea57Kl_pJ7-OOCMJQtsy6hWaDOxYMvhRxJVSy7Kl0Gb8n2vb8pxVFAnZQAY61VzCmTp6bis9K5F2Z8ufoIajlQWrOBMVpg_07VF_2UIubC9ni60P4HL_AFLdyr5W77WyAPauWC3nRjqse_28o41qFciz5pN6o_bllgv07DqCgkgJ78ajRg" />
                                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Male student portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVNEb1QD2ues_LyRPcrnmevS80ANN8uSnJM_0bDZHfYySYhUL_ecdRS0O5fI-uOjCNK3m6XFupeLOwgBYKjh-xKfLYTCFebMzwDSnECrI14DB--fjn72Zleu84PvpqMESHpmm3IaGfLJubOKyQE21qIpTT-0jxS1QzpB2m6mfM-VWzD-upAcdK86DNGjRkg3w_mhrji5MFnM1iFZn3zKydDzwBL1U2CCpcDrQdujeRrC1Lq57adaneKWNcc9nn5zM5UVXNZ4iu5A" />
                                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Smiling student profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcLXsV4YQ5rmEvuf2b-be3HjmH9YRUZkh79XGT4xV6WrpclCnmphodrqN227-Wn0AxNtzMp4j-5xtzsEyEgwdjMHY5Pg_pEhCPECwJdj7ulzTr4QTt0qr003vCWPoGaiagLvmk8_kVanxQKEW0E-KfFQSRa8HzcVDwC3-2JRa1iCxhVytD_BjoWOLxzEpswHkOkTcmq48uDDLpMtsxGA-8Apm9RyqXqiVmFePittY5GPzn0jhQxG5O-Wo2Qvt_QXr6uETqDNV06w" />
                                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">+2k</div>
                            </div>
                            <p className="text-sm text-slate-500 font-medium">Join our growing community</p>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-primary/5 rounded-[2rem] -rotate-3"></div>
                        <img className="relative rounded-[2rem] object-cover aspect-[4/5] shadow-2xl" data-alt="Teacher and student studying together at home" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEX6arzhtbp7KPGSSaOmYm-86D1wLVrC-3WOxcXNlUgDmdHZ6UiFZF4N6903ZOizeo1HJAHKqpF_VAEtdQkPUzYd2hBnk_FgCvxyiiVyfNohBOk0zXHM2n0WJD5HTrKAoe7-rzbdxvUgCsF4mCrGx0mqH-63teQfdKPjA6OxGO-JwfqoW9XyFJaK90Txqjx-3fSpfYtu4Befn-NObLyPFYYXn77gsWXPwv1V-8mRjEn-OCzd7iXUE2JYTLXUBw_fLVkgbU-xlRPQ" />
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                            <div className="bg-green-100 text-green-600 p-2 rounded-full">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">Verified Tutors</p>
                                <p className="text-sm text-slate-500">100% Identity checked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24 bg-slate-50 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary mb-4 tracking-tight">Simple. Efficient. Personal.</h2>
                        <div className="flex justify-center gap-4 mt-8">
                            <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-bold">For Students</button>
                            <button className="px-6 py-2 rounded-full bg-white text-slate-600 border border-slate-200 text-sm font-bold hover:bg-slate-100 transition-colors">For Teachers</button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">manage_search</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Find Your Expert</h3>
                            <p className="text-slate-500 leading-relaxed">Browse thousands of verified tutors by experience, and proximity to your home.</p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">event_available</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Book a Teacher</h3>
                            <p className="text-slate-500 leading-relaxed">Schedule your children's study session to discuss goals and ensure it's the right fit.</p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">menu_book</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Start Learning</h3>
                            <p className="text-slate-500 leading-relaxed">Help children begin personalized lesson plan from the comfort of your own living room.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-4xl font-black text-primary tracking-tight">Top Rated Teachers</h2>
                            <p className="text-slate-500 mt-2">Highly qualified professionals in your neighborhood</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">

                        <div className="min-w-[320px] snap-start bg-white rounded-2xl border border-slate-100 p-5 group hover:border-primary transition-all shadow-sm">
                            <div className="relative mb-4">
                                <img className="w-full aspect-[4/3] object-cover rounded-xl" data-alt="Portrait of a mathematics teacher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuZ6WKQryFRa241nUU48bqH9KAXwp34ru-BYB7XSyu0g_0YkbGNIdD5OcWipBgh9pjOXb7ADp5zV5nxBJtWNLLoLt0QAAZFPC0_MRygJiU31jBebBDE7pdgrB-Rsw5Nmc1MMtzfH3sujhNc3BrqgiCfid9yrZmhZwpf2Pgjpdt-PN0UgHlGYZc-ICyPnWg6_OV5nqvYrMJ6zFfWldfCZxhXjzHxw2otvi_gq_xhR32y6dJsvEZb6K-TNjtgFpC-tw1CC9iU07l7Q" />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                                    <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
                                    <span className="text-xs font-bold">4.9</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-lg">Dr. Elena Rodriguez</h4>
                                        <p className="text-sm text-slate-500">Advanced Mathematics</p>
                                    </div>
                                    <p className="font-black text-primary">$45/hr</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded uppercase">Calculus</span>
                                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded uppercase">SAT Prep</span>
                                </div>
                                <p className="text-sm text-slate-600 line-clamp-2 italic">"12 years experience helping students achieve their top grades in competitive exams."</p>
                                <Link to="/profile/1" className="block w-full py-3 bg-slate-100 group-hover:bg-primary group-hover:text-white rounded-xl text-sm font-bold transition-colors mt-2 text-center">View Profile</Link>
                            </div>
                        </div>

                        <div className="min-w-[320px] snap-start bg-white rounded-2xl border border-slate-100 p-5 group hover:border-primary transition-all shadow-sm">
                            <div className="relative mb-4">
                                <img className="w-full aspect-[4/3] object-cover rounded-xl" data-alt="Portrait of a music teacher with piano" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIce5Waypkfvg8SHcNB7RIDfetKr6oTd1oeql5zY4u6Dlrnhqas_xsc11V9liTfG99_1r3Z6gXksHKU9YE2rmIsnae8leZREAK-23BQxciC2ZUNAg1zbzNNkcG2xpFvZFOR5-SlmxzENzN9-4ZkG9UosXitwWFToDtUllYHZUIVTHm3R2MFI8lVGx3Dgf2fpCLlonJWMyngLZXT9UJZqk8xSnF58Uu9_HmXz0vkCQImAqJ7TdXip2btJd5HIBe8Sw7K68Tk3gI9w" />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                                    <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
                                    <span className="text-xs font-bold">5.0</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-lg">James Wilson</h4>
                                        <p className="text-sm text-slate-500">Piano &amp; Music Theory</p>
                                    </div>
                                    <p className="font-black text-primary">$60/hr</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded uppercase">Classical</span>
                                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded uppercase">Beginners</span>
                                </div>
                                <p className="text-sm text-slate-600 line-clamp-2 italic">"Tailored approach to music that makes learning fun for kids and adults alike."</p>
                                <Link to="/profile/1" className="block text-center w-full py-3 bg-slate-100 group-hover:bg-primary group-hover:text-white rounded-xl text-sm font-bold transition-colors mt-2">View Profile</Link>
                            </div>
                        </div>

                        <div className="min-w-[320px] snap-start bg-white rounded-2xl border border-slate-100 p-5 group hover:border-primary transition-all shadow-sm">
                            <div className="relative mb-4">
                                <img className="w-full aspect-[4/3] object-cover rounded-xl" data-alt="Portrait of a language teacher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy1PINSEYl6bm3T9uHYTMTx7f3nNAhrNZh0w61ub2Lu1d_Ya-r4NSV1VxmAyDfaUT5pNrYbOCNjoellUS9GYoIC_oFixPY6g4FZ1a0TraS6rGMSSeiDXg6v7IR81wIg4lOB-fgSG8rsZFPQIh4DJ1vu9cfuBKEsRUgrYGHTvMGDpukdTsHkxnsWb89juDIsFGld6zVDNHxU7p4kZwPPSUrRRFobt4xlu7QJNpERV6t1UxWtLFcDr4miU6EtOrwpeys4947kyaGyg" />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                                    <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
                                    <span className="text-xs font-bold">4.8</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-lg">Sarah Jenkins</h4>
                                        <p className="text-sm text-slate-500">Creative Writing</p>
                                    </div>
                                    <p className="font-black text-primary">$40/hr</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded uppercase">English</span>
                                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded uppercase">Essays</span>
                                </div>
                                <p className="text-sm text-slate-600 line-clamp-2 italic">"Passionate about unlocking your unique voice through the written word."</p>
                                <Link to="/profile/1" className="block text-center w-full py-3 bg-slate-100 group-hover:bg-primary group-hover:text-white rounded-xl text-sm font-bold transition-colors mt-2">View Profile</Link>
                            </div>
                        </div>

                        <div className="min-w-[320px] snap-start bg-white rounded-2xl border border-slate-100 p-5 group hover:border-primary transition-all shadow-sm">
                            <div className="relative mb-4">
                                <img className="w-full aspect-[4/3] object-cover rounded-xl" data-alt="Portrait of a computer science teacher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc3T27sNY2O7f0MKI4drAivpkZkiHpfXHJCqJBIFwYeuDSy7FwBZew39npJQDlWKvN4m2fg05U6vjfeA0vVtfI4GfaoMCBaEIdKn4lKbsU4UBKbg35NBevUYWcZQHD_jV0owp8YtHXDTsX-JE1FVg25W_AwavMlwtpjAq62vLDKs3Af1J81_-mgri18Dbv17hDP-_yhmyLs3Ptlj6_i7gxtxNz7qXMTRBufDYHtlWx9cKZRIU3xnt1dxFZ5Hx1EbHdBDNj4JQXZg" />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                                    <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
                                    <span className="text-xs font-bold">4.7</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-lg">Michael Chen</h4>
                                        <p className="text-sm text-slate-500">Computer Science</p>
                                    </div>
                                    <p className="font-black text-primary">$55/hr</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded uppercase">Python</span>
                                    <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded uppercase">Algorithms</span>
                                </div>
                                <p className="text-sm text-slate-600 line-clamp-2 italic">"Making complex coding concepts simple through practical home projects."</p>
                                <Link to="/profile/1" className="block text-center w-full py-3 bg-slate-100 group-hover:bg-primary group-hover:text-white rounded-xl text-sm font-bold transition-colors mt-2">View Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-20 bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">Ready to start your learning journey?</h2>
                    <p className="text-lg text-slate-400">Join thousands of students who have found their perfect mentor today.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors">Find a Teacher</button>
                        <Link to="/verify" className="w-full sm:w-auto px-10 py-4 border border-white/20 font-bold rounded-xl hover:bg-white/10 transition-colors">Become a Tutor</Link>
                    </div>
                </div>
            </section>

            <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-1 rounded text-white flex items-center justify-center">
                                <span className="material-symbols-outlined text-lg">school</span>
                            </div>
                            <h1 className="text-lg font-black tracking-tighter text-primary uppercase">SkillsUp</h1>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
                            Empowering students through personalized home-based learning experiences. We believe the right teacher can change everything.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                                <span className="material-symbols-outlined text-sm">public</span>
                            </a>
                            <a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                                <span className="material-symbols-outlined text-sm">share</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Safety Guide</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">© {new Date().getFullYear()} SkillsUp Tutoring Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">language</span> English (US)
                        </span>
                        <span className="text-xs text-slate-400">FCFA (XAF)</span>
                    </div>
                </div>
            </footer>

        </div>
    );
};