import React, { useState } from 'react';
import { Calendar, Search, Bell, User, ChevronDown } from 'lucide-react';

export interface Inquiry {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  contact: string;
  status: 'New' | 'In Progress' | 'Resolved';
}

const InquiryManagement: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('New');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data tailored for the Inquiries page
  const inquiries: Inquiry[] = [
    { id: '1', customerName: 'Aliyah Segovia', customerEmail: 'asegovia@gmail.com', date: '10 Oct, 2025', contact: '09123456789', status: 'New' },
    { id: '2', customerName: 'Maverick Verdida', customerEmail: 'mverdida@gmail.com', date: '10 Oct, 2025', contact: '09123456789', status: 'In Progress' },
    { id: '3', customerName: 'Russell Palcoto', customerEmail: 'rpalcoto@gmail.com', date: '10 Oct, 2025', contact: '09123456789', status: 'New' },
    { id: '4', customerName: 'Rose Pajarito', customerEmail: 'rpajarito@gmail.com', date: '10 Oct, 2025', contact: '09123456789', status: 'New' },
    { id: '5', customerName: 'Venelyn Cordova', customerEmail: 'vcordova@gmail.com', date: '10 Oct, 2025', contact: '09123456789', status: 'In Progress' },
    { id: '6', customerName: 'Joan Sibayan', customerEmail: 'jsibayan@gmail.com', date: '10 Oct, 2025', contact: '09123456789', status: 'In Progress' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'text-[#DF2025]'; // Red dot for New
      case 'In Progress': return 'text-[#27D095]'; // Green dot for In Progress
      case 'Resolved': return 'text-gray-400';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="p-8">
      {/* 1. Top Navbar */}
      <div className="flex justify-between items-center mb-8 w-full">
        <div className="flex items-center gap-8 flex-1">
          <h1 className="text-xl font-semibold text-[#0f172a]">Inquiries</h1>
          <div className="relative flex-1 max-w-xl group">
            <span className="absolute inset-y-0 right-4 flex items-center text-[#6F757E] pointer-events-none group-focus-within:text-[#DF2025]">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pr-10 pl-4 py-2 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DF2025] shadow-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-8">
          <button className="p-2 text-[#050F24] hover:text-[#DF2025]">
            <Bell size={24} />
          </button>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#DF2025] overflow-hidden">
            <User size={20} className="text-gray-700" />
          </div>
        </div>
      </div>

      {/* 2. Messages Header Card */}
      <div className="bg-white rounded-3xl border border-[#E1E1E1] shadow-sm p-8">
        <div className="flex justify-between items-start mb-8">
          <div className="max-w-md">
            <h2 className="text-xl font-bold text-[#050F24]">Messages</h2>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
              All the inquiries submitted by customers are listed below. Click on a particular inquiry to view its full details.
            </p>
          </div>
          
          <div className="flex gap-3 relative">
            <button className="p-3 border border-[#DF2025] text-[#DF2025] rounded-xl hover:bg-red-50 transition-colors">
              <Calendar size={20} />
            </button>

            {/* Filter Dropdown matching */}
            <div className="relative">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-between gap-8 px-6 py-2 border border-[#DF2025] text-[#DF2025] rounded-full font-medium min-w-[120px]"
              >
                {filterStatus} <ChevronDown size={18} className={isFilterOpen ? 'rotate-180' : ''} />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                  {['New', 'In Progress', 'Resolved'].map((status) => (
                    <button 
                      key={status}
                      className={`w-full text-left px-6 py-3 text-sm hover:bg-gray-50 ${status === filterStatus ? 'text-[#DF2025]' : 'text-[#6F757E]'}`}
                      onClick={() => { setFilterStatus(status); setIsFilterOpen(false); }}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. Inquiries Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#050F24] font-semibold border-b border-gray-100">
                <th className="pb-6 pl-4">Customer</th>
                <th className="pb-6 px-4 text-center">Date</th>
                <th className="pb-6 px-4 text-center">Contact</th>
                <th className="pb-6 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="group hover:bg-gray-50 transition-colors">
                  <td className="py-6 pl-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden shrink-0">
                     <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#050F24]">{inquiry.customerName}</p>
                      <p className="text-xs text-gray-400">{inquiry.customerEmail}</p>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center text-[#6F757E]">{inquiry.date}</td>
                  <td className="py-6 px-4 text-center text-[#6F757E]">{inquiry.contact}</td>
                  <td className="py-6 px-4">
                    <div className="flex justify-center">
                      <span className={`flex items-center gap-2 font-medium ${getStatusColor(inquiry.status)}`}>
                        <div className={`w-2 h-2 rounded-full ${
                          inquiry.status === 'New' ? 'bg-[#DF2025]' : 
                          inquiry.status === 'In Progress' ? 'bg-[#27D095]' : 'bg-gray-400'
                        }`} />
                        {inquiry.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* 4. Pagination Section */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm">Showing 7 of 57 orders</p>
          <div className="flex gap-2 items-center">
            <button className="text-gray-400 px-4 hover:text-[#DF2025]">Prev</button>
            <button className="w-10 h-10 rounded-full bg-[#DF2025] text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200">2</button>
            <button className="text-[#DF2025] px-4 font-medium">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryManagement;