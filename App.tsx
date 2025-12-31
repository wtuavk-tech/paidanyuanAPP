import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import OrderManagement from './pages/OrderManagement';
import OrderPool from './pages/OrderPool';
import UrgentChat from './pages/UrgentChat';
import AfterSales from './pages/AfterSales';
import PersonalCenter from './pages/PersonalCenter';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <OrderManagement />;
      case 1:
        return <OrderPool />;
      case 2:
        return <UrgentChat />;
      case 3:
        return <AfterSales />;
      case 4:
        return <PersonalCenter />;
      default:
        return <OrderManagement />;
    }
  };

  return (
    <div className="w-full h-screen bg-bg flex flex-col overflow-hidden max-w-md mx-auto shadow-2xl relative">
      <div className="flex-1 overflow-hidden relative">
        {renderContent()}
      </div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;