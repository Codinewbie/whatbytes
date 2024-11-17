'use client';
import { useState, useEffect } from 'react';

export default function Input({ setIsPopupOpen, formData, setFormData }) {
  // Store input values in local state
  const [localRank, setLocalRank] = useState(formData.rank);
  const [localPercentile, setLocalPercentile] = useState(formData.percentile);
  const [localScore, setLocalScore] = useState(formData.score);

  useEffect(() => {
    // Update the local values if formData changes from outside
    setLocalRank(formData.rank);
    setLocalPercentile(formData.percentile);
    setLocalScore(formData.score);
  }, [formData]);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rank') {
      setLocalRank(value);
    } else if (name === 'percentile') {
      setLocalPercentile(value);
    } else if (name === 'score') {
      setLocalScore(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only update formData when Save button is clicked
    setFormData({
      rank: localRank,
      percentile: localPercentile,
      score: localScore,
    });
    // Close the popup after saving
    setIsPopupOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="bg-white p-8 rounded-lg gap-5 shadow-lg flex flex-col">
        <div className="w-full py-1 px-3 flex justify-between">
          <div className="text-xl font-bold">Update scores</div>
          <div className="h-10 w-10">
            <svg viewBox="0 0 128 128"><path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"></path><path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z" ></path> </svg>
          </div>
        </div>
        <form onSubmit={handleSubmit} className ="space-y-3">
          <div className="w-full justify-between py-1  px-3 flex space-x-3">
            <div className="flex space-x-3  items-center">
              <div className="h-5 w-5 bg-blue-900 rounded-full text-xs flex justify-center items-center text-white">1</div>
              <div className="text-sm ml-2">Update your <span className="font-bold">Rank</span></div>
            </div>
            <div>
              <input
                type="number"
                placeholder="Rank"
                required
                name="rank"
                value={localRank}
                min="1"
                max="50"
                onChange={handleChange}
                className={`min-w-36 p-1 flex justify-center items-center border ${localRank === '' ? "border-red-500": ""} rounded-lg`}
              />
              {localRank === '' && (
                <p className="text-[10px] text-red-500">Required | Rank 1-50.</p>
              )}
            </div>
          </div>
          <div className="w-full justify-between py-1 px-3 flex space-x-3">
            <div className="flex space-x-3  items-center">
              <div className="h-5 w-5 bg-blue-900 rounded-full text-xs flex justify-center items-center text-white">2</div>
              <div className="text-sm ml-2">Update your <span className="font-bold">Percentile</span></div>
            </div>
            <div>
              <input
                type="number"
                placeholder="Percentile"
                required
                name="percentile"
                value={localPercentile}
                min="1"
                max="99"
                onChange={handleChange}
                className={`min-w-36 p-1 flex justify-center items-center border ${localPercentile === '' ? "border-red-500": ""} rounded-lg`}
              />
              {localPercentile === '' && (
                <p className="text-[10px] text-red-500">Required | Percentile 0-100.</p>
              )}
            </div>
          </div>
          <div className="w-full justify-between py-1 px-3 flex space-x-3">
            <div className="flex space-x-3  items-center">
              <div className="h-5 w-5 bg-blue-900 rounded-full text-xs flex justify-center items-center text-white">3</div>
              <div className="text-sm ml-2">Update your <span className="font-bold">Current score (out of 15)</span></div>
            </div>
            <div>
              <input
                type="number"
                placeholder="Score"
                required
                name="score"
                value={localScore}
                min="0"
                max="10"
                onChange={handleChange}
                className={`min-w-36 p-1 flex justify-center items-center border ${localScore === '' ? "border-red-500": ""} rounded-lg`}
              />
              {localScore === '' && (
                <p className="text-[10px] text-red-500">Required | Score 0-15.</p>
              )}
            </div>
          </div>

          <div className="flex justify-end py-1 px-3 space-x-2">
            <button
              onClick={handleClosePopup}
              className="border border-blue-900 py-1 text-sm px-4 rounded-lg hover:bg-gray-200"
            >
              cancel
            </button>
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:border-2 hover:py-1.5 hover:px-3.5 hover:border-gray-900 hover:bg-blue-700"
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
