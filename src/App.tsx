import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import OrderManagement from './pages/OrderManagement';
import ViewOrder from './components/ordermanage/ViewOrder';
import ProductManagement from './pages/ProductManagement'; 
import InquiryManagement from './pages/InquiryManagement';
import UserManagement from './pages/UserManagement';
import InventoryManagement from './pages/InventoryManagement';
import ProductLog from './pages/inventory/ProductLog';
import AdjustmentForm from './pages/inventory/AdjustmentForm';
import BatchConsumption from './pages/inventory/BatchConsumption';
import ViewAdjustment from './pages/inventory/ViewAdjustment';

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
            {/* Dashboard */}
            {/* Order */}
            <Route path="/orders/:orderId" element={<ViewOrder />} />
            <Route path="/orders" element={<OrderManagement />} />
            {/* Product */}
            {/* Inventory */}
            <Route path="/inventory/:id" element={<ProductLog />} />
            <Route path="/inventory/:id/adjustment" element={<AdjustmentForm />} />
            <Route path="/inventory/:id/batch-consumption" element={<BatchConsumption />} />
            <Route path="/inventory/:id/view-adjustment" element={<ViewAdjustment />} />
            {/* Sales */}
            {/* Inquiry */}
            {/* Users */}
            {/* Settings */}

            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/inventory" element={<InventoryManagement />} />
            <Route path="/inventory/:id" element={<ProductLog />} />
            <Route path="/inventory/:id/adjustment" element={<AdjustmentForm />} />
            <Route path="/inventory/:id/batch-consumption" element={<BatchConsumption />} />
            <Route path="/inventory/:id/view-adjustment" element={<ViewAdjustment />} />
      
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;