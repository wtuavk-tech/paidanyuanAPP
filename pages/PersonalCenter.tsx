import React, { useState } from 'react';
import { 
  Settings, ChevronRight, ChevronLeft,
  ClipboardList, Activity, Receipt, CreditCard, Calendar, Coins, Banknote, 
  PhoneCall, Pencil, Megaphone, ShieldAlert, RotateCw, Info,
  Search, X, Clock, CheckCircle2, AlertCircle, FileText, Power
} from 'lucide-react';

// --- Types ---
type ViewType = 'main' | 'settings' | 'report' | 'task' | 'follow' | 'expense' | 'withdraw' | 'daily' | 'advance' | 'wechat' | 'call' | 'record' | 'notice';

// --- Shared Components ---
const Header = ({ title, onBack }: { title: string, onBack: () => void }) => (
    <div className="bg-white px-4 py-3 flex items-center relative shadow-sm z-10 flex-none">
        <button onClick={onBack} className="absolute left-4 p-1 text-gray-800">
            <ChevronLeft size={26} />
        </button>
        <div className="flex-1 text-center font-bold text-lg text-gray-800">{title}</div>
    </div>
);

const TabBar = ({ tabs, active, onChange }: { tabs: string[], active: string, onChange: (t: string) => void }) => (
    <div className="bg-white flex items-center justify-around border-b border-gray-100 text-sm font-medium">
        {tabs.map(tab => (
            <div 
                key={tab} 
                onClick={() => onChange(tab)}
                className={`py-3 relative cursor-pointer px-4 ${active === tab ? 'text-primary' : 'text-gray-500'}`}
            >
                {tab}
                {active === tab && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"></div>}
            </div>
        ))}
    </div>
);

const EmptyState = ({ text }: { text: string }) => (
    <div className="flex flex-col items-center justify-center py-20 opacity-50">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FileText size={40} className="text-gray-400" />
        </div>
        <span className="text-sm text-gray-400">~ {text} ~</span>
    </div>
);

// --- Sub-Page Views ---

// 1. 任务 (Task)
const TaskView = ({ onBack }: { onBack: () => void }) => {
    const [tab, setTab] = useState('全部');
    return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="任务" onBack={onBack} />
            <TabBar tabs={['全部', '已完成', '未完成']} active={tab} onChange={setTab} />
            <div className="p-4 space-y-3">
                <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex justify-between items-center text-red-500">
                    <div className="flex items-center gap-2 font-bold text-sm">
                        <FileText size={16} fill="currentColor" className="text-red-400" />
                        今日任务完成度：0
                    </div>
                    <div className="text-xs flex items-center">点击查看 <ChevronRight size={12}/></div>
                </div>
                <div className="flex gap-3">
                    <div className="flex-1 bg-white rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                        <input placeholder="输入用户名" className="flex-1 outline-none text-gray-700 placeholder-gray-400" />
                        <Search size={16} className="text-gray-400" />
                    </div>
                     <div className="flex-1 bg-white rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                        <input placeholder="输入任务名称" className="flex-1 outline-none text-gray-700 placeholder-gray-400" />
                        <Search size={16} className="text-gray-400" />
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="flex-1 bg-white rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={14} /> 2026-01-03
                    </div>
                    <span className="text-gray-400">-</span>
                    <div className="flex-1 bg-white rounded-lg px-3 py-2 flex items-center justify-between gap-2 text-sm text-gray-500">
                        <span>2026-01-03</span>
                        <div className="bg-gray-200 rounded-full p-0.5"><X size={10} /></div>
                    </div>
                </div>
                <EmptyState text="空空如也" />
            </div>
        </div>
    );
};

// 2. 跟单 (Follow)
const FollowView = ({ onBack }: { onBack: () => void }) => {
    const [tab, setTab] = useState('全部');
    const list = [
        { id: '25122610194908', time: '2025-12-27 10:20:00', name: '许仙', status: '处理中' },
        { id: '25122610166564', time: '2025-12-27 10:20:00', name: '许仙', status: '处理中' },
        { id: '25122509215442', time: '2025-12-26 09:25:00', name: '王昭君', status: '处理中' },
    ];
    return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="跟单" onBack={onBack} />
            <div className="bg-white p-3 flex gap-3">
                 <div className="flex-[1.5] bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                    <input placeholder="输入师傅" className="flex-1 outline-none bg-transparent" />
                    <Search size={16} className="text-gray-400" />
                </div>
                 <div className="flex-[2] bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                    <input placeholder="输入订单号" className="flex-1 outline-none bg-transparent" />
                    <Search size={16} className="text-gray-400" />
                </div>
            </div>
            <TabBar tabs={['全部', '已处理', '未处理']} active={tab} onChange={setTab} />
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {list.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-gray-800 text-base">{item.id}</span>
                            <span className="bg-blue-50 text-blue-500 text-xs px-2 py-0.5 rounded flex items-center gap-1">
                                <AlertCircle size={10} fill="currentColor" className="text-blue-500" /> {item.status}
                            </span>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-2 mb-1">
                             <Clock size={12} className="text-blue-400" /> {item.time}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                             <div className="w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center text-[8px]">👤</div> {item.name}
                        </div>
                        <div className="text-sm text-red-500 bg-red-50 p-2 rounded flex items-start gap-2">
                             <FileText size={14} className="mt-0.5" /> 请回复订单情况，及时处理订单。
                        </div>
                        <div className="mt-2 text-sm font-bold border-t border-gray-50 pt-2">处理详情：</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 3. 报销管理 (Expense)
const ExpenseView = ({ onBack }: { onBack: () => void }) => {
    const list = [
        { name: '陈清平', money: '280', item: '刷单运营', time: '2025-12-23 15:29:01', status: '申请中', color: 'text-blue-500', bg: 'bg-blue-50' },
        { name: '陈清平', money: '16', item: '日常采购', time: '2025-12-09 16:51:26', status: '申请中', color: 'text-blue-500', bg: 'bg-blue-50' },
        { name: '陈清平', money: '36', item: '营业执照', time: '2025-12-09 15:54:49', status: '审核通过', color: 'text-green-500', bg: 'bg-green-50' },
        { name: '陈清平', money: '10', item: '营业执照', time: '2025-12-09 14:23:45', status: '已入账', color: 'text-green-500', bg: 'bg-green-50' },
    ];
    return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="报销管理" onBack={onBack} />
             <div className="bg-white p-3 space-y-3">
                <div className="flex gap-3">
                     <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                        <input placeholder="输入申请人" className="flex-1 outline-none bg-transparent" />
                        <Search size={16} className="text-gray-400" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-50 px-3 rounded-lg">
                        选择状态 <ChevronRight size={14} className="rotate-90" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 flex items-center gap-2"><Clock size={12}/> 申请开始时间</div>
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 text-center">申请结束时间</div>
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 flex items-center gap-2"><Clock size={12}/> 出账开始时间</div>
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 text-center">出账结束时间</div>
                </div>
            </div>
             <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {list.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                             <div className="flex items-baseline gap-2">
                                 <span className="font-bold text-gray-800">{item.name}</span>
                                 <span className="text-orange-500 font-bold text-lg">¥{item.money}</span>
                             </div>
                             <span className={`${item.bg} ${item.color} text-xs px-2 py-0.5 rounded flex items-center gap-1`}>
                                 {item.status === '已入账' || item.status === '审核通过' ? <CheckCircle2 size={10} /> : <AlertCircle size={10} />}
                                 {item.status}
                             </span>
                        </div>
                        <div className="text-sm text-gray-800 mb-1"><span className="text-gray-500">报销事项：</span>{item.item}</div>
                        <div className="text-sm text-gray-800"><span className="text-gray-500">申请时间：</span>{item.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 4. 提现管理 (Withdraw)
const WithdrawView = ({ onBack }: { onBack: () => void }) => {
    const [tab, setTab] = useState('全部');
     const list = [
        { name: '陈清平', money: '0.3', time: '2025-12-31 15:40:22', status: '申请中' },
        { name: '陈清平', money: '0.2', time: '2025-12-23 16:02:08', status: '申请中' },
        { name: '陈清平', money: '0.3', time: '2025-12-19 09:06:08', status: '申请中' },
        { name: '陈清平', money: '0.3', time: '2025-12-16 11:51:28', status: '申请中' },
    ];
    return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="提现管理" onBack={onBack} />
             <div className="bg-white px-3 pb-2 pt-2">
                 <div className="bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2 text-sm mb-3">
                    <input placeholder="输入申请人" className="flex-1 outline-none bg-transparent" />
                    <Search size={16} className="text-gray-400" />
                </div>
                <TabBar tabs={['全部', '申请中', '已完成', '否决']} active={tab} onChange={setTab} />
                 <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 flex items-center gap-2"><Clock size={12}/> 申请开始时间</div>
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 text-center">申请结束时间</div>
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 flex items-center gap-2"><Clock size={12}/> 出纳开始时间</div>
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 text-center">出纳结束时间</div>
                </div>
            </div>
             <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {list.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                             <div className="flex items-baseline gap-2">
                                 <span className="font-bold text-gray-800">{item.name}</span>
                                 <span className="text-orange-500 font-bold text-lg">¥{item.money}</span>
                             </div>
                             <span className="bg-blue-50 text-blue-500 text-xs px-2 py-0.5 rounded flex items-center gap-1">
                                 <AlertCircle size={10} /> {item.status}
                             </span>
                        </div>
                        <div className="text-sm text-gray-800 mb-1"><span className="text-gray-500">申请时间：</span>{item.time}</div>
                        <div className="text-sm text-gray-800"><span className="text-gray-500">备注：</span></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 5. 工作日报 (Daily)
const DailyView = ({ onBack }: { onBack: () => void }) => {
     const [tab, setTab] = useState('派单员');
     return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="工作日报" onBack={onBack} />
            <div className="bg-white flex justify-center py-2 border-b border-gray-100">
                <div className="relative pb-2 px-2 text-blue-500 font-bold text-sm">
                    派单员
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
                </div>
            </div>
            <div className="bg-white p-3 space-y-3">
                <div className="flex gap-3">
                     <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                        <input placeholder="输入创建人" className="flex-1 outline-none bg-transparent" />
                        <Search size={16} className="text-gray-400" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-50 px-3 rounded-lg">
                        组员 <ChevronRight size={14} className="rotate-90" />
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="flex-1 bg-white border border-gray-100 rounded-full px-3 py-1.5 flex items-center gap-2 text-xs text-gray-400">
                        <Clock size={12} /> 2025-11-04
                    </div>
                    <span className="text-gray-300">-</span>
                    <div className="flex-1 bg-white border border-gray-100 rounded-full px-3 py-1.5 flex items-center justify-between gap-2 text-xs text-gray-400">
                        <span>2025-11-20</span>
                        <div className="bg-gray-200 rounded-full p-0.5"><X size={8} /></div>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                <div className="bg-white px-4 py-3 rounded-lg flex justify-between items-center">
                    <div className="font-bold text-gray-800">陈清平 <span className="text-gray-500 font-normal ml-2 text-sm">2025-11-17</span></div>
                    <ChevronRight size={16} className="text-gray-300" />
                </div>
                <div className="bg-white px-4 py-3 rounded-lg flex justify-between items-center">
                    <div className="font-bold text-gray-800">陈清平 <span className="text-gray-500 font-normal ml-2 text-sm">2025-11-16</span></div>
                    <ChevronRight size={16} className="text-gray-300" />
                </div>
            </div>
             <div className="p-4">
                 <button className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform">
                     新增日报
                 </button>
            </div>
        </div>
     );
};

// 6. 订单垫付 (Advance)
const AdvanceView = ({ onBack }: { onBack: () => void }) => {
    const [tab, setTab] = useState('全部');
    const list = [
        { name: '陈清平', money: '160', order: '25122314292795', time: '2025-12-23 15:34:40', status: '已完成', color: 'text-green-500' },
        { name: '陈清平', money: '28', order: '25121609223844', time: '2025-12-16 11:49:45', status: '已完成', color: 'text-green-500', isNew: true },
        { name: '陈清平', money: '18', order: '25120916132026', time: '2025-12-10 16:29:52', status: '已完成', color: 'text-green-500' },
    ];
    return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="订单垫付" onBack={onBack} />
             <div className="bg-white px-3 pb-2 pt-2">
                 <div className="flex gap-3 mb-3">
                     <div className="flex-[1.2] bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                        <input placeholder="输入申请人" className="flex-1 outline-none bg-transparent" />
                        <Search size={16} className="text-gray-400" />
                    </div>
                     <div className="flex-[2] bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                        <input placeholder="输入订单号" className="flex-1 outline-none bg-transparent" />
                        <Search size={16} className="text-gray-400" />
                    </div>
                </div>
                <TabBar tabs={['全部', '申请中', '已完成', '否决']} active={tab} onChange={setTab} />
                 <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 flex items-center gap-2"><Clock size={12}/> 申请开始时间</div>
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 text-center">申请结束时间</div>
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 flex items-center gap-2"><Clock size={12}/> 出纳开始时间</div>
                    <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400 text-center">出纳结束时间</div>
                </div>
            </div>
             <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {list.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm relative overflow-hidden">
                        {item.isNew && <div className="absolute bottom-0 right-0 w-8 h-8 bg-red-500 text-white flex items-end justify-end pr-1 pb-1 text-xs clip-triangle" style={{clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)'}}>2</div>}
                        <div className="flex justify-between items-start mb-1">
                             <div className="flex items-baseline gap-2">
                                 <span className="font-bold text-gray-800">{item.name}</span>
                                 <span className="text-orange-500 font-bold text-lg">¥{item.money}</span>
                             </div>
                        </div>
                        <div className="text-sm text-gray-800 mb-1"><span className="text-gray-500">订单号：</span>{item.order}</div>
                        <div className="text-sm text-gray-800 mb-1"><span className="text-gray-500">申请时间：</span>{item.time}</div>
                        <div className="text-sm text-gray-800"><span className="text-gray-500">订单状态：</span><span className={item.color}>{item.status}</span></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 7. 微信对账 (Wechat)
const WechatView = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="微信对账" onBack={onBack} />
            <div className="px-3 pt-3 pb-0">
                <div className="bg-gradient-to-r from-blue-300 to-sky-200 h-32 rounded-xl w-full flex items-center justify-between px-6 shadow-md mb-4 relative overflow-hidden">
                    <div className="z-10 text-white">
                        <div className="text-xl font-bold italic mb-2">账目随时核对</div>
                        <div className="bg-blue-500/30 backdrop-blur rounded-full px-3 py-1 text-xs inline-block">每日对账</div>
                    </div>
                    {/* Decorative placeholder for illustration */}
                    <div className="w-20 h-20 bg-white/20 rounded-full z-10"></div>
                </div>
            </div>
            
            <div className="p-3 space-y-3">
                 <div className="bg-white p-4 rounded-lg">
                     <div className="flex items-center justify-between mb-2">
                         <span className="text-gray-800 font-medium text-sm"><span className="text-red-500 mr-1">*</span>派单员</span>
                         <span className="text-gray-400 text-sm">请输入派单员</span>
                     </div>
                 </div>
                 <div className="bg-white p-4 rounded-lg">
                     <div className="text-gray-800 font-medium text-sm mb-3"><span className="text-red-500 mr-1">*</span>查询时间</div>
                     <div className="flex gap-3 items-center">
                        <div className="flex-1 bg-gray-50 rounded px-3 py-2 flex items-center gap-2 text-xs text-gray-400">
                            <Clock size={12} /> 2026-01-03
                        </div>
                        <span className="text-gray-300">-</span>
                        <div className="flex-1 bg-gray-50 rounded px-3 py-2 flex items-center justify-between gap-2 text-xs text-gray-400">
                            <span>2026-01-03</span>
                            <div className="bg-gray-200 rounded-full p-0.5"><X size={8} /></div>
                        </div>
                    </div>
                 </div>
                 <div className="bg-white p-4 rounded-lg min-h-[100px]">
                     <div className="text-gray-800 font-medium text-sm mb-2"><span className="text-red-500 mr-1">*</span>对账金额</div>
                     <input placeholder="输入金额(逗号或者回车分隔金额)" className="w-full text-sm outline-none text-gray-600 placeholder-gray-300" />
                 </div>
            </div>
            <div className="p-4 mt-auto">
                 <button className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform">
                     查找
                 </button>
            </div>
        </div>
    );
};

// 8. 拨打电话 (Call)
const CallView = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="拨打电话" onBack={onBack} />
             <div className="bg-white p-3 space-y-3">
                 <div className="flex gap-3">
                     <div className="flex-[2] bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                        <input placeholder="输入客户电话号码" className="flex-1 outline-none bg-transparent" />
                        <Search size={16} className="text-gray-400" />
                    </div>
                    <div className="flex-[1] flex items-center justify-end gap-1 text-sm text-gray-600 px-2 rounded-lg">
                        选择状态 <ChevronRight size={14} className="rotate-90" />
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="flex-1 bg-white border border-gray-100 rounded-full px-3 py-1.5 flex items-center gap-2 text-xs text-gray-400">
                        <Clock size={12} /> 2026-01-03
                    </div>
                    <span className="text-gray-300">-</span>
                    <div className="flex-1 bg-white border border-gray-100 rounded-full px-3 py-1.5 flex items-center justify-between gap-2 text-xs text-gray-400">
                        <span>2026-01-03</span>
                        <div className="bg-gray-200 rounded-full p-0.5"><X size={8} /></div>
                    </div>
                </div>
            </div>
            <EmptyState text="空空如也" />
             <div className="p-4 mt-auto">
                 <button className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform">
                     新增绑定
                 </button>
            </div>
        </div>
    );
};

// 9. 录单 (Record)
const RecordView = ({ onBack }: { onBack: () => void }) => {
    const fields = [
        { label: '订单来源', ph: '请选择', required: true, isSelect: true },
        { label: '客户名称', ph: '请输入客户名称', required: false },
        { label: '手机号码', ph: '请输入手机号码', required: true },
        { label: '分机号', ph: '请输入分机号', required: false },
        { label: '地域', ph: '请输入地域', required: true },
        { label: '详细地址', ph: '请输入详细地址', required: true },
        { label: '服务项目', ph: '请输入服务项目', required: true },
        { label: '工作机', ph: '请输入工作机', required: true },
    ];

    return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="录单" onBack={onBack} />
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {fields.map((f, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg flex justify-between items-center">
                        <div className="text-gray-800 text-sm font-medium">
                            {f.required && <span className="text-red-500 mr-1">*</span>}
                            {f.label}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>{f.ph}</span>
                            {f.isSelect && <ChevronRight size={16} />}
                        </div>
                    </div>
                ))}
                 <div className="bg-white p-4 rounded-lg h-32">
                        <div className="text-gray-800 text-sm font-medium mb-2">详情</div>
                        <span className="text-gray-400 text-sm">请输入详情</span>
                 </div>
            </div>
            <div className="p-4 bg-white border-t border-gray-50 flex gap-3">
                 <button className="flex-1 bg-white border border-gray-200 text-gray-600 font-bold py-3 rounded-lg active:bg-gray-50">重置</button>
                 <button className="flex-1 bg-primary text-white font-bold py-3 rounded-lg shadow-lg active:opacity-90">提交</button>
            </div>
        </div>
    );
};

// 10. 公告 (Notice)
const NoticeView = ({ onBack }: { onBack: () => void }) => {
    const [tab, setTab] = useState('全部');
    const notices = [
        { type: '紧急', time: '2025-10-11 09:43:22', title: '紧急公告临时发布', color: 'bg-red-500' },
        { type: '重要', time: '2025-10-11 09:30:00', title: '录单派单页面分离', color: 'bg-red-500' },
        { type: '紧急', time: '2025-09-26 17:03:37', title: '中秋放假01', color: 'bg-red-500' },
        { type: '紧急', time: '2025-09-26 15:31:58', title: '技术部也要放假', color: 'bg-red-500' },
        { type: '重要', time: '2025-09-14 18:07:21', title: '测试情况', color: 'bg-red-500' },
        { type: '普通', time: '2025-09-10 14:11:45', title: '如有', color: 'bg-red-500' },
        { type: '紧急', time: '2025-09-10 14:10:04', title: 'APP更新', color: 'bg-red-500' },
    ];
    return (
        <div className="flex flex-col h-full bg-bg">
            <Header title="公司公告" onBack={onBack} />
             <div className="bg-white px-2 pt-2 border-b border-gray-100 flex gap-2 pb-2 overflow-x-auto no-scrollbar">
                {['全部', '普通', '紧急', '重要'].map(t => (
                    <button 
                        key={t} 
                        onClick={() => setTab(t)}
                        className={`px-6 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${tab === t ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {notices.map((n, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`${n.type === '普通' ? 'bg-red-500' : 'bg-red-500'} text-white text-xs px-1.5 py-0.5 rounded font-medium`}>{n.type}</span>
                            <span className="text-gray-500 text-sm">{n.time}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-base">{n.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- Main Component ---
const MenuItem = ({ label, extra }: { label: string, extra?: React.ReactNode }) => (
    <div className="bg-white rounded-xl flex justify-between items-center p-4 active:bg-gray-50 transition-colors cursor-pointer" onClick={() => alert(`[演示] ${label}`)}>
    <span className="text-gray-800 font-medium text-[15px]">{label}</span>
    <div className="flex items-center gap-2">
        {extra}
        <ChevronRight className="text-gray-300 w-4 h-4" />
    </div>
    </div>
);

const PersonalCenter: React.FC = () => {
  const [balance, setBalance] = useState(117.29);
  const [badges, setBadges] = useState({ task: 0, advance: 11 });
  const [currentView, setCurrentView] = useState<ViewType>('main');

  const handleWithdraw = () => {
      if (balance > 0) {
          setBalance(0);
          alert('[演示] 提现申请已提交！\n金额将转入绑定微信零钱。');
      } else {
          setBalance(Math.floor(Math.random() * 500) + 100);
          alert('[演示] 余额已刷新 (模拟充值)');
      }
  };

  const handleGridClick = (key: string, label: string) => {
      // Clear badges if any
      if (key in badges && badges[key as keyof typeof badges] > 0) {
          setBadges(prev => ({ ...prev, [key]: 0 }));
      }
      
      // Navigate to sub-page if it exists
      const viewMap: Record<string, ViewType> = {
          'task': 'task',
          'follow': 'follow',
          'expense': 'expense',
          'withdraw': 'withdraw',
          'daily': 'daily',
          'advance': 'advance',
          'wechat': 'wechat',
          'call': 'call',
          'record': 'record',
          'notice': 'notice'
      };

      if (viewMap[key]) {
          setCurrentView(viewMap[key]);
      } else {
          alert(`[演示] ${label} 功能开发中...`);
      }
  };

  const handleRestart = () => {
      if(confirm("确定要重启APP吗？")) {
          window.location.reload();
      }
  };

  const handleLogout = () => {
      if(confirm("确定要退出登录吗？")) {
          alert("[演示] 已安全退出，返回登录页");
      }
  };

  // --- Router / View Switcher ---
  switch (currentView) {
      case 'settings':
          return (
            <div className="flex flex-col h-full bg-bg">
                <Header title="设置" onBack={() => setCurrentView('main')} />
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                     <div className="bg-white rounded-xl overflow-hidden">
                         <div className="flex justify-between items-center p-4 border-b border-gray-50 active:bg-gray-50 cursor-pointer" onClick={() => alert('[演示] 本机号码')}>
                            <span className="text-gray-800 font-medium text-[15px]">本机号码</span>
                            <ChevronRight className="text-gray-300 w-4 h-4" />
                         </div>
                         <div className="flex justify-between items-center p-4 active:bg-gray-50 cursor-pointer" onClick={() => alert('[演示] 开启通知权限')}>
                            <span className="text-gray-800 font-medium text-[15px]">开启通知权限</span>
                            <ChevronRight className="text-gray-300 w-4 h-4" />
                         </div>
                     </div>
                     <MenuItem label="系统常驻设置" />
                     <MenuItem label="电池白名单设置" />
                     <div className="bg-white rounded-xl flex justify-between items-center p-4 active:bg-gray-50 transition-colors cursor-pointer" onClick={() => alert('[演示] 清除缓存')}>
                        <span className="text-gray-800 font-medium text-[15px]">清除缓存</span>
                        <div className="flex items-center gap-2">
                             <span className="text-gray-500 text-sm">268.05KB</span>
                             <ChevronRight className="text-gray-300 w-4 h-4" />
                        </div>
                     </div>
                     <MenuItem label="注销账号" />
                     <MenuItem label="日志" />
                </div>
            </div>
          );
      case 'report':
          return (
            <div className="flex flex-col h-full bg-bg">
                <Header title="监督举报" onBack={() => setCurrentView('main')} />
                <div className="p-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="text-[15px] text-gray-800 mb-6 font-medium tracking-wide">
                            举报邮箱：3898531882@qq.com
                        </div>
                        <div className="text-sm text-red-500 leading-relaxed text-justify">
                           *我们严格保密举报人的个人信息和隐私，确保举报人的合法权益不受侵犯。举报人如有需要，可以选择匿名举报，并给予相应保护，确保举报人信息安全。
                        </div>
                    </div>
                </div>
            </div>
          );
      case 'task': return <TaskView onBack={() => setCurrentView('main')} />;
      case 'follow': return <FollowView onBack={() => setCurrentView('main')} />;
      case 'expense': return <ExpenseView onBack={() => setCurrentView('main')} />;
      case 'withdraw': return <WithdrawView onBack={() => setCurrentView('main')} />;
      case 'daily': return <DailyView onBack={() => setCurrentView('main')} />;
      case 'advance': return <AdvanceView onBack={() => setCurrentView('main')} />;
      case 'wechat': return <WechatView onBack={() => setCurrentView('main')} />;
      case 'call': return <CallView onBack={() => setCurrentView('main')} />;
      case 'record': return <RecordView onBack={() => setCurrentView('main')} />;
      case 'notice': return <NoticeView onBack={() => setCurrentView('main')} />;
      case 'main':
      default:
        // Fallthrough to main return
        break;
  }

  // --- Main View (Full Screen Mode) ---
  return (
    <div className="flex flex-col h-full bg-bg pb-[85px]">
      {/* Header Area */}
      <div className="bg-gradient-to-b from-blue-100 via-white to-bg pt-12 px-5 pb-2 flex-none">
        <div className="flex justify-between items-start mb-5">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img 
                        src="https://picsum.photos/100/100?random=10" 
                        alt="Avatar" 
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-success rounded-full border-2 border-white"></div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">张三</h2>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1 bg-white/60 px-2 py-0.5 rounded-full w-fit">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        已认证员工
                    </div>
                </div>
            </div>
            <div 
                onClick={handleLogout}
                className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
                <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center mb-0.5 bg-white shadow-sm hover:bg-gray-50">
                    <Power size={18} />
                </div>
                <span className="text-[10px] font-medium">退出</span>
            </div>
        </div>

        {/* Wallet Cards */}
        <div className="flex gap-4">
            {/* Balance Card */}
            <div className="flex-1 bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] rounded-2xl py-3 px-4 text-white shadow-lg shadow-orange-200/50 relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="text-yellow-100 font-bold text-2xl mb-2 font-mono tracking-tight">¥{balance.toFixed(2)}</div>
                    <div className="flex justify-between items-center">
                        <div className="text-xs font-medium text-white/90">我的余额</div>
                        <button 
                            onClick={handleWithdraw}
                            className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm transition-colors"
                        >
                            {balance > 0 ? '去提现' : '充值'}
                        </button>
                    </div>
                </div>
                {/* Decorative coin */}
                <div className="absolute -right-2 -bottom-4 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                     <div className="w-20 h-20 bg-yellow-200 rounded-full border-4 border-white/30"></div>
                </div>
            </div>

            {/* Advance Card */}
            <div className="flex-1 bg-gradient-to-br from-[#4facfe] to-[#00f2fe] rounded-2xl py-3 px-4 text-white shadow-lg shadow-blue-200/50 relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="text-white font-bold text-2xl mb-2 font-mono tracking-tight">¥ 0</div>
                    <div className="flex justify-between items-center">
                        <div className="text-xs font-medium text-white/90">我的预支款</div>
                        <button 
                            onClick={() => alert("[演示] 暂无预支款记录")}
                            className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm transition-colors"
                        >
                            去查看
                        </button>
                    </div>
                </div>
                {/* Decorative wallet */}
                <div className="absolute -right-2 -bottom-2 opacity-20 transform rotate-[-12deg] group-hover:scale-110 transition-transform duration-500">
                     <div className="w-20 h-16 bg-white rounded-xl border-4 border-white/30"></div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content Area - Fills remaining space */}
      <div className="flex-1 px-5 flex flex-col gap-4 overflow-y-auto no-scrollbar pb-4">
        
        {/* Main Grid - Expands to fill space */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-50 flex-none flex flex-col justify-center">
            <div className="grid grid-cols-4 gap-y-8 gap-x-2">
                {/* Row 1 */}
                <div 
                    className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform"
                    onClick={() => handleGridClick('task', '任务')}
                >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white relative shadow-md shadow-blue-200 transition-transform group-hover:-translate-y-1">
                        <ClipboardList size={22} strokeWidth={2} />
                        {badges.task > 0 && <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm font-bold">{badges.task}</span>}
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">任务</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('follow', '跟单')}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-white shadow-md shadow-purple-200 transition-transform group-hover:-translate-y-1">
                        <Activity size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">跟单</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('expense', '报销管理')}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-200 transition-transform group-hover:-translate-y-1">
                        <Receipt size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">报销管理</span>
                </div>

                 <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('withdraw', '提现管理')}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-white shadow-md shadow-red-200 transition-transform group-hover:-translate-y-1">
                        <CreditCard size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">提现管理</span>
                </div>

                {/* Row 2 */}
                 <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('daily', '工作日报')}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-200 transition-transform group-hover:-translate-y-1">
                        <Calendar size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">工作日报</span>
                </div>
                 <div 
                    className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform"
                    onClick={() => handleGridClick('advance', '订单垫付')}
                >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white relative shadow-md shadow-cyan-200 transition-transform group-hover:-translate-y-1">
                        <Coins size={22} strokeWidth={2} />
                        {badges.advance > 0 && <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm font-bold">{badges.advance}</span>}
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">订单垫付</span>
                </div>

                <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('wechat', '微信对账')}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-md shadow-green-200 transition-transform group-hover:-translate-y-1">
                        <Banknote size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">微信对账</span>
                </div>
                 <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('call', '拨打电话')}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-200 transition-transform group-hover:-translate-y-1">
                        <PhoneCall size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">拨打电话</span>
                </div>
                
                {/* Row 3 */}
                 <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('record', '录单')}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 transition-transform group-hover:-translate-y-1">
                        <Pencil size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">录单</span>
                </div>
                 <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('notice', '公告')}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white shadow-md shadow-yellow-200 transition-transform group-hover:-translate-y-1">
                        <Megaphone size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">公告</span>
                </div>
            </div>
        </div>

        {/* Settings Grid - Fixed size but relaxed padding */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-50 flex-none">
            <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                 <div 
                    onClick={() => setCurrentView('settings')}
                    className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform"
                 >
                     <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center text-white shadow-md shadow-gray-200 transition-transform group-hover:-translate-y-1">
                         <Settings size={22} strokeWidth={2} />
                     </div>
                     <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">设置</span>
                 </div>
                 
                 <div 
                    onClick={() => alert("[演示] ServiceMaster Pro v1.2.5\nBuild 20251225")}
                    className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform"
                 >
                     <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-200 transition-transform group-hover:-translate-y-1">
                         <Info size={22} strokeWidth={2} />
                     </div>
                     <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">关于我们</span>
                 </div>

                 <div 
                    onClick={() => setCurrentView('report')}
                    className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform"
                 >
                     <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center text-white shadow-md shadow-red-200 transition-transform group-hover:-translate-y-1">
                         <ShieldAlert size={22} strokeWidth={2} />
                     </div>
                     <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">监督举报</span>
                 </div>

                 <div 
                    onClick={handleRestart}
                    className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform"
                 >
                     <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white shadow-md shadow-orange-200 transition-transform group-hover:-translate-y-1">
                         <RotateCw size={22} strokeWidth={2} />
                     </div>
                     <span className="text-xs font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">重启APP</span>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCenter;