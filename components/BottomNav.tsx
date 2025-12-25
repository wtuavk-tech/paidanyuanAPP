import React from 'react';
import { ClipboardList, Layers, MessageCircleWarning, Headphones, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: '订单管理', icon: ClipboardList, badge: 0 },
    { label: '单库', icon: Layers, badge: 0 },
    { label: '急聊', icon: MessageCircleWarning, badge: 8 },
    { label: '订单售后', icon: Headphones, badge: 11 },
    { label: '个人中心', icon: User, badge: 0 },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe pt-2 px-4 z-50 h-[65px] flex justify-between items-start shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
      {tabs.map((tab, index) => {
        const isActive = activeTab === index;
        const Icon = tab.icon;
        return (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className="flex flex-col items-center justify-center w-full relative pt-1"
          >
            <div className={`relative transition-all duration-200 ${isActive ? 'text-primary transform scale-105' : 'text-gray-400'}`}>
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              {tab.badge > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-danger text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center border-2 border-white shadow-sm">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className={`text-[10px] mt-1 font-medium tracking-wide ${isActive ? 'text-primary font-bold' : 'text-gray-500'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;