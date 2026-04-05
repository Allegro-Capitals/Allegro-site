import React from 'react';
import { useInView } from 'react-intersection-observer';

const statsData = [
  { value: "120", suffix: "+", label: 'Transactions Since Inception' },
  { value: "$20", suffix: " Bn +", label: 'Transaction Value Since Inception' },
  { value: "23", suffix: "+", label: 'Years of Full-Service Investment Banking in Indian Markets' }
];

const Stats = () => {
  return (
    <div className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center font-medium bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-12">
          Key Statistics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-100"
            >
              <h2 className="text-3xl md:text-5xl font-semibold text-red-600 mb-2">
                {stat.value}
                <span className="text-red-600 ml-1">{stat.suffix}</span>
              </h2>
              <p className="text-sm md:text-base font-normal text-slate-600 max-w-[200px] mx-auto leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
