import React from 'react';
import { Link } from 'react-router-dom';

export const TeacherProfile = () => {
    return (
        <React.Fragment>


            <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-3xl">school</span>
                            <h1 className="text-xl font-extrabold tracking-tight">SkillsUp</h1>
                        </Link>
                        <div className="hidden md:flex relative group">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full w-64 focus:ring-2 focus:ring-primary text-sm" placeholder="Search for tutors..." type="text" />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                            <img className="w-full h-full object-cover" data-alt="Small circular user avatar profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9is-6L86hh5LpjbToPLEChMpcdpS49bFL__oXQKBv2JFYsPH9jFtLrHvtKjAgvwB9EMr3VZ9Krqz2-G6gX-lhOYqwiKj4EYBgnl3OJj6V0EjzIAprRVZtirJT-VuqcesESxOTs2VUCniXJeV-DL8VIcqAdMET8O6dLyNS83Omd70gr7hBQmsXwDZISQHxZpSnEHnXC0aEhYBJODPqXbuOdzJGk_9ie25MdD9u53KPD8wmx5hTjiR819CAPRqnoTJPDwFWjrlD4A" />
                        </div>
                    </div>
                </div>
            </header>
            <main className="max-w-5xl mx-auto pb-12">

                <div className="bg-white shadow-sm overflow-hidden md:rounded-b-xl border-x border-b border-slate-200">

                    <div className="relative h-48 md:h-80 w-full bg-slate-200">
                        <img className="w-full h-full object-cover" data-alt="Classroom interior with bookshelves and sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1zQjDALqG8bBP_znLQBNFo6Pp7PE1q50CSvr4htJQdFOn9noUc8km-8gNikJPP8DVYDDnVDuknXJWQfbmxx-bECJ7xTcWqUZ5IdRFJgpwH_QJu9Z6P0vWa7vWJZOFMgXmXP92oflNGnKw18OzSoVu8jRJgfJu8227iac7sRhXqjOSZZ2qRwAfVjJnFvOYHqcsadKSYfOkw4l6IxtbEJAYbU-vfT6HexicwYm_vfK_--JkvJOvvn3INfnl0xXeI-pTmAooIzJHqQ" />
                        <div className="absolute bottom-4 right-4">
                            <button className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold border border-white/20">
                                <span className="material-symbols-outlined text-base">photo_camera</span>
                                <span className="hidden sm:inline">Edit Cover</span>
                            </button>
                        </div>
                    </div>

                    <div className="px-4 md:px-8 pb-6">
                        <div className="relative flex flex-col md:flex-row items-end md:items-center gap-4 -mt-12 md:-mt-16 mb-4">

                            <div className="relative group">
                                <div className="h-32 w-32 md:h-44 md:w-44 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-lg">
                                    <img className="w-full h-full object-cover" data-alt="Professional portrait of a male teacher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeRma--CtM3qQTmMg9bPsCGCu1Y3lu3L3fe5FQEg2R7vydsus4B8OHZK53HigW9jyKcEetQFt2Nq37kewC-Yg_z9mnvJ7IrqFJdrMZf_6mr1zPsyPbrLOTAkJ27DitXblbVwvB6m1cIo3dlP24duC1Oog0miVieCwIeHbOOS_FXzCRQ1LzyokaOn7F7HtiE25iT_PuX3qvQ4xHc1LsA-XXz6PBLLKw4Xye1XYTFo4X86Qr-MW3hj0vnPH4m6-s0PreKfOAdfEDJg" />
                                </div>
                                <button className="absolute bottom-2 right-2 p-2 bg-slate-100 rounded-full border border-slate-300 hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-xl">photo_camera</span>
                                </button>
                            </div>

                            <div className="flex-1 text-center md:text-left pt-2 md:pt-14">
                                <div className="flex items-center justify-center md:justify-start gap-2">
                                    <h2 className="text-3xl font-bold tracking-tight">Prof. Julian Vane</h2>
                                    <span className="material-symbols-outlined text-primary fill-1" title="Verified Expert">verified</span>
                                </div>
                                <p className="text-slate-500 font-medium">Senior Mathematics &amp; Physics Instructor</p>
                                <div className="mt-2 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">group</span> 1.2k Students</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">star</span> 4.9 (240 reviews)</span>
                                </div>
                            </div>

                            <div className="flex gap-2 w-full md:w-auto pt-4 md:pt-14">
                                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                    <span className="material-symbols-outlined text-xl">call</span>
                                    Call Teacher
                                </button>
                                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">
                                    <span className="material-symbols-outlined text-xl">forum</span>
                                    WhatsApp
                                </button>
                            </div>
                        </div>
                        <div className="border-t border-slate-100 mt-6 pt-4">
                            <nav className="flex gap-6 overflow-x-auto no-scrollbar">
                                <a className="pb-4 border-b-2 border-primary font-bold text-sm whitespace-nowrap" href="#">About</a>
                                <a className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-bold text-sm whitespace-nowrap" href="#">Reviews</a>
                                <a className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-bold text-sm whitespace-nowrap" href="#">Resources</a>
                                <a className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-bold text-sm whitespace-nowrap" href="#">Portfolio</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 px-4 md:px-0">

                    <div className="md:col-span-4 space-y-6">

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">smart_display</span>
                                Meet Your Teacher
                            </h3>
                            <div className="relative group cursor-pointer aspect-video rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                                <img className="w-full h-full object-cover grayscale" data-alt="Video thumbnail showing teacher in front of a white board" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9R_8KjW9XN_T6fS3e_7Y4S9_HkZ5Xm0j_G1R_vB9G8E_y_T_9X_M7M9R_B_G8E_y_T_9X_M7M9R_B_G8E_y_T_9X_M7M9R_B_G8E_y_T_9X_M7M9R_B" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl text-primary fill-1">play_arrow</span>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-xs text-slate-500 text-center">Watch my methodology overview (2:15)</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold mb-4">Quick Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-400">payments</span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Price per Month</p>
                                        <p className="text-xl font-black text-primary">$450.00</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-400">location_on</span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</p>
                                        <p className="font-semibold">San Francisco, CA (Remote available)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-400">history_edu</span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Last Diploma</p>
                                        <p className="font-semibold">M.Sc. in Theoretical Physics</p>
                                        <p className="text-sm text-slate-500">Stanford University, 2018</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold mb-4">Core Subjects</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase">Calculus</span>
                                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase">Quantum Mechanics</span>
                                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase">Algebra II</span>
                                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase">Thermodynamics</span>
                                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase">SAT Prep</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-6">

                        <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                About Me
                            </h3>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Hello! I am Julian, a dedicated educator with over 10 years of experience in helping students master the complexities of Mathematics and Physics. My journey began at Stanford, where I developed a passion for making abstract concepts tangible and accessible.
                                </p>
                                <p>
                                    I specialize in high-school and university-level prep, ensuring my students not only pass their exams but truly understand the logic behind the formulas. My philosophy is simple: there are no "bad at math" students, only students who haven't found the right explanation yet.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">psychology</span>
                                Teaching Techniques
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">visibility</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Visual Anchoring</h4>
                                        <p className="text-sm text-slate-500">Using digital whiteboards and 3D simulations to visualize complex geometric and physical interactions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">model_training</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Socratic Method</h4>
                                        <p className="text-sm text-slate-500">I guide students to answers through logical questioning, building their critical thinking skills.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">update</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Spaced Repetition</h4>
                                        <p className="text-sm text-slate-500">Short review bursts at specific intervals to ensure long-term retention of core principles.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">edit_note</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Adaptive Curriculum</h4>
                                        <p className="text-sm text-slate-500">Every lesson is adjusted in real-time based on the student's progress and confidence levels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">map</span>
                                Teaching Location
                            </h3>
                            <div className="w-full h-64 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                                <img className="w-full h-full object-cover opacity-80" data-alt="Stylized grayscale map of San Francisco area" data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPGOBojMNjUgJtBdBG2X1kpab5dMw6h2qdV263nNwMMkSw1VuanZTG4fSjuY_rEftE--E3frVM09aKUaFG9htFysKHu9_Ocks78SdnVplB8Vs4c_mjmjmaISqkDegxykRx4aeNUWwLbel8A8lBJpqreWbcKgypT_FHxl3orSUOmyCIoWDXIXbkrF5bSDeq_QrjGQEqvJ6WlQ4GHE45LSG-pmMLfWH0y-ECP5po01_9DP6IVMQmuEGfCwm2JwnsYKC3t8QNx0f7SA" />
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm text-slate-500">Available for in-person sessions within a 15-mile radius of downtown SF.</p>
                                <button className="text-primary text-sm font-bold flex items-center gap-1">
                                    Get Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 flex gap-3 z-50">
                <button className="flex-1 bg-slate-100 py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">forum</span> WhatsApp
                </button>
                <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">call</span> Call Now
                </button>
            </div>

        </React.Fragment>
    );
};