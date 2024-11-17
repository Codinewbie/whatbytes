'use client';
import React, { useState } from 'react';
import Header from "@/components/Header";
import Question from "@/components/Question";
import Sidebar from "@/components/Sidebar";
import Skill from "@/components/Skill";
import Syllabus from "@/components/Syllabus";

import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/BrowserOnlyComponent'),
  { ssr: false }
)

export default function Home() {
    const [formData, setFormData] = useState({ rank: '1', percentile: '30', score: '10' });
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <Header />
            <div className="grid lg:grid-cols-9 grid-cols-6 gap-8">
                {/* Sidebar Section */}
                <div className="col-span-2 lg:col-span-2 h-full border-r-2">
                    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

                {/* Main Content Section */}
                <div className ="lg:col-span-7 col-span-4">
                    {activeTab === 0 && (
                        <div id="set" className="col-span-7   gap-4">
                            <div className="p-4 min-h-screen">🏠 Welcome to the Dashboard</div>
                        </div>
                    )}
                    {activeTab === 1 && (
                      <div id="set" className="lg:col-span-7 col-span-4 grid grid-cols-7 gap-4">
                        <div className="lg:col-span-4 col-span-7 min-h-screen">
                            <Skill formData={formData} setFormData={setFormData} />
                        </div>
                        <div className="lg:col-span-3 col-span-7 flex flex-col py-4 space-y-4 min-h-screen">
                            <Syllabus />
                            <Question formData={formData} />
                        </div>
                      </div>
                    )}
                    {activeTab === 2 && (
                        <div id="set" className="col-span-7 gap-4">
                          <div className="p-4 min-h-screen">🏠 Welcome to the Internship section</div>
                        </div>
                    )}
                </div>
            </div>
            <DynamicComponentWithNoSSR />
        </div>
    );
}
