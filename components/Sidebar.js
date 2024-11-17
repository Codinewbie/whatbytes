'use client';
import React from 'react';

export default function Sidebar({ activeTab, setActiveTab }) {
    const tabs = ['Dashboard', 'Skill Test', 'Internship'];

    return (
        <div className="flex flex-col gap-3 mt-10">
            
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
                    <div className="flex items-center px-2">
                        <box-icon name={`${index===0 ?"bar-chart-alt-2" : index === 1 ? "award" : "note" }`} type='solid' color={`${activeTab===index ? "#3892af" : "#787b7c" }`} className="w-4 h-4" ></box-icon>
                        <div className="ml-4">{tab}</div>
                    </div>
                    
                </button>
            ))}
        </div>
    );
}
