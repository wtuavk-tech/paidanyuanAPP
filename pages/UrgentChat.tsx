import React from 'react';
import { Search, User } from 'lucide-react';
import { ChatMessage } from '../types';

const mockChats: ChatMessage[] = [
  {
    id: '1',
    name: '张三（电话组一组）',
    role: 'yuyuyu',
    avatar: 'https://picsum.photos/100/100?random=1',
    lastMessage: 'yuyuyu',
    time: '11/24',
    unreadCount: 0,
    isOnline: true,
    type: 'group'
  },
  {
    id: '2',
    name: '管理员（售后部）',
    role: '广东分公司',
    avatar: 'https://picsum.photos/100/100?random=2',
    lastMessage: '广东分公司',
    time: '10/23',
    unreadCount: 0,
    isOnline: true,
    type: 'group'
  },
  {
    id: '3',
    name: '张水明',
    role: '在上里',
    avatar: 'https://picsum.photos/100/100?random=3',
    lastMessage: '在上里',
    time: '10/14',
    unreadCount: 0,
    isOnline: true,
    type: 'individual'
  },
  {
    id: '4',
    name: '第三方店铺客服（电话组五组）',
    role: '就是觉得',
    avatar: 'https://picsum.photos/100/100?random=4',
    lastMessage: '就是觉得',
    time: '09/10',
    unreadCount: 0,
    isOnline: false,
    type: 'group'
  }
];

const UrgentChat: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white pb-24">
       {/* Top Header Background */}
       <div className="bg-gradient-to-b from-blue-50 via-white to-white h-64 absolute top-0 left-0 right-0 z-0"></div>
       
       <div className="relative z-10 flex flex-col h-full">
         <div className="px-5 pt-12 pb-2">
             {/* 3D Graphic Placeholder */}
             <div className="flex justify-center mb-8 relative h-20">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-12 -translate-y-8 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl rotate-[-12deg] shadow-lg opacity-90 z-10 flex items-center justify-center">
                    <div className="w-8 h-2 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform translate-x-2 -translate-y-4 w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl rotate-[12deg] shadow-lg opacity-90 z-20 flex items-center justify-center">
                     <div className="w-8 h-8 rounded-full bg-white/30"></div>
                </div>
             </div>

             <div className="bg-white/90 backdrop-blur-md rounded-full flex items-center px-4 py-3 shadow-float border border-white/50">
                <span className="text-gray-400 mr-2 text-sm font-medium">搜索</span>
                <input className="bg-transparent flex-1 outline-none text-sm text-gray-700" />
                <Search className="text-gray-400 w-5 h-5" />
             </div>

             <div className="flex justify-around mt-8 mb-4 border-b border-gray-100 pb-2">
                 <div className="flex flex-col items-center pb-2 px-4 cursor-pointer">
                    <span className="text-gray-400 text-base font-medium transition-colors hover:text-gray-600">订单群聊</span>
                 </div>
                 <div className="flex flex-col items-center relative pb-2 px-4 cursor-pointer">
                    <span className="text-gray-800 font-bold text-xl">个聊</span>
                    <div className="absolute bottom-0 w-6 h-1 bg-primary rounded-full shadow-sm"></div>
                 </div>
             </div>
         </div>

         {/* List */}
         <div className="flex-1 overflow-y-auto">
            {mockChats.map(chat => (
                <div key={chat.id} className="flex items-center px-5 py-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer group">
                    <div className="relative mr-4">
                        <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-sm group-hover:scale-105 transition-transform" />
                        {chat.isOnline ? (
                             <span className="absolute bottom-0 right-0 bg-success border-2 border-white w-3.5 h-3.5 rounded-full"></span>
                        ) : (
                            <span className="absolute bottom-0 right-0 bg-gray-300 border-2 border-white w-3.5 h-3.5 rounded-full"></span>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="text-[15px] font-bold text-gray-800 truncate pr-2">{chat.name}</h4>
                            <span className="text-gray-400 text-xs font-mono">{chat.time}</span>
                        </div>
                        <p className="text-gray-500 text-xs truncate">{chat.role}</p>
                    </div>
                </div>
            ))}
         </div>
       </div>
    </div>
  );
};

export default UrgentChat;