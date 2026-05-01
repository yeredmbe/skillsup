import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

export const TeacherProfile = () => {
    const { id } = useParams();
    const me = useQuery(api.users.getMe);
    const isAdmin = me !== undefined && me !== null && me.role === 'admin';
    const isMe = id === 'me';

    // Fetch the correct profile based on role using Convex's "skip" functionality
    const myProfile = useQuery(api.teachers.getMyProfile, isMe ? undefined : "skip");
    const publicProfile = useQuery(api.teachers.getTeacherProfile, !isMe && me !== undefined && !isAdmin ? { profileId: id } : "skip");
    const adminProfile = useQuery(api.admin.adminGetTeacherProfile, !isMe && isAdmin ? { profileId: id } : "skip");

    const profile = isMe ? myProfile : (isAdmin ? adminProfile : publicProfile);

    if (me === undefined || profile === undefined) return <div className="mt-24 text-center py-20"><div className="animate-spin size-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div></div>;
    if (profile === null) return <div className="mt-24 text-center py-20"><p className="text-xl font-bold text-slate-500">Teacher not found or not approved.</p></div>;

    if (!isMe && isAdmin) {
        return <AdminTeacherProfileView profile={profile} id={profile._id} />;
    }

    return <GuestTeacherProfileView profile={profile} id={profile._id} isMe={isMe} me={me} />;
};

