import React, { useState } from 'react';
import { 
  Settings, ChevronRight, ChevronLeft,
  ClipboardList, Activity, Receipt, CreditCard, Calendar, Coins, Banknote, 
  PhoneCall, Pencil, Megaphone, ShieldAlert, RotateCw, Info
} from 'lucide-react';

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
  const [currentView, setCurrentView] = useState<'main' | 'settings' | 'report'>('main');

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
      if (badges[key as keyof typeof badges] > 0) {
          setBadges(prev => ({ ...prev, [key]: 0 }));
      }
      
      let msg = "";
      switch(label) {
          case '任务': msg = "进入任务中心，当前无新指派任务。"; break;
          case '跟单': msg = "正在加载跟单列表..."; break;
          case '报销管理': msg = "进入报销流程，本月累计报销 ¥120.5"; break;
          case '提现管理': msg = "查看提现记录"; break;
          case '工作日报': msg = "今日日报尚未提交，是否去填写？"; break;
          case '订单垫付': msg = "查看垫付明细"; break;
          case '微信对账': msg = "正在拉取微信支付流水..."; break;
          case '拨打电话': msg = "打开拨号键盘"; break;
          case '录单': msg = "进入极速录单模式"; break;
          case '公告': msg = "最新公告：\n1. 关于春节放假安排通知\n2. 系统升级维护通知"; break;
      }
      alert(`[演示] ${msg}`);
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

  // --- Sub-Pages Rendering ---

  if (currentView === 'settings') {
      return (
        <div className="flex flex-col h-full bg-bg">
            {/* Header */}
            <div className="bg-white px-4 py-3 flex items-center relative shadow-sm z-10">
                <button onClick={() => setCurrentView('main')} className="absolute left-4 p-1 text-gray-800">
                    <ChevronLeft size={26} />
                </button>
                <div className="flex-1 text-center font-bold text-lg text-gray-800">设置</div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                 {/* Group 1 */}
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
  }

  if (currentView === 'report') {
      return (
        <div className="flex flex-col h-full bg-bg">
            {/* Header */}
            <div className="bg-white px-4 py-3 flex items-center relative shadow-sm z-10">
                <button onClick={() => setCurrentView('main')} className="absolute left-4 p-1 text-gray-800">
                    <ChevronLeft size={26} />
                </button>
                <div className="flex-1 text-center font-bold text-lg text-gray-800">监督举报</div>
            </div>
            
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
  }

  // --- Main View (Compact Mode) ---

  return (
    <div className="flex flex-col h-full bg-bg pb-20 overflow-hidden">
      {/* Header Area */}
      <div className="bg-gradient-to-b from-blue-100 via-white to-bg pt-10 px-4 pb-2">
        <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img 
                        src="https://picsum.photos/100/100?random=10" 
                        alt="Avatar" 
                        className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-white"></div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">张三</h2>
                    <div className="text-[10px] text-gray-500 mt-0.5 flex items-center gap-1 bg-white/60 px-2 py-0.5 rounded-full w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        已认证员工
                    </div>
                </div>
            </div>
            <div 
                onClick={handleLogout}
                className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mb-0.5 bg-white shadow-sm hover:bg-gray-50">
                    <span className="text-base font-bold">⏻</span>
                </div>
                <span className="text-[9px] font-medium">退出</span>
            </div>
        </div>

        {/* Wallet Cards - Ultra Compressed */}
        <div className="flex gap-3">
            {/* Balance Card */}
            <div className="flex-1 bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] rounded-xl py-2 px-3 text-white shadow-lg shadow-orange-200/50 relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="text-yellow-100 font-bold text-xl mb-1 font-mono tracking-tight">¥{balance.toFixed(2)}</div>
                    <div className="flex justify-between items-center">
                        <div className="text-[10px] font-medium text-white/90">我的余额</div>
                        <button 
                            onClick={handleWithdraw}
                            className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/40 backdrop-blur-sm transition-colors"
                        >
                            {balance > 0 ? '去提现' : '充值'}
                        </button>
                    </div>
                </div>
                {/* Decorative coin */}
                <div className="absolute -right-2 -bottom-4 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                     <div className="w-16 h-16 bg-yellow-200 rounded-full border-4 border-white/30"></div>
                </div>
            </div>

            {/* Advance Card */}
            <div className="flex-1 bg-gradient-to-br from-[#4facfe] to-[#00f2fe] rounded-xl py-2 px-3 text-white shadow-lg shadow-blue-200/50 relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="text-white font-bold text-xl mb-1 font-mono tracking-tight">¥ 0</div>
                    <div className="flex justify-between items-center">
                        <div className="text-[10px] font-medium text-white/90">我的预支款</div>
                        <button 
                            onClick={() => alert("[演示] 暂无预支款记录")}
                            className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/40 backdrop-blur-sm transition-colors"
                        >
                            去查看
                        </button>
                    </div>
                </div>
                {/* Decorative wallet */}
                <div className="absolute -right-2 -bottom-2 opacity-20 transform rotate-[-12deg] group-hover:scale-110 transition-transform duration-500">
                     <div className="w-16 h-12 bg-white rounded-xl border-4 border-white/30"></div>
                </div>
            </div>
        </div>
      </div>

      {/* Grid Menu - Compact 4 Columns */}
      <div className="px-4 mt-1">
        <div className="bg-white rounded-2xl p-4 shadow-card mb-3 border border-gray-50">
            <div className="grid grid-cols-4 gap-y-3 gap-x-2">
                {/* Row 1 */}
                <div 
                    className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform"
                    onClick={() => handleGridClick('task', '任务')}
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white relative shadow-md shadow-blue-200 transition-transform group-hover:-translate-y-0.5">
                        <ClipboardList size={20} strokeWidth={2} />
                        {badges.task > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded-full border border-white shadow-sm font-bold min-w-[14px] text-center">{badges.task}</span>}
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary">任务</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('follow', '跟单')}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-white shadow-md shadow-purple-200 transition-transform group-hover:-translate-y-0.5">
                        <Activity size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary">跟单</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('expense', '报销管理')}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-200 transition-transform group-hover:-translate-y-0.5">
                        <Receipt size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">报销管理</span>
                </div>

                 <div className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('withdraw', '提现管理')}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-white shadow-md shadow-red-200 transition-transform group-hover:-translate-y-0.5">
                        <CreditCard size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">提现管理</span>
                </div>

                {/* Row 2 */}
                 <div className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('daily', '工作日报')}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-200 transition-transform group-hover:-translate-y-0.5">
                        <Calendar size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">工作日报</span>
                </div>
                 <div 
                    className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform"
                    onClick={() => handleGridClick('advance', '订单垫付')}
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white relative shadow-md shadow-cyan-200 transition-transform group-hover:-translate-y-0.5">
                        <Coins size={20} strokeWidth={2} />
                        {badges.advance > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded-full border border-white shadow-sm font-bold min-w-[14px] text-center">{badges.advance}</span>}
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">订单垫付</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('wechat', '微信对账')}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-md shadow-green-200 transition-transform group-hover:-translate-y-0.5">
                        <Banknote size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">微信对账</span>
                </div>
                 <div className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('call', '拨打电话')}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-200 transition-transform group-hover:-translate-y-0.5">
                        <PhoneCall size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">拨打电话</span>
                </div>
                
                {/* Row 3 */}
                 <div className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('record', '录单')}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 transition-transform group-hover:-translate-y-0.5">
                        <Pencil size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary">录单</span>
                </div>
                 <div className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform" onClick={() => handleGridClick('notice', '公告')}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white shadow-md shadow-yellow-200 transition-transform group-hover:-translate-y-0.5">
                        <Megaphone size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary">公告</span>
                </div>
            </div>
        </div>

        {/* Settings Grid - Compact */}
        <div className="bg-white rounded-2xl p-4 shadow-card mb-3 border border-gray-50">
            <div className="grid grid-cols-4 gap-y-3 gap-x-2">
                 <div 
                    onClick={() => setCurrentView('settings')}
                    className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform"
                 >
                     <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center text-white shadow-md shadow-gray-200 transition-transform group-hover:-translate-y-0.5">
                         <Settings size={20} strokeWidth={2} />
                     </div>
                     <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary">设置</span>
                 </div>
                 
                 <div 
                    onClick={() => alert("[演示] ServiceMaster Pro v1.2.5\nBuild 20251225")}
                    className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform"
                 >
                     <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-200 transition-transform group-hover:-translate-y-0.5">
                         <Info size={20} strokeWidth={2} />
                     </div>
                     <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">关于我们</span>
                 </div>

                 <div 
                    onClick={() => setCurrentView('report')}
                    className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform"
                 >
                     <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center text-white shadow-md shadow-red-200 transition-transform group-hover:-translate-y-0.5">
                         <ShieldAlert size={20} strokeWidth={2} />
                     </div>
                     <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">监督举报</span>
                 </div>

                 <div 
                    onClick={handleRestart}
                    className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform"
                 >
                     <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white shadow-md shadow-orange-200 transition-transform group-hover:-translate-y-0.5">
                         <RotateCw size={20} strokeWidth={2} />
                     </div>
                     <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary whitespace-nowrap">重启APP</span>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCenter;