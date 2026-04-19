import React from 'react';

export const SignUp = () => {
    return (
        <React.Fragment>
            <div className="bg-background text-on-background min-h-screen flex flex-col">
                <header className="bg-white/80 backdrop-blur-md text-slate-900 font-inter tracking-tight docked full-width top-0 sticky shadow-sm flex justify-between items-center w-full px-8 py-4 max-w-full z-50">
                    <div className="text-xl font-black text-slate-900">SkillsUp</div>
                    <nav className="hidden md:flex gap-8">
                        <a className="text-slate-500 font-medium hover:text-black transition-colors" href="#">Features</a>
                        <a className="text-slate-500 font-medium hover:text-black transition-colors" href="#">Pricing</a>
                        <a className="text-slate-500 font-medium hover:text-black transition-colors" href="#">Community</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <a className="text-slate-900 font-medium text-sm hover:underline" href="#">Log In</a>
                    </div>
                </header>
                <main className="flex-grow flex items-center justify-center p-8 md:p-12">
                    <div className="w-full max-w-md bg-surface shadow-sm border border-outline/30 rounded-xl p-8 md:p-10">
                        <div className="mb-8">
                            <h1 className="text-3xl font-black tracking-tight mb-2">Create Account</h1>
                            <p className="text-on-surface-variant text-sm">Join the next generation of professional editors.</p>
                        </div>
                        <form className="space-y-5">
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant mb-2">Full Name</label>
                                <input className="w-full px-4 py-3 bg-surface-container-low border border-outline rounded-lg focus:ring-0 focus:border-primary text-on-surface transition-all" placeholder="Jane Doe" type="text" />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant mb-2">Email Address</label>
                                <input className="w-full px-4 py-3 bg-surface-container-low border border-outline rounded-lg focus:ring-0 focus:border-primary text-on-surface transition-all" placeholder="jane@skillsup.com" type="email" />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant mb-2">Password</label>
                                <input className="w-full px-4 py-3 bg-surface-container-low border border-outline rounded-lg focus:ring-0 focus:border-primary text-on-surface transition-all" placeholder="••••••••" type="password" />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant mb-2">Confirm Password</label>
                                <input className="w-full px-4 py-3 bg-surface-container-low border border-outline rounded-lg focus:ring-0 focus:border-primary text-on-surface transition-all" placeholder="••••••••" type="password" />
                            </div>
                            <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg active:scale-95 transition-transform mt-4" type="submit">
                                Create Account
                            </button>
                        </form>
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-outline"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-surface px-4 text-on-surface-variant tracking-[0.1em] font-medium">Or continue with</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-outline rounded-lg hover:bg-surface-container-low transition-colors active:scale-95">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"></path>
                                </svg>
                                <span className="text-sm font-semibold">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-outline rounded-lg hover:bg-surface-container-low transition-colors active:scale-95">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.96.95-2.04 1.44-3.14 1.44-1.12 0-2.04-.42-3.11-1.44-1.07-1.02-2.14-1.53-3.21-1.53-1.07 0-2.14.51-3.21 1.53-1.07 1.02-1.99 1.44-3.11 1.44-1.1 0-2.18-.49-3.14-1.44C1.04 19.33 0 17.5 0 15.54c0-1.96 1.04-3.79 3.12-5.74.96-.95 2.04-1.44 3.14-1.44 1.12 0 2.04.42 3.11 1.44 1.07 1.02 2.14 1.53 3.21 1.53 1.07 0 2.14-.51 3.21-1.53 1.07-1.02 1.99-1.44 3.11-1.44 1.1 0 2.18.49 3.14 1.44C22.96 11.75 24 13.58 24 15.54c0 1.96-1.04 3.79-3.12 5.74-.96.95-2.04 1.44-3.14 1.44-1.12 0-2.04-.42-3.11-1.44-1.07-1.02-2.14-1.53-3.21-1.53-1.07 0-2.14.51-3.21 1.53z" fill="currentColor"></path>
                                </svg>
                                <span className="text-sm font-semibold">Apple</span>
                            </button>
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-sm text-on-surface-variant font-medium">
                                Already have an account?
                                <a className="text-primary font-bold hover:underline ml-1" href="#">Log In</a>
                            </p>
                        </div>
                    </div>
                </main>
                <footer className="bg-slate-50 text-slate-900 text-[10px] uppercase tracking-[0.1em] font-medium full-width border-t border-slate-100 shadow-none w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm font-bold text-slate-900">SkillsUp</div>
                    <div className="flex gap-8">
                        <a className="text-slate-400 hover:text-slate-900 transition-opacity duration-200" href="#">Privacy Policy</a>
                        <a className="text-slate-400 hover:text-slate-900 transition-opacity duration-200" href="#">Terms of Service</a>
                        <a className="text-slate-400 hover:text-slate-900 transition-opacity duration-200" href="#">Help Center</a>
                    </div>
                    <div className="text-slate-400">© 2024 SkillsUp Editorial. All rights reserved.</div>
                </footer>
            </div>
        </React.Fragment>
    );
};
