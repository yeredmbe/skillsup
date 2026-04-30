import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import notFound from "../assets/ErrorPana.png"

export const FindTeacher = () => {
    const [subjectFilter, setSubjectFilter] = useState('');
    const [minRatingFilter, setMinRatingFilter] = useState(0);

    const teachers = useQuery(api.teachers.searchTeachers, {
        subject: subjectFilter || undefined,
        minRating: minRatingFilter || undefined,
    });

    return (
        <React.Fragment>
            <main className="max-w-[1440px] relative mx-auto flex flex-col lg:flex-row gap-8 p-6 mt-20">

                <aside className="w-full self-start md:sticky md:top-28 lg:w-64 flex-shrink-0 space-y-8">
                    <div>
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined">tune</span> Filters
                        </h2>

                        <div className="border-t border-slate-200 pt-6 space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Subject</h3>
                            <div className="space-y-2">
                                {['UI/UX Design', 'Python Programming', 'Digital Illustration', 'Mathematics'].map(sub => (
                                    <label key={sub} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            checked={subjectFilter === sub}
                                            onChange={() => setSubjectFilter(subjectFilter === sub ? '' : sub)}
                                            className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                                            type="checkbox"
                                        />
                                        <span className={`text-sm transition-colors ${subjectFilter === sub ? 'text-primary font-bold' : 'group-hover:text-primary'}`}>{sub}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-slate-200 pt-6 mt-6 space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Rating</h3>
                            <div className="space-y-2">
                                {[4.5, 4.0, 3.0].map(rating => (
                                    <button
                                        key={rating}
                                        onClick={() => setMinRatingFilter(minRatingFilter === rating ? 0 : rating)}
                                        className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${minRatingFilter === rating ? 'bg-primary text-white' : 'bg-slate-100 hover:bg-slate-200'}`}
                                    >
                                        <span className={`material-symbols-outlined ${minRatingFilter === rating ? 'text-yellow-300' : 'text-yellow-500'} fill-icon`}>star</span>
                                        <span>{rating} &amp; up</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => { setSubjectFilter(''); setMinRatingFilter(0); }}
                            className="w-full mt-8 py-3 text-sm font-bold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all"
                        >
                            Clear All Filters
                        </button>
                    </div>
                </aside>

                <section className="flex-1 md:mt-2">

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Finding the best teachers</h2>
                            <p className="text-slate-500 text-sm mt-1">{teachers === undefined ? 'Searching...' : `${teachers.length} qualified teachers found`}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {teachers === undefined ? (
                            <div className="col-span-full py-12 text-center text-slate-500 font-bold">Loading teachers...</div>
                        ) : teachers.length === 0 ? (
                            <div className="col-span-full py-5 text-center text-slate-500 font-bold justify-center items-center flex flex-col">
                                <p className='text-2xl'>No teachers match your criteria.</p>
                                <img src={notFound} alt="Not Found" className='w-1/2' />
                            </div>
                        ) : (
                            teachers.map(teacher => {
                                const ratingCount = teacher.ratingCount || 0;
                                const avgRating = ratingCount > 0 ? (teacher.starCount / ratingCount).toFixed(1) : 'New';

                                return (
                                    <div key={teacher._id} className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300">
                                        <div className="relative h-48 overflow-hidden bg-slate-100">
                                            {teacher.profilePicture ? (
                                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={teacher.profilePicture} alt={teacher.userName} />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center font-bold text-4xl text-slate-300">
                                                    {teacher.userName?.charAt(0)}
                                                </div>
                                            )}
                                            <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                                <span className="material-symbols-outlined text-yellow-500 fill-icon text-sm">star</span>
                                                <span className="text-xs font-bold">{avgRating}</span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-bold">{teacher.userName}</h3>
                                                <span className="text-primary font-black text-xl">{teacher.monthlyRate} <span className="text-xs font-normal text-slate-500">XAF/mo</span></span>
                                            </div>
                                            <p className="text-xs font-medium text-primary/60 mb-3 uppercase tracking-wider">{teacher.subjects?.[0] || 'Teacher'}</p>
                                            <p className="text-sm text-slate-600 line-clamp-3 mb-auto">
                                                {teacher.bio || "No bio available."}
                                            </p>
                                            <Link to={`/profile/${teacher._id}`} className="w-full text-center mt-4 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                                View Profile
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </section>
            </main>

        </React.Fragment>
    );
};

export default FindTeacher;