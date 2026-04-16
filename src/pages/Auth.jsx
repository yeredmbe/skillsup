import React from 'react';

export const Auth = () => {
    return (
        <React.Fragment>
            
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="flex h-full grow flex-col">

<header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 md:px-20 lg:px-40">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
<span className="material-symbols-outlined">school</span>
</div>
<h2 className="text-lg font-bold tracking-tight">Join our Faculty</h2>
</div>
<button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 dark:bg-slate-800 px-4 text-sm font-bold">
<span className="material-symbols-outlined mr-2">account_circle</span>
                    Profile
                </button>
</header>
<main className="flex-1 px-6 py-10 md:px-20 lg:px-40">
<div className="mx-auto max-w-[800px]">

<div className="mb-12 flex flex-col gap-4">
<div className="flex items-end justify-between">
<div>
<h1 className="text-3xl font-black tracking-tight md:text-4xl">Create Your Teacher Profile</h1>
<p className="mt-2 text-slate-500 dark:text-slate-400">Fill in your professional details to start teaching.</p>
</div>
<div className="text-right">
<span className="text-sm font-bold uppercase tracking-wider text-primary">Stage 1 of 2</span>
<p className="text-xs text-slate-400">Next: Documentation</p>
</div>
</div>
<div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
<div className="h-full w-1/2 bg-primary"></div>
</div>
</div>

<form className="space-y-12">

<section>
<h2 className="mb-6 text-xl font-bold tracking-tight border-b border-slate-200 dark:border-slate-800 pb-2">Profile Photo</h2>
<div className="flex flex-col items-center gap-6 sm:flex-row">
<div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
<span className="material-symbols-outlined text-4xl text-slate-400">add_a_photo</span>

<div className="absolute inset-0 bg-cover bg-center hidden" data-alt="A professional headshot of a teacher" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzGS0-6_Cxe1xUVA2Q1qCjhDHUfhmrGUklQzBQS9nKZLuCG-L48wo00LeDI7lWkpowI4p36S39r3LFRzcSFfrsBra-SudYt20jTbGa6eFYUhXw3Kwfn2s2KkJqCBwHw8LHQ_o1RNwyWOFAE6DUgPt72iSSsDGD8Y1TEeK_jLNWvoJhQ1bXYi7abBXddiwgzbf55RaorHiE9xYvyhkA8hZ6iq_cAR-kEvGorwO1O-gaXwUbDe8MJQNuXe8T4YPMV3kSQuxhq1diJQ')` }}></div>
</div>
<div className="text-center sm:text-left">
<button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition hover:opacity-90" type="button">Upload Photo</button>
<p className="mt-2 text-xs text-slate-500">JPG, PNG or GIF. Max size 5MB.</p>
</div>
</div>
</section>

<section>
<h2 className="mb-6 text-xl font-bold tracking-tight border-b border-slate-200 dark:border-slate-800 pb-2">Introductory Video</h2>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
<div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
<div className="text-center flex flex-col items-center">
<span className="material-symbols-outlined text-4xl text-slate-400">videocam</span>
<p className="mt-2 text-xs text-slate-500">Video Preview Placeholder</p>
</div>
</div>
<div className="flex flex-col gap-4">
<div>
<p className="text-sm font-medium">Upload a short video (max 3 minutes) introducing yourself and your teaching philosophy.</p>
<p className="mt-1 text-xs text-slate-500 italic">This is your chance to shine and show students your personality!</p>
</div>
<div className="space-y-2">
<button className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:opacity-90" type="button">
<span className="material-symbols-outlined mr-2">upload_file</span>
                        Select Video File
                    </button>
<p className="text-center text-xs text-slate-500">MP4, MOV or AVI. Max size 100MB.</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<h2 className="col-span-full text-xl font-bold tracking-tight border-b border-slate-200 dark:border-slate-800 pb-2">Personal Information</h2>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold">First Name</label>
<input className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary" placeholder="e.g. Jane" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold">Last Name</label>
<input className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary" placeholder="e.g. Doe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold">Phone Number</label>
<div className="flex">
<span className="inline-flex items-center rounded-l border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500 dark:border-slate-700 dark:bg-slate-900">+1</span>
<input className="w-full rounded-r border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold">WhatsApp Link</label>
<div className="flex">
<span className="inline-flex items-center rounded-l border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500 dark:border-slate-700 dark:bg-slate-900">
<span className="material-symbols-outlined text-sm">link</span>
</span>
<input className="w-full rounded-r border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary" placeholder="wa.me/number" type="url"/>
</div>
</div>
</section>

<section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<h2 className="col-span-full text-xl font-bold tracking-tight border-b border-slate-200 dark:border-slate-800 pb-2">Academic &amp; Professional</h2>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold">Last Diploma</label>
<select className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary">
<option>Bachelor's Degree</option>
<option>Master's Degree</option>
<option>PhD / Doctorate</option>
<option>Teaching Certificate</option>
<option>Other</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold">Location</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span className="material-symbols-outlined text-sm">location_on</span>
</span>
<input className="w-full rounded border-slate-300 pl-10 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary" data-location="New York City" placeholder="City, Country" type="text"/>
</div>
</div>
<div className="col-span-full flex flex-col gap-2">
<label className="text-sm font-semibold">About You (Description)</label>
<textarea className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary" placeholder="Briefly describe your background and passion for teaching..." rows="4"></textarea>
</div>
<div className="col-span-full flex flex-col gap-2">
<label className="text-sm font-semibold">Teaching Techniques</label>
<textarea className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary" placeholder="Explain your methods (e.g., Socratic method, project-based learning...)" rows="3"></textarea>
</div>
</section>

<section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<h2 className="col-span-full text-xl font-bold tracking-tight border-b border-slate-200 dark:border-slate-800 pb-2">Financials</h2>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold">Price per Month</label>
<div className="flex">
<span className="inline-flex items-center rounded-l border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500 dark:border-slate-700 dark:bg-slate-900">$</span>
<input className="w-full rounded-r border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary" placeholder="200" type="number"/>
</div>
<p className="text-xs text-slate-500">Suggested: $150 - $400 depending on subject.</p>
</div>
</section>

<div className="flex flex-col-reverse gap-4 border-t border-slate-200 dark:border-slate-800 pt-8 sm:flex-row sm:justify-between">
<button className="rounded-lg bg-slate-100 px-8 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300" type="button">Save Draft</button>
<button className="rounded-lg bg-primary px-12 py-3 text-sm font-bold text-white transition hover:opacity-90" type="submit">Next Stage: Documentation</button>
</div>
</form>
</div>
</main>

<footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-6 text-center text-xs text-slate-400">
                © 2024 Faculty Recruitment Portal. All rights reserved.
            </footer>
</div>
</div>

        </React.Fragment>
    );
};