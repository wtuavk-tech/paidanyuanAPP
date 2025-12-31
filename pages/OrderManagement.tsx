import React, { useState } from 'react';
import { Search, Filter, Phone, MapPin, ChevronDown, ChevronUp, MoreHorizontal, MessageCircle, ChevronRight, CheckCircle, Circle } from 'lucide-react';
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
  const [isStatsExpanded, setIsStatsExpanded] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  // Filter State
  const [dateRangeFilter, setDateRangeFilter] = useState('近三个月');
  const [dataType, setDataType] = useState<'team' | 'individual'>('individual');

  const statsData = [
    { label: '未派单数', value: '12', color: 'text-orange-400' },
    { label: '收款率', value: '98%', color: 'text-emerald-500' },
    { label: '当日业绩', value: '8,650.00', color: 'text-blue-500' },
    { label: '当日微信业绩', value: '2,100', color: 'text-blue-500' },
    { label: '总单数', value: '45', color: 'text-blue-500' },
    { label: '今日派单', value: '38', color: 'text-gray-800' },
    { label: '往日派单', value: '5', color: 'text-blue-500' },
    { label: '他派', value: '3', color: 'text-blue-500' },
    { label: '自派', value: '35', color: 'text-blue-500' },
    { label: '单库派单数', value: '12', color: 'text-blue-500' },
    { label: '自动线下业绩', value: '1,500', color: 'text-blue-500' },
    { label: '手动线下业绩', value: '800', color: 'text-blue-500' },
    { label: '自动平台业绩', value: '4,200', color: 'text-blue-500' },
    { label: '手动平台业绩', value: '2,150', color: 'text-blue-500' },
    { label: '取消订单', value: '2', color: 'text-red-500' },
    { label: '线下业绩', value: '2,300', color: 'text-blue-500' },
    { label: '平台业绩', value: '6,350', color: 'text-blue-500' },
    { label: '派单率', value: '95%', color: 'text-blue-500' },
  ];

  return (
    <div className="flex flex-col h-full bg-bg pb-24 relative">
      
      {/* --- Filter Overlay --- */}
      {isFilterOpen && (
        <div className="absolute inset-0 z-50 flex flex-col bg-bg">
          <div className="bg-white px-4 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">按条件选择</h2>
            <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 p-1">
               <ChevronUp className="rotate-180" /> {/* Simulate Close/Down */}
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="bg-white mb-3 px-4">
               {['派单方式', '地域', '师傅', '来源', '服务项目'].map((item, idx) => (
                 <div key={item} className={`flex items-center justify-between py-4 ${idx !== 4 ? 'border-b border-gray-50' : ''}`}>
                    <span className="text-base text-gray-800 font-medium">{item}</span>
                    <div className="flex items-center gap-2 text-gray-400">
                        {item === '地域' ? (
                            <span className="text-sm text-gray-300">请输入地域</span>
                        ) : item === '师傅' ? (
                            <span className="text-sm text-gray-300">请输入</span>
                        ) : item === '服务项目' ? (
                            <span className="text-sm text-gray-300">请输入项目</span>
                        ) : (
                            <span className="text-sm">请选择</span>
                        )}
                        {(item === '派单方式' || item === '来源') && <ChevronRight size={18} />}
                    </div>
                 </div>
               ))}
            </div>

            <div className="bg-white mb-3 px-4 py-4 flex items-center justify-between">
                <span className="text-base text-gray-800 font-medium">数据</span>
                <div className="flex items-center gap-6">
                    <button 
                        className="flex items-center gap-2"
                        onClick={() => setDataType('team')}
                    >
                        {dataType === 'team' ? <CheckCircle className="text-primary w-5 h-5" /> : <Circle className="text-gray-300 w-5 h-5" />}
                        <span className="text-sm text-gray-600">团队</span>
                    </button>
                    <button 
                        className="flex items-center gap-2"
                        onClick={() => setDataType('individual')}
                    >
                        {dataType === 'individual' ? <CheckCircle className="text-primary w-5 h-5" /> : <Circle className="text-gray-300 w-5 h-5" />}
                        <span className="text-sm text-gray-600">个人</span>
                    </button>
                </div>
            </div>

            <div className="bg-white px-4 py-4 pb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">录入时间</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                    {['当日', '近一周', '当月', '近三个月', '近半年', '自定义'].map(tag => (
                        <button
                            key={tag}
                            onClick={() => setDateRangeFilter(tag)}
                            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                dateRangeFilter === tag 
                                ? 'bg-primary text-white shadow-sm' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center text-sm font-mono text-gray-600 tracking-wide">
                    2025-09-26 14:47:36 - 2025-12-25 14:47:36
                </div>
            </div>
          </div>

          {/* Filter Bottom Buttons */}
          <div className="bg-white p-4 flex gap-4 border-t border-gray-100">
             <button 
                onClick={() => {
                    setDateRangeFilter('近三个月');
                    setDataType('individual');
                }}
                className="flex-1 py-3 rounded-full border border-primary text-primary font-bold text-base hover:bg-blue-50 transition-colors"
             >
                重置
             </button>
             <button 
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-3 rounded-full bg-primary text-white font-bold text-base shadow-lg hover:bg-primary-dark transition-colors"
             >
                确认
             </button>
          </div>
        </div>
      )}

      {/* --- Main Content --- */}
      
      {/* Expanded Stats Overlay */}
      {isStatsExpanded ? (
        <div className="bg-gradient-to-b from-blue-200 via-blue-50 to-bg pb-4 pt-4 px-4 relative z-40 rounded-b-[2rem] shadow-xl animate-in fade-in slide-in-from-top-10 duration-200">
            {/* Header Title with Tag */}
            <div className="flex justify-center mb-6 relative">
                 <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-1.5 rounded-lg text-lg font-bold shadow-md transform skew-x-[-10deg]">
                    <span className="transform skew-x-[10deg] inline-block">订单数据</span>
                 </div>
                 {/* Decorative background elements */}
                 <div className="absolute top-0 right-0 opacity-20">
                    <svg width="100" height="60" viewBox="0 0 100 60"><circle cx="80" cy="20" r="30" fill="white"/></svg>
                 </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-y-8 gap-x-2 text-center mb-4">
                {statsData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center relative group">
                        <div className={`text-[22px] font-bold ${item.color} mb-1 font-sans`}>{item.value}</div>
                        <div className="text-gray-600 text-sm">{item.label}</div>
                        {/* Vertical Dividers */}
                        {(index + 1) % 3 !== 0 && (
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200/60"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Collapse Button */}
            <div className="flex justify-center mt-2">
                <button 
                    onClick={() => setIsStatsExpanded(false)}
                    className="bg-blue-100/50 hover:bg-blue-200/50 p-1 rounded-full transition-colors"
                >
                    <ChevronUp className="text-primary w-6 h-6" />
                </button>
            </div>
        </div>
      ) : (
        /* Collapsed Header */
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 pb-5 pt-10 px-4 text-white rounded-b-[2rem] shadow-lg relative overflow-hidden transition-all duration-300">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="white"><circle cx="50" cy="50" r="40"/></svg>
            </div>
            <div className="absolute bottom-0 left-0 opacity-10 transform -translate-x-4 translate-y-4">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="white"><rect x="10" y="10" width="80" height="80" rx="20"/></svg>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
                <button 
                    onClick={() => setIsStatsExpanded(true)}
                    className="text-center font-bold text-lg mb-6 flex items-center justify-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                    订单数据 <ChevronDown className="w-4 h-4 opacity-70" />
                </button>

                <div className="grid grid-cols-3 gap-4 w-full text-center">
                <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold text-orange-200 drop-shadow-sm font-mono">12</div>
                    <div className="text-xs text-blue-100 mt-1 opacity-80">未派单数</div>
                </div>
                <div className="flex flex-col items-center relative">
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-blue-300/30"></div>
                    <div className="absolute right-0 top-2 bottom-2 w-px bg-blue-300/30"></div>
                    <div className="text-2xl font-bold text-emerald-200 drop-shadow-sm font-mono">98%</div>
                    <div className="text-xs text-blue-100 mt-1 opacity-80">收款率</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold text-white drop-shadow-sm font-mono">8,650.00</div>
                    <div className="text-xs text-blue-100 mt-1 opacity-80">当日业绩</div>
                </div>
                </div>
            </div>
        </div>
      )}

      {/* Filter Tabs - Optimized for Scrolling & Visuals */}
      <div className="w-full flex flex-nowrap items-center px-4 py-3 bg-white z-20 shadow-[0_2px_8px_rgba(0,0,0,0.03)] overflow-x-auto no-scrollbar gap-6 touch-pan-x">
        {['催单', '收藏', '全部', '未派单', '已派单', '已接单', '已完成', '报错', '作废'].map((filter) => {
            const isActive = activeFilter === filter;
            // Base styles
            let btnClass = "text-sm whitespace-nowrap flex-shrink-0 transition-all duration-300 px-1 py-1 relative select-none ";
            
            // Conditional Styles
            if (isActive) {
                btnClass += "text-primary font-bold";
            } else if (filter === '催单') {
                btnClass += "text-red-600 font-black drop-shadow-sm scale-105 tracking-wide"; // Red, Extra Bold, Shadow
            } else if (filter === '未派单') {
                btnClass += "text-orange-500 font-black drop-shadow-sm scale-105 tracking-wide"; // Orange, Extra Bold, Shadow
            } else {
                btnClass += "text-gray-500 font-medium hover:text-gray-700";
            }

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={btnClass}
              >
                {filter}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-primary rounded-t-full shadow-sm"></div>
                )}
              </button>
            );
        })}
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
        <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex flex-col items-center justify-center text-gray-500 gap-0.5 hover:text-primary transition-colors"
        >
             <Filter className="w-5 h-5" />
             <span className="text-[10px] scale-90">筛选</span>
        </button>
      </div>

      {/* Order List */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl p-4 shadow-card hover:shadow-md transition-shadow duration-200 border border-gray-50 relative">
            
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
                        <MessageCircle size={14} className="mt-0.5 flex-shrink-0"/>
                        <span className="opacity-90">家具拆装根据具体情况师傅沟通报价；没...</span>
                   </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between border-t border-gray-50 pt-3 relative">
              <div className="relative">
                  <button 
                      onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenuId(openMenuId === order.id ? null : order.id);
                      }}
                      className="text-gray-400 text-xs font-medium flex items-center gap-1 hover:text-gray-600 transition-colors py-1 outline-none"
                  >
                    更多 <MoreHorizontal size={14} />
                  </button>
                  
                  {/* More Menu Popover */}
                  {openMenuId === order.id && (
                    <>
                        {/* Backdrop */}
                        <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)}></div>
                        
                        {/* Menu Content - Positioned ABOVE the button */}
                        <div className="absolute bottom-full left-0 mb-1 bg-white rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-gray-100 z-50 w-24 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 origin-bottom-left">
                            {['群聊', '开票', '中转', '取消', '修改'].map((action) => (
                                <button 
                                    key={action}
                                    className="py-3 text-center text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-50 last:border-none font-medium"
                                    onClick={() => setOpenMenuId(null)}
                                >
                                    {action}
                                </button>
                            ))}
                        </div>
                    </>
                  )}
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