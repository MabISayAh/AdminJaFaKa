import React, { useState } from 'react';
import { Calendar, Filter, Search, Bell, User } from 'lucide-react';

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  orderId: string;
  product: string;
  date: string;
  status: 'Pending' | 'Paid' | 'Processing' | 'Completed' | 'Refunded';
  revenue: number;
}

const OrderManagement: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Expanded Mock Data to fill the screen
  const orders: Order[] = [
    { id: '1', customerName: 'Aliyah Segovia', customerEmail: 'asegovia@gmail.com', orderId: 'EL-00552', product: 'Product', date: '28 Sep, 2025', status: 'Pending', revenue: 3500 },
    { id: '2', customerName: 'Maverick Verdida', customerEmail: 'mverdida@gmail.com', orderId: 'EL-00551', product: 'Product', date: '28 Sep, 2025', status: 'Paid', revenue: 20000 },
    { id: '3', customerName: 'Russell Palcoto', customerEmail: 'rpalcoto@gmail.com', orderId: 'EL-00550', product: 'Product', date: '28 Sep, 2025', status: 'Pending', revenue: 500 },
    { id: '4', customerName: 'Rose Pajarito', customerEmail: 'rpajarito@gmail.com', orderId: 'EL-00549', product: 'Product', date: '28 Sep, 2025', status: 'Pending', revenue: 3070 },
    { id: '5', customerName: 'Venelyn Cordova', customerEmail: 'vcordova@gmail.com', orderId: 'EL-00548', product: 'Product', date: '28 Sep, 2025', status: 'Paid', revenue: 23500 },
    { id: '6', customerName: 'Joan Sibayan', customerEmail: 'jsibayan@gmail.com', orderId: 'EL-00547', product: 'Product', date: '28 Sep, 2025', status: 'Paid', revenue: 7000 },
    { id: '7', customerName: 'Lindsay Mahusay', customerEmail: 'lmahusay@gmail.com', orderId: 'EL-00546', product: 'Product', date: '28 Sep, 2025', status: 'Pending', revenue: 10030 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-[#27D095] bg-green-50';
      case 'Pending': return 'text-[#FFA500] bg-orange-50';
      case 'Completed': return 'text-[#DF2025] bg-red-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="p-8">
      {/* 1. Top Navbar - Now properly closed so content falls below it */}
      <div className="flex justify-between items-center mb-8 w-full">
        <div className="flex items-center gap-8 flex-1">
          <h1 className="text-xl font-semibold text-[#0f172a]">Order List</h1>
          <div className="relative flex-1 max-w-xl group">
            <span className="absolute inset-y-0 right-4 flex items-center text-[#6F757E] pointer-events-none group-focus-within:text-[#DF2025] transition-colors">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pr-10 pl-4 py-2 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DF2025] transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-8">
          <button className="p-2 text-[#050F24] hover:text-[#DF2025] transition-colors">
            <Bell size={24} />
          </button>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#DF2025] transition-all overflow-hidden">
            <User size={20} className="text-gray-700" />
          </div>
        </div>
      </div>

      {/* 2. Order Management Card */}
      <div className="bg-white rounded-3xl border border-[#E1E1E1] shadow-sm p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-xl font-bold text-[#050F24]">Order Management</h2>
            <p className="text-gray-400 text-sm mt-1">
              All the orders placed by different customers are listed below with their respective Order IDs.
            </p>
          </div>
          
          <div className="flex gap-3 relative">
            <button className="p-2 border border-[#DF2025] text-[#DF2025] rounded-xl hover:bg-red-50 transition-colors">
              <Calendar size={24} />
            </button>

            <div className="relative">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-8 px-6 py-2 border border-[#DF2025] text-[#DF2025] rounded-full font-medium"
              >
                {filterStatus} <Filter size={18} />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                  {['All', 'Pending', 'Processing', 'Paid', 'Completed', 'Refunded'].map((status) => (
                    <button 
                      key={status}
                      className="w-full text-left px-6 py-3 text-sm hover:bg-gray-50 text-[#6F757E] hover:text-[#DF2025]"
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

        {/* 3. Orders Table - Added padding to fix squashed text */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[#050F24] font-semibold border-b border-gray-100">
                <th className="pb-4 pl-4 min-w-[200px]">Customer</th>
                <th className="pb-4 px-4">Order ID</th>
                <th className="pb-4 px-4">Product</th>
                <th className="pb-4 px-4">Date</th>
                <th className="pb-4 px-4">Status</th>
                <th className="pb-4 px-4">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="group hover:bg-gray-50 transition-colors">
                  <td className="py-4 pl-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden shrink-0" />
                    <div>
                      <p className="font-semibold text-[#050F24]">{order.customerName}</p>
                      <p className="text-xs text-gray-400">{order.customerEmail}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[#6F757E]">{order.orderId}</td>
                  <td className="py-4 px-4 text-[#6F757E]">{order.product}</td>
                  <td className="py-4 px-4 text-[#6F757E]">{order.date}</td>
                  <td className="py-4 px-4">
                    <span className={`flex items-center gap-2 w-fit px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      <div className={`w-2 h-2 rounded-full ${
                        order.status === 'Paid' ? 'bg-[#27D095]' : 
                        order.status === 'Pending' ? 'bg-[#FFA500]' : 'bg-[#DF2025]'
                      }`} />
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-semibold text-[#6F757E]">₱{order.revenue}</td>
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

export default OrderManagement;