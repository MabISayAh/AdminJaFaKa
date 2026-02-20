import React from 'react';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import RevenueChart from './components/RevenueChart';
import OrderStatusChart from './components/OrderStatusChart';
import ProductTable from './components/ProductTable';
import CustomerList from './components/CustomerList';
import BranchSalesChart from './components/BranchSalesChart';
import { ShoppingCart, Clock, AlertTriangle, TrendingUp, Search, Bell, User } from 'lucide-react';

// Mock Data for Plug-and-Play
const revenueData = [
  { name: 'Jan', facebook: 40, website: 100 },
  { name: 'Feb', facebook: 50, website: 90 },
  { name: 'Mar', facebook: 120, website: 110 },
  { name: 'Apr', facebook: 150, website: 130 },
  { name: 'May', facebook: 210, website: 180 },
  { name: 'Jun', facebook: 180, website: 140 },
  { name: 'Jul', facebook: 160, website: 150 },
  { name: 'Aug', facebook: 200, website: 230 },
];

const statusData = [
  { name: 'Pending', value: 43, color: '#f97316' },
  { name: 'Processing', value: 27, color: '#0ea5e9' },
  { name: 'Paid', value: 16, color: '#22c55e' },
  { name: 'Completed', value: 33, color: '#ef4444' },
];

const productData = [
  { name: "Product Name", type: "Product Type", orders: 8000, price: 130, category: "Category", refunds: "> 13" },
  { name: "Product Name", type: "Product Type", orders: 3000, price: 45, category: "Category", refunds: "> 18" },
  { name: "Product Name", type: "Product Type", orders: 6000, price: 80, category: "Category", refunds: "< 11" },
  { name: "Product Name", type: "Product Type", orders: 4000, price: 500, category: "Category", refunds: "> 18" },
  { name: "Product Name", type: "Product Type", orders: 2000, price: 15, category: "Category", refunds: "< 10" },
];

const customerData = [
  { name: "Rose Pajarito", location: "Barit" },
  { name: "Russell Palcoto", location: "Bulangon" },
  { name: "Aliyah Segovia", location: "Barit" },
  { name: "Lee Mingyu", location: "Rizal" },
];

const branchData = [
  { name: 'Barit', value: 40, color: '#f97316' },
  { name: 'Rizal', value: 30, color: '#22c55e' },
  { name: 'Bulangon', value: 30, color: '#ef4444' },
];

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      <Sidebar />
      
      {/* Scrollable Main Area */}
      <main className="ml-20 flex-1 p-8 h-screen overflow-y-auto">
        
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 w-80 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm" />
            </div>
            <Bell className="text-gray-400 cursor-pointer" />
            <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
              <User size={20} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="flex flex-wrap gap-6 mb-8">
          <MetricCard title="Total Orders" value="57" color="bg-green-500" icon={ShoppingCart} />
          <MetricCard title="Pending Orders" value="8" color="bg-sky-400" icon={Clock} />
          <MetricCard title="Low Stock" value="25" color="bg-orange-400" icon={AlertTriangle} />
          <MetricCard title="Revenue" value="35k" color="bg-red-500" icon={TrendingUp} />
        </div>

        {/* Middle Section: Main Chart + Status */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <div className="xl:col-span-2">
            <RevenueChart data={revenueData} />
          </div>
          <div className="xl:col-span-1">
            <OrderStatusChart data={statusData} />
          </div>
        </div>

        {/* Bottom Section: Table + Customers/Branch */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <ProductTable products={productData} />
          </div>
          <div className="xl:col-span-1 space-y-8">
            <CustomerList customers={customerData} />
            <BranchSalesChart data={branchData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;