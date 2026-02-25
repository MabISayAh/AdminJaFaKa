import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import OrderManagement from './pages/OrderManagement';
import ProductManagement from './pages/ProductManagement'; 
import InquiryManagement from './pages/InquiryManagement';
import UserManagement from './pages/UserManagement';
import InventoryManagement from './pages/InventoryManagement';
import SalesReport from './pages/SalesReport';
import SystemSetting from './pages/SystemSetting';

// Order
import ViewOrder from './components/ordermanage/ViewOrder';

// Inventory
import ProductLog from './components/inventorymanage/ProductLog';
import AdjustmentForm from './components/inventorymanage/AdjustmentForm';
import BatchConsumption from './components/inventorymanage/BatchConsumption';
import ViewAdjustment from './components/inventorymanage/ViewAdjustment';

// Inquiry
import ViewInquiry from './components/inquirymanage/ViewInquiry';

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
            <Route path="/inventory" element={<InventoryManagement />} />
            <Route path="/reports" element={<SalesReport />} />
            <Route path="/settings" element={<SystemSetting />} />
            {/* Dashboard */}
            {/* Order */}
            <Route path="/orders/:orderId" element={<ViewOrder />} />
            {/* Product */}
            {/* Inventory */}
            <Route path="/inventory/:id" element={<ProductLog />} />
            <Route path="/inventory/:id/adjustment" element={<AdjustmentForm />} />
            <Route path="/inventory/:id/batch-consumption" element={<BatchConsumption />} />
            <Route path="/inventory/:id/view-adjustment" element={<ViewAdjustment />} />
            {/* Sales */}
            {/* Inquiry */}
            <Route path="/inquiries/:inquiryId" element={<ViewInquiry />} />
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