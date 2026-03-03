'use client';
import React from 'react';

interface CompanyCardProps {
  icon: React.ReactNode;
  color: string;
  shadowColor: string;
  title: string;
  description: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ icon, color, shadowColor, title, description }) => {
  return (
    <div className="company-card col-span-1 max-sm:col-span-3 items-start justify-center shadow-[rgba(17,_17,_26,_0.08)_0px_0px_20px] p-5 rounded-2xl">
      <div
        className={`relative w-14 h-14 rounded-[18px] ${color} shadow-md ${shadowColor} company-card-icon`}
      >
        <span className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white">
          {icon}
        </span>
      </div>
      <div className="mt-6 text-start company-card-content">
        <h1 className="text-black text-2xl font-bold mb-3">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default CompanyCard;