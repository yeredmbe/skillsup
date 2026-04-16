import React, { useState, useRef } from 'react';

const DEFAULT_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuA3w-vY7QJFlfmxtLFwLbm-m32zSP9M0JUtd-ADP4HwIDeSG6d4OYpj4qYyrcC6g6_L8p_ws8cVsP5K-dyMIj0Awm9crYf0XK-YTXN5AKQOHx9vypojR7oray53aApA2YV7i3F_rxOteHPJyMVQRg31wjlr5HyGvbVWMuSgKA4FpMDq-Dpi8IS1giSwwD-uEEqd00zaz-qPF_VSmSbKmEPK5b1u6VS4mxdE0pFtcSTkomKS85sIZH5oqKJCuZLloZxPN88c80SDlQ";
const HEADER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuBcey3utNMt8ioE8UEjHcNHF5mOqdT_NZXIPKE4ReWPiwfHJaZJ9SCDiZCRkGmlIaBujhB3pgrwwD-uyq8mQh9f5DW71fRbJhizo-OVQ1Z3TZ-ydpebLorEcfT16Lu8y46B58HODnjo_lD_E6YJvUpFZ6wmY3BI2puMjseCZFCARd2jRSHvN4GoZarxi_6qfbzoiPG0FhBmp9qpIwrMhbYOmD7Vrm_X9m-HAD5l4hflE2p5ES4XoLs0Kosth2KLAfjFQejYts1oug";

const DEFAULTS = {
    fullName: 'Alexander Mitchell',
    email: 'alexander.m@skillsup.com',
    phone: '+1 (555) 000-0000',
    title: 'Senior UX Designer',
    bio: "I'm a passionate designer focused on creating intuitive digital experiences. Currently leading the design system team at SkillsUp.",
    avatarUrl: DEFAULT_AVATAR,
    notifications: {
        courseUpdates: true,
        marketingEmails: false,
        securityAlerts: true,
    },
};

const Toggle = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer">
        <input
            type="checkbox"
            className="sr-only peer"
            checked={checked}
            onChange={onChange}
        />
        <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800"></div>
    </label>
);

