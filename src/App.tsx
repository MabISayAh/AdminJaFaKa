import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import OrderManagement from './pages/OrderManagement';
import ProductManagement from './pages/ProductManagement'; 
import InquiryManagement from './pages/InquiryManagement';
import UserManagement from './pages/UserManagement';
import ViewOrder from './components/ordermanage/ViewOrder';
import ViewInquiry from './components/ViewInquiry';
// Sa taas mo iimport ^

function App() {
  return (
    <div className="flex min-h-screen font-sans relative">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="flex relative z-10 w-full">
        <Sidebar />
              
        {/* para maconnect yung page sa mga buttons ng sidebar */}
        {/* import mo muna sa taas */}
        <main className="ml-20 flex-1 p-8 min-h-screen">
          <Routes>
            {/* Sidebar */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/inquiries" element={<InquiryManagement />} />
            <Route path="/users" element={<UserManagement />} />
            {/* Dashboard */}
            {/* Order */}
            <Route path="/orders/:orderId" element={<ViewOrder />} />
            <Route path="/orders" element={<OrderManagement />} />
            {/* Product */}
            {/* Inventory */}
            {/* Sales */}
            {/* Inquiry */}
            <Route path="/inventory" element={<ViewInquiry />} />
            {/* Users */}
            {/* Settings */}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;