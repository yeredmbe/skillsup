import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

export const Landing = () => {
    const { t } = useTranslation();
    const scrollContainerRef = useRef(null);
    const topTeachers = useQuery(api.teachers.searchTeachers, { sortByStars: true }) || [];

    const dummyTeachers = [
        {
            isDummy: true,
            dummyImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuZ6WKQryFRa241nUU48bqH9KAXwp34ru-BYB7XSyu0g_0YkbGNIdD5OcWipBgh9pjOXb7ADp5zV5nxBJtWNLLoLt0QAAZFPC0_MRygJiU31jBebBDE7pdgrB-Rsw5Nmc1MMtzfH3sujhNc3BrqgiCfid9yrZmhZwpf2Pgjpdt-PN0UgHlGYZc-ICyPnWg6_OV5nqvYrMJ6zFfWldfCZxhXjzHxw2otvi_gq_xhR32y6dJsvEZb6K-TNjtgFpC-tw1CC9iU07l7Q",
            dummyRating: "4.9",
            dummyName: "Dr. Elena Rodriguez",
            dummySubject: t('landing.advancedMath'),
            dummyRate: 45,
            dummyTags: [t('landing.calculus'), t('landing.satPrep')],
            dummyQuote: t('landing.elenaQuote')
        },
        {
            isDummy: true,
            dummyImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIce5Waypkfvg8SHcNB7RIDfetKr6oTd1oeql5zY4u6Dlrnhqas_xsc11V9liTfG99_1r3Z6gXksHKU9YE2rmIsnae8leZREAK-23BQxciC2ZUNAg1zbzNNkcG2xpFvZFOR5-SlmxzENzN9-4ZkG9UosXitwWFToDtUllYHZUIVTHm3R2MFI8lVGx3Dgf2fpCLlonJWMyngLZXT9UJZqk8xSnF58Uu9_HmXz0vkCQImAqJ7TdXip2btJd5HIBe8Sw7K68Tk3gI9w",
            dummyRating: "5.0",
            dummyName: "James Wilson",
            dummySubject: t('landing.pianoMusic'),
            dummyRate: 60,
            dummyTags: [t('landing.classical'), t('landing.beginners')],
            dummyQuote: t('landing.jamesQuote')
        },
        {
            isDummy: true,
            dummyImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy1PINSEYl6bm3T9uHYTMTx7f3nNAhrNZh0w61ub2Lu1d_Ya-r4NSV1VxmAyDfaUT5pNrYbOCNjoellUS9GYoIC_oFixPY6g4FZ1a0TraS6rGMSSeiDXg6v7IR81wIg4lOB-fgSG8rsZFPQIh4DJ1vu9cfuBKEsRUgrYGHTvMGDpukdTsHkxnsWb89juDIsFGld6zVDNHxU7p4kZwPPSUrRRFobt4xlu7QJNpERV6t1UxWtLFcDr4miU6EtOrwpeys4947kyaGyg",
            dummyRating: "4.8",
            dummyName: "Sarah Jenkins",
            dummySubject: t('landing.creativeWriting'),
            dummyRate: 40,
            dummyTags: [t('landing.english'), t('landing.essays')],
            dummyQuote: t('landing.sarahQuote')
        },
        {
            isDummy: true,
            dummyImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc3T27sNY2O7f0MKI4drAivpkZkiHpfXHJCqJBIFwYeuDSy7FwBZew39npJQDlWKvN4m2fg05U6vjfeA0vVtfI4GfaoMCBaEIdKn4lKbsU4UBKbg35NBevUYWcZQHD_jV0owp8YtHXDTsX-JE1FVg25W_AwavMlwtpjAq62vLDKs3Af1J81_-mgri18Dbv17hDP-_yhmyLs3Ptlj6_i7gxtxNz7qXMTRBufDYHtlWx9cKZRIU3xnt1dxFZ5Hx1EbHdBDNj4JQXZg",
            dummyRating: "4.7",
            dummyName: "Michael Chen",
            dummySubject: t('landing.computerScience'),
            dummyRate: 55,
            dummyTags: [t('landing.python'), t('landing.algorithms')],
            dummyQuote: t('landing.michaelQuote')
        }
    ];

    const displayTeachers = topTeachers.length > 0 ? topTeachers.slice(0, 8) : dummyTeachers;

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative flex min-h-screen flex-col mt-4">

            <header className="relative overflow-hidden bg-white pt-16 pb-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold tracking-wide uppercase text-slate-600">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            {t('landing.trustedBy')}
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-primary">
                            {t('landing.heroTitle1')} <span className="underline decoration-4 underline-offset-8">{t('landing.heroTitleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            {t('landing.heroSubtitle')}
                        </p>

                        <div className="p-2 bg-slate-100 rounded-xl max-w-xl">
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="flex-1 relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                    <input className="w-full pl-10 pr-4 py-4 rounded-lg border-none focus:ring-2 focus:ring-primary text-sm font-medium" placeholder={t('landing.searchPlaceholder')} type="text" />
                                </div>
                                <div className="md:w-40 relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                                    <input className="w-full pl-10 pr-4 py-4 rounded-lg border-none focus:ring-2 focus:ring-primary text-sm font-medium" placeholder={t('landing.cityPlaceholder')} type="text" />
                                </div>
                                <button className="bg-primary text-white font-bold py-4 px-8 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    {t('landing.searchBtn')}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-3">
                                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Female student portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWjGW8AW-7EcBOLr4zH7z_8fiy0N62SjlNiy_a55vmZK_3ZUSJwp6SsoOZGAFX9TGuvxsYsYX5umSzOZBVSaU2bIBDea57Kl_pJ7-OOCMJQtsy6hWaDOxYMvhRxJVSy7Kl0Gb8n2vb8pxVFAnZQAY61VzCmTp6bis9K5F2Z8ufoIajlQWrOBMVpg_07VF_2UIubC9ni60P4HL_AFLdyr5W77WyAPauWC3nRjqse_28o41qFciz5pN6o_bllgv07DqCgkgJ78ajRg" />
                                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Male student portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVNEb1QD2ues_LyRPcrnmevS80ANN8uSnJM_0bDZHfYySYhUL_ecdRS0O5fI-uOjCNK3m6XFupeLOwgBYKjh-xKfLYTCFebMzwDSnECrI14DB--fjn72Zleu84PvpqMESHpmm3IaGfLJubOKyQE21qIpTT-0jxS1QzpB2m6mfM-VWzD-upAcdK86DNGjRkg3w_mhrji5MFnM1iFZn3zKydDzwBL1U2CCpcDrQdujeRrC1Lq57adaneKWNcc9nn5zM5UVXNZ4iu5A" />
                                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Smiling student profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcLXsV4YQ5rmEvuf2b-be3HjmH9YRUZkh79XGT4xV6WrpclCnmphodrqN227-Wn0AxNtzMp4j-5xtzsEyEgwdjMHY5Pg_pEhCPECwJdj7ulzTr4QTt0qr003vCWPoGaiagLvmk8_kVanxQKEW0E-KfFQSRa8HzcVDwC3-2JRa1iCxhVytD_BjoWOLxzEpswHkOkTcmq48uDDLpMtsxGA-8Apm9RyqXqiVmFePittY5GPzn0jhQxG5O-Wo2Qvt_QXr6uETqDNV06w" />
                                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">+2k</div>
                            </div>
                            <p className="text-sm text-slate-500 font-medium">{t('landing.communityText')}</p>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-primary/5 rounded-[2rem] -rotate-3"></div>
                        <img className="relative rounded-[2rem] object-cover aspect-[4/5] shadow-2xl" data-alt="Teacher and student studying together at home" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEX6arzhtbp7KPGSSaOmYm-86D1wLVrC-3WOxcXNlUgDmdHZ6UiFZF4N6903ZOizeo1HJAHKqpF_VAEtdQkPUzYd2hBnk_FgCvxyiiVyfNohBOk0zXHM2n0WJD5HTrKAoe7-rzbdxvUgCsF4mCrGx0mqH-63teQfdKPjA6OxGO-JwfqoW9XyFJaK90Txqjx-3fSpfYtu4Befn-NObLyPFYYXn77gsWXPwv1V-8mRjEn-OCzd7iXUE2JYTLXUBw_fLVkgbU-xlRPQ" />
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                            <div className="bg-green-100 text-green-600 p-2 rounded-full">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">{t('landing.verifiedTutors')}</p>
                                <p className="text-sm text-slate-500">{t('landing.verifiedTutorsSub')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24 bg-slate-50 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary mb-4 tracking-tight">{t('landing.simpleEfficient')}</h2>
                        <div className="flex justify-center gap-4 mt-8">
                            <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-bold">{t('landing.forStudents')}</button>
                            <button className="px-6 py-2 rounded-full bg-white text-slate-600 border border-slate-200 text-sm font-bold hover:bg-slate-100 transition-colors">{t('landing.forTeachers')}</button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">manage_search</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('landing.findExpert')}</h3>
                            <p className="text-slate-500 leading-relaxed">{t('landing.findExpertDesc')}</p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">event_available</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('landing.bookTeacher')}</h3>
                            <p className="text-slate-500 leading-relaxed">{t('landing.bookTeacherDesc')}</p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">menu_book</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('landing.startLearning')}</h3>
                            <p className="text-slate-500 leading-relaxed">{t('landing.startLearningDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-4xl font-black text-primary tracking-tight">{t('landing.topRated')}</h2>
                            <p className="text-slate-500 mt-2">{t('landing.highlyQualified')}</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar scroll-smooth">
                        {displayTeachers.map((teacher, index) => {
                            const isDummy = teacher.isDummy;
                            const rating = teacher.ratingCount ? (teacher.starCount / teacher.ratingCount).toFixed(1) : teacher.dummyRating || 'New';

                            return (
                                <div key={teacher._id || index} className="min-w-[320px] sm:w-1/3 snap-start bg-white rounded-2xl border border-slate-100 p-5 group hover:border-primary transition-all shadow-sm">
                                    <div className="relative mb-4">
                                        <img className="w-full aspect-[4/3] object-cover rounded-xl" alt="Teacher Portrait" src={teacher.profilePicture || teacher.dummyImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuCuZ6WKQryFRa241nUU48bqH9KAXwp34ru-BYB7XSyu0g_0YkbGNIdD5OcWipBgh9pjOXb7ADp5zV5nxBJtWNLLoLt0QAAZFPC0_MRygJiU31jBebBDE7pdgrB-Rsw5Nmc1MMtzfH3sujhNc3BrqgiCfid9yrZmhZwpf2Pgjpdt-PN0UgHlGYZc-ICyPnWg6_OV5nqvYrMJ6zFfWldfCZxhXjzHxw2otvi_gq_xhR32y6dJsvEZb6K-TNjtgFpC-tw1CC9iU07l7Q"} />
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                                            <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
                                            <span className="text-xs font-bold">{rating}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-lg">{teacher.userName || teacher.dummyName}</h4>
                                                <p className="text-sm text-slate-500 line-clamp-1">{teacher.subjects?.join(', ') || teacher.dummySubject}</p>
                                            </div>
                                            <p className="font-black text-primary">{teacher.monthlyRate || teacher.dummyRate} XAF/hr</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {(teacher.subjects || teacher.dummyTags).slice(0, 2).map((sub, i) => (
                                                <span key={i} className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded uppercase">{sub}</span>
                                            ))}
                                        </div>
                                        <p className="text-sm text-slate-600 line-clamp-2 italic">{teacher.bio || teacher.dummyQuote}</p>
                                        {isDummy ? (
                                            <button disabled className="block w-full py-3 bg-slate-50 text-slate-400 rounded-xl text-sm font-bold mt-2 text-center cursor-not-allowed">
                                                {t('landing.viewProfile')}
                                            </button>
                                        ) : (
                                            <Link to={`/profile/${teacher._id}`} className="block w-full py-3 bg-slate-100 group-hover:bg-primary group-hover:text-white rounded-xl text-sm font-bold transition-colors mt-2 text-center">
                                                {t('landing.viewProfile')}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-20 bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">{t('landing.readyToStart')}</h2>
                    <p className="text-lg text-slate-400">{t('landing.joinThousands')}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/teachers" className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors">{t('landing.findTeacherBtn')}</Link>
                        <Link to="/verify" className="w-full sm:w-auto px-10 py-4 border border-white/20 font-bold rounded-xl hover:bg-white/10 transition-colors">{t('landing.becomeTutorBtn')}</Link>
                    </div>
                </div>
            </section>

        </div>
    );
};