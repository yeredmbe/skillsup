import React from 'react';

export const SignIn = () => {
    return (
        <React.Fragment>
            <div className="bg-background text-on-background min-h-screen flex flex-col">
                <header className="bg-white/80 dark:bg-black/80 backdrop-blur-md font-inter tracking-tight docked full-width top-0 sticky shadow-sm dark:shadow-none z-50">
                    <div className="flex justify-between items-center w-full px-8 py-4 max-w-full">
                        <div className="text-xl font-black text-slate-900 dark:text-slate-50 uppercase">SkillsUp</div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-black dark:hover:text-white transition-colors" href="#">Features</a>
                            <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-black dark:hover:text-white transition-colors" href="#">Pricing</a>
                            <a className="text-slate-500 dark:text-slate-400 font-medium hover:text-black dark:hover:text-white transition-colors" href="#">Community</a>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="text-slate-900 dark:text-white font-bold border-b-2 border-black dark:border-white active:scale-95 transition-transform px-1 py-0.5">Sign In</button>
                        </div>
                    </div>
                </header>
                <main className="flex-grow flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        <div className="bg-surface p-10 shadow-sm border border-outline/10 rounded-lg">
                            <div className="mb-10 text-center">
                                <h1 className="text-3xl font-black tracking-tighter text-primary mb-2 uppercase">Welcome Back</h1>
                                <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-on-surface-variant">Access your SkillsUp dashboard</p>
                            </div>
                            <form className="space-y-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant block ml-1">Email Address</label>
                                    <input className="w-full px-4 py-3 bg-surface-container-low border border-outline focus:border-primary focus:ring-0 transition-colors text-sm font-medium outline-none" placeholder="name@company.com" type="email" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between items-end mb-1">
                                        <label className="text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant block ml-1">Password</label>
                                        <a className="text-[10px] uppercase tracking-[0.1em] font-bold text-primary hover:opacity-70 transition-opacity" href="#">Forgot Password?</a>
                                    </div>
                                    <input className="w-full px-4 py-3 bg-surface-container-low border border-outline focus:border-primary focus:ring-0 transition-colors text-sm font-medium outline-none" placeholder="••••••••" type="password" />
                                </div>
                                <div className="flex items-center">
                                    <input className="w-4 h-4 border-outline rounded text-primary focus:ring-0 focus:ring-offset-0 transition-colors" id="remember" type="checkbox" />
                                    <label className="ml-3 text-xs font-medium text-on-surface-variant" htmlFor="remember">Remember me for 30 days</label>
                                </div>
                                <button className="w-full py-4 bg-primary text-on-primary font-bold uppercase tracking-widest text-xs active:scale-95 transition-all hover:bg-zinc-800 shadow-lg shadow-black/5" type="submit">
                                    Sign In
                                </button>
                            </form>
                            <div className="relative my-10">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-outline"></div>
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em] font-bold">
                                    <span className="bg-surface px-4 text-on-surface-variant">Or continue with</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-3 px-4 py-3 border border-outline hover:bg-surface-container-low transition-colors active:scale-95">
                                    <span className="material-symbols-outlined text-lg">google</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider">Google</span>
                                </button>
                                <button className="flex items-center justify-center gap-3 px-4 py-3 border border-outline hover:bg-surface-container-low transition-colors active:scale-95">
                                    <span className="material-symbols-outlined text-lg">ios</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider">Apple</span>
                                </button>
                            </div>
                            <p className="mt-10 text-center text-xs text-on-surface-variant font-medium">
                                Don't have an account?
                                <a className="text-primary font-bold border-b border-primary/20 hover:border-primary transition-colors ml-1" href="#">Create account</a>
                            </p>
                        </div>
                    </div>
                </main>
                <footer className="bg-slate-50 dark:bg-slate-950 full-width border-t border-slate-100 dark:border-slate-900 border-t-slate-100 flat no shadows w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-50 uppercase tracking-tighter">SkillsUp</div>
                    <div className="flex gap-8">
                        <a className="text-[10px] uppercase tracking-[0.1em] font-medium text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-slate-100 transition-opacity duration-200" href="#">Privacy Policy</a>
                        <a className="text-[10px] uppercase tracking-[0.1em] font-medium text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-slate-100 transition-opacity duration-200" href="#">Terms of Service</a>
                        <a className="text-[10px] uppercase tracking-[0.1em] font-medium text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-slate-100 transition-opacity duration-200" href="#">Help Center</a>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.1em] font-medium text-slate-400 dark:text-slate-600">
                        © 2024 SkillsUp Editorial. All rights reserved.
                    </div>
                </footer>
            </div>
        </React.Fragment>
    );
};