// ==============================================================
// 1. ADMIN REVIEW VIEW (Based on the second image provided)
// ==============================================================
const AdminTeacherProfileView = ({ profile, id }) => {
    const navigate = useNavigate();
    const [adminNotes, setAdminNotes] = useState('');

    const approveTeacher = useMutation(api.admin.approveTeacher);
    const rejectTeacher = useMutation(api.admin.rejectTeacher);

    const handleApprove = async () => {
        if (window.confirm('Approve this profile?')) {
            await approveTeacher({ profileId: id });
            navigate('/admin');
        }
    };

    const handleReject = async () => {
        const reason = window.prompt('Reason for rejection:', adminNotes || 'Does not meet requirements.');
        if (reason !== null) {
            await rejectTeacher({ profileId: id, reason });
            navigate('/admin');
        }
    };

    return (
        <main className="max-w-6xl mx-auto px-6 py-12 mt-16 font-sans">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
                <span className="material-symbols-outlined text-[14px]">grid_view</span> Dashboard
                <span>/</span> Applications
                <span className="text-slate-900">/ Review Profile</span>
            </div>

            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded">Stage 1</span>
                        {profile.status === 'pending' && <span className="flex items-center gap-1.5 text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded"><span className="size-1.5 bg-amber-500 rounded-full"></span> Pending Review</span>}
                        {profile.status === 'approved' && <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded"><span className="size-1.5 bg-emerald-500 rounded-full"></span> Approved</span>}
                        {profile.status === 'rejected' && <span className="flex items-center gap-1.5 text-[11px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded"><span className="size-1.5 bg-rose-500 rounded-full"></span> Rejected</span>}
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-2">{profile.userName}</h1>
                    <p className="text-slate-500 font-medium">Applied on {new Date(profile.createdAt).toLocaleDateString()} • {profile.subjects.join(', ')} Specialist</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">share</span> Share Profile
                    </button>
                    <a href={`mailto:${profile.userEmail}`} className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">send</span> Contact
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                    {/* Beige Profile Card */}
                    <div className="bg-[#e9e3d3] rounded-2xl p-6 flex flex-col items-center text-center">
                        <div className="size-48 bg-white/50 rounded-xl mb-4 overflow-hidden shadow-inner border border-white/20">
                            {profile.profilePicture ? (
                                <img src={profile.profilePicture} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-5xl font-black text-black/10">{profile.userName?.charAt(0)}</div>
                            )}
                        </div>
                        <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-black/40">Teacher Profile</h3>
                        <p className="text-[8px] uppercase tracking-widest text-black/30 mt-1">SkillsUp Network</p>
                    </div>

                    {/* Personal Details */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-6">Personal Details</h4>
                        <div className="space-y-5">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-slate-400">mail</span>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Email Address</p>
                                    <p className="text-sm font-bold text-slate-900 mt-0.5">{profile.userEmail}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-slate-400">call</span>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Phone Number</p>
                                    <p className="text-sm font-bold text-slate-900 mt-0.5">{profile.phone}</p>
                                </div>
                            </div>
                        </div>

                        {profile.whatsappUrl && (
                            <a href={profile.whatsappUrl.startsWith('http') ? profile.whatsappUrl : `https://${profile.whatsappUrl}`} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-bold hover:bg-emerald-100 transition-colors">
                                <span className="material-symbols-outlined">forum</span> Message via WhatsApp
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Introduction Video */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="text-lg font-black tracking-tight flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-xl">smart_display</span> Introduction Video
                        </h4>
                        <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                            {profile.profileVideo ? (
                                <video controls className="w-full h-full object-contain bg-black">
                                    <source src={profile.profileVideo} type="video/mp4" />
                                </video>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                                    <span className="material-symbols-outlined text-4xl mb-2">videocam_off</span>
                                    <p className="font-medium text-sm">No video provided</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Academic & Professional */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="text-lg font-black tracking-tight flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-xl">school</span> Academic & Professional
                        </h4>

                        <div className="mb-8">
                            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-3">Last Diploma Obtained</p>
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="size-10 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-slate-400">workspace_premium</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{profile.lastDiploma}</p>
                                    </div>
                                </div>
                                {profile.diplomaPicture && (
                                    <a href={profile.diplomaPicture} target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-widest hover:underline">View File</a>
                                )}
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-3">Profile Biography</p>
                            <p className="text-sm text-slate-600 leading-relaxed italic border-l-2 border-slate-200 pl-4">{profile.bio || "No biography provided."}</p>
                        </div>
                    </div>

                    {/* Teaching Methodology */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-8">
                        <div className="flex-1">
                            <h4 className="text-lg font-black tracking-tight flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-xl">auto_awesome</span> Teaching Methodology
                            </h4>
                            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-3">Techniques & Skills</p>
                            <div className="flex flex-wrap gap-2">
                                {profile.subjects.map(s => <span key={s} className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-md">{s}</span>)}
                            </div>
                        </div>
                        <div className="bg-slate-900 text-white rounded-xl p-6 sm:w-64 shrink-0 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden">
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-2 relative z-10">Pricing Model</p>
                            <h3 className="text-4xl font-black relative z-10">{profile.monthlyRate} <span className="text-lg font-bold text-white/70">XAF</span></h3>
                            <p className="text-xs font-medium text-white/70 mt-1 relative z-10">Per Month</p>
                            <div className="absolute -right-10 -bottom-10 size-32 bg-white/5 rounded-full blur-xl"></div>
                        </div>
                    </div>

                    {/* Internal Admin Notes */}
                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 border-dashed relative">
                        <h4 className="text-lg font-black tracking-tight flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-xl">edit_document</span> Internal Admin Notes
                        </h4>
                        <textarea
                            value={adminNotes}
                            onChange={e => setAdminNotes(e.target.value)}
                            placeholder="Add a private note about this application for other administrators..."
                            className="w-full bg-white border border-slate-200 rounded-xl p-4 text-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none min-h-[120px] resize-y"
                        ></textarea>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                Status: <span className="text-slate-900">READY FOR DECISION</span>
                            </div>
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <button onClick={handleReject} className="flex-1 sm:flex-none px-6 py-3 text-sm font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors">Reject</button>
                                <button className="flex-1 sm:flex-none px-6 py-3 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 text-sm font-bold rounded-xl shadow-sm transition-colors">Request Changes</button>
                                <button onClick={handleApprove} className="flex-1 sm:flex-none px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 text-sm font-bold rounded-xl shadow-lg transition-colors">APPROVE PROFILE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 text-center text-[10px] font-black uppercase tracking-widest text-slate-300">
                SkillsUp Platform Management • {new Date().getFullYear()}
            </div>
        </main>
    );
};


// ==============================================================
// 2. PUBLIC GUEST VIEW (The original implementation)
// ==============================================================
const GuestTeacherProfileView = ({ profile, id, isMe, me }) => {
    const ratings = useQuery(api.ratings.getRatings, { teacherProfileId: id });
    const rateTeacher = useMutation(api.ratings.rateTeacher);

    const [ratingStars, setRatingStars] = useState(5);
    const [ratingComment, setRatingComment] = useState('');
    const [isSubmittingRating, setIsSubmittingRating] = useState(false);

    const handleRatingSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsSubmittingRating(true);
            await rateTeacher({
                teacherProfileId: id,
                stars: ratingStars,
                comment: ratingComment
            });
            setRatingComment('');
            alert('Thank you for rating!');
        } catch (error) {
            alert('Failed to rate: ' + error.message);
        } finally {
            setIsSubmittingRating(false);
        }
    };

    return (
        <main className="max-w-5xl mx-auto pb-12 mt-20 px-4 md:px-0">
            {isMe && (
                <div className={`mb-6 p-4 rounded-xl border ${profile.status === 'pending' ? 'bg-amber-50 border-amber-200 text-amber-800' : profile.status === 'approved' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : profile.status === 'rejected' ? 'bg-rose-50 border-rose-200 text-rose-800' : 'bg-slate-50 border-slate-200'} flex items-center gap-3`}>
                    <span className="material-symbols-outlined font-bold">
                        {profile.status === 'pending' ? 'hourglass_empty' : profile.status === 'approved' ? 'check_circle' : profile.status === 'rejected' ? 'cancel' : 'info'}
                    </span>
                    <div>
                        <p className="font-bold">Application Status: <span className="uppercase">{profile.status}</span></p>
                        <p className="text-sm opacity-80 mt-1">
                            {profile.status === 'pending' && "Your profile is under review by our administrators. We will notify you once a decision is made."}
                            {profile.status === 'approved' && "Your profile is live and visible to students!"}
                            {profile.status === 'rejected' && "Your application was not approved. Please contact support for more details."}
                            {profile.status === 'draft' && "Your profile is incomplete. Please finish the verification process."}
                        </p>
                    </div>
                </div>
            )}
            <div className="bg-white shadow-sm overflow-hidden md:rounded-xl border border-slate-200">
                <div className="relative h-48 md:h-80 w-full bg-slate-200">
                    {profile.coverPicture ? (
                        <img className="w-full h-full object-cover" src={profile.coverPicture} alt="Cover" />
                    ) : (
                        <div className="w-full h-full bg-primary/20"></div>
                    )}
                </div>

                <div className="px-4 md:px-8 pb-6">
                    <div className="relative flex flex-col md:flex-row items-end md:items-center gap-4 -mt-12 md:-mt-16 mb-4">
                        <div className="relative group">
                            <div className="h-32 w-32 md:h-44 md:w-44 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-lg">
                                {profile.profilePicture ? (
                                    <img className="w-full h-full object-cover" src={profile.profilePicture} alt="Profile" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center font-bold text-4xl text-slate-400">
                                        {profile.userName?.charAt(0)}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left pt-2 md:pt-14">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <h2 className="text-3xl font-bold tracking-tight">{profile.firstName} {profile.lastName}</h2>
                                <span className="material-symbols-outlined text-primary fill-1" title="Verified Expert">verified</span>
                            </div>
                            <p className="text-slate-500 font-medium">Status : {profile.status}</p>
                            <div className="mt-2 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base">star</span>
                                    {profile.ratingCount ? (profile.starCount / profile.ratingCount).toFixed(1) : 'No'} ({profile.ratingCount} reviews)
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2 w-full md:w-auto pt-4 md:pt-14">
                            <a href={`tel:${profile.phone}`} className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                <span className="material-symbols-outlined text-xl">call</span>
                                Call Teacher
                            </a>
                            {profile.whatsappUrl && (
                                <a href={profile.whatsappUrl.startsWith('http') ? profile.whatsappUrl : `https://${profile.whatsappUrl}`} target="_blank" rel="noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">
                                    <span className="material-symbols-outlined text-xl">forum</span>
                                    WhatsApp
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 px-4 md:px-0">
                <div className="md:col-span-4 space-y-6">
                    {profile.profileVideo && (
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">smart_display</span>
                                Meet Your Teacher
                            </h3>
                            <div className="relative rounded-lg overflow-hidden bg-black border border-slate-200 aspect-video">
                                <video controls className="w-full h-full object-contain">
                                    <source src={profile.profileVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    )}

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold mb-4">Quick Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-slate-400">payments</span>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Price per Month</p>
                                    <p className="text-xl font-black text-primary">{profile.monthlyRate} XAF</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-slate-400">history_edu</span>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Last Diploma</p>
                                    <p className="font-semibold">{profile.lastDiploma}</p>
                                </div>
                            </div>
                            {profile.diplomaPicture && (
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-400">school</span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Diploma Document</p>
                                        <a href={profile.diplomaPicture} target="_blank" rel="noreferrer" className="text-primary text-sm font-bold flex items-center gap-1">
                                            View Document <span className="material-symbols-outlined text-sm">open_in_new</span>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold mb-4">Core Subjects</h3>
                        <div className="flex flex-wrap gap-2">
                            {profile.subjects.map((sub, i) => (
                                <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase">{sub}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-8 space-y-6">
                    {profile.bio && (
                        <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                About Me
                            </h3>
                            <div className="space-y-4 text-slate-600 leading-relaxed whitespace-pre-line">
                                {profile.bio}
                            </div>
                        </div>
                    )}

                    <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">star</span>
                            Ratings & Reviews
                        </h3>

                        {!isMe && me?.role === 'guest' ? (
                            <div className="mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Leave a Review</h4>
                                    <p className="text-sm text-slate-600 mt-1">Share your experience to help others find great teachers.</p>
                                </div>
                                <Link to={`/profile/${id}/review`} className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all text-center shrink-0 flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">rate_review</span>
                                    Write Review
                                </Link>
                            </div>
                        ) : !isMe && !me ? (
                            <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
                                <p className="text-sm font-medium text-slate-500">Please log in as a student to leave a review.</p>
                            </div>
                        ) : null}

                        <div className="space-y-4">
                            {ratings && ratings.length > 0 ? ratings.map(r => (
                                <div key={r._id} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <span key={star} className={`material-symbols-outlined text-sm ${r.stars >= star ? 'text-yellow-400 fill-1' : 'text-slate-300'}`}>star</span>
                                            ))}
                                        </div>
                                        <span className="text-xs text-slate-400">{new Date(r.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    {r.comment && <p className="text-sm text-slate-600">{r.comment}</p>}
                                </div>
                            )) : (
                                <p className="text-slate-500 text-sm italic">No reviews yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TeacherProfile;