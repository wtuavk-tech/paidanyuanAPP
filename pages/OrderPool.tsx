import React from 'react';
import { Search, Filter, MapPin } from 'lucide-react';

const mockPoolOrders = [
  {
    id: '2025-12-23 17:47:56',
    title: '摄影棚租赁',
    tags: [
        { label: '库', color: 'bg-orange-500' },
        { label: '催8', color: 'bg-emerald-400' },
        { label: '美团', color: 'bg-yellow-400' }
    ],
    address: '河北省保定市竞秀区建南街道',
    status: '未派单',
    people: 0
  },
  {
    id: '2025-12-23 17:47:18',
    title: '打印机维修',
    tags: [
        { label: '库', color: 'bg-orange-500' },
        { label: '线7', color: 'bg-yellow-400' }
    ],
    address: '陕西省西安市雁塔区西安高新华府',
    status: '未派单',
    people: 1
  },
  {
    id: '2025-12-23 14:28:49',
    title: '摄影棚租赁',
    tags: [
        { label: '库', color: 'bg-orange-500' },
        { label: '美团', color: 'bg-yellow-400' }
    ],
    address: '河北省保定市竞秀区建南街道',
    status: '未派单',
    people: 0
  }
];

const OrderPool: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-bg pb-24">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 pt-8 pb-4 text-center text-lg font-bold text-gray-800 shadow-sm border-b border-blue-200/50">
        单库
      </div>
      
      {/* Search */}
      <div className="px-4 py-3 flex gap-3 items-center bg-white border-b border-gray-50">
        <div className="flex-1 bg-gray-100 rounded-full flex items-center px-4 py-2 transition-colors focus-within:bg-blue-50/50 focus-within:ring-1 focus-within:ring-blue-100">
            <input 
                type="text" 
                placeholder="输入订单号/手机号查找" 
                className="bg-transparent border-none outline-none w-full text-sm text-gray-700 font-medium placeholder-gray-400"
            />
            <Search className="w-5 h-5 text-gray-400" />
        </div>
        <div className="flex flex-col items-center justify-center text-gray-500 text-[10px] gap-0.5">
             <Filter className="w-5 h-5 mb-0.5" />
             <span>筛选</span>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {mockPoolOrders.map((order, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4 shadow-card border border-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-success flex items-center justify-center text-white text-[10px] font-bold">录</div>
                <span className="text-gray-400 text-xs font-mono">{order.id}</span>
            </div>

            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[17px] font-bold text-gray-800">{order.title}</h3>
                    {order.tags.map((tag, tIdx) => (
                        <span key={tIdx} className={`${tag.color} text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm`}>{tag.label}</span>
                    ))}
                </div>
                <div className="flex items-center gap-1 text-orange-500 text-xs font-medium bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                   <div className="w-3 h-3 rounded-full bg-orange-500 flex items-center justify-center text-white text-[8px] font-bold">!</div>
                   {order.status}
                </div>
            </div>

            <div className="flex items-start gap-3 mb-5">
                 <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    <MapPin size={12} fill="currentColor" />
                 </div>
                 <span className="text-gray-600 text-sm leading-snug flex-1">{order.address}</span>
                 {order.people > 0 ? (
                     <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">{order.people}人</span>
                 ) : (
                     <span className="bg-blue-300 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">0人</span>
                 )}
            </div>

            <div className="flex justify-end border-t border-gray-50 pt-3">
                <button className="border border-gray-300 text-gray-700 font-bold rounded-full px-6 py-1.5 text-xs hover:bg-gray-50 hover:border-gray-400 transition-colors">派单</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPool;