import React from 'react';

const timelineData = [
  {
    title: "Firm Founded",
    description: "Founded in Bangalore by Kunal Kashyap and Shyam Powar, establishing a strong foundation for excellence in financial advisory.",
    date: "2002"
  },
  {
    title: "Biocon IPO",
    description: "Advised on the landmark INR 3,400 Cr Initial Public Offering of Biocon, marking a significant early milestone for the firm.",
    date: "2004"
  },
  {
    title: "Legacy Relationships",
    description: "Forged enduring relationships with prominent Bangalore-based founders, successfully securing legacy clients such as Manipal and Narayana Health (NH).",
    date: "2004-10"
  },
  {
    title: "Sector Specialists",
    description: "Executed multiple strategic, smaller-scale deals, firmly cementing our market position as premier Healthcare and Life Sciences specialists.",
    date: "2010-20"
  },
  {
    title: "Landmark Transactions",
    description: "Advised on multiple landmark transactions, including the largest Private Equity deal in Indian healthcare services and the largest biosimilars acquisition in the country.",
    date: "2021-23"
  },
  {
    title: "Market Leadership",
    description: "Continued strong momentum with the largest outbound acquisition of healthcare services, the largest single-specialty control deal, and multiple strategic acquisitions aimed at building India's largest healthcare network.",
    date: "2024-26"
  }
];


const Timeline = () => {
  return (
    <div className="w-full py-16 flex flex-col items-center">
      <h3 className="text-3xl md:text-4xl font-medium text-slate-700 mb-24 relative inline-block">
         Our Milestones
      </h3>

      <div className="relative w-11/12 md:w-3/4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-red-500 to-red-700 transform -translate-x-1/2 z-0"></div>

        <ul className="space-y-16">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li
                key={index}
                className={`relative bg-white shadow-md border-b-4 border-b-red-500 rounded-lg p-6 w-full md:w-[48%] ${
                  isLeft ? 'md:float-left md:clear-right text-right md:translate-x-[-30px]' : 'md:float-right md:clear-left text-left md:translate-x-[30px]'
                }`}
              >
                {/* Date */}
                <span
                  className={`absolute w-32 h-8 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs rounded-full flex items-center justify-center shadow-md ${
                    isLeft
                      ? 'top-[-2.5rem] right-5'
                      : 'top-[-2.5rem] left-5'
                  }`}
                >
                  {item.date}
                </span>

                {/* Circle */}
                <span
                  className={`absolute w-5 h-5 bg-pink-200 rounded-full top-0 flex items-center justify-center ${
                    isLeft ? 'right-[-30px]' : 'left-[-30px]'
                  }`}
                >
                  <span className="w-3 h-3 bg-red-700 rounded-full"></span>
                </span>

                {/* Content */}
                <h3 className="text-[1rem] md:text-lg font-semibold text-slate-700">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 mb-2 leading-relaxed">{item.description}</p>
                
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
