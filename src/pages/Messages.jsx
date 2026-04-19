import React from 'react';

export const Messages = () => {
    return (
        <React.Fragment>
            
<div className="flex h-screen w-full flex-col">

<header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-3 bg-white dark:bg- z-10 shrink-0">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-primary dark:text-white">
<div className="size-8 bg-primary rounded flex items-center justify-center">
<span className="material-symbols-outlined text-white">layers</span>
</div>
<h2 className="text-xl font-bold leading-tight tracking-tight">SkillsUp</h2>
</div>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Courses</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Students</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Analytics</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="size-10 rounded-full border border-slate-200 bg-cover bg-center" data-alt="User profile avatar" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgIJVztwVrJOstTDiteHgBkuF2jzDDB3MB8Biu62ZHPOdklmINKTnadx7TJYtWsVynRpUGPtwsg2xJEMdeyiWFerOIZ0OB4u75rbTnnccNW1aJoJWv0OqZCbU6hZ-s-A5ZEXoS5CFmnIU-K1mAiJxn5NkfgGoMCD_niXAviuVvVWSnJecBMgAXrRgEGj4BBNc7Fq5q4OVy7b3iC0HmwAsvwn3qVTt4oIWlcYfFiH4AB0FznXjltk265AwdDxGwuCyG3jZXPZumJg')` }}></div>
</div>
</header>

<main className="flex grow overflow-hidden">

<aside className="w-full md:w-[380px] border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg- shrink-0">
<div className="p-4 border-b border-slate-100 dark:border-slate-800">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Search conversations..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto">

<div className="flex items-center gap-4 p-4 bg-primary text-white cursor-pointer group">
<div className="relative">
<div className="size-12 rounded-full bg-cover bg-center border border-white/20" data-alt="Profile picture of Professor Aris" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpXDUhtF3e2Zhb91pojzuRIJYNt9ZqDmgUYeae0QqrmoBrf7PzbC0sSXQgK4ug9HKTQc05a9tsaaXlGkL0Xm-E3NVgRZaguRi2uxYsfOJrE9TeXGB2ni4nlsD4uWb3nhKpDH2JiL8FYZ1WF60WRdSOR28z4DTPABgmFPj0_BmpOYvmYmZgQeSqUwBXe9-V0K32cSJvPV2A4KNrgdSbejU8B6K_7TZwjlNaojLH6to2MoOhIF-gDHgq6EwJJ60WzXc_1Ht9UqNKNw')` }}></div>
<div className="absolute bottom-0 right-0 size-3 bg-white rounded-full border-2 border-primary"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<h3 className="font-semibold text-sm truncate">Prof. Aris - Python Basics</h3>
<span className="text-[10px] opacity-70">10:45 AM</span>
</div>
<p className="text-xs opacity-90 truncate mt-0.5">The skill assessment is ready for review.</p>
</div>
</div>

<div className="flex items-center gap-4 p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors">
<div className="relative">
<div className="size-12 rounded-full bg-cover bg-center border border-slate-200" data-alt="Profile picture of Sarah J." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnGRR8nkHs8QC_433rpjppP8zMxx_aSbCe-RUjnGTt6RK10u9Qs6sx63pO-D64-je7G5DNJUZJh71PEXd4IuinL_3GaFNTrhdiXlNlffu30qJ3qavhvd2tF_FGwbOp6UHCSGxpvdVZJdXKSTPEg9GR8bXOYotakE6yv1sY0vTUKjsE0mqKNlANjPanqiRcYUldmJga6hmW8-b0fDOhtyngnU4egG6i4ikNzkV16UNeMGbG3WgcgqKMZGvSVSZFE1dY5c36z1dQwA')` }}></div>
<div className="absolute bottom-0 right-0 size-3 bg-slate-400 rounded-full border-2 border-white"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<h3 className="font-semibold text-sm truncate text-slate-900 dark:text-slate-100">Sarah J. - Project Update</h3>
<span className="text-[10px] text-slate-400">Yesterday</span>
</div>
<p className="text-xs text-slate-500 truncate mt-0.5">I've uploaded the latest wireframes.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors">
<div className="relative">
<div className="size-12 rounded-full bg-cover bg-center border border-slate-200" data-alt="Profile picture of Marcus Chen" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIME1pafyDtzv8cmg5SvhcOdSMcgsD5xiOsUFQ8pC6B3TOOTtZNoAKwW8wKJjjBBZsTRAjkGI8EafBOjxEZTlr-KXG0rjyWEl97yXnXm-MYiEK7WxWurW9aOTNOptGcYlVNLge56ZeCDpMtkknHOW71yySUEQDiMCS5WA0ofCy3ZlmyU17IkBNNWiefnL6Iir8zipghdat2SuISHo9WTBwyHbmHqFuMCBsL0NzS_ASffoVpmhRCS9QZzIxwaik5YrNg-D-07nAow')` }}></div>
<div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-white"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<h3 className="font-semibold text-sm truncate text-slate-900 dark:text-slate-100">Marcus Chen</h3>
<span className="text-[10px] text-slate-400">Nov 12</span>
</div>
<p className="text-xs text-slate-500 truncate mt-0.5">Can we reschedule the 1:1?</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors">
<div className="relative">
<div className="size-12 rounded-full bg-cover bg-center border border-slate-200" data-alt="Profile picture of Elena Rodriguez" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXYACT6dnlMc9D3NwHJ4mHMEIe4ExgI7DpsB0hLKGO0nKrhDwdCTBAUhRSUL8CV6UeK8lGomgQTU6F27N2Rc3D3aF33rxfitJb18pNJImfs6C7b75-59flFhLZO3gvTCUHuFqNQFsPyJOM-C0bVZSik7TNoLowXhKqk3eXLOWh2YlMe3ZcLHJw6r589em37l677bsVWzEK4Z6JR58Jwn3SPLqeeTt7G-hWL0BBbDOPB79rBAa68dzlZ1PPFWVjNu1bNJy3euhBYw')` }}></div>
<div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-white"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<h3 className="font-semibold text-sm truncate text-slate-900 dark:text-slate-100">Elena Rodriguez</h3>
<span className="text-[10px] text-slate-400">Nov 11</span>
</div>
<p className="text-xs text-slate-500 truncate mt-0.5 font-medium">Shared a document: Course_Syllabus.pdf</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors">
<div className="relative">
<div className="size-12 rounded-full bg-cover bg-center border border-slate-200" data-alt="Profile picture of David Kim" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDS4Iip2BKQvRbNXv_t93jp9B7UqLS6kGiS3Xm6XGSaDUk80EsBSPsbrfPpylAIjokOP9srbLqpYwnFzdzeH7U7bo6Fnmm7ftKsqYss9W9Ji3tGmuYHyaK0u67lZxZNTsqRXs_oBB9I34__98FD4dsuIdzGl75BDELDBCxXdYBBN81GTp7YQGIPFThmssH97gnGnQm0rXp8FKn57PQQBa3l4dzZAvRkvbEcjgi542zt3WbUvLnK-qTIXmRoVSrWFwcPkPfAjE9cnw')` }}></div>
<div className="absolute bottom-0 right-0 size-3 bg-slate-300 rounded-full border-2 border-white"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<h3 className="font-semibold text-sm truncate text-slate-900 dark:text-slate-100">David Kim</h3>
<span className="text-[10px] text-slate-400">Nov 10</span>
</div>
<p className="text-xs text-slate-500 truncate mt-0.5">Thanks for the feedback on module 3!</p>
</div>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col bg-slate-50 dark:bg-/50 relative">

<header className="flex items-center justify-between px-6 py-4 bg-white dark:bg- border-b border-slate-200 dark:border-slate-800 shrink-0">
<div className="flex items-center gap-4">
<div className="size-10 rounded-full bg-cover bg-center border border-slate-200" data-alt="Profile picture of Professor Aris" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuADBl1OmCBPenS1K4zDkBPwXYZfjHwqysxBrfNzqZALsNcXMlg7Qo6onZFg4I-9z4QKUh01Q-amWlxNC71RoVT-0C5KJQiRNeH7s65zGzpInimGkSTcsWvVV4NV3sQcUmsnwaI5NZdAA471Bf8PcMO-fQ_lXBC2Yfax9u4D9gOI_jJmrmwaUjtwxzNQS8SfQLS59YJl9zJLuPGfODTylX4iWdDrBu_VGHkfiyOPwdsLNXYpcZ8oIpQvpZI9D4gYRuud-jSo3LLFcg')` }}></div>
<div>
<h2 className="font-bold text-base text-slate-900 dark:text-slate-100 leading-none">Prof. Aris - Python Basics</h2>
<div className="flex items-center gap-1.5 mt-1">
<span className="size-2 bg-primary rounded-full"></span>
<span className="text-xs text-slate-500 font-medium">Online</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-lg">call</span>
</button>
<button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-lg">videocam</span>
</button>
<button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-lg">info</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
<div className="flex justify-center">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm">Today</span>
</div>

<div className="flex gap-3 max-w-[80%]">
<div className="size-8 rounded-full bg-cover bg-center shrink-0 mt-1" data-alt="Profile picture of Professor Aris" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBufw8Xfvz_sNzG0QF1Ew-ZVatddP8S25YhuOcbhCGjN-HUxLu5lHnK4vJXywZ7hIemmzzMzVuthqRSZHFTsbmMrHAt6ADI8I5dNs4WlLUD3y13cFqSWtMPMB0POTSaI6bS_9bmFz-F9aQQTwG-HzN-hbLgrxc-OnT2ByLfO0HkGia3u9l9pb3IzyPL2ScuSXB6_RjZl35AEJ2EY9kuVB8xxR-YhPeu2zU98x0c-WVMq-kcJ9rLA9vnV9KZNkmA3XFR06byzUzig')` }}></div>
<div className="flex flex-col gap-1">
<div className="bg-white dark:bg- border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl rounded-tl-none shadow-sm">
<p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">Hello! I've just reviewed the curriculum for module 4. Have you had a chance to look at the Python Basics assessment yet?</p>
</div>
<span className="text-[10px] text-slate-400 font-medium ml-1">10:30 AM</span>
</div>
</div>

<div className="flex flex-row-reverse gap-3 max-w-[80%] self-end">
<div className="size-8 rounded-full bg-cover bg-center shrink-0 mt-1" data-alt="User profile avatar" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtzTOTj91-YpbjpUps2_J2T6rFsQWjrkIMt--_OmRUIfan2361A7ECMa4xYzIyKnLqYnVg5SZiuwQ4G7DvDXx6qhkzfn5SqPFiPF__b8SfWgTYHkdgP-sshevGDRs06UNpicUC6sS7JSSs74Ki5e1KcFVPnNk5bcBBkCdJcf3DzfWjU4z0ysywQZ00_MwvkrCrhsJdo2QiA6ZetqBsdE6nQigOvmeacEBqZwxZHCNSURy7AUpWnPGkySSFQiPrTSkryom-97KTxQ')` }}></div>
<div className="flex flex-col items-end gap-1">
<div className="bg-primary text-white px-4 py-3 rounded-xl rounded-tr-none shadow-md">
<p className="text-sm leading-relaxed">Yes, I just finished it. It seems straightforward, but I have a few questions about the decorator exercise.</p>
</div>
<div className="flex items-center gap-1 mr-1">
<span className="text-[10px] text-slate-400 font-medium">10:42 AM</span>
<span className="material-symbols-outlined text-[12px] text-primary">done_all</span>
</div>
</div>
</div>

<div className="flex gap-3 max-w-[80%]">
<div className="size-8 rounded-full bg-cover bg-center shrink-0 mt-1" data-alt="Profile picture of Professor Aris" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuANczHEYEMy9-jbUDYe80G9mt_WmYAgccDs_CbUb4WOW3fTT5S_sHG1V-jyi3XqwswOIlHUs7a3norzGreQshoi-zlaOKjMghuxWdeFJzlrqBfPKUKB7iR8NUMmRfiKJHW9ed_3xVhtHAEGtBOlF1O1tfA442d4WTsN3EgQx610lJAWG8aUyrr9e_UDPZI62SQvyEAlWoA3NXKqghHAgi2hgaVyyngaxgrVAyZ9koFH0QB9zIBem4YDhgDdN38_Sk6vTRo_m2xLdQ')` }}></div>
<div className="flex flex-col gap-1">
<div className="bg-white dark:bg- border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl rounded-tl-none shadow-sm">
<p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">The skill assessment is ready for review. I've added some notes to the specific lines you might find tricky.</p>
</div>
<span className="text-[10px] text-slate-400 font-medium ml-1">10:45 AM</span>
</div>
</div>
</div>

<div className="p-6 bg-white dark:bg- border-t border-slate-200 dark:border-slate-800 shrink-0">
<div className="flex items-end gap-3 max-w-5xl mx-auto">
<div className="flex gap-1 mb-1">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">attach_file</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">mood</span>
</button>
</div>
<div className="flex-1 relative">
<textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none max-h-32" placeholder="Type your message..." rows="1"></textarea>
</div>
<button className="bg-primary text-white p-3 rounded-xl hover:bg-slate-900 transition-colors shadow-lg">
<span className="material-symbols-outlined">send</span>
</button>
</div>
<div className="flex justify-center mt-3">
<p className="text-[10px] text-slate-400 font-medium">Press <kbd className="px-1 py-0.5 border border-slate-200 rounded">Enter</kbd> to send</p>
</div>
</div>
</section>
</main>
</div>

        </React.Fragment>
    );
};