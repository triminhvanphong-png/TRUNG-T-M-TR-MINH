import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onOpenConsultForm?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = () => {
  return (
    <aside aria-label="Hỗ trợ trực tuyến" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* 1. Zalo Button */}
      <a
        href={CENTER_INFO.zalo}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/40 hover:scale-110 active:scale-95 transition-all border border-white/20"
        title="Chat Zalo: 0703 672 542"
      >
        <span className="text-[11px] font-black tracking-tighter">Zalo</span>
        <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat Zalo {CENTER_INFO.hotline}
        </span>
      </a>

      {/* 2. Messenger Button */}
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

      {/* 3. Phone Call Hotline Button */}
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
