import React, { useState } from 'react'
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SignInButton, UserButton } from '@clerk/react'
import { Authenticated, Unauthenticated } from "convex/react";

function NavBar() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(true);
    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 lg:px-20 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-primary p-1.5 rounded text-white flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">school</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tighter text-primary uppercase">
                            SkillsUp
                        </h1>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link className="text-sm font-semibold hover:text-primary/70" to="/teachers">{t('landing.teachers')}</Link>
                        <Link className="text-sm font-semibold hover:text-primary/70" to="/verify">{t('landing.becomeTutor')}</Link>
                        <Link className="text-sm font-semibold hover:text-primary/70" to="/settings">{t('landing.howItWorks')}</Link>
                    </div>

                    {/* Desktop auth */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        {/* <Unauthenticated> */}
                        <SignInButton mode="modal">
                            <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg">
                                {t('landing.logIn')}
                            </button>
                        </SignInButton>
                        {/* </Unauthenticated> */}

                        {/* <Authenticated> */}
                        <UserButton />
                        {/* </Authenticated> */}
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

                <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-bold text-sm text-slate-500">Language / Langue</span>

                    <div className='flex items-center gap-4'>
                        <LanguageSwitcher />
                        {/* <Authenticated> */}
                        <UserButton />
                        {/* </Authenticated> */}
                    </div>
                </div>

                <Link to="/teachers" className="block font-semibold" onClick={() => setMenuOpen(false)}>
                    {t('landing.teachers')}
                </Link>

                <Link to="/verify" className="block font-semibold" onClick={() => setMenuOpen(false)}>
                    {t('landing.becomeTutor')}
                </Link>

                <Link to="/settings" className="block font-semibold" onClick={() => setMenuOpen(false)}>
                    {t('landing.howItWorks')}
                </Link>

                {/* <Unauthenticated> */}
                <div className="pt-4 border-t space-y-2">
                    <SignInButton mode="modal">
                        <button className=" w-full text-center py-2  bg-primary text-white rounded-lg font-bold">
                            {t('landing.logIn')}
                        </button>
                    </SignInButton>
                </div>
                {/* </Unauthenticated> */}

            </div>

        </div>
    )
}

export default NavBar