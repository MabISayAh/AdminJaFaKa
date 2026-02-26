import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number; 
  color: string;         
  icon: LucideIcon; 
  date?: string;
  showView?: boolean;    
  viewPath?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  color, 
  icon: Icon, 
  date,
  showView, 
  viewPath 
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-1 min-w-[220px] relative">
      {date && (
        <span className="absolute top-5 right-5 text-xs text-gray-400 font-normal">
          {date}
        </span>
      )}

      <div className="flex items-center gap-4">
        <div className={`${color} p-4 rounded-xl text-white shadow-md flex-shrink-0`}>
          <Icon size={35} />
        </div>
    
        <div className="min-w-0 pr-14">
          <p className="text-[#050F24] text-sm font-semibold truncate">{title}</p>
          <h3 className="text-sm text-[#6F757E] truncate">{value}</h3>
          {showView && viewPath && (
            <button 
              onClick={() => navigate(viewPath)}
              className="text-sm text-[#DF2025] hover:underline mt-1 block"
            >
              View
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;