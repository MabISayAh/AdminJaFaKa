import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  List, 
  Layout, 
  TrendingUp, 
  MessageSquare, 
  Users, 
  Settings 
} from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: <Home size={24} />,          label: 'Dashboard', path: '/' },
    { icon: <Package size={24} />,       label: 'Order',     path: '/orders' },
    { icon: <List size={24} />,          label: 'Products',  path: '/products' },
    { icon: <Layout size={24} />,        label: 'Inventory', path: '/inventory' },
    { icon: <TrendingUp size={24} />,    label: 'Reports',   path: '/reports' },
    { icon: <MessageSquare size={24} />, label: 'Inquiries', path: '/inquiries' },
    { icon: <Users size={24} />,         label: 'Users',     path: '/users' },
    { icon: <Settings size={24} />,      label: 'Settings',  path: '/settings' },
  ];

  return (

    
    <aside 
      className={`fixed left-0 top-0 h-full bg-white transition-all duration-300 ease-in-out z-50 shadow-lg overflow-hidden ${isExpanded ? 'w-55' : 'w-20'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo Section */}
      <div className="flex items-center h-24 w-full px-4">
        <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain shrink-0" />
        {isExpanded && (
          <div className="ml-3 flex flex-col leading-none">
            <span className="font-semibold text-[#050F24] text-lg whitespace-nowrap">Tile and</span>
            <span className="font-semibold text-[#050F24] text-lg whitespace-nowrap">Stone Builders</span>
          </div>
        )}
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex flex-col w-full">
        {menuItems.map((item, idx) => {
          // Check if the current URL matches the item path
          const isActive = location.pathname === item.path;
          
          return (
            <div 
              key={idx} 
              onClick={() => navigate(item.path)}
              className={`flex items-center cursor-pointer transition-all duration-200 w-full h-16
                ${isActive 
                  ? 'bg-[#DF2025] text-white' 
                  : 'text-[#050F24] hover:bg-gray-100'
                }`}
            >
              <div className="w-20 min-w-[80px] flex justify-center items-center shrink-0">
                {item.icon}
              </div>
              
              {isExpanded && (
                <span className="font-semibold text-lg whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;