export const Settings = () => {
    const [form, setForm] = useState({
        fullName: DEFAULTS.fullName,
        email: DEFAULTS.email,
        phone: DEFAULTS.phone,
        title: DEFAULTS.title,
        bio: DEFAULTS.bio,
    });
    const [passwords, setPasswords] = useState({ current: '', newPw: '' });
    const [avatarUrl, setAvatarUrl] = useState(DEFAULTS.avatarUrl);
    const [notifications, setNotifications] = useState(DEFAULTS.notifications);
    const [search, setSearch] = useState('');
    const [toast, setToast] = useState('');
    const fileInputRef = useRef(null);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(''), 2500);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords((prev) => ({ ...prev, [name]: value }));
    };

    const handleNotifChange = (key) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 800 * 1024) {
            showToast('Image must be under 800KB.');
            return;
        }
        const reader = new FileReader();
        reader.onload = (ev) => setAvatarUrl(ev.target.result);
        reader.readAsDataURL(file);
    };

    const handleRemoveAvatar = () => {
        setAvatarUrl('');
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleSave = () => {
        if ((passwords.current || passwords.newPw) && (!passwords.current || !passwords.newPw)) {
            showToast('Fill both password fields to update.');
            return;
        }
        // TODO: wire up to your API here
        showToast('Changes saved!');
    };

    const handleCancel = () => {
        setForm({
            fullName: DEFAULTS.fullName,
            email: DEFAULTS.email,
            phone: DEFAULTS.phone,
            title: DEFAULTS.title,
            bio: DEFAULTS.bio,
        });
        setPasswords({ current: '', newPw: '' });
        setAvatarUrl(DEFAULTS.avatarUrl);
        setNotifications(DEFAULTS.notifications);
        showToast('Changes discarded.');
    };

    return (
        <React.Fragment>
            {/* Toast */}
            {toast && (
                <div className="fixed bottom-6 right-6 z-50 bg-slate-800 text-white text-sm font-semibold px-5 py-3 rounded-lg shadow-lg">
                    {toast}
                </div>
            )}

            <div className="relative flex min-h-screen w-full flex-col bg-white overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">

                    {/* Header */}
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 md:px-10 py-3 bg-white sticky top-0 z-50">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3 text-slate-800">
                                <div className="size-8 bg-slate-800 text-white flex items-center justify-center rounded-lg">
                                    <span className="material-symbols-outlined !text-xl">database</span>
                                </div>
                                <h2 className="text-slate-800 text-xl font-black leading-tight tracking-tight">SkillsUp</h2>
                            </div>
                            <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                    <div className="text-slate-500 flex border-none bg-slate-100 items-center justify-center pl-4 rounded-l-lg">
                                        <span className="material-symbols-outlined !text-xl">search</span>
                                    </div>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 focus:ring-0 h-full placeholder:text-slate-400 px-4 rounded-r-lg text-sm"
                                        placeholder="Search courses or settings"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="flex flex-1 justify-end gap-4 md:gap-6">
                            <div className="flex gap-2">
                                <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors">
                                    <span className="material-symbols-outlined">notifications</span>
                                </button>
                                <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors">
                                    <span className="material-symbols-outlined">help_outline</span>
                                </button>
                            </div>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200"
                                style={{ backgroundImage: `url("${HEADER_AVATAR}")` }}
                            />
                        </div>
                    </header>

                    <main className="flex flex-1 flex-col md:flex-row max-w-[1440px] mx-auto w-full">

                        {/* Sidebar */}
                        <aside className="w-full md:w-64 border-r border-slate-100 bg-white p-6 space-y-6">
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Account Settings</h3>
                                <nav className="flex flex-col gap-1">
                                    <a className="flex items-center gap-3 px-3 py-3 rounded-r-lg text-slate-800 font-bold bg-slate-100 border-r-2 border-slate-800" href="#">
                                        <span className="material-symbols-outlined">person</span>
                                        <span className="text-sm">Personal Info</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium" href="#">
                                        <span className="material-symbols-outlined">shield_lock</span>
                                        <span className="text-sm">Security</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium" href="#">
                                        <span className="material-symbols-outlined">notifications_active</span>
                                        <span className="text-sm">Notifications</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium" href="#">
                                        <span className="material-symbols-outlined">credit_card</span>
                                        <span className="text-sm">Payments</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium" href="#">
                                        <span className="material-symbols-outlined">workspace_premium</span>
                                        <span className="text-sm">Plan &amp; Billing</span>
                                    </a>
                                </nav>
                            </div>
                            <div className="pt-6 border-t border-slate-100">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Workspace</h3>
                                <nav className="flex flex-col gap-1">
                                    <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium" href="#">
                                        <span className="material-symbols-outlined">groups</span>
                                        <span className="text-sm">Team Members</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium" href="#">
                                        <span className="material-symbols-outlined">integration_instructions</span>
                                        <span className="text-sm">Integrations</span>
                                    </a>
                                </nav>
                            </div>
                        </aside>

                        {/* Main content */}
                        <section className="flex-1 bg-white p-6 md:p-12 overflow-y-auto">
                            <div className="max-w-3xl mx-auto space-y-12">

                                {/* Page title */}
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Personal Info</h1>
                                    <p className="text-slate-500">Update your photo and personal details to customize your experience.</p>
                                </div>

                                {/* Avatar */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-8 py-8 border-y border-slate-100">
                                    <div className="relative group">
                                        <div
                                            className="size-28 rounded-full bg-slate-200 border-2 border-white shadow-sm bg-center bg-cover"
                                            style={{ backgroundImage: avatarUrl ? `url("${avatarUrl}")` : 'none' }}
                                        />
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className="absolute bottom-0 right-0 bg-slate-800 text-white size-8 rounded-full flex items-center justify-center border-2 border-white shadow-md"
                                        >
                                            <span className="material-symbols-outlined !text-sm">edit</span>
                                        </button>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleAvatarChange}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-lg font-bold text-slate-800">Profile Picture</h3>
                                        <p className="text-sm text-slate-500 max-w-xs">JPG, GIF or PNG. Max size of 800K. A square image works best.</p>
                                        <div className="flex gap-3 pt-1">
                                            <button
                                                onClick={() => fileInputRef.current?.click()}
                                                className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-700 transition-colors"
                                            >
                                                Upload New
                                            </button>
                                            <button
                                                onClick={handleRemoveAvatar}
                                                className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Form fields */}
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-800 block">Full Name</label>
                                            <input
                                                className="w-full rounded-lg border-slate-200 focus:border-slate-800 focus:ring-0 text-sm py-3 px-4 transition-all"
                                                type="text"
                                                name="fullName"
                                                value={form.fullName}
                                                onChange={handleFormChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-800 block">Email Address</label>
                                            <input
                                                className="w-full rounded-lg border-slate-200 focus:border-slate-800 focus:ring-0 text-sm py-3 px-4 transition-all"
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleFormChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-800 block">Phone Number</label>
                                            <input
                                                className="w-full rounded-lg border-slate-200 focus:border-slate-800 focus:ring-0 text-sm py-3 px-4 transition-all"
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleFormChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-800 block">Title / Position</label>
                                            <input
                                                className="w-full rounded-lg border-slate-200 focus:border-slate-800 focus:ring-0 text-sm py-3 px-4 transition-all"
                                                type="text"
                                                name="title"
                                                value={form.title}
                                                onChange={handleFormChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-800 block">Bio</label>
                                        <textarea
                                            className="w-full rounded-lg border-slate-200 focus:border-slate-800 focus:ring-0 text-sm py-3 px-4 transition-all"
                                            rows="4"
                                            name="bio"
                                            value={form.bio}
                                            onChange={handleFormChange}
                                        />
                                        <p className="text-xs text-slate-400">Brief description for your profile. URLs and @mentions are allowed.</p>
                                    </div>
                                </div>

                                {/* Security */}
                                <div className="pt-8 border-t border-slate-100 space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-800">security</span>
                                        <h2 className="text-xl font-bold text-slate-800">Security</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-800 block">Current Password</label>
                                            <input
                                                className="w-full rounded-lg border-slate-200 focus:border-slate-800 focus:ring-0 text-sm py-3 px-4 transition-all"
                                                placeholder="••••••••"
                                                type="password"
                                                name="current"
                                                value={passwords.current}
                                                onChange={handlePasswordChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-800 block">New Password</label>
                                            <input
                                                className="w-full rounded-lg border-slate-200 focus:border-slate-800 focus:ring-0 text-sm py-3 px-4 transition-all"
                                                placeholder="••••••••"
                                                type="password"
                                                name="newPw"
                                                value={passwords.newPw}
                                                onChange={handlePasswordChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <a className="text-sm font-bold text-slate-800 underline" href="#">Forgot your password?</a>
                                    </div>
                                </div>

                                {/* Notifications */}
                                <div className="pt-8 border-t border-slate-100 space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-800">notifications_active</span>
                                        <h2 className="text-xl font-bold text-slate-800">Notifications</h2>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between py-2">
                                            <div>
                                                <p className="text-sm font-bold text-slate-800">Course Updates</p>
                                                <p className="text-xs text-slate-500">Get notified when there's an update to the courses you're enrolled in.</p>
                                            </div>
                                            <Toggle
                                                checked={notifications.courseUpdates}
                                                onChange={() => handleNotifChange('courseUpdates')}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <div>
                                                <p className="text-sm font-bold text-slate-800">Marketing Emails</p>
                                                <p className="text-xs text-slate-500">Receive offers, promotions and newsletter updates.</p>
                                            </div>
                                            <Toggle
                                                checked={notifications.marketingEmails}
                                                onChange={() => handleNotifChange('marketingEmails')}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <div>
                                                <p className="text-sm font-bold text-slate-800">Security Alerts</p>
                                                <p className="text-xs text-slate-500">Important notifications about your account security and login activity.</p>
                                            </div>
                                            <Toggle
                                                checked={notifications.securityAlerts}
                                                onChange={() => handleNotifChange('securityAlerts')}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="pt-10 flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={handleSave}
                                        className="bg-slate-800 text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-slate-700 transition-all flex-1 md:flex-none"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className="bg-white text-slate-600 border border-slate-200 px-8 py-3 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all flex-1 md:flex-none"
                                    >
                                        Cancel
                                    </button>
                                </div>

                            </div>
                        </section>
                    </main>

                    {/* Mobile footer */}
                    <footer className="md:hidden sticky bottom-0 w-full bg-white border-t border-slate-200 p-4 flex gap-3">
                        <button
                            onClick={handleSave}
                            className="bg-slate-800 text-white py-3 rounded-lg text-sm font-bold flex-1"
                        >
                            Save Changes
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-slate-100 text-slate-600 py-3 rounded-lg text-sm font-bold px-6"
                        >
                            Cancel
                        </button>
                    </footer>

                </div>
            </div>
        </React.Fragment>
    );
};