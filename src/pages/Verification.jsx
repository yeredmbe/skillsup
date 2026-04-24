import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const TeacherRegistration = () => {
    const { t } = useTranslation();
    const [stage, setStage] = useState(0);
    const [animating, setAnimating] = useState(false);
    const trackRef = useRef(null);

    const goTo = (index) => {
        if (animating) return;
        setAnimating(true);
        setStage(index);
        setTimeout(() => setAnimating(false), 500);
    };

    return (
        <React.Fragment>
            <style>{`
                .reg-track {
                    display: flex;
                    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
                    will-change: transform;
                }
                .reg-stage {
                    min-width: 100%;
                    box-sizing: border-box;
                }
                .reg-overflow {
                    overflow: hidden;
                }
                .progress-fill {
                    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}</style>

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="flex h-full grow flex-col">

                    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 md:px-20 lg:px-40">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <h2 className="text-lg font-bold tracking-tight">{t('verification.joinFaculty')}</h2>
                        </div>
                        <div className="flex gap-4">
                            <LanguageSwitcher />
                            <button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 px-4 text-sm font-bold">
                                <span className="material-symbols-outlined mr-2">account_circle</span>
                                {t('verification.profile')}
                            </button>
                        </div>
                    </header>

                    <main className="flex-1 px-6 py-10 md:px-20 lg:px-40">
                        <div className="mx-auto max-w-[800px]">

                            <div className="mb-12 flex flex-col gap-4">
                                <div className="flex items-end justify-between">
                                    <div>
                                        {stage === 0 ? (
                                            <>
                                                <h1 className="text-3xl font-black tracking-tight md:text-4xl">{t('verification.createProfile')}</h1>
                                                <p className="mt-2 text-slate-500">{t('verification.fillDetails')}</p>
                                            </>
                                        ) : (
                                            <>
                                                <h1 className="text-3xl font-black tracking-tight md:text-4xl">{t('verification.stage2Title')}</h1>
                                                <p className="mt-2 text-slate-500">{t('verification.almostThere')}</p>
                                            </>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        {stage === 0 ? (
                                            <>
                                                <span className="text-sm font-bold uppercase tracking-wider text-primary">{t('verification.stage1of2')}</span>
                                                <p className="text-xs text-slate-400">{t('verification.nextDocumentation')}</p>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-sm font-bold uppercase tracking-wider text-primary">{t('verification.finalStep')}</span>
                                                <p className="text-xs text-slate-400">{t('verification.percentComplete')}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                                    <div
                                        className="progress-fill h-full bg-primary"
                                        style={{ width: stage === 0 ? '50%' : '90%' }}
                                    ></div>
                                </div>
                            </div>

                            <div className="reg-overflow">
                                <div
                                    ref={trackRef}
                                    className="reg-track"
                                    style={{ transform: `translateX(-${stage * 100}%)` }}
                                >

                                    {/* Stage 1 */}
                                    <div className="reg-stage">
                                        <form className="space-y-12">

                                            <section>
                                                <h2 className="mb-6 text-xl font-bold tracking-tight border-b border-slate-200 pb-2">{t('verification.profilePhoto')}</h2>
                                                <div className="flex flex-col items-center gap-6 sm:flex-row">
                                                    <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-slate-300 bg-slate-50">
                                                        <span className="material-symbols-outlined text-4xl text-slate-400">add_a_photo</span>
                                                        <div className="absolute inset-0 bg-cover bg-center hidden" data-alt="A professional headshot of a teacher" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzGS0-6_Cxe1xUVA2Q1qCjhDHUfhmrGUklQzBQS9nKZLuCG-L48wo00LeDI7lWkpowI4p36S39r3LFRzcSFfrsBra-SudYt20jTbGa6eFYUhXw3Kwfn2s2KkJqCBwHw8LHQ_o1RNwyWOFAE6DUgPt72iSSsDGD8Y1TEeK_jLNWvoJhQ1bXYi7abBXddiwgzbf55RaorHiE9xYvyhkA8hZ6iq_cAR-kEvGorwO1O-gaXwUbDe8MJQNuXe8T4YPMV3kSQuxhq1diJQ')` }}></div>
                                                    </div>
                                                    <div className="text-center sm:text-left">
                                                        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition hover:opacity-90" type="button">{t('verification.uploadPhoto')}</button>
                                                        <p className="mt-2 text-xs text-slate-500">{t('verification.photoHint')}</p>
                                                    </div>
                                                </div>
                                            </section>

                                            <section>
                                                <h2 className="mb-6 text-xl font-bold tracking-tight border-b border-slate-200 pb-2">{t('verification.introVideo')}</h2>
                                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
                                                    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
                                                        <div className="text-center flex flex-col items-center">
                                                            <span className="material-symbols-outlined text-4xl text-slate-400">videocam</span>
                                                            <p className="mt-2 text-xs text-slate-500">{t('verification.videoPlaceholder')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-4">
                                                        <div>
                                                            <p className="text-sm font-medium">{t('verification.uploadVideoDesc')}</p>
                                                            <p className="mt-1 text-xs text-slate-500 italic">{t('verification.chanceToShine')}</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <button className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:opacity-90" type="button">
                                                                <span className="material-symbols-outlined mr-2">upload_file</span>
                                                                {t('verification.selectVideo')}
                                                            </button>
                                                            <p className="text-center text-xs text-slate-500">{t('verification.videoHint')}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                                <h2 className="col-span-full text-xl font-bold tracking-tight border-b border-slate-200 pb-2">{t('verification.personalInfo')}</h2>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.firstName')}</label>
                                                    <input className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary" placeholder={t('verification.firstNamePlaceholder')} type="text" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.lastName')}</label>
                                                    <input className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary" placeholder={t('verification.lastNamePlaceholder')} type="text" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.phone')}</label>
                                                    <div className="flex">
                                                        <span className="inline-flex items-center rounded-l border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500">+1</span>
                                                        <input className="w-full rounded-r border-slate-300 focus:border-primary focus:ring-primary" placeholder="(555) 000-0000" type="tel" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.whatsapp')}</label>
                                                    <div className="flex">
                                                        <span className="inline-flex items-center rounded-l border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500">
                                                            <span className="material-symbols-outlined text-sm">link</span>
                                                        </span>
                                                        <input className="w-full rounded-r border-slate-300 focus:border-primary focus:ring-primary" placeholder="wa.me/number" type="url" />
                                                    </div>
                                                </div>
                                            </section>

                                            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                                <h2 className="col-span-full text-xl font-bold tracking-tight border-b border-slate-200 pb-2">{t('verification.academic')}</h2>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.lastDiploma')}</label>
                                                    <select className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary">
                                                        <option>{t('verification.bachelors')}</option>
                                                        <option>{t('verification.masters')}</option>
                                                        <option>{t('verification.phd')}</option>
                                                        <option>{t('verification.certificate')}</option>
                                                        <option>{t('verification.other')}</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.location')}</label>
                                                    <div className="relative">
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                                        </span>
                                                        <input className="w-full rounded border-slate-300 pl-10 focus:border-primary focus:ring-primary" data-location="New York City" placeholder={t('verification.cityCountry')} type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-span-full flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.aboutYou')}</label>
                                                    <textarea className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary" placeholder={t('verification.aboutPlaceholder')} rows="4"></textarea>
                                                </div>
                                                <div className="col-span-full flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.techniques')}</label>
                                                    <textarea className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary" placeholder={t('verification.techniquesPlaceholder')} rows="3"></textarea>
                                                </div>
                                            </section>

                                            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                                <h2 className="col-span-full text-xl font-bold tracking-tight border-b border-slate-200 pb-2">{t('verification.financials')}</h2>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.pricePerMonth')}</label>
                                                    <div className="flex">
                                                        <span className="inline-flex items-center rounded-l border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500">$</span>
                                                        <input className="w-full rounded-r border-slate-300 focus:border-primary focus:ring-primary" placeholder="200" type="number" />
                                                    </div>
                                                    <p className="text-xs text-slate-500">{t('verification.priceHint')}</p>
                                                </div>
                                            </section>

                                            <div className="flex flex-col-reverse gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:justify-between">
                                                <button className="rounded-lg bg-slate-100 px-8 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200" type="button">{t('verification.saveDraft')}</button>
                                                <button
                                                    className="rounded-lg bg-primary px-12 py-3 text-sm font-bold text-white transition hover:opacity-90"
                                                    type="button"
                                                    onClick={() => goTo(1)}
                                                >
                                                    {t('verification.nextStageDoc')}
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    {/* Stage 2 */}
                                    <div className="reg-stage">
                                        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                                            <div className="lg:col-span-5 space-y-10">
                                                <section>
                                                    <h3 className="text-3xl font-black mb-6 leading-tight">{t('verification.unlockPower')}</h3>
                                                    <p className="text-slate-600 mb-8 text-lg">{t('verification.regFeeDesc')}</p>
                                                    <div className="space-y-6">
                                                        <div className="flex items-start gap-4">
                                                            <div className="mt-1 bg-primary text-white rounded-full p-1 flex items-center justify-center shrink-0">
                                                                <span className="material-symbols-outlined text-sm">check</span>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-slate-900">{t('verification.prioritySearch')}</h4>
                                                                <p className="text-sm text-slate-600">{t('verification.prioritySearchDesc')}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-4">
                                                            <div className="mt-1 bg-primary text-white rounded-full p-1 flex items-center justify-center shrink-0">
                                                                <span className="material-symbols-outlined text-sm">check</span>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-slate-900">{t('verification.unlimitedInquiries')}</h4>
                                                                <p className="text-sm text-slate-600">{t('verification.unlimitedInquiriesDesc')}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-4">
                                                            <div className="mt-1 bg-primary text-white rounded-full p-1 flex items-center justify-center shrink-0">
                                                                <span className="material-symbols-outlined text-sm">check</span>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-slate-900">{t('verification.verifiedBadge')}</h4>
                                                                <p className="text-sm text-slate-600">{t('verification.verifiedBadgeDesc')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>

                                                <div className="pt-8 border-t border-slate-200">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <span className="material-symbols-outlined text-green-600">lock</span>
                                                        <span className="text-sm font-bold text-slate-900">{t('verification.secureTransaction')}</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-4 items-center">
                                                        <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center border border-slate-200">
                                                            <span className="text-[10px] font-black tracking-tighter">MTN</span>
                                                        </div>
                                                        <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center border border-slate-200">
                                                            <span className="text-[10px] font-black tracking-tighter">ORANGE</span>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-xs text-slate-500">{t('verification.secureDesc')}</p>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-7">
                                                <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden">

                                                    <div className="bg-slate-50 p-6 border-b border-slate-200">
                                                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">{t('verification.verificationSummary')}</h4>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-lg font-medium">{t('verification.oneTimeFee')}</span>
                                                            <span className="text-2xl font-black">3000 XAF</span>
                                                        </div>
                                                    </div>

                                                    <div className="p-8 space-y-6">
                                                        <div className="space-y-4">
                                                            <label className="text-sm font-bold text-slate-700">{t('verification.selectProvider')}</label>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <label className="relative flex flex-col items-center justify-center p-4 border-2 border-primary rounded-xl cursor-pointer hover:bg-slate-50 transition-all bg-slate-50">
                                                                    <input defaultChecked className="sr-only" name="provider" type="radio" value="mtn" />
                                                                    <span className="material-symbols-outlined text-3xl mb-2">smartphone</span>
                                                                    <span className="font-bold text-sm">{t('verification.momo')}</span>
                                                                    <div className="absolute top-2 right-2 h-4 w-4 rounded-full border-4 border-primary bg-primary"></div>
                                                                </label>
                                                                <label className="relative flex flex-col items-center justify-center p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-all">
                                                                    <input className="sr-only" name="provider" type="radio" value="orange" />
                                                                    <span className="material-symbols-outlined text-3xl mb-2">payments</span>
                                                                    <span className="font-bold text-sm">{t('verification.orangeMoney')}</span>
                                                                    <div className="absolute top-2 right-2 h-4 w-4 rounded-full border-2 border-slate-300"></div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="space-y-4">
                                                            <div className="space-y-2">
                                                                <label className="text-sm font-bold text-slate-700" htmlFor="phone-number">{t('verification.momoPhone')}</label>
                                                                <div className="relative">
                                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500">
                                                                        <span className="text-sm font-bold">+237</span>
                                                                    </div>
                                                                    <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-3 pl-14 pr-4 focus:ring-primary focus:border-primary transition-all outline-none" id="phone-number" placeholder="6XX XXX XXX" type="tel" />
                                                                </div>
                                                                <p className="text-[10px] text-slate-500">{t('verification.momoPhoneHint')}</p>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-sm font-bold text-slate-700" htmlFor="full-name">{t('verification.accountHolder')}</label>
                                                                <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary transition-all outline-none" id="full-name" placeholder="John Doe" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="pt-4 space-y-4">
                                                            <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                                                <span className="material-symbols-outlined text-xl">verified_user</span>
                                                                {t('verification.initiatePayment')}
                                                            </button>
                                                            <button className="w-full bg-white border border-slate-200 text-slate-600 font-bold py-4 rounded-lg hover:bg-slate-50 transition-all">
                                                                {t('verification.saveFinishLater')}
                                                            </button>
                                                        </div>
                                                        <div className="flex items-center gap-2 justify-center p-3 bg-slate-50 rounded-lg">
                                                            <span className="material-symbols-outlined text-slate-500 text-lg">info</span>
                                                            <p className="text-xs text-slate-500">{t('verification.promptInfo')}</p>
                                                        </div>
                                                        <p className="text-center text-xs text-slate-400 mt-6">
                                                            {t('verification.termsAgree')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col-reverse gap-4 border-t border-slate-200 pt-8 mt-12 sm:flex-row sm:justify-between">
                                            <button
                                                className="rounded-lg bg-slate-100 px-8 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
                                                type="button"
                                                onClick={() => goTo(0)}
                                            >
                                                {t('verification.back')}
                                            </button>
                                            <button className="rounded-lg bg-slate-100 px-8 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200" type="button">{t('verification.saveDraft')}</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </main>

                    <footer className="border-t border-slate-200 bg-white px-6 py-6 text-center text-xs text-slate-400">
                        {t('verification.footer')}
                    </footer>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TeacherRegistration;