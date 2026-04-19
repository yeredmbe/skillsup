import React from 'react';
import { Link } from 'react-router-dom';

export const FindTeacher = () => {
    return (
        <React.Fragment>


            <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white px-6 py-3">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
                    <div className="flex items-center gap-8 flex-1">
                        <Link to="/" className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-3xl">school</span>
                            <h1 className="text-xl font-bold tracking-tight">SkillsUp</h1>
                        </Link>
                        <div className="hidden md:flex flex-1 max-w-md">
                            <div className="relative w-full">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="Search for subjects or teachers..." type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-bold bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">Login</button>
                        <button className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">Sign Up</button>
                    </div>
                    {false && <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                        <img className="w-full h-full object-cover" data-alt="Small circular user avatar profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9is-6L86hh5LpjbToPLEChMpcdpS49bFL__oXQKBv2JFYsPH9jFtLrHvtKjAgvwB9EMr3VZ9Krqz2-G6gX-lhOYqwiKj4EYBgnl3OJj6V0EjzIAprRVZtirJT-VuqcesESxOTs2VUCniXJeV-DL8VIcqAdMET8O6dLyNS83Omd70gr7hBQmsXwDZISQHxZpSnEHnXC0aEhYBJODPqXbuOdzJGk_9ie25MdD9u53KPD8wmx5hTjiR819CAPRqnoTJPDwFWjrlD4A" />
                    </div>}
                </div>
            </header>
            <main className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 p-6">

                <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                    <div>
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined">tune</span> Filters
                        </h2>

                        <div className="border-t border-slate-200 pt-6 space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Subject</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input checked="" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                    <span className="text-sm group-hover:text-primary transition-colors">UI/UX Design</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Python Programming</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Digital Illustration</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Mathematics</span>
                                </label>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 pt-6 mt-6 space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Price per month</h3>
                            <div className="px-2">
                                <div className="h-1 w-full bg-slate-200 rounded-full relative">
                                    <div className="absolute h-1 bg-primary left-1/4 right-1/4"></div>
                                    <div className="absolute w-4 h-4 bg-primary border-2 border-white rounded-full -top-1.5 left-1/4 cursor-pointer"></div>
                                    <div className="absolute w-4 h-4 bg-primary border-2 border-white rounded-full -top-1.5 right-1/4 cursor-pointer"></div>
                                </div>
                                <div className="flex justify-between mt-4 text-xs font-medium text-slate-500">
                                    <span>$20</span>
                                    <span>$500+</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 pt-6 mt-6 space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Location</h3>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">location_on</span>
                                <select className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg appearance-none focus:ring-primary focus:border-primary">
                                    <option>Anywhere (Online)</option>
                                    <option>New York, USA</option>
                                    <option>London, UK</option>
                                    <option>Berlin, DE</option>
                                </select>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 pt-6 mt-6 space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Rating</h3>
                            <div className="space-y-2">
                                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-slate-100 text-sm font-medium">
                                    <span className="material-symbols-outlined text-yellow-500 fill-icon">star</span>
                                    <span>4.5 &amp; up</span>
                                </button>
                                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-slate-100 text-sm font-medium transition-colors">
                                    <span className="material-symbols-outlined text-yellow-500 fill-icon">star</span>
                                    <span>4.0 &amp; up</span>
                                </button>
                            </div>
                        </div>
                        <button className="w-full mt-8 py-3 text-sm font-bold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                            Clear All Filters
                        </button>
                    </div>
                </aside>

                <section className="flex-1">

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Finding the best UI Design teachers</h2>
                            <p className="text-slate-500 text-sm mt-1">124 qualified teachers found</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-slate-500">Sort by:</span>
                            <select className="text-sm font-bold bg-transparent border-none focus:ring-0 p-0 pr-8 cursor-pointer">
                                <option>Recommended</option>
                                <option>Price: Low to High</option>
                                <option>Highest Rated</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                        <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Professional woman portrait for teacher profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqLlfq69rxRHFWZWoqNTdlw-hVDrfJ33zhCaHJzje0W-8IpWZW8qCt7d1sgODMG05zduwAaZgGeBmnKZuv0ysiXcUW47Tu9baePaj1Msy1qDVj2a4n4Ygs0arq6DY1HiNWh8Q2swTTCJJ0tdJkTDW_Mr84roPrCmMesJ8WmZ1ZlENGPD2RHbJkrDaI2HitvaGOSu0vgqrCrJlu8iH4Z3SQhaa91A96CZ5ImY_BRJk3ztRL2pbOWHg1gQqCNnzCeLB9Sl8z024Hyw" />
                                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-yellow-500 fill-icon text-sm">star</span>
                                    <span className="text-xs font-bold">4.9</span>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col h-[240px]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">Sarah Chen</h3>
                                    <span className="text-primary font-black text-xl">$120<span className="text-xs font-normal text-slate-500">/mo</span></span>
                                </div>
                                <p className="text-xs font-medium text-primary/60 mb-3 uppercase tracking-wider">Senior Product Designer</p>
                                <p className="text-sm text-slate-600 line-clamp-3 mb-auto">
                                    Ex-Google designer with 10+ years of experience. I specialize in teaching design systems, user research, and advanced Figma prototyping techniques for real-world products.
                                </p>
                                <Link to="/profile/1" className="w-full text-center mt-4 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                    View Profile
                                </Link >
                            </div>
                        </div>

                        <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Friendly male teacher smiling portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmuRfRFB-peLxqHlx9wSHVx3dRbAwdLZ8SmFrV24aZc21M6Mn7tXZBIqkzZ1jc47qBFf58XweSYY0mioS9rfe8Xa5Odd0YGDieOxa6ZeNsWuF8rrUo1AQXv8NA7W863wP_e-7HT-BwIvml1A8O1xO3QZ_MxPxgk1ZgdyBuil_X6iSr6ddUZmBtKwvN1E68To1u-QpnFoVgb_au7vQlq7NElwjw_9oUcGxQXmDAIqdaO82pHedAautEVz2gFBgWLeltwBovdTET5g" />
                                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-yellow-500 fill-icon text-sm">star</span>
                                    <span className="text-xs font-bold">4.8</span>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col h-[240px]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">Alex Rivera</h3>
                                    <span className="text-primary font-black text-xl">$85<span className="text-xs font-normal text-slate-500">/mo</span></span>
                                </div>
                                <p className="text-xs font-medium text-primary/60 mb-3 uppercase tracking-wider">Visual Designer &amp; Artist</p>
                                <p className="text-sm text-slate-600 line-clamp-3 mb-auto">
                                    Passionate about the intersection of art and technology. I help beginners master the fundamentals of UI design and digital illustration from scratch.
                                </p>
                                <Link to="/profile/1" className="w-full text-center mt-4 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                    View Profile
                                </Link >
                            </div>
                        </div>

                        <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Confident woman portrait for educator profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3IbFhxyaTU9_JpYlB51HHgvZhrJlVpivUw-M41mgBohGqfKgy9Oi1XTrVOEQpDc5w-nH32CV0AaIT0WgkU5WlhXiDFML_olmIBL5YQfUHIgvqzSF3X9Jft_v3Jxc1HxSdcZDVXh4mfIt1JAOqQWlEeCvR77cOwEgsvdI3O6LHfej2ZylEwZHAlvGtQ38r4tP4N50yAwnWPIbXSmlmr91I13BjfGCvyxiG-G_yfhRWZHDUeB_48nSltVcRFFoPMHbxgz4uiEuvsw" />
                                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-yellow-500 fill-icon text-sm">star</span>
                                    <span className="text-xs font-bold">5.0</span>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col h-[240px]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">Dr. Elena Vos</h3>
                                    <span className="text-primary font-black text-xl">$200<span className="text-xs font-normal text-slate-500">/mo</span></span>
                                </div>
                                <p className="text-xs font-medium text-primary/60 mb-3 uppercase tracking-wider">Design Researcher</p>
                                <p className="text-sm text-slate-600 line-clamp-3 mb-auto">
                                    PhD in Human-Computer Interaction. My lessons focus on deep user psychology, accessibility standards, and building evidence-based interface designs.
                                </p>
                                <Link to="/profile/1" className="w-full text-center mt-4 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                    View Profile
                                </Link >
                            </div>
                        </div>

                        <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Portrait of a creative professional teacher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHG515YdZZlYTJdGPxyt6AKkAavPMQbjYrLAKI_ATX5KXAWC8C01HUsRpbbCrzRsAwqkAVPcjG1octEK6l8bwjj-cxVArI2qpVJu6Wsh_oysIyV2VfEk9ohJDcubmHuKDVPzUucnCsYp_5zNdls9YNk_g9U_1Wu9fDez6OdZnp6ZLFXeGY8cRjfo7PyT6879fMIm2oqrvlL36FCl1VHn7BT4ePvaWfceCZfA0UQu3hwm0SDMexAZAFCaqz9i7qOkBRlQ1MO3n_HQ" />
                                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-yellow-500 fill-icon text-sm">star</span>
                                    <span className="text-xs font-bold">4.7</span>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col h-[240px]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">Marcus Thorne</h3>
                                    <span className="text-primary font-black text-xl">$95<span className="text-xs font-normal text-slate-500">/mo</span></span>
                                </div>
                                <p className="text-xs font-medium text-primary/60 mb-3 uppercase tracking-wider">Full Stack Designer</p>
                                <p className="text-sm text-slate-600 line-clamp-3 mb-auto">
                                    Bridging the gap between design and code. Learn how to build pixel-perfect designs and hand them off to development smoothly.
                                </p>
                                <Link to="/profile/1" className="w-full text-center mt-4 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                    View Profile
                                </Link >
                            </div>
                        </div>

                        <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern educator portrait against simple background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3DwGZYv49ntOTAH18EejCLKPy_H8-EkSfVSlgNS_KPLGAPlyYrvqjzLnRaDQpvh90v7M9wuEN6lEVmZO5qtrPkO9YJ81l9iBxh3SySRnwoI5pFQ2crjqpdCpPDfDspJZzbBiqtg6MsjWQ7hrZTMwrNg0bQAMQ-9dR4m0HwTBTO2R8VXRcSK67klvRnNqQDimdC_9eEXDaCUeX5uiCGpf159OHp3__d88CwjPtQpSu4n9_FyurxGnKmpbNGxLKz6pj9YohkNbn5Q" />
                                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-yellow-500 fill-icon text-sm">star</span>
                                    <span className="text-xs font-bold">4.9</span>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col h-[240px]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">Sofia Martinez</h3>
                                    <span className="text-primary font-black text-xl">$150<span className="text-xs font-normal text-slate-500">/mo</span></span>
                                </div>
                                <p className="text-xs font-medium text-primary/60 mb-3 uppercase tracking-wider">UI Specialist</p>
                                <p className="text-sm text-slate-600 line-clamp-3 mb-auto">
                                    Focusing on high-fidelity visual design and motion graphics. I'll help you create stunning interfaces that stand out in any portfolio.
                                </p>
                                <Link to="/profile/1" className="w-full text-center mt-4 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                    View Profile
                                </Link >
                            </div>
                        </div>

                        <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Expert professional teacher profile photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv-ovRfeqVl-lKO_pfqsqlOrEOtU9LmzhytWWQzzF_SOdiwWRpjLjMMkx6NAJBbgrUffgTBi2v6Y_DtzbAhDAsY8bI_YhU0jC1aNzFd_gycr6niQEvY5_Og_2He60PQmCezKCSdSR3vzt0Nh8M0tbRM5bauWesx7umt1zdu6H_Czwv75qdAxfMSm5J1HZo1QnN70P5NUav4g5IX3MJrmd9MFHp8F74D64dJ7uG8BrUvUIS-HAUjvMsjtH6ZRhDrPO59nNTMNBScQ" />
                                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-yellow-500 fill-icon text-sm">star</span>
                                    <span className="text-xs font-bold">4.6</span>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col h-[240px]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">David J. Wong</h3>
                                    <span className="text-primary font-black text-xl">$110<span className="text-xs font-normal text-slate-500">/mo</span></span>
                                </div>
                                <p className="text-xs font-medium text-primary/60 mb-3 uppercase tracking-wider">UX Strategist</p>
                                <p className="text-sm text-slate-600 line-clamp-3 mb-auto">
                                    Design is more than just looks. Learn business strategy, user flows, and how to solve complex user problems with efficient design thinking.
                                </p>
                                <Link to="/profile/1" className="w-full text-center mt-4 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                    View Profile
                                </Link >
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center items-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors">2</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors">3</button>
                        <span className="px-2">...</span>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors">12</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                    <div className="mt-12 text-center">
                        <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                            Load More Teachers
                        </button>
                    </div>
                </section>
            </main>
            <footer className="mt-20 border-t border-slate-200 py-12 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-2xl">school</span>
                        <h1 className="text-lg font-bold tracking-tight">SkillsUp</h1>
                    </div>
                    <div className="flex gap-8 text-sm text-slate-500">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                        <a className="hover:text-primary transition-colors" href="#">Contact Support</a>
                    </div>
                    <div className="text-sm text-slate-400">
                        © {new Date().getFullYear()} SkillsUp Marketplace. All rights reserved.
                    </div>
                </div>
            </footer>

        </React.Fragment>
    );
};