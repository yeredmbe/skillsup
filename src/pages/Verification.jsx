import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useAction, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { uploadToCloudinary } from '../utils/cloudinaryUpload';
import { useNavigate } from 'react-router-dom';

export const TeacherRegistration = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [stage, setStage] = useState(0);
    const [animating, setAnimating] = useState(false);
    const trackRef = useRef(null);
    const [isSelected, setIsSelected] = useState("MTN");

    // Convex Mutations and Actions
    const upsertProfile = useMutation(api.teachers.upsertProfile);
    const submitForApproval = useMutation(api.teachers.submitForApproval);
    const getUploadSignature = useAction(api.cloudinary.getUploadSignature);
    const processPayment = useAction(api.payment.processToumkapPayment);

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        whatsappUrl: '',
        lastDiploma: 'Bachelor\'s Degree',
        location: '',
        bio: '',
        techniques: '',
        monthlyRate: ''
    });

    // File State
    const [files, setFiles] = useState({
        profilePhoto: null,
        coverPhoto: null,
        introVideo: null,
        diploma: null
    });

    // UI State
    const [isUploading, setIsUploading] = useState(false);
    const [isPaying, setIsPaying] = useState(false);
    const [momoPhone, setMomoPhone] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, type) => {
        if (e.target.files && e.target.files[0]) {
            setFiles(prev => ({ ...prev, [type]: e.target.files[0] }));
        }
    };

    const goTo = (index) => {
        if (animating) return;
        setAnimating(true);
        setStage(index);
        setTimeout(() => setAnimating(false), 500);
    };

    const handleStage1Submit = async () => {
        try {
            setIsUploading(true);
            setErrorMsg('');

            let profileUrl, coverUrl, videoUrl, diplomaUrl;

            if (files.profilePhoto) {
                profileUrl = await uploadToCloudinary(files.profilePhoto, 'image', getUploadSignature);
            }
            if (files.coverPhoto) {
                coverUrl = await uploadToCloudinary(files.coverPhoto, 'image', getUploadSignature);
            }
            if (files.introVideo) {
                videoUrl = await uploadToCloudinary(files.introVideo, 'video', getUploadSignature);
            }
            if (files.diploma) {
                diplomaUrl = await uploadToCloudinary(files.diploma, 'auto', getUploadSignature);
            }

            await upsertProfile({
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                whatsappUrl: formData.whatsappUrl,
                location: formData.location,
                lastDiploma: formData.lastDiploma,
                bio: formData.bio,
                subjects: formData.techniques ? formData.techniques.split(',').map(s => s.trim()) : [],
                monthlyRate: Number(formData.monthlyRate) || 0,
                profilePicture: profileUrl,
                coverPicture: coverUrl,
                profileVideo: videoUrl,
                diplomaPicture: diplomaUrl,
            });

            setIsUploading(false);
            goTo(1);
        } catch (err) {
            console.error(err);
            const userMsg = err.data || err.message || "An error occurred.";
            setErrorMsg("Failed to save profile. " + userMsg);
            setIsUploading(false);
        }
    };

    const handlePaymentSubmit = async () => {
        if (!momoPhone) {
            setErrorMsg("Please enter your Mobile Money phone number.");
            return;
        }

        try {
            setIsPaying(true);
            setErrorMsg('');

            const paymentResult = await processPayment({
                phoneNumber: momoPhone,
                amount: parseFloat(import.meta.env.VITE_TEACHER_VERIFICATION_FEE)
            });

            if (!paymentResult || !paymentResult.success) {
                setErrorMsg("Payment was not completed. Please try again.");
                setIsPaying(false);
                return;
            }

            await submitForApproval();
            alert("Payment successful and profile submitted for approval!");
            navigate('/profile/me');

        } catch (err) {
            console.error(err);
            setErrorMsg("Payment failed: " + (err.message || "Please try again."));
            setIsPaying(false);
        }
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

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden mt-15">
                <div className="flex h-full grow flex-col">

                    <main className="flex-1 px-6 py-10 md:px-20 lg:px-40">
                        <div className="mx-auto max-w-[800px]">

                            {errorMsg && (
                                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg text-sm font-bold">
                                    {errorMsg}
                                </div>
                            )}

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
                                                <div className="flex flex-col gap-8">

                                                    {/* Profile Photo */}
                                                    <div className="flex flex-col items-center gap-6 sm:flex-row">
                                                        <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-slate-300 bg-slate-50 shrink-0">
                                                            {files.profilePhoto ? (
                                                                <img src={URL.createObjectURL(files.profilePhoto)} className="w-full h-full object-cover" alt="preview" />
                                                            ) : (
                                                                <span className="material-symbols-outlined text-4xl text-slate-400">add_a_photo</span>
                                                            )}
                                                        </div>
                                                        <div className="text-center sm:text-left">
                                                            <p className="text-sm font-semibold text-slate-700 mb-2">{t('verification.profilePhoto')}</p>
                                                            <label className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition hover:opacity-90 inline-block">
                                                                {t('verification.uploadPhoto')}
                                                                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, 'profilePhoto')} />
                                                            </label>
                                                            <p className="mt-2 text-xs text-slate-500">{t('verification.photoHint')}</p>
                                                        </div>
                                                    </div>

                                                    {/* Cover Picture */}
                                                    <div className="flex flex-col items-center gap-6 sm:flex-row">
                                                        <div className="relative flex h-32 w-52 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 shrink-0">
                                                            {files.coverPhoto ? (
                                                                <img src={URL.createObjectURL(files.coverPhoto)} className="w-full h-full object-cover" alt="cover preview" />
                                                            ) : (
                                                                <span className="material-symbols-outlined text-4xl text-slate-400">image</span>
                                                            )}
                                                        </div>
                                                        <div className="text-center sm:text-left">
                                                            <p className="text-sm font-semibold text-slate-700 mb-2">Cover Picture</p>
                                                            <label className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition hover:opacity-90 inline-block">
                                                                Upload Cover
                                                                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, 'coverPhoto')} />
                                                            </label>
                                                            <p className="mt-2 text-xs text-slate-500">Recommended: 1200×400px. JPG or PNG.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </section>

                                            <section>
                                                <h2 className="mb-6 text-xl font-bold tracking-tight border-b border-slate-200 pb-2">{t('verification.introVideo')}</h2>
                                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
                                                    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
                                                        <div className="text-center flex flex-col items-center">
                                                            <span className="material-symbols-outlined text-4xl text-slate-400">videocam</span>
                                                            <p className="mt-2 text-xs text-slate-500">{files.introVideo ? files.introVideo.name : t('verification.videoPlaceholder')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-4">
                                                        <div>
                                                            <p className="text-sm font-medium">{t('verification.uploadVideoDesc')}</p>
                                                            <p className="mt-1 text-xs text-slate-500 italic">{t('verification.chanceToShine')}</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer">
                                                                <span className="material-symbols-outlined mr-2">upload_file</span>
                                                                {t('verification.selectVideo')}
                                                                <input type="file" accept="video/*" className="hidden" onChange={(e) => handleFileChange(e, 'introVideo')} />
                                                            </label>
                                                            <p className="text-center text-xs text-slate-500">{t('verification.videoHint')}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                                <h2 className="col-span-full text-xl font-bold tracking-tight border-b border-slate-200 pb-2">{t('verification.personalInfo')}</h2>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.firstName')}</label>
                                                    <input name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary" placeholder={t('verification.firstNamePlaceholder')} type="text" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.lastName')}</label>
                                                    <input name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary" placeholder={t('verification.lastNamePlaceholder')} type="text" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.phone')}</label>
                                                    <div className="flex">
                                                        <span className="inline-flex items-center rounded-l border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500">+237</span>
                                                        <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full rounded-r border-slate-300 focus:border-primary focus:ring-primary" placeholder="6XX XXX XXX" type="tel" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.whatsapp')}</label>
                                                    <div className="flex">
                                                        <span className="inline-flex items-center rounded-l border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500">
                                                            <span className="material-symbols-outlined text-sm">link</span>
                                                        </span>
                                                        <input name="whatsappUrl" value={formData.whatsappUrl} onChange={handleInputChange} className="w-full rounded-r border-slate-300 focus:border-primary focus:ring-primary" placeholder="wa.me/number" type="url" />
                                                    </div>
                                                </div>
                                            </section>

                                            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                                <h2 className="col-span-full text-xl font-bold tracking-tight border-b border-slate-200 pb-2">{t('verification.academic')}</h2>

                                                <div className="col-span-full flex flex-col gap-4 border border-slate-200 p-4 rounded-lg bg-slate-50">
                                                    <label className="text-sm font-bold">Upload Diploma PDF/Image</label>
                                                    <label className="flex w-full md:w-1/2 items-center justify-center rounded-lg bg-white border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 cursor-pointer">
                                                        <span className="material-symbols-outlined mr-2">upload_file</span>
                                                        {files.diploma ? files.diploma.name : "Select Diploma File"}
                                                        <input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => handleFileChange(e, 'diploma')} />
                                                    </label>
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.lastDiploma')}</label>
                                                    <select name="lastDiploma" value={formData.lastDiploma} onChange={handleInputChange} className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary">
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
                                                        <input name="location" value={formData.location} onChange={handleInputChange} className="w-full rounded border-slate-300 pl-10 focus:border-primary focus:ring-primary" placeholder={t('verification.cityCountry')} type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-span-full flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.aboutYou')}</label>
                                                    <textarea name="bio" value={formData.bio} onChange={handleInputChange} className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary" placeholder={t('verification.aboutPlaceholder')} rows="4"></textarea>
                                                </div>
                                                <div className="col-span-full flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.techniques')} (Comma separated subjects)</label>
                                                    <textarea name="techniques" value={formData.techniques} onChange={handleInputChange} className="w-full rounded border-slate-300 focus:border-primary focus:ring-primary" placeholder="Math, Physics, English" rows="3"></textarea>
                                                </div>
                                            </section>

                                            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                                <h2 className="col-span-full text-xl font-bold tracking-tight border-b border-slate-200 pb-2">{t('verification.financials')}</h2>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold">{t('verification.pricePerMonth')}</label>
                                                    <div className="flex">
                                                        <span className="inline-flex items-center rounded-l border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500">XAF</span>
                                                        <input name="monthlyRate" value={formData.monthlyRate} onChange={handleInputChange} className="w-full rounded-r border-slate-300 focus:border-primary focus:ring-primary" placeholder="20000" type="number" />
                                                    </div>
                                                    <p className="text-xs text-slate-500">{t('verification.priceHint')}</p>
                                                </div>
                                            </section>

                                            <div className="flex flex-col-reverse gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:justify-between">
                                                <button className="rounded-lg bg-slate-100 px-8 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200" type="button">{t('verification.saveDraft')}</button>
                                                <button
                                                    className="rounded-lg bg-primary px-12 py-3 text-sm font-bold text-white transition hover:opacity-90 flex items-center justify-center gap-2"
                                                    type="button"
                                                    onClick={handleStage1Submit}
                                                    disabled={isUploading}
                                                >
                                                    {isUploading ? <span className="animate-spin material-symbols-outlined">refresh</span> : t('verification.nextStageDoc')}
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
                                                                <label onClick={() => setIsSelected("MTN")} className={`relative flex flex-col items-center justify-center p-4 border-2 ${isSelected === "MTN" ? "border-primary" : "border-slate-200"} rounded-xl cursor-pointer hover:bg-slate-50 transition-all bg-slate-50`}>
                                                                    <input
                                                                        className="sr-only"
                                                                        name="provider"
                                                                        type="radio"
                                                                        value="mtn"
                                                                        checked={isSelected === "MTN"}
                                                                        onChange={() => setIsSelected("MTN")}
                                                                    />
                                                                    <span className="material-symbols-outlined text-3xl mb-2">smartphone</span>
                                                                    <span className="font-bold text-sm">{t('verification.momo')}</span>
                                                                    <div className={`absolute top-2 right-2 h-4 w-4 rounded-full border-2 transition-all ${isSelected === "MTN" ? "border-4 border-primary bg-primary" : "border-slate-300"}`}></div>
                                                                </label>

                                                                <label onClick={() => setIsSelected("ORANGE")} className={`relative flex flex-col items-center justify-center p-4 border-2 ${isSelected === "ORANGE" ? "border-primary" : "border-slate-200"} rounded-xl cursor-pointer hover:bg-slate-50 transition-all bg-slate-50`}>
                                                                    <input
                                                                        className="sr-only"
                                                                        name="provider"
                                                                        type="radio"
                                                                        value="orange"
                                                                        checked={isSelected === "ORANGE"}
                                                                        onChange={() => setIsSelected("ORANGE")}
                                                                    />
                                                                    <span className="material-symbols-outlined text-3xl mb-2">payments</span>
                                                                    <span className="font-bold text-sm">{t('verification.orangeMoney')}</span>
                                                                    <div className={`absolute top-2 right-2 h-4 w-4 rounded-full border-2 transition-all ${isSelected === "ORANGE" ? "border-4 border-primary bg-primary" : "border-slate-300"}`}></div>
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
                                                                    <input
                                                                        className="w-full bg-slate-50 border-slate-200 rounded-lg py-3 pl-14 pr-4 focus:ring-primary focus:border-primary transition-all outline-none"
                                                                        id="phone-number" placeholder="6XX XXX XXX" type="tel"
                                                                        value={momoPhone}
                                                                        onChange={(e) => setMomoPhone(e.target.value)}
                                                                    />
                                                                </div>
                                                                <p className="text-[10px] text-slate-500">{t('verification.momoPhoneHint')}</p>
                                                            </div>
                                                        </div>
                                                        <div className="pt-4 space-y-4">
                                                            <button
                                                                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                                                                onClick={handlePaymentSubmit}
                                                                disabled={isPaying}
                                                            >
                                                                {isPaying ? <span className="animate-spin material-symbols-outlined">refresh</span> : <span className="material-symbols-outlined text-xl">verified_user</span>}
                                                                {isPaying ? 'Processing...' : t('verification.initiatePayment')}
                                                            </button>
                                                        </div>
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
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TeacherRegistration;