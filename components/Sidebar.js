'use client';
import React, { useState } from 'react';

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['DashBoard', 'Skill Test', 'Internship'];

    const renderContent = () => {
        switch (activeTab) {
        case 0:
            return <div className="p-4">🏠 Welcome to the Home Page</div>;
        case 1:
            return <div className="p-4">👤 This is the Profile Page</div>;
        case 2:
            return <div className="p-4">⚙️ Adjust your Settings here</div>;
        default:
            return <div className="p-4">Select a tab</div>;
        }
    };


    return (
     <div>
        <div className ="flex flex-col gap-3 mt-10" >
            {tabs.map((tab, index) => (
            <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-3 text-center text-sm font-bold mr-8 transition-colors duration-300 ${
                activeTab === index
                    ? 'border-b-4 bg-gray-200 border rounded-r-full text-blue-500'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
            >
                {tab}
            </button>
            ))}
        </div>
        <div className="mt-6">{renderContent()}</div>
     </div>
    );
  }
  