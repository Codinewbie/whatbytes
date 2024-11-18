// Sidebar.js
'use client';
import React, { useState ,useEffect,useRef } from 'react';
import 'boxicons';

export default function Sidebar({ activeTab, setActiveTab }) {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const tabs = ['Dashboard', 'Skill Test', 'Internship'];

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Sidebar Toggle Icon for Small Screens */}
            <div className={`sm:hidden absolute top-20 ${isOpen? "left-3" : "left-3"} z-50`}>
                <button onClick={toggleSidebar}>
                    <box-icon name="menu" color="#787b7c" size="sm"></box-icon>
                </button>
            </div>

            {/* Sidebar Content */}
            <div
                className={`${
                    isOpen ? 'block' : 'hidden'
                } sm:block fixed sm:static top-20 left-0  sm:w-auto h-full bg-white shadow-lg sm:shadow-none z-40 sm:z-auto transition-transform transform sm:translate-x-0 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col gap-4 space-y-3 mt-10 " ref={sidebarRef}>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveTab(index);
                                setIsOpen(false); // Close sidebar on selection
                            }}
                            className={`flex-1 py-2 w-[140px] text-center text-sm font-bold mr-8 transition-colors duration-300 ${
                                activeTab === index
                                    ? 'border-b-4 bg-gray-200 border rounded-r-full text-blue-500'
                                    : 'text-gray-600 hover:text-blue-500'
                            }`}
                        >
                            <div className="flex items-center pl-4 px-2">
                                <box-icon
                                    name={`${
                                        index === 0
                                            ? 'bar-chart-alt-2'
                                            : index === 1
                                            ? 'award'
                                            : 'note'
                                    }`}
                                    type="solid"
                                    color={`${
                                        activeTab === index ? '#3892af' : '#787b7c'
                                    }`}
                                    className="w-4 h-4"
                                ></box-icon>
                                <div className="ml-4">{tab}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
