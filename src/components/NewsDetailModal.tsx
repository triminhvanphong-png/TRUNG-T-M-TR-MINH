import React from 'react';
import { X, Calendar, Tag, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  onConsult: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ article, onClose, onConsult }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 shrink-0">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-600 text-white shadow-sm">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-300">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight">
              {article.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p className="font-semibold text-slate-900 text-base sm:text-lg border-l-4 border-orange-500 pl-4 py-1 italic bg-orange-50/50 rounded-r-xl">
            {article.summary}
          </p>

          <div className="space-y-3 pt-2">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-400">Chủ đề:</span>
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl"
          >
            Đóng bài viết
          </button>
          <button
            onClick={() => {
              onClose();
              onConsult();
            }}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition"
          >
            <span>Đăng Ký Tư Vấn Khóa Học Này</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
