import React from 'react';
import { Phone, MessageCircle, Bot, MessageSquare } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onOpenChatbot: () => void;
  onOpenConsultForm: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenChatbot,
  onOpenConsultForm,
}) => {
  return (
    <aside aria-label="Hỗ trợ trực tuyến" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* 1. Chatbot Trí Minh AI Button */}
      <button
        onClick={onOpenChatbot}
        className="group relative flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-xl shadow-blue-950/40 hover:scale-105 active:scale-95 transition-all border border-blue-600/50 cursor-pointer"
        title="Trợ lý AI Trí Minh"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <Bot className="w-5 h-5 text-orange-400" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Hỏi Trí Minh AI
        </span>
      </button>

      {/* 2. Zalo Button */}
      <a
        href={CENTER_INFO.zalo}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/40 hover:scale-110 active:scale-95 transition-all border border-white/20"
        title="Chat Zalo: 0703 672 542"
      >
        {/* Custom Zalo icon badge */}
        <span className="text-[11px] font-black tracking-tighter">Zalo</span>
        <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat Zalo {CENTER_INFO.hotline}
        </span>
      </a>

      {/* 3. Messenger Button */}
      <a
        href={CENTER_INFO.messenger}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl shadow-purple-600/40 hover:scale-110 active:scale-95 transition-all border border-white/20"
        title="Nhắn tin Facebook Messenger"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Facebook Messenger
        </span>
      </a>

      {/* 4. Phone Call Hotline Button */}
      <a
        href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xl shadow-orange-600/50 hover:scale-110 active:scale-95 transition-all border-2 border-white/30 animate-pulse"
        title={`Gọi Hotline: ${CENTER_INFO.hotline}`}
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-15 whitespace-nowrap bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Gọi ngay {CENTER_INFO.hotline}
        </span>
      </a>
    </aside>
  );
};
