import React from 'react'
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

function Footer() {
    const { t } = useTranslation();
    return (
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
                        {t('landing.empoweringStudents')}
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
                    <h4 className="font-bold mb-6">{t('landing.company')}</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.aboutUs')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.careers')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.blog')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.press')}</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">{t('landing.support')}</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.helpCenter')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.contactUs')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.safetyGuide')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.pricing')}</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">{t('landing.legal')}</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.privacyPolicy')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.termsOfService')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">{t('landing.cookiePolicy')}</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-400">{t('landing.copyright', { year: new Date().getFullYear() })}</p>
                <div className="flex gap-6">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">language</span> English (US)
                    </span>
                    <span className="text-xs text-slate-400">FCFA (XAF)</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer