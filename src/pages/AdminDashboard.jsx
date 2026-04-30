import React, { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { useUser, useClerk } from '@clerk/react';
import { Link, useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {
    const { user } = useUser();
    const { signOut } = useClerk();
    const navigate = useNavigate();
    const me = useQuery(api.users.getMe);
    const [roleFilter, setRoleFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const isAdmin = me !== undefined && me !== null && me.role === 'admin';
    const users = useQuery(api.admin.listUsers, isAdmin ? {} : "skip") || [];
    const setUserBan = useMutation(api.admin.setUserBan);

    // Security Check
    if (me === undefined) return <div className="flex h-screen items-center justify-center bg-slate-50"><div className="animate-spin size-8 border-4 border-slate-900 border-t-transparent rounded-full"></div></div>;
    if (me === null || me.role !== 'admin') {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-50">
                <div className="text-center space-y-4 p-8 bg-white rounded-xl shadow">
                    <h2 className="text-2xl font-black">Access Denied</h2>
                    <Link to="/" className="inline-block px-6 py-2 bg-slate-900 text-white rounded">Home</Link>
                </div>
            </div>
        );
    }

    // Filter logic
    const filteredUsers = users.filter(u => {
        if (roleFilter !== 'All' && u.role !== roleFilter.toLowerCase()) return false;
        if (statusFilter !== 'All') {
            const status = u.profile ? u.profile.status : 'not verified';
            if (statusFilter.toLowerCase() === 'not verified' && u.profile) return false;
            if (statusFilter.toLowerCase() !== 'not verified' && status !== statusFilter.toLowerCase()) return false;
        }
        return true;
    });

    // Pagination logic
    const totalFiltered = filteredUsers.length;
    const totalPages = Math.ceil(totalFiltered / usersPerPage);
    const paginatedUsers = filteredUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

    // Derived Stats
    const totalRevenue = useQuery(api.admin.getTotalRevenue, isAdmin ? {} : "skip") || 0;

    // Most rated teachers
    const sortedTeachers = [...users]
        .filter(u => u.role === 'teacher' && u.profile?.status === 'approved')
        .sort((a, b) => {
            const avgA = a.profile.ratingCount > 0 ? a.profile.starCount / a.profile.ratingCount : 0;
            const avgB = b.profile.ratingCount > 0 ? b.profile.starCount / b.profile.ratingCount : 0;
            if (avgB !== avgA) return avgB - avgA;
            return b.profile.ratingCount - a.profile.ratingCount;
        })
        .slice(0, 3);

    const handleToggleBan = async (userId, isBanned) => {
        if (window.confirm(isBanned ? 'Unban this user?' : 'Ban this user?')) {
            await setUserBan({ userId, isBanned: !isBanned });
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 font-sans mt-20">
            {/* Dark Sidebar - Onyx Style */}
            <aside className="w-64 bg-[#0f172a] text-white flex flex-col hidden md:flex shrink-0">
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="bg-white text-[#0f172a] p-1.5 rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">diamond</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-black tracking-tight leading-none">Onyx Admin</h1>
                            <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-1">Management Suite</p>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <Link className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-lg transition-all" to="/admin">
                        <span className="material-symbols-outlined text-sm">grid_view</span>
                        <span className="font-bold text-sm tracking-wide">OVERVIEW</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-all" to="/admin">
                        <span className="material-symbols-outlined text-sm">group</span>
                        <span className="font-bold text-sm tracking-wide">USERS</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-all" to="#">
                        <span className="material-symbols-outlined text-sm">payments</span>
                        <span className="font-bold text-sm tracking-wide">FINANCIALS</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-all" to="#">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="font-bold text-sm tracking-wide">ENGAGEMENT</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-all" to="#">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        <span className="font-bold text-sm tracking-wide">VERIFICATION</span>
                    </Link>
                </nav>
                <div className="p-4">
                    <button onClick={() => signOut(() => navigate('/'))} className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-all w-full text-left">
                        <span className="material-symbols-outlined text-sm">logout</span>
                        <span className="font-bold text-sm tracking-wide">LOGOUT</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#f8fafc]">

                <div className="p-8 max-w-7xl mx-auto w-full space-y-6">

                    {/* Top Metric Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Revenue Card */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Revenue</p>
                                <h3 className="text-4xl font-black text-slate-900">{totalRevenue.toLocaleString()} <span className="text-xl text-slate-400 font-bold">XAF</span></h3>
                                <p className="text-xs text-slate-400 font-medium mt-4">From verified teacher registration fees</p>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <span className="bg-[#0f172a] text-white text-[10px] font-bold px-2 py-1 rounded">+12.5%</span>
                                <span className="text-xs text-slate-400 font-medium">vs last month</span>
                            </div>
                        </div>

                        {/* Engagement Card */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2 flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Engagement Tracking</p>
                                    <h3 className="text-xl font-black text-slate-900">Most Rated Teachers</h3>
                                </div>
                                <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900">View All Leaders</button>
                            </div>
                            <div className="flex items-center gap-6 flex-1">
                                {sortedTeachers.map((t, idx) => {
                                    const rating = t.profile.ratingCount > 0 ? (t.profile.starCount / t.profile.ratingCount).toFixed(1) : "0.0";
                                    return (
                                        <div key={t._id} className="flex items-center gap-3">
                                            <div className="relative">
                                                <div className="size-12 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
                                                    {t.profile.profilePicture ? <img src={t.profile.profilePicture} alt="Teacher" className="w-full h-full object-cover" /> : <div className="w-full h-full bg-slate-200"></div>}
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 size-5 bg-[#0f172a] rounded-full border-2 border-white text-white flex items-center justify-center text-[9px] font-bold">
                                                    {idx + 1}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 leading-tight">{t.name}</p>
                                                <p className="text-[11px] font-semibold text-slate-500 mt-0.5 flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[12px]">star</span>
                                                    {rating} ({t.profile.ratingCount})
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                                {sortedTeachers.length === 0 && <p className="text-sm text-slate-400 font-medium">Not enough data to display leaders.</p>}
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">

                        {/* Table Header & Filters */}
                        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h3 className="text-xl font-black text-slate-900">User Management</h3>
                                <p className="text-sm text-slate-500 font-medium mt-1">Manage Teachers and Parents across the platform.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 flex items-center gap-2">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Role:</span>
                                    <select value={roleFilter} onChange={e => { setRoleFilter(e.target.value); setCurrentPage(1); }} className="bg-transparent border-none text-[10px] font-black uppercase text-slate-900 outline-none cursor-pointer">
                                        <option value="All">All</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Guest">Parent/Guest</option>
                                    </select>
                                </div>
                                <div className="bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 flex items-center gap-2">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Status:</span>
                                    <select value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setCurrentPage(1); }} className="bg-transparent border-none text-[10px] font-black uppercase text-slate-900 outline-none cursor-pointer">
                                        <option value="All">All</option>
                                        <option value="Approved">Verified</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Not Verified">Not Verified</option>
                                    </select>
                                </div>
                                <button className="bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-colors">
                                    Apply Filter
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400">User Name</th>
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400">Role</th>
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400">Verification Status</th>
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400">Rating</th>
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400">Likes</th>
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedUsers.map(u => {
                                        const isTeacher = u.role === 'teacher';
                                        const status = u.profile ? u.profile.status : 'not verified';
                                        const rating = u.profile && u.profile.ratingCount > 0 ? (u.profile.starCount / u.profile.ratingCount).toFixed(1) : '—';
                                        const likes = u.profile ? u.profile.ratingCount * 12 : '—'; // Mock likes based on rating count for aesthetic matching

                                        return (
                                            <tr key={u._id} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${u.isBanned ? 'opacity-40' : ''}`}>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                                                            {u.profile?.profilePicture ? <img src={u.profile.profilePicture} alt="Avatar" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center font-bold text-slate-400">{u.name.charAt(0)}</div>}
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-900 leading-tight">{u.name}</p>
                                                            <p className="text-[11px] font-semibold text-slate-400 mt-0.5">{u.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded ${isTeacher ? 'bg-slate-100 text-slate-600' : 'bg-blue-50 text-blue-600'}`}>
                                                        {u.role === 'teacher' ? 'TEACHER' : u.role === 'guest' ? 'PARENT/STUDENT' : 'ADMIN'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className={`size-1.5 rounded-full ${status === 'approved' ? 'bg-emerald-500' : status === 'pending' ? 'bg-amber-500' : 'bg-slate-300'}`}></span>
                                                        <span className={`text-xs font-bold ${status === 'approved' ? 'text-emerald-600' : status === 'pending' ? 'text-amber-600' : 'text-slate-400'}`}>
                                                            {status === 'approved' ? 'Verified' : status === 'pending' ? 'Pending' : 'Not Verified'}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-bold text-slate-900 text-sm">{rating}</td>
                                                <td className="px-6 py-4 font-semibold text-slate-500 text-sm">{likes}</td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        {u.profile && (
                                                            <Link to={`/profile/${u.profile._id}`} className="p-1.5 rounded-md hover:bg-slate-200 text-slate-600 transition-colors group relative" title="View Profile">
                                                                <span className="material-symbols-outlined text-[18px] block">visibility</span>
                                                            </Link>
                                                        )}
                                                        <button onClick={() => handleToggleBan(u._id, u.isBanned)} className={`p-1.5 rounded-md transition-colors ${u.isBanned ? 'bg-rose-100 text-rose-600' : 'hover:bg-slate-200 text-slate-600'}`} title={u.isBanned ? "Unban User" : "Ban User"}>
                                                            <span className="material-symbols-outlined text-[18px] block">{u.isBanned ? 'lock_open' : 'block'}</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Footer */}
                        <div className="p-6 flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                SHOWING {paginatedUsers.length} OF {totalFiltered} USERS
                            </span>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="size-8 rounded flex items-center justify-center border border-slate-200 text-slate-400 hover:border-slate-400 disabled:opacity-50 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                                </button>
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`size-8 rounded flex items-center justify-center text-xs font-bold transition-colors ${currentPage === i + 1 ? 'bg-[#0f172a] text-white' : 'border border-slate-200 text-slate-600 hover:border-slate-400'}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages || totalPages === 0}
                                    className="size-8 rounded flex items-center justify-center border border-slate-200 text-slate-400 hover:border-slate-400 disabled:opacity-50 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Floating Action Button placeholder */}
            <button className="fixed bottom-8 right-8 size-14 bg-[#0f172a] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform hidden md:flex">
                <span className="material-symbols-outlined text-2xl">add</span>
            </button>
        </div>
    );
};

export default AdminDashboard;