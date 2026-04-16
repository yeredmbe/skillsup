import React from 'react';

export const Dashboard = () => {
    return (
        <React.Fragment>
            
<div className="flex h-screen overflow-hidden">

<aside className="w-64 bg-white dark:bg-black border-r border-slate-200 dark:border-slate-800 flex flex-col hidden md:flex">
<div className="p-8">
<div className="flex items-center gap-3 text-primary dark:text-white">
<span className="material-symbols-outlined text-3xl font-bold">layers</span>
<h1 className="text-xl font-black tracking-tight uppercase">SkillsUp</h1>
</div>
</div>
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 bg-primary text-white rounded-lg transition-all" href="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-all" href="/teachers">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-medium">My Lessons</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-all" href="/teachers">
<span className="material-symbols-outlined">person_search</span>
<span className="font-medium">Find a Teacher</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-all" href="/messages">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="font-medium">Messages</span>
</a>
<div className="pt-8 pb-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">Support</div>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-all" href="/auth">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-all" href="/landing">
<span className="material-symbols-outlined">help</span>
<span className="font-medium">Help Center</span>
</a>
</nav>
<div className="p-6 border-t border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-900 p-3 rounded-xl">
<div className="size-10 rounded-full bg-slate-300 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Profile photo of a male student" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSFy--wG5U3Svk7koeQGU1PHMr3RVxEIFbSuUKIfcfcAAX3GYhQdgui0GaU64av5eOQC-c_hvlUtAx_akR_1bxGexVt5UJ1XQy7oCLr-jyr9a6tGDogGXpCBJ7q6op3-2A3FHUQkY4tD4MJsuDn3ZoHpx2CTOI-qYn9Q1f6HJ1jR0pyRexVeSu9yBFya69kXuti4VAKzk5w3F4_F3xSa03GTERIjWK7siKeLaHM83eXHnukSwp5dZVgsYDQdQNvt19S0ETdEPcTQ"/>
</div>
<div className="overflow-hidden">
<p className="text-sm font-bold truncate">Alex Johnson</p>
<p className="text-xs text-slate-500 truncate">Premium Student</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-y-auto">

<header className="h-20 bg-white dark:bg-black border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
<div className="flex-1 max-w-xl">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">search</span>
<input className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary transition-all" placeholder="Search for tutors, subjects, or notes..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4 ml-8">
<button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-primary dark:bg-white rounded-full"></span>
</button>
<button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<div className="h-6 w-px bg-slate-200 dark:border-slate-800"></div>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">
<span className="material-symbols-outlined text-sm">add</span>
                        New Lesson
                    </button>
</div>
</header>
<div className="p-8 space-y-8">

<section>
<h2 className="text-3xl font-black tracking-tight">Welcome back, Alex.</h2>
<p className="text-slate-500 mt-1">You have 2 lessons scheduled for today. Keep up the great work!</p>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-500 font-medium text-sm">Hours Learned</span>
<span className="material-symbols-outlined text-primary dark:text-white">schedule</span>
</div>
<div className="flex items-end gap-2">
<span className="text-4xl font-black">128</span>
<span className="text-sm font-bold text-emerald-500 mb-1 flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> 12%</span>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-500 font-medium text-sm">Lessons Completed</span>
<span className="material-symbols-outlined text-primary dark:text-white">check_circle</span>
</div>
<div className="flex items-end gap-2">
<span className="text-4xl font-black">42</span>
<span className="text-sm font-bold text-slate-400 mb-1">Total sessions</span>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-500 font-medium text-sm">Active Subjects</span>
<span className="material-symbols-outlined text-primary dark:text-white">menu_book</span>
</div>
<div className="flex items-end gap-2">
<span className="text-4xl font-black">5</span>
<span className="text-sm font-bold text-slate-400 mb-1">Current topics</span>
</div>
</div>
</section>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-bold">Upcoming Lessons</h3>
<a className="text-sm font-bold text-primary dark:text-white hover:underline" href="#">View all</a>
</div>
<div className="space-y-4">

<div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-primary dark:hover:border-white transition-all group">
<div className="size-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a female tutor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBreb88i8-W-7Pajn3QAB4Mt32TSrxOF5ua_tbXVn30RR69fAQtswvV0haTgiVU8pukB9CAk6lQcsXSHlbgjrABS5cCl0CwAeHpGm6oydyyhg2ZzNb4wIn3EvpCvevgp-dBFxglO0aaFjSfpP0Ii2U44PQrhpBi-eqci7W6n2CHyYZvNaDmn1xL6NB9nR5VSstWptQ6fGmgnYZ1bgEP1OGTQiJEylGLwgiebnGGyIs3GXKlLvUV2RghmRKVXg58kPmfKufi3mlR0A"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-lg">Advanced Web Development</h4>
<p className="text-slate-500 text-sm">with Sarah Miller</p>
</div>
<div className="flex flex-col sm:items-end gap-1">
<div className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm font-semibold">
<span className="material-symbols-outlined text-xs">calendar_month</span>
                                        Today, Oct 24
                                    </div>
<div className="flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-white/10 text-primary dark:text-white rounded text-sm font-bold">
<span className="material-symbols-outlined text-xs">schedule</span>
                                        14:00 - 15:30
                                    </div>
</div>
<button className="sm:ml-4 p-2 rounded-lg bg-primary text-white group-hover:bg-primary/90">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>

<div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-primary dark:hover:border-white transition-all">
<div className="size-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a male tutor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcIoX-NkcXDx9gmc-m0THCcmhlsuSpyy-KpQ7Uu_VNNwA-A9jlXaUWpQDEPhnSm12AmQQNbLoTuIMbJg6sQgqTjYrufOy-E69AwgRrx6CXMV54I9RoTDoHKnV0fWIPP2jgQAuHB46px4JkEypCCZbQAG020aFBVCDSHWJtObOLyfeW_atGU6QA_TdU6Yu4VSwN0VMKNv6580QJV9xQtjRLy69V08h1XFiWGSV34Vhgv3c8QVysPh_YwTx0Sa-OxMeejxp8wRgmPQ"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-lg">UX Research Fundamentals</h4>
<p className="text-slate-500 text-sm">with David Chen</p>
</div>
<div className="flex flex-col sm:items-end gap-1">
<div className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm font-semibold">
<span className="material-symbols-outlined text-xs">calendar_month</span>
                                        Tomorrow, Oct 25
                                    </div>
<div className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm font-semibold">
<span className="material-symbols-outlined text-xs">schedule</span>
                                        10:00 - 11:00
                                    </div>
</div>
<button className="sm:ml-4 p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>

<div className="pt-4 space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-bold">Favorite Teachers</h3>
<a className="text-sm font-bold text-primary dark:text-white hover:underline" href="#">Browse tutors</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
<div className="size-12 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Female tutor profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtvfKDHGQV4dtbGUnkxpDAp7B4EGrRuIYpd8Vaql79FESIG5AlajqVp_dB_2CGFBvn9JTegTaPWDno_HlatqvkmmkGON2dKH000AKv5jTGWBDctJuTWFcSgSU4sMmxGegrjd0w5TGSk4h236cztcoIXeFxdW2tXY2Jz73kBeSo5npSfE26KDZXZJtgBclD2qt3eGMQkx6E0lhqqskSB3g9a3docWkfZHuGiJG7jmInmueWy0APgwXI3f_kKfbN7bv555aNzRfxDA"/>
</div>
<div className="flex-1">
<p className="font-bold text-sm">Elena Rodriguez</p>
<p className="text-xs text-slate-500">UI Design</p>
</div>
<button className="text-xs font-black bg-primary text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity uppercase tracking-tighter">Book</button>
</div>
<div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
<div className="size-12 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Male tutor profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa0QsSaKKt7l39brYBgwioZGHn7Agw07uS0Cozo1_z4Os86zGbMZZuMeMwXjY2K51jYT6nnq31o7FEMAtLadz9aJmP6ofFhW_0_BZe2lIYj2BqpjfA69pLVPFm5fpJ7wH9Cirp8tnfOfVJ_QFZntbjq4AS7evuM-Te570ZucAb56mtL2FFZJCk6N649qSqxxcAjgxmE-TZs9jv3SlHBklFwkfjgIroqtEUSiIG7dv_o4sorvwke9azIaLpVU0L3AVnxI6LCAVKBw"/>
</div>
<div className="flex-1">
<p className="font-bold text-sm">Mark Thompson</p>
<p className="text-xs text-slate-500">Python Basics</p>
</div>
<button className="text-xs font-black bg-primary text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity uppercase tracking-tighter">Book</button>
</div>
</div>
</div>
</div>

<div className="space-y-8">

<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col h-full">
<div className="p-6 border-b border-slate-100 dark:border-slate-800">
<h3 className="text-lg font-bold">Recent Activity</h3>
</div>
<div className="p-6 space-y-6 flex-1">
<div className="flex gap-4">
<div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm">mail</span>
</div>
<div>
<p className="text-sm font-bold">Message from Sarah Miller</p>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">"Hi Alex! I've uploaded the practice files for today's session..."</p>
<span className="text-[10px] text-slate-400 uppercase font-bold mt-2 inline-block">24 mins ago</span>
</div>
</div>
<div className="flex gap-4">
<div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm text-primary dark:text-white">task_alt</span>
</div>
<div>
<p className="text-sm font-bold">Course Completed</p>
<p className="text-xs text-slate-500 mt-1">Introduction to CSS Grid</p>
<span className="text-[10px] text-slate-400 uppercase font-bold mt-2 inline-block">2 hours ago</span>
</div>
</div>
<div className="flex gap-4">
<div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm">credit_card</span>
</div>
<div>
<p className="text-sm font-bold">Payment Successful</p>
<p className="text-xs text-slate-500 mt-1">Invoice #SKL-2023-9087</p>
<span className="text-[10px] text-slate-400 uppercase font-bold mt-2 inline-block">Yesterday</span>
</div>
</div>
<div className="flex gap-4">
<div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm">star</span>
</div>
<div>
<p className="text-sm font-bold">New Achievement</p>
<p className="text-xs text-slate-500 mt-1">10 Lesson Streak!</p>
<span className="text-[10px] text-slate-400 uppercase font-bold mt-2 inline-block">2 days ago</span>
</div>
</div>
</div>
<div className="p-4 border-t border-slate-100 dark:border-slate-800">
<button className="w-full py-2 text-sm font-bold text-slate-500 hover:text-primary dark:hover:text-white transition-colors">Clear all activity</button>
</div>
</div>

<div className="bg-primary text-white p-6 rounded-xl relative overflow-hidden">
<div className="relative z-10">
<h4 className="text-lg font-bold">Weekly Goal</h4>
<p className="text-primary/70 dark:text-white/60 text-sm mt-1">4 of 10 hours completed</p>
<div className="mt-6 h-2 bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-[40%]"></div>
</div>
<button className="mt-6 text-sm font-bold border border-white/30 px-4 py-2 rounded-lg hover:bg-white hover:text-primary transition-all">Update Goal</button>
</div>

<div className="absolute -right-10 -bottom-10 size-40 bg-white/5 rounded-full blur-2xl"></div>
</div>
</div>
</div>
</div>
</main>
</div>

        </React.Fragment>
    );
};