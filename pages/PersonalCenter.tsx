import React from 'react';
import { Settings, ChevronRight, Wallet, Ticket, FileText, Phone, MessageCircle } from 'lucide-react';

const PersonalCenter: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-bg pb-24 overflow-y-auto">
      {/* Header Area */}
      <div className="bg-gradient-to-b from-blue-100 via-white to-bg pt-14 px-5 pb-6">
        <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
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
            <div className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center mb-1 bg-white shadow-sm">
                    <span className="text-lg font-bold">⏻</span>
                </div>
                <span className="text-[10px] font-medium">退出登录</span>
            </div>
        </div>

        {/* Wallet Cards */}
        <div className="flex gap-4">
            {/* Balance Card */}
            <div className="flex-1 bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] rounded-2xl p-4 text-white shadow-lg shadow-orange-200/50 relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="text-yellow-100 font-bold text-2xl mb-0.5 font-mono tracking-tight">¥117.29</div>
                    <div className="text-xs font-medium mb-3 text-white/90">我的余额</div>
                    <button className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm transition-colors">
                        去提现
                    </button>
                </div>
                {/* Decorative coin */}
                <div className="absolute -right-2 -bottom-4 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                     <div className="w-20 h-20 bg-yellow-200 rounded-full border-4 border-white/30"></div>
                </div>
            </div>

            {/* Advance Card */}
            <div className="flex-1 bg-gradient-to-br from-[#4facfe] to-[#00f2fe] rounded-2xl p-4 text-white shadow-lg shadow-blue-200/50 relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="text-white font-bold text-2xl mb-0.5 font-mono tracking-tight">¥ 0</div>
                    <div className="text-xs font-medium mb-3 text-white/90">我的预支款</div>
                    <button className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm transition-colors">
                        去查看
                    </button>
                </div>
                {/* Decorative wallet */}
                <div className="absolute -right-2 -bottom-2 opacity-20 transform rotate-[-12deg] group-hover:scale-110 transition-transform duration-500">
                     <div className="w-20 h-16 bg-white rounded-xl border-4 border-white/30"></div>
                </div>
            </div>
        </div>
      </div>

      {/* Grid Menu */}
      <div className="px-4">
        <div className="bg-white rounded-3xl p-6 shadow-card mb-4 border border-gray-50">
            <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                {/* Row 1 */}
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 relative shadow-sm transition-transform group-hover:-translate-y-1">
                        <FileText size={22} strokeWidth={2.5} />
                        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm font-bold">0</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">任务</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 shadow-sm transition-transform group-hover:-translate-y-1">
                        <Ticket size={22} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">跟单</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-500 shadow-sm transition-transform group-hover:-translate-y-1">
                        <Wallet size={22} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">报销管理</span>
                </div>

                {/* Row 2 */}
                 <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 shadow-sm transition-transform group-hover:-translate-y-1">
                        <span className="text-xl font-black">¥</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">提现管理</span>
                </div>
                 <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-sm transition-transform group-hover:-translate-y-1">
                        <FileText size={22} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">工作日报</span>
                </div>
                 <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 relative shadow-sm transition-transform group-hover:-translate-y-1">
                        <span className="text-xl font-black">¥+</span>
                        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm font-bold">11</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">订单垫付</span>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shadow-sm transition-transform group-hover:-translate-y-1">
                        <span className="text-xl font-black">¥</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">微信对账</span>
                </div>
                 <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 shadow-sm transition-transform group-hover:-translate-y-1">
                        <Phone size={22} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">拨打电话</span>
                </div>
                 <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 shadow-sm transition-transform group-hover:-translate-y-1">
                        <FileText size={22} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">录单</span>
                </div>
                 <div className="flex flex-col items-center gap-2 mt-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-sm transition-transform group-hover:-translate-y-1">
                        <MessageCircle size={22} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-primary">公告</span>
                </div>
            </div>
        </div>

        {/* Settings List */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-card mb-6 border border-gray-50">
            <div className="flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                    <Settings className="text-gray-400 w-5 h-5" />
                    <span className="text-gray-800 text-sm font-medium">设置</span>
                </div>
                <ChevronRight className="text-gray-300 w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-500">i</div>
                    <span className="text-gray-800 text-sm font-medium">关于我们</span>
                </div>
                <ChevronRight className="text-gray-300 w-4 h-4" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCenter;