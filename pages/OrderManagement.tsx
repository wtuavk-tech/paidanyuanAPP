import React, { useState } from 'react';
import { Search, Filter, Phone, MapPin, ChevronDown, MoreHorizontal, MessageCircleWarning } from 'lucide-react';
import { Order, OrderStatus } from '../types';

const mockOrders: Order[] = [
  {
    id: '2025-12-09 13:42:28',
    type: '水管维修',
    subType: '库',
    subTypeColor: 'bg-orange-500',
    title: '水管维修',
    time: '2025-12-09 13:42:28',
    phone: '17867678654,1235',
    address: '上海市浦东新区打打分',
    status: OrderStatus.PENDING,
    tags: ['鱼'],
    isError: true
  },
  {
    id: '2025-12-09 16:27:42',
    type: '家具拆装',
    subType: '库',
    subTypeColor: 'bg-orange-500',
    title: '家具拆装',
    time: '2025-12-09 16:27:42',
    phone: '13905447356',
    address: '广东省广州市白云区白云区人合会小...',
    status: OrderStatus.DISPATCHED,
    tags: ['网2']
  },
  {
    id: '2025-11-28 15:00:21',
    type: '保洁清洗',
    subType: '库',
    subTypeColor: 'bg-orange-500',
    title: '家庭保洁',
    time: '2025-11-28 15:00:21',
    phone: '13800138000',
    address: '北京市朝阳区三里屯SOHO',
    status: OrderStatus.COMPLETED,
    tags: ['美团']
  }
];

const OrderManagement: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('全部');

  return (
    <div className="flex flex-col h-full bg-bg pb-24">
      {/* Header Gradient Stats */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 pb-5 pt-10 px-4 text-white rounded-b-[2rem] shadow-lg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
           <svg width="200" height="200" viewBox="0 0 100 100" fill="white"><circle cx="50" cy="50" r="40"/></svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 transform -translate-x-4 translate-y-4">
           <svg width="100" height="100" viewBox="0 0 100 100" fill="white"><rect x="10" y="10" width="80" height="80" rx="20"/></svg>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
            <div className="text-center font-bold text-lg mb-6 flex items-center justify-center gap-1 opacity-90">
                订单数据 <ChevronDown className="w-4 h-4 opacity-70" />
            </div>

            <div className="grid grid-cols-3 gap-4 w-full text-center">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-orange-200 drop-shadow-sm font-mono">0</div>
                <div className="text-xs text-blue-100 mt-1 opacity-80">未派单数</div>
              </div>
              <div className="flex flex-col items-center relative">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-blue-300/30"></div>
                <div className="absolute right-0 top-2 bottom-2 w-px bg-blue-300/30"></div>
                <div className="text-2xl font-bold text-emerald-200 drop-shadow-sm font-mono">0</div>
                <div className="text-xs text-blue-100 mt-1 opacity-80">收款率</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-white drop-shadow-sm font-mono">0.00</div>
                <div className="text-xs text-blue-100 mt-1 opacity-80">当日业绩</div>
              </div>
            </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-20 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
        {['催单', '收藏', '全部', '未派单', '已派单', '已接'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-sm font-medium whitespace-nowrap transition-all duration-300 px-2 py-1 rounded-full relative ${
              activeFilter === filter 
              ? 'text-primary font-bold' 
              : filter === '未派单' ? 'text-orange-500' : filter === '催单' ? 'text-cyan-600' : 'text-gray-500'
            }`}
          >
            {filter}
            {activeFilter === filter && (
               <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-primary rounded-t-full shadow-sm"></div>
            )}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 bg-white border-b border-gray-50 flex items-center gap-3">
        <div className="flex-1 bg-gray-100/80 rounded-full flex items-center px-4 py-2 transition-colors focus-within:bg-blue-50/50 focus-within:ring-1 focus-within:ring-blue-100">
          <input 
            type="text" 
            placeholder="输入订单号/手机号/客户名称" 
            className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400 font-medium"
          />
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <div className="flex flex-col items-center justify-center text-gray-500 gap-0.5">
            <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <span className="text-[10px] scale-90">快找</span>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-500 gap-0.5">
             <Filter className="w-5 h-5 text-gray-500" />
             <span className="text-[10px] scale-90">筛选</span>
        </div>
      </div>

      {/* Order List */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl p-4 shadow-card hover:shadow-md transition-shadow duration-200 border border-gray-50 relative overflow-hidden">
            
            {/* Status Bar Top */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                 <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm ${order.status === OrderStatus.DISPATCHED ? 'bg-primary' : 'bg-success'}`}>
                    {order.status === OrderStatus.DISPATCHED ? '派' : '录'}
                 </div>
                 <span className="text-gray-400 text-xs font-mono tracking-tight">{order.id}</span>
              </div>
              <button className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors">
                录价格
              </button>
            </div>

            {/* Title Line */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <h3 className="text-[17px] font-bold text-gray-800 leading-tight">{order.title}</h3>
              <span className={`${order.subTypeColor} text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm`}>{order.subType}</span>
              {order.tags?.map(tag => (
                 <span key={tag} className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-yellow-200">{tag}</span>
              ))}
              <div className="flex-1"></div>
              {order.status === OrderStatus.DISPATCHED && (
                  <span className="bg-blue-50 text-primary text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 border border-blue-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>已派单
                  </span>
              )}
              {order.isError && (
                  <span className="bg-red-50 text-danger text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 border border-red-100">
                      <span className="bg-danger text-white rounded-full w-3 h-3 flex items-center justify-center text-[8px] font-bold">!</span> 报错
                  </span>
              )}
            </div>

            {/* Content */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                    <Phone size={14} fill="currentColor" className="opacity-80"/>
                </div>
                <span className="text-lg font-bold text-gray-700 tracking-wide font-mono">{order.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    <MapPin size={14} fill="currentColor" className="opacity-80"/>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-600 leading-snug break-words">{order.address}</div>
                </div>
                <span className="bg-blue-100 text-primary text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap">0人</span>
              </div>
              {order.status === OrderStatus.DISPATCHED && (
                   <div className="flex items-start gap-2 bg-blue-50/80 p-2.5 rounded-lg text-xs text-blue-700 leading-relaxed border border-blue-100/50">
                        <MessageCircleWarning size={14} className="mt-0.5 flex-shrink-0"/>
                        <span className="opacity-90">家具拆装根据具体情况师傅沟通报价；没...</span>
                   </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between border-t border-gray-50 pt-3">
              <div className="text-gray-400 text-xs font-medium flex items-center gap-1 hover:text-gray-600">
                更多 <MoreHorizontal size={14} />
              </div>
              <div className="flex gap-2">
                {order.status === OrderStatus.PENDING ? (
                    <>
                        <button className="border border-gray-200 text-gray-600 text-xs font-medium px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">修改</button>
                        <button className="border border-gray-200 text-gray-600 text-xs font-medium px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">解决</button>
                        <button className="border border-gray-200 text-gray-600 text-xs font-medium px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">处理</button>
                    </>
                ) : (
                    <>
                        <button className="border border-gray-200 text-gray-600 text-xs font-medium px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">报错</button>
                        <button className="border border-gray-200 text-gray-600 text-xs font-medium px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">作废</button>
                        <button className="border border-gray-200 text-gray-600 text-xs font-medium px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">完成</button>
                    </>
                )}
                
                <button className="border border-primary text-primary text-xs font-bold px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors">复制</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;