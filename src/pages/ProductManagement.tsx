import React, { useState } from 'react';
import { Search, Bell, User, ChevronDown, Plus } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  type: string;
  suk: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  price: number;
  category: string;
  stock: number;
}

const ProductManagement: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  // Mock Data matching the Product List design
  const products: Product[] = [
    { id: '1', name: 'Product Name', type: 'Product Type', suk: 'EL-00552', status: 'In Stock', price: 130, category: 'Category', stock: 257 },
    { id: '2', name: 'Product Name', type: 'Product Type', suk: 'EL-00551', status: 'In Stock', price: 45, category: 'Category', stock: 504 },
    { id: '3', name: 'Product Name', type: 'Product Type', suk: 'EL-00550', status: 'Low Stock', price: 80, category: 'Category', stock: 12 },
    { id: '4', name: 'Product Name', type: 'Product Type', suk: 'EL-00549', status: 'In Stock', price: 500, category: 'Category', stock: 59 },
    { id: '5', name: 'Product Name', type: 'Product Type', suk: 'EL-00548', status: 'Low Stock', price: 15, category: 'Category', stock: 4 },
    { id: '6', name: 'Product Name', type: 'Product Type', suk: 'EL-00547', status: 'In Stock', price: 500, category: 'Category', stock: 173 },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'In Stock': return 'text-[#27D095] bg-[#E9FAF3]';
      case 'Low Stock': return 'text-[#FFA500] bg-[#FFF4E5]';
      case 'Out of Stock': return 'text-[#DF2025] bg-[#FDE9E9]';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="p-8">
      {/* 1. Top Navbar */}
      <div className="flex justify-between items-center mb-8 w-full">
        <div className="flex items-center gap-8 flex-1">
          <h1 className="text-xl font-semibold text-[#0f172a]">Product List</h1>
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

      {/* 2. Product Management Card */}
      <div className="bg-white rounded-3xl border border-[#E1E1E1] shadow-sm p-8">
        <div className="flex justify-between items-start mb-8">
          <div className="max-w-md">
            <h2 className="text-xl font-bold text-[#050F24]">Product Management</h2>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
              All the products available in the system are listed below with their respective SUKs. Click on a specific product to view or edit its complete details.
            </p>
          </div>
          
          <div className="flex gap-4 items-end">
            {/* Category Filter */}
            <div className="relative">
              <label className="block text-xs font-medium text-[#DF2025] mb-2">Category</label>
              <button 
                onClick={() => { setIsCategoryOpen(!isCategoryOpen); setIsStatusOpen(false); }}
                className="flex items-center justify-between gap-8 px-6 py-2 border border-[#DF2025] text-[#DF2025] rounded-full font-medium min-w-[140px]"
              >
                {categoryFilter} <ChevronDown size={18} className={isCategoryOpen ? 'rotate-180' : ''} />
              </button>
              {isCategoryOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                  {['All', 'Tiles', 'Stones', 'Fixtures'].map((cat) => (
                    <button 
                      key={cat}
                      className={`w-full text-left px-6 py-3 text-sm hover:bg-gray-50 ${cat === categoryFilter ? 'text-[#DF2025]' : 'text-[#6F757E]'}`}
                      onClick={() => { setCategoryFilter(cat); setIsCategoryOpen(false); }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Stock Status Filter */}
            <div className="relative">
              <label className="block text-xs font-medium text-[#DF2025] mb-2">Stock Status</label>
              <button 
                onClick={() => { setIsStatusOpen(!isStatusOpen); setIsCategoryOpen(false); }}
                className="flex items-center justify-between gap-8 px-6 py-2 border border-[#DF2025] text-[#DF2025] rounded-full font-medium min-w-[140px]"
              >
                {statusFilter} <ChevronDown size={18} className={isStatusOpen ? 'rotate-180' : ''} />
              </button>
              {isStatusOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                  {['All', 'In Stock', 'Low Stock', 'Out of Stock'].map((status) => (
                    <button 
                      key={status}
                      className={`w-full text-left px-6 py-3 text-sm hover:bg-gray-50 ${status === statusFilter ? 'text-[#DF2025]' : 'text-[#6F757E]'}`}
                      onClick={() => { setStatusFilter(status); setIsStatusOpen(false); }}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Add New Product Button */}
            <button className="flex items-center gap-2 bg-[#DF2025] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#b3191d] transition-colors h-[48px]">
              Add new product
            </button>
          </div>
        </div>

        {/* 3. Products Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-0">
            <thead>
              <tr className="text-[#050F24] font-semibold border-b border-gray-100">
                <th className="pb-6 pl-4">Product</th>
                <th className="pb-6 px-4">SUK</th>
                <th className="pb-6 px-4">Status</th>
                <th className="pb-6 px-4">Price</th>
                <th className="pb-6 px-4">Category</th>
                <th className="pb-6 px-4">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((product) => (
                <tr key={product.id} className="group hover:bg-gray-50 transition-colors">
                  <td className="py-6 pl-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F3F4F6] rounded-full flex items-center justify-center shrink-0">
                      {/* Placeholder for product icon */}
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#050F24]">{product.name}</p>
                      <p className="text-xs text-gray-400">{product.type}</p>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-[#6F757E]">{product.suk}</td>
                  <td className="py-6 px-4">
                    <span className={`px-4 py-1.5 rounded-lg text-xs font-bold ${getStatusStyles(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-[#6F757E] font-medium">₱{product.price}</td>
                  <td className="py-6 px-4 text-[#6F757E]">{product.category}</td>
                  <td className="py-6 px-4 text-[#6F757E]">{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. Pagination */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm">Showing 6 of 6 products</p>
          <div className="flex gap-4 items-center">
            <button className="text-gray-400 font-medium hover:text-[#DF2025]">Prev</button>
            <button className="w-10 h-10 rounded-full bg-[#DF2025] text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200">2</button>
            <button className="text-[#DF2025] font-medium">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;