import React from 'react';
import { Search } from 'lucide-react';

const mockTickets = [
  {
    id: '25112717107342',
    date: '2025-11-27 17:12:40',
    request: 'gadsfgsd',
    note: '',
    recordUser: '张三',
    dispatchUser: '吴会东',
    master: '许仙',
    status: '售后中'
  },
  {
    id: '25112614145269',
    date: '2025-11-27 16:27:16',
    request: '以后等会等会',
    note: '',
    recordUser: '张三',
    dispatchUser: '吴会东',
    master: '',
    status: '售后中'
  },
  {
    id: '25112517472877',
    date: '2025-11-26 16:32:54',
    request: '为的防守高手对方是个还是',
    note: '',
    recordUser: '',
    dispatchUser: '',
    master: '',
    status: '售后中'
  }
];

const AfterSales: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-bg pb-24">
      <div className="bg-white pt-8 pb-2 text-center font-bold text-gray-800 text-lg shadow-sm z-10">
        订单售后
      </div>

      <div className="bg-white px-2 pt-2 flex items-center justify-between border-b border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] z-10">
         <div className="flex-1 text-center pb-3 relative cursor-pointer">
            <span className="text-primary font-bold text-base">售后中</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"></div>
         </div>
         <div className="flex-1 text-center pb-3 text-gray-500 text-sm font-medium hover:text-gray-700 cursor-pointer">已办结</div>
         <div className="flex-1 text-center pb-3 text-gray-500 text-sm font-medium hover:text-gray-700 cursor-pointer">已付款</div>
         <div className="flex-1 text-center pb-3 text-gray-500 text-sm font-medium hover:text-gray-700 cursor-pointer">已作废</div>
      </div>

      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="bg-gray-100 rounded-full flex items-center px-4 py-2 transition-colors focus-within:bg-blue-50/50">
            <input 
                type="text" 
                placeholder="输入订单号搜索" 
                className="bg-transparent border-none outline-none w-full text-sm text-gray-700 font-medium"
            />
            <Search className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {mockTickets.map((ticket, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-card border border-gray-50/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-orange-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">售</div>
                    <span className="text-gray-400 text-xs font-mono">{ticket.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-tight">{ticket.id}</h3>
                
                <div className="bg-gray-50/50 rounded-xl p-3 space-y-3 mb-4 border border-gray-100">
                    <div className="flex items-start gap-2">
                        <span role="img" aria-label="pen" className="text-sm grayscale opacity-70">📝</span>
                        <div className="text-sm leading-relaxed">
                            <span className="text-gray-500">客户诉求：</span>
                            <span className="text-gray-800 font-medium">{ticket.request}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <span role="img" aria-label="note" className="text-sm grayscale opacity-70">📒</span>
                        <div className="text-sm">
                            <span className="text-gray-500">备注：</span>
                            <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs font-medium ml-1">{ticket.note || '无'}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 mb-5 px-1">
                     <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 text-lg">👷‍♂️</div>
                         <div className="flex flex-col">
                             <span className="text-[10px] text-gray-400">录单人</span>
                             <span className="text-xs font-bold text-gray-700">{ticket.recordUser || '—'}</span>
                         </div>
                     </div>
                     <div className="w-px h-8 bg-gray-100"></div>
                     <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100 text-lg">🎧</div>
                         <div className="flex flex-col">
                             <span className="text-[10px] text-gray-400">派单人</span>
                             <span className="text-xs font-bold text-gray-700">{ticket.dispatchUser || '—'}</span>
                         </div>
                     </div>
                     {ticket.master && (
                        <>
                            <div className="w-px h-8 bg-gray-100"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 text-lg">🛠️</div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400">师傅</span>
                                    <span className="text-xs font-bold text-gray-700">{ticket.master}</span>
                                </div>
                            </div>
                        </>
                     )}
                </div>

                <div className="flex justify-end gap-2 border-t border-gray-50 pt-3">
                    <button className="bg-gray-100 text-gray-500 text-xs font-bold px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">作废</button>
                    <button className="bg-emerald-50 text-emerald-600 text-xs font-bold px-4 py-1.5 rounded-full hover:bg-emerald-100 transition-colors">办结</button>
                    <button className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full hover:bg-blue-600 shadow-sm transition-colors">处理信息</button>
                </div>
            </div>
        ))}
      </div>

    </div>
  );
};

export default AfterSales;