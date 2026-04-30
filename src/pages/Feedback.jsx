import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

export const FeedbackForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const me = useQuery(api.users.getMe);
  // Fetch teacher's profile safely
  const teacher = useQuery(api.teachers.getTeacherProfile, { profileId: id });
  const rateTeacher = useMutation(api.ratings.rateTeacher);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError("Please select a star rating");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      await rateTeacher({
        teacherProfileId: id,
        stars: rating,
        comment: comment
      });
      // Redirect back to profile
      navigate(`/profile/${id}`);
    } catch (err) {
      setError(err.message || "Failed to submit review");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (teacher === undefined || me === undefined) {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!teacher) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold">Teacher not found.</div>;
  }

  if (!me || me.role !== "guest") {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
            <span className="material-symbols-outlined text-6xl text-slate-300">lock</span>
            <p className="text-slate-500 font-bold text-xl">Only guests (parents/students) can leave reviews.</p>
            <button onClick={() => navigate(`/profile/${id}`)} className="text-primary font-bold hover:underline">Go back to profile</button>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
            <button onClick={() => navigate(`/profile/${id}`)} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold mb-8">
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Profile
            </button>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>

                <div className="text-center mb-10 relative z-10">
                    <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
                        {teacher.profilePicture ? (
                            <img src={teacher.profilePicture} alt={teacher.userName} className="w-full h-full object-cover" />
                        ) : (
                            <span className="material-symbols-outlined text-5xl text-slate-400">person</span>
                        )}
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 mb-2">Rate your experience</h1>
                    <p className="text-slate-500 font-medium text-lg">How was your session with <span className="text-primary font-bold">{teacher.userName}</span>?</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    {error && (
                        <div className="bg-rose-50 text-rose-600 p-4 rounded-xl font-bold text-sm border border-rose-100 flex items-center gap-2">
                            <span className="material-symbols-outlined">error</span>
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col items-center">
                        <div className="flex gap-2" onMouseLeave={() => setHoverRating(0)}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button 
                                    key={star}
                                    type="button"
                                    onMouseEnter={() => setHoverRating(star)}
                                    onClick={() => setRating(star)}
                                    className="p-1 hover:scale-110 transition-transform focus:outline-none"
                                >
                                    <span className={`material-symbols-outlined text-5xl transition-colors ${
                                        (hoverRating || rating) >= star ? 'text-yellow-400 fill-current' : 'text-slate-200'
                                    }`} style={{ fontVariationSettings: (hoverRating || rating) >= star ? '"FILL" 1' : '"FILL" 0' }}>
                                        star
                                    </span>
                                </button>
                            ))}
                        </div>
                        <p className="text-sm font-bold text-slate-400 mt-4 uppercase tracking-wider">
                            {rating === 0 ? "Select a rating" : rating === 1 ? "Poor" : rating === 2 ? "Fair" : rating === 3 ? "Good" : rating === 4 ? "Very Good" : "Excellent"}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <label className="block text-slate-900 font-bold">Write your review <span className="text-slate-400 font-normal">(Optional)</span></label>
                        <textarea 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 font-medium text-slate-700 bg-slate-50 focus:bg-white transition-all resize-none min-h-[160px]"
                            placeholder="What did you like about the session? Did they explain concepts clearly? Was the tutor prepared?"
                        ></textarea>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                        <p className="text-sm text-primary font-medium leading-relaxed">Your review will be public and helps our community find the best tutors on SkillsUp.</p>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting || rating === 0}
                        className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30 active:scale-[0.98]"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Review"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};
