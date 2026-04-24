import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const SignIn = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <div className="bg-background text-on-background min-h-screen flex flex-col">

                <main className="flex-grow flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        <div className="bg-surface p-10 shadow-sm border border-outline/10 rounded-lg">
                            <div className="mb-10 text-center">
                                <h1 className="text-3xl font-black tracking-tighter text-primary mb-2 uppercase">{t('auth.welcomeBack')}</h1>
                                <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-on-surface-variant">{t('auth.accessDashboard')}</p>
                            </div>
                            <form className="space-y-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant block ml-1">{t('auth.emailAddress')}</label>
                                    <input className="w-full px-4 py-3 bg-surface-container-low border border-outline focus:border-primary focus:ring-0 transition-colors text-sm font-medium outline-none" placeholder={t('auth.emailPlaceholder')} type="email" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between items-end mb-1">
                                        <label className="text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant block ml-1">{t('auth.password')}</label>
                                        <a className="text-[10px] uppercase tracking-[0.1em] font-bold text-primary hover:opacity-70 transition-opacity" href="#">{t('auth.forgotPassword')}</a>
                                    </div>
                                    <input className="w-full px-4 py-3 bg-surface-container-low border border-outline focus:border-primary focus:ring-0 transition-colors text-sm font-medium outline-none" placeholder={t('auth.passwordPlaceholder')} type="password" />
                                </div>
                                <div className="flex items-center">
                                    <input className="w-4 h-4 border-outline rounded text-primary focus:ring-0 focus:ring-offset-0 transition-colors" id="remember" type="checkbox" />
                                    <label className="ml-3 text-xs font-medium text-on-surface-variant" htmlFor="remember">{t('auth.rememberMe')}</label>
                                </div>
                                <button className="w-full py-4 bg-primary text-on-primary font-bold uppercase tracking-widest text-xs active:scale-95 transition-all hover:bg-zinc-800 shadow-lg shadow-black/5" type="submit">
                                    {t('auth.signIn')}
                                </button>
                            </form>
                            <div className="relative my-10">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-outline"></div>
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em] font-bold">
                                    <span className="bg-surface px-4 text-on-surface-variant">{t('auth.orContinueWith')}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-3 px-4 py-3 border border-outline hover:bg-surface-container-low transition-colors active:scale-95">
                                    <span className="material-symbols-outlined text-lg">google</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider">{t('auth.google')}</span>
                                </button>
                                <button className="flex items-center justify-center gap-3 px-4 py-3 border border-outline hover:bg-surface-container-low transition-colors active:scale-95">
                                    <span className="material-symbols-outlined text-lg">ios</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider">{t('auth.apple')}</span>
                                </button>
                            </div>
                            <p className="mt-10 text-center text-xs text-on-surface-variant font-medium">
                                {t('auth.dontHaveAccount')}
                                <a className="text-primary font-bold border-b border-primary/20 hover:border-primary transition-colors ml-1" href="#">{t('auth.createAccount')}</a>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};
