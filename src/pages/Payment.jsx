import React from 'react';

export const Payment = () => {
    return (
        <React.Fragment>
            


<nav className="flex justify-between items-center px-6 h-16 w-full border-b border-gray-100 dark:border-zinc-800 bg-white dark:bg-black font-sans antialiased">
<div className="text-xl font-bold tracking-tighter text-black dark:text-white">SkillsUp</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-black dark:text-white cursor-pointer hover:opacity-70 transition-opacity">account_circle</span>
</div>
</nav>
<main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 py-12">
<div className="max-w-md w-full text-center">

<div className="mb-8 flex justify-center">
<div className="w-20 h-20 bg-black dark:bg-white rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-white dark:text-black text-4xl" >check</span>
</div>
</div>

<h1 className="text-3xl font-bold tracking-tight mb-3">Payment Successful!</h1>
<p className="text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
                Your registration fee has been processed. Your account is now fully verified.
            </p>

<div className="bg-zinc-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-xl p-8 mb-10 text-left">
<div className="grid grid-cols-1 gap-y-6">
<div className="flex justify-between items-center border-b border-gray-200 dark:border-zinc-800 pb-4">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Transaction ID</span>
<span className="text-sm font-bold font-mono">#SKL-88293-XP</span>
</div>
<div className="flex justify-between items-center border-b border-gray-200 dark:border-zinc-800 pb-4">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Amount Paid</span>
<span className="text-lg font-extrabold">$49.00</span>
</div>
<div className="flex justify-between items-start border-b border-gray-200 dark:border-zinc-800 pb-4">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Payment Method</span>
<div className="text-right">
<div className="text-sm font-bold">MTN MoMo</div>
<div className="text-xs text-zinc-400">+237 6XX XXX XXX</div>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Date</span>
<span className="text-sm font-bold">Oct 25, 2023</span>
</div>
</div>
</div>

<button className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-4 rounded-lg hover:opacity-90 transition-all active:scale-[0.98] mb-6">
                Go to Dashboard
            </button>

<a className="inline-flex items-center gap-2 text-sm font-bold text-black dark:text-white border-b-2 border-black dark:border-white pb-0.5 hover:opacity-70 transition-opacity" href="#">
<span className="material-symbols-outlined text-lg">download</span>
                Download Receipt
            </a>
</div>

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 -right-20 w-96 h-96 bg-zinc-100 dark:bg-zinc-900/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-zinc-100 dark:bg-zinc-900/30 rounded-full blur-3xl"></div>
</div>
</main>


        </React.Fragment>
    );
};