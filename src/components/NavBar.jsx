import React, { useState } from 'react'
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SignInButton, UserButton, useUser } from '@clerk/react'
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const playNotificationSound = () => {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
        osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.1); // C6#
        
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
        console.error("Audio playback failed", e);
    }
};

const NotificationBell = () => {
    const notifications = useQuery(api.notifications.getUserNotifications) || [];
    const markAsRead = useMutation(api.notifications.markAsRead);
    const markAllAsRead = useMutation(api.notifications.markAllAsRead);
    const [open, setOpen] = useState(false);

    const unreadCount = notifications.filter(n => !n.isRead).length;
    const prevUnreadCount = React.useRef(unreadCount);

    React.useEffect(() => {
        if (unreadCount > prevUnreadCount.current) {
            playNotificationSound();
        }
        prevUnreadCount.current = unreadCount;
    }, [unreadCount]);

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="relative p-2 text-slate-500 hover:text-primary transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">notifications</span>
                {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 size-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
                )}
            </button>

            {open && (
                <React.Fragment>
                    <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                            <h3 className="font-bold text-slate-900">Notifications</h3>
                            {unreadCount > 0 && (
                                <button onClick={() => { markAllAsRead(); setOpen(false); }} className="text-xs font-bold text-primary hover:underline">Mark all read</button>
                            )}
                        </div>
                        <div className="max-h-[300px] overflow-y-auto">
                            {notifications.length === 0 ? (
                                <div className="p-8 text-center text-sm text-slate-500 flex flex-col items-center gap-2">
                                    <span className="material-symbols-outlined text-4xl text-slate-200">notifications_off</span>
                                    You're all caught up!
                                </div>
                            ) : (
                                notifications.map(n => (
                                    <div key={n._id} onClick={() => { if (!n.isRead) markAsRead({ notificationId: n._id }) }} className={`p-4 border-b border-slate-50 cursor-pointer transition-colors ${!n.isRead ? 'bg-primary/5 hover:bg-primary/10' : 'hover:bg-slate-50'}`}>
                                        <div className="flex justify-between items-start mb-1 gap-2">
                                            <h4 className={`text-sm ${!n.isRead ? 'font-bold text-slate-900' : 'font-semibold text-slate-600'}`}>{n.title}</h4>
                                            {!n.isRead && <span className="size-2 bg-primary rounded-full shrink-0 mt-1.5"></span>}
                                        </div>
                                        <p className={`text-xs ${!n.isRead ? 'text-slate-700' : 'text-slate-500'} mt-1`}>{n.message}</p>
                                        <p className="text-[10px] text-slate-400 mt-2">{new Date(n.createdAt).toLocaleDateString()} at {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

function NavBar() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(true);
    const { user, isSignedIn } = useUser();
    const upsertUser = useMutation(api.users.upsertUser);
    const me = useQuery(api.users.getMe);

    React.useEffect(() => {
        if (isSignedIn && user) {
            upsertUser({
                clerkId: user.id,
                email: user.primaryEmailAddress?.emailAddress || "",
                name: user.fullName || user.firstName || "Unknown",
            }).catch(err => console.error("Failed to sync user:", err));
        }
    }, [isSignedIn, user, upsertUser]);

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 lg:px-20 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-primary p-1.5 rounded text-white flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">school</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tighter text-primary uppercase">
                            SkillsUp
                        </h1>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-primary/70" to="/teachers">{t('landing.teachers')}</Link>
                        <Link onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-primary/70" to="/verify">{t('landing.becomeTutor')}</Link>
                        <Link onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-primary/70" to="/settings">{t('landing.howItWorks')}</Link>
                        {me?.role === 'admin' && (
                            <Link onClick={() => setMenuOpen(false)} className="text-sm font-bold text-rose-500 hover:text-rose-600" to="/admin">Admin Panel</Link>
                        )}
                    </div>

                    {/* Desktop auth */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        <Unauthenticated>
                            <SignInButton mode="modal">
                                <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg">
                                    {t('landing.logIn')}
                                </button>
                            </SignInButton>
                        </Unauthenticated>

                        <Authenticated>
                            <NotificationBell />
                            <UserButton />
                        </Authenticated>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="md:hidden flex items-center gap-4">
                        <Authenticated>
                            <NotificationBell />
                        </Authenticated>
                        <button className="material-symbols-outlined text-2xl flex items-center justify-center focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? "menu" : "close"}
                        </button>
                    </div>

                </div>
            </nav>

            <div className={`md:hidden fixed left-0 right-0 top-[7%] bg-white z-40 px-6 py-6 space-y-6 ${menuOpen ? "-translate-y-100 opacity-0" : "translate-y-0 opacity-100"} transition-all duration-500 shadow-xl`}>

                <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-bold text-sm text-slate-500">Language / Langue</span>

                    <div className='flex items-center gap-4'>
                        <LanguageSwitcher />
                        <Authenticated>
                            <UserButton />
                        </Authenticated>
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

                {me?.role === 'admin' && (
                    <Link to="/admin" className="block font-bold text-rose-500" onClick={() => setMenuOpen(false)}>
                        Admin Panel
                    </Link>
                )}

                <Unauthenticated>
                    <div className="pt-4 border-t space-y-2">
                        <SignInButton mode="modal">
                            <button className=" w-full text-center py-2  bg-primary text-white rounded-lg font-bold">
                                {t('landing.logIn')}
                            </button>
                        </SignInButton>
                    </div>
                </Unauthenticated>

            </div>

        </div>
    )
}

export default NavBar