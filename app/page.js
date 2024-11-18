'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Skill = dynamic(() => import('@/components/Skill'), { ssr: false });
const Syllabus = dynamic(() => import('@/components/Syllabus'), { ssr: false });
const Question = dynamic(() => import('@/components/Question'), { ssr: false });
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });

export default function Home() {
    const [formData, setFormData] = useState({ rank: '1', percentile: '30', score: '10' });
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <Header />
            <div className="grid lg:grid-cols-11 md:grid-cols-9 grid-cols-7 gap-8">
                {/* Sidebar Section */}
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 h-full border-r-2">
                    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

                {/* Main Content Section */}
                <div className ="lg:col-span-9 md:col-span-7 sm:col-span-5 col-span-7">
                    {activeTab === 0 && (
                        <div id="set" className="lg:col-span-9  md:col-span-7 sm:col-span-5 col-span-7 gap-4">
                            <div className="p-4 h-96 flex items-center justify-center">🏠 Welcome to the Dashboard</div>
                        </div>
                    )}
                    {activeTab === 1 && (
                      <div id="set" className="lg:col-span-9 md:col-span-7 sm:col-span-5 col-span-7 grid lg:grid-cols-9 md:grid-cols-7 sm:grid-cols-5 grid-cols-7 gap-4 px-4 sm:px-1">
                        <div className="lg:col-span-5 md:col-span-7 sm:col-span-5 col-span-7 min-h-screen">
                            <Skill formData={formData} setFormData={setFormData} />
                        </div>
                        <div className="lg:col-span-4 md:col-span-7 sm:col-span-5  col-span-7 flex flex-col py-4  space-y-4 min-h-screen">
                            <div className = "lg:h-10"></div>
                            <Syllabus />
                            <Question formData={formData} />
                        </div>
                      </div>
                    )}
                    {activeTab === 2 && (
                        <div id="set" className="col-span-7 gap-4 ">
                          <div className="p-4 h-96 flex items-center justify-center">🏠 Welcome to the Internship section</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
