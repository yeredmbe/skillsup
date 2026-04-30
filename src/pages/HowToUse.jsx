import React, { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { useTranslation } from 'react-i18next';

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-2xl mb-4 bg-white overflow-hidden transition-all duration-300">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
            >
                <h4 className="font-bold text-slate-900 text-lg pr-8">{faq.q}</h4>
                <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                </span>
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out px-6 text-slate-600 leading-relaxed ${
                    isOpen ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                {faq.a}
            </div>
        </div>
    );
};

export default function HowToUse() {
    const me = useQuery(api.users.getMe);
    const { t } = useTranslation();

    const faqs = [
        {
            category: t('faq.gettingStarted'),
            icon: "rocket_launch",
            questions: [
                {
                    q: t('faq.q_whatIs'),
                    a: t('faq.a_whatIs')
                },
                {
                    q: t('faq.q_roles'),
                    a: t('faq.a_roles')
                }
            ]
        },
        {
            category: t('faq.forParents'),
            icon: "school",
            questions: [
                {
                    q: t('faq.q_findTeacher'),
                    a: t('faq.a_findTeacher')
                },
                {
                    q: t('faq.q_contactTeacher'),
                    a: t('faq.a_contactTeacher')
                },
                {
                    q: t('faq.q_leaveReview'),
                    a: t('faq.a_leaveReview')
                }
            ]
        },
        {
            category: t('faq.forTeachers'),
            icon: "workspace_premium",
            questions: [
                {
                    q: t('faq.q_becomeTeacher'),
                    a: t('faq.a_becomeTeacher')
                },
                {
                    q: t('faq.q_verificationFee'),
                    a: t('faq.a_verificationFee')
                },
                {
                    q: t('faq.q_approvalStatus'),
                    a: t('faq.a_approvalStatus')
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-sans">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white pt-32 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                    <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-primary/30 blur-[120px] rounded-full mix-blend-screen"></div>
                    <div className="absolute top-[40%] -left-[10%] w-[40%] h-[100%] bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-primary-200 mb-6">
                        {t('faq.supportDoc')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        {t('faq.howToUse')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">SkillsUp</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {t('faq.description')}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
                {faqs.map((section, idx) => (
                    <div key={idx} className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined">{section.icon}</span>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900">{section.category}</h2>
                        </div>
                        
                        <div className="space-y-4">
                            {section.questions.map((faq, qIdx) => (
                                <FAQItem key={qIdx} faq={faq} />
                            ))}
                        </div>
                    </div>
                ))}

                {/* Call to action */}
                <div className="mt-16 bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{t('faq.stillHaveQuestions')}</h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        {t('faq.supportReady')}
                    </p>
                    <a 
                        href="mailto:support@skillsup.com" 
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-xl">mail</span>
                        {t('faq.contactSupport')}
                    </a>
                </div>
            </div>
        </div>
    );
}