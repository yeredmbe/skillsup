import React from 'react';

export const AdminDashboard = () => {
    return (
        <React.Fragment>
            

<aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 flex flex-col p-6 space-y-8 z-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded flex items-center justify-center">
<span className="material-symbols-outlined text-slate-950" >diamond</span>
</div>
<div>
<h1 className="text-lg font-black text-white leading-none">Onyx Admin</h1>
<p className="text-[10px] uppercase tracking-[0.1em] font-bold text-slate-400 mt-1">Management Suite</p>
</div>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white border-l-4 border-white transition-all" href="/admin">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-[10px] uppercase tracking-[0.1em] font-bold">Overview</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 transition-all active:translate-x-1 duration-150" href="/teachers">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="text-[10px] uppercase tracking-[0.1em] font-bold">Users</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 transition-all active:translate-x-1 duration-150" href="/payment/1">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="text-[10px] uppercase tracking-[0.1em] font-bold">Financials</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 transition-all active:translate-x-1 duration-150" href="/messages">
<span className="material-symbols-outlined" data-icon="star">star</span>
<span className="text-[10px] uppercase tracking-[0.1em] font-bold">Engagement</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 transition-all active:translate-x-1 duration-150" href="/verify">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
<span className="text-[10px] uppercase tracking-[0.1em] font-bold">Verification</span>
</a>
</nav>
<div className="pt-6 border-t border-white/10">
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="/signin">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="text-[10px] uppercase tracking-[0.1em] font-bold">Logout</span>
</a>
</div>
</aside>

<main className="ml-64 min-h-screen">

<header className="fixed top-0 right-0 left-64 h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 z-40">
<div className="flex items-center gap-8">
<span className="text-xl font-bold tracking-tighter text-slate-950">SkillsUp</span>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" data-icon="search">search</span>
<input className="bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-slate-950 focus:bg-white transition-all w-64" placeholder="Search platform..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors active:scale-95 duration-200">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors active:scale-95 duration-200">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden ml-2 border border-slate-200">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="professional male administrator in minimalist office setting wearing a sharp black suit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_mtLKthBXAUxzhbvQ76NWFTPd1BNIVECMbcOfKC1NCRkCLtWUDc0qXIttD-gEq3PNjxDSI_e-jSZ77TmRoBEUv2kNaxvZ9coJvElaS0b6CqgVo1kGv2aJl1xmCCmt6RXL8SRyK9UZ1qtQilL-oMkoc4Vak8KRjv4pJBzV1Y5z6Mlj6D6Rdg4W_dqQbdk-QFv0ArE9d-Kdxx5_PZKaYM52Yc1VeN2SvF4tHjAZljQ_sZD45oUfWaB2Ckbl8g4L1RzA56FfaL701w"/>
</div>
</div>
</header>

<div className="pt-24 p-8 space-y-8">

<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 md:col-span-4 bg-surface rounded-xl p-8 shadow-sm border-l-4 border-primary">
<div className="flex flex-col h-full justify-between">
<div>
<p className="text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant">Total Revenue</p>
<h2 className="text-3xl font-bold tracking-tight text-slate-950 mt-1">$42,850.00</h2>
</div>
<div className="mt-8">
<p className="text-xs text-on-surface-variant mb-4">From verified teacher registration fees</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-slate-950 text-white text-[10px] font-bold rounded">+12.5%</span>
<span className="text-[10px] text-slate-500 font-medium">vs last month</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-8 bg-surface rounded-xl p-8 shadow-sm">
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant">Engagement Tracking</p>
<h2 className="text-xl font-bold tracking-tight text-slate-950 mt-1">Most Rated Teachers</h2>
</div>
<a className="text-[10px] uppercase tracking-[0.1em] font-bold text-slate-400 hover:text-slate-950 transition-colors" href="#">View All Leaders</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-low">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" data-alt="portrait of a focused female educator in a minimalist bright studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJRcTMZBkwA3xMvatwMNL9RJOQgpRnW6hNyjfElYO7Rrlrq4OuvBWwnPgSxr5OeX62onmgG3_zg3PJ8Cnu7Q4pEdjpO3y8hqKd6jcR2446Rzj9FgBpW-ow2qvwbrLdVrABeSLNsjBnqbN39WiEi5x31CkzhBhLhKG8XmdaPGbhcbfx_nR6FnltlRnm5yqdTMJztqaJg-4U4ICQNhVjTwvSSbqNDxLMiC-kp0QT4FNTw4q3inOcOH7SlWBFmd7OnqzUmV5oBMa-WQ"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-950 text-white text-[8px] flex items-center justify-center rounded-full font-bold">1</div>
</div>
<div>
<p className="text-sm font-bold text-slate-950">Sarah Jenkins</p>
<div className="flex items-center text-slate-500">
<span className="material-symbols-outlined text-xs fill-slate-950" >star</span>
<span className="text-xs font-medium ml-1">4.9 (240)</span>
</div>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-low">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" data-alt="professional male tutor with a warm smile in a clean modern environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzwiUOa_e7tBIaWhfKvfL0bcrrja55Uqfv8JPQobDw0OVoKoWLAj5lVsPay-e5L8LufvkaynLbDSmOmjRjcPpVhM6pjm6Pgw13-BdgXrddzcAW6Zk_Reb-P06NyUHNlS0Zlx_WlHhcL98AY3mnX_YkmjWq91AeJ20uw8xOzNuKdCZUcKOJHdfCU4ECQdgcYBDYqpSW4ox-mNuUrMCSn_GHLwEWJf0l_ZqYQzs9Bj66aUCzgRjwa4gEInsiFfOmWHhpnQzci9-9nw"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-500 text-white text-[8px] flex items-center justify-center rounded-full font-bold">2</div>
</div>
<div>
<p className="text-sm font-bold text-slate-950">David Chen</p>
<div className="flex items-center text-slate-500">
<span className="material-symbols-outlined text-xs fill-slate-950" >star</span>
<span className="text-xs font-medium ml-1">4.8 (182)</span>
</div>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-low">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" data-alt="smiling african american female professor against a neutral professional background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd5Wq8zJwmh13i_3WqGtLmrfCRFB6TU3KjDQE-qGovJzuMIUyUhg8MhjDBl7Pur4x6Yyj_h_E5a3RT2WcbbDtOmzbhMGCEi5SI1A3JCzWtcAWT0vULl_x-oCUL8OooR0eko-7ON4ZPQsqPN1R_XMULUfKbSNQVDTP1ogxQAlsuWlGuGCWU_DSENIvnkJGi9wm8tfBYMJu49l5qzu1r8_CubhizU5XnKXpChpZAFz0aLYe4NDy6dz-cprb6Ol83hDLAHAm4qLq0oA"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-400 text-white text-[8px] flex items-center justify-center rounded-full font-bold">3</div>
</div>
<div>
<p className="text-sm font-bold text-slate-950">Elena Rodriguez</p>
<div className="flex items-center text-slate-500">
<span className="material-symbols-outlined text-xs fill-slate-950" >star</span>
<span className="text-xs font-medium ml-1">4.8 (156)</span>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="bg-surface rounded-xl shadow-sm overflow-hidden">
<div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100">
<div>
<h2 className="text-xl font-bold tracking-tight text-slate-950">User Management</h2>
<p className="text-sm text-on-surface-variant mt-1">Manage Teachers and Parents across the platform.</p>
</div>

<div className="flex items-center gap-3">
<select className="text-[10px] uppercase tracking-[0.1em] font-bold bg-slate-100 border-none rounded-lg px-4 py-2 focus:ring-slate-950">
<option>Role: All</option>
<option>Teacher</option>
<option>Parent</option>
</select>
<select className="text-[10px] uppercase tracking-[0.1em] font-bold bg-slate-100 border-none rounded-lg px-4 py-2 focus:ring-slate-950">
<option>Status: All</option>
<option>Verified</option>
<option>Pending</option>
<option>Not Verified</option>
</select>
<button className="bg-slate-950 text-white text-[10px] uppercase tracking-[0.1em] font-bold px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors active:scale-95">
                            Apply Filter
                        </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50">
<th className="px-8 py-4 text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant border-b border-slate-100">User Name</th>
<th className="px-8 py-4 text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant border-b border-slate-100">Role</th>
<th className="px-8 py-4 text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant border-b border-slate-100">Verification Status</th>
<th className="px-8 py-4 text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant border-b border-slate-100 text-center">Rating</th>
<th className="px-8 py-4 text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant border-b border-slate-100 text-center">Likes</th>
<th className="px-8 py-4 text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant border-b border-slate-100 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="professional woman in white shirt portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBEAWETk29ECPRULTn_ikdeoEs52xV3MbgoentmRN3Vrev6wi-edjjLRBtoEL2cOfZVmZ-DTp_f8c1lr2ngzLjVjrcqrHyMJYT1k2UR4opCxm1BCe1Mhw4scGMYvSlSKRJLLWjfTTWP2Np2uAxYDLq2o9ifwdaBPccuLOjXV83Pol3Wb4rcAsSJGU3YFWTnN_-wlth2kyq2EID0De3Aj5gN2zBMYIvOCtMSEm8LYGzPJcC0vLVXStswZQojt_9PhP8-ehSBpXvJg"/>
<div>
<p className="text-sm font-bold text-slate-950">Sarah Jenkins</p>
<p className="text-xs text-slate-400">sarah.j@skillsup.com</p>
</div>
</div>
</td>
<td className="px-8 py-5">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 px-2 py-1 bg-slate-100 rounded">Teacher</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-1.5 text-emerald-600">
<span className="material-symbols-outlined text-sm" >verified</span>
<span className="text-xs font-bold">Verified</span>
</div>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-bold text-slate-950">4.9</span>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-medium text-slate-500">1,204</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1 text-[10px] font-bold uppercase bg-slate-950 text-white rounded hover:bg-slate-800">View Profile</button>
<button className="px-3 py-1 text-[10px] font-bold uppercase border border-rose-100 text-rose-600 rounded hover:bg-rose-50">Disable</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="smiling man in casual grey sweater" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvGQq7nxEVNlN_zX5l69CJ2-zr65Vq4IZTByYypB7oQaJ9CQxCxp23E_-mvQqAltkMWDFXqBJFUjcEZrXix4WcdfuUZZ6413CTYoBnWv-YWGP6SwXgGoyL-CCZ0NxgJx-wWzrChjGlsFoZXpTjCFD7nBQAbROoAawfAB78ANip9m2CMVYZGZUflnxO1YIKtTy_RFAETedv2gZ-GuCZjtdwTWjfC8YKQ_SWVH5Vp3aIz-QdswEd9cvEC6MXHIwSqON4kZc_Hds2-g"/>
<div>
<p className="text-sm font-bold text-slate-950">Mark Thompson</p>
<p className="text-xs text-slate-400">m.thompson@gmail.com</p>
</div>
</div>
</td>
<td className="px-8 py-5">
<span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 px-2 py-1 bg-blue-50 rounded">Parent</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-1.5 text-slate-400">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="text-xs font-medium">Not Verified</span>
</div>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-medium text-slate-300">—</span>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-medium text-slate-300">—</span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1 text-[10px] font-bold uppercase border border-rose-100 text-rose-600 rounded hover:bg-rose-50">Disable Account</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="professional male tutor portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-9f3fgi7eW9jpRk4Ub3w-gOxZwsPPt3g5HxPuRyHNLYbmgkxm3Pp8BqJhjZyn6daVj5zKVPRT7ypvaIXr3nyCembl2m2VKqcnb3xndXCp0PvAuT8xwvGidhwB3eXkPBIZYGZtNxC35UjV79RDDTIDTsWft0Hv63j1les9SPf9xjasJkuYGMzKVesyY5190Y8Ol4vxJDS_WkkPlrkaK8kFP_6jJKthDbGRKs_a0mlvKYa-1R3mJ-3zc0Uehs_MBohVFWdDC9cyHg"/>
<div>
<p className="text-sm font-bold text-slate-950">David Chen</p>
<p className="text-xs text-slate-400">d.chen@academy.edu</p>
</div>
</div>
</td>
<td className="px-8 py-5">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 px-2 py-1 bg-slate-100 rounded">Teacher</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-1.5 text-emerald-600">
<span className="material-symbols-outlined text-sm" >verified</span>
<span className="text-xs font-bold">Verified</span>
</div>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-bold text-slate-950">4.8</span>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-medium text-slate-500">892</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1 text-[10px] font-bold uppercase bg-slate-950 text-white rounded hover:bg-slate-800">View Profile</button>
<button className="px-3 py-1 text-[10px] font-bold uppercase border border-rose-100 text-rose-600 rounded hover:bg-rose-50">Disable</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 text-xs font-bold">JD</div>
<div>
<p className="text-sm font-bold text-slate-950">James Dawson</p>
<p className="text-xs text-slate-400">j.dawson@email.com</p>
</div>
</div>
</td>
<td className="px-8 py-5">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 px-2 py-1 bg-slate-100 rounded">Teacher</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-1.5 text-amber-600">
<span className="material-symbols-outlined text-sm">pending</span>
<span className="text-xs font-bold">Pending</span>
</div>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-medium text-slate-300">—</span>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-medium text-slate-300">0</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1 text-[10px] font-bold uppercase bg-slate-950 text-white rounded hover:bg-slate-800">View Profile</button>
<button className="px-3 py-1 text-[10px] font-bold uppercase border border-rose-100 text-rose-600 rounded hover:bg-rose-50">Disable</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="professional woman portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrLBzRntH3-YRiqrqIKZ6f91rkRC3Y625Ppvzb8ZLsioG8pqij5rC4fVe7F838rA0Yt9WP5jhNp7Ltbc31TCb5qJGVS3RE_TrBMREN9COxQgK89ieY5I3t1u5dFNTF7RbeDwO5A0r1YQKR2mg-N0VVykmXiLki8ioNGswR1YSGeUn3X1rjnL220yd_Ja0Ci7IfBI23cNHrTp9aKqL6YT6ps8qcCFBhM0qxLm-t8dJB8fHFIYe02LxQfbjuKl5Our3JteWSeLH2Pg"/>
<div>
<p className="text-sm font-bold text-slate-950">Elena Rodriguez</p>
<p className="text-xs text-slate-400">elena.r@parentconnect.net</p>
</div>
</div>
</td>
<td className="px-8 py-5">
<span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 px-2 py-1 bg-blue-50 rounded">Parent</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-1.5 text-emerald-600">
<span className="material-symbols-outlined text-sm" >verified</span>
<span className="text-xs font-bold">Verified</span>
</div>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-medium text-slate-300">—</span>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-medium text-slate-300">—</span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1 text-[10px] font-bold uppercase border border-rose-100 text-rose-600 rounded hover:bg-rose-50">Disable Account</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="man smiling portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt-ZSqQWhMu_qh1pwNEnEP8AtulDnrJQNWHowJDknmWKt23jqxT817qS73oGRBMSkeXszf2-jQ5a5-0gwxkOLLTQEMYDPAx3ZadP7KRP32kmZZRTVcglNiK8rNdlLqVnamRuIcj3FxGugHTWL6U_-rKRonf1tZSQEKI-HkmX2sUIggau4G8ldhwXcfnRVfd3h0k8Jv88C7cBVC-2fCxzmD9-E1kqk8oC4-coMBM2oi2yLtRy3ww-Uw5Ef2Y1LvvNGApN7hQLTUAg"/>
<div>
<p className="text-sm font-bold text-slate-950">Robert Miller</p>
<p className="text-xs text-slate-400">miller.teach@gmail.com</p>
</div>
</div>
</td>
<td className="px-8 py-5">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 px-2 py-1 bg-slate-100 rounded">Teacher</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center gap-1.5 text-slate-400">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="text-xs font-medium">Not Verified</span>
</div>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-bold text-slate-950">4.2</span>
</td>
<td className="px-8 py-5 text-center">
<span className="text-sm font-medium text-slate-500">412</span>
</td>
<td className="px-8 py-5">
<div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1 text-[10px] font-bold uppercase bg-slate-950 text-white rounded hover:bg-slate-800">View Profile</button>
<button className="px-3 py-1 text-[10px] font-bold uppercase border border-rose-100 text-rose-600 rounded hover:bg-rose-50">Disable</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-8 border-t border-slate-100 flex items-center justify-between">
<p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Showing 6 of 1,248 Users</p>
<div className="flex gap-2">
<button className="p-2 border border-slate-200 rounded hover:bg-slate-50 transition-colors"><span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span></button>
<button className="p-2 border border-slate-950 bg-slate-950 text-white rounded transition-colors text-[10px] font-bold px-4">1</button>
<button className="p-2 border border-slate-200 rounded hover:bg-slate-50 transition-colors text-[10px] font-bold px-4">2</button>
<button className="p-2 border border-slate-200 rounded hover:bg-slate-50 transition-colors text-[10px] font-bold px-4">3</button>
<button className="p-2 border border-slate-200 rounded hover:bg-slate-50 transition-colors"><span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span></button>
</div>
</div>
</section>
</div>
</main>

<button className="fixed bottom-8 right-8 w-14 h-14 bg-slate-950 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group z-50">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span className="absolute right-full mr-4 bg-slate-950 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Invite New Teacher</span>
</button>

        </React.Fragment>
    );
};