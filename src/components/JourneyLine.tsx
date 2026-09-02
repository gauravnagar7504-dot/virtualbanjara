import React from 'react';

interface JourneyLineProps {
  label?: string;
  className?: string;
}

export const JourneyLine: React.FC<JourneyLineProps> = ({ label, className = '' }) => {
  return (
    <div className={`flex items-center justify-center my-8 md:my-12 ${className}`}>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D8CCB9] to-transparent flex-1 max-w-xs" />
      {label ? (
        <div className="mx-4 flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#D4881E] font-medium">
            {label}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
        </div>
      ) : (
        <div className="mx-3 flex items-center space-x-1.5">
          <span className="w-1 h-1 rounded-full bg-[#D4881E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
          <span className="w-1 h-1 rounded-full bg-[#D4881E]" />
        </div>
      )}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D8CCB9] to-transparent flex-1 max-w-xs" />
    </div>
  );
};
