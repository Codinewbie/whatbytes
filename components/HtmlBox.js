'use client';
import React, { useState } from 'react';
import Input from './Input';
export default function HtmlBox({formData,setFormData}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleUpdateClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative">
      {/* Dimmed background overlay */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleClosePopup}
        ></div>
      )}

      {/* Main Content */}
      <div
        className={`border rounded-lg w-full gap-2 px-3 items-center flex justify-between space-x-3 py-5 ${
          isPopupOpen ? "opacity-20" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <div className="h-12 w-12">
          <svg viewBox="0 0 128 128"><path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"></path><path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z" ></path> </svg>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="text-sm font-bold">Hyper Text Markup Language</div>
          <div className="text-xs text-gray-500 font-medium">
            Questions: 15 | Duration: 15 mins | Submitted on 17 Nov 2024
          </div>
        </div>
        <button
          onClick={handleUpdateClick}
          className="bg-blue-800 px-5 py-2 border rounded-lg text-white text-sm hover:bg-blue-600 hover:border-2 hover:border-gray-800"
        >
          Update
        </button>
      </div>

      {/* Popup Input Form */}
      {isPopupOpen && (
        <Input setIsPopupOpen={setIsPopupOpen} formData={formData}  setFormData={setFormData} />
      )}
    </div>
  );
}
