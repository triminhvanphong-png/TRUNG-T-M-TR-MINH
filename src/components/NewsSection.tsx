import React, { useState } from 'react';
import { Calendar, ArrowRight, Tag, BookOpen, ChevronRight } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/mockData';
import { NewsArticle } from '../types';
import { NewsDetailModal } from './NewsDetailModal';

interface NewsSectionProps {
  onOpenConsultForm: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onOpenConsultForm }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const featuredArticle = NEWS_ARTICLES[0];
  const otherArticles = NEWS_ARTICLES.slice(1);

  return (
    <section id="news" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            Tin Tức & Cẩm Nang Tuyển Sinh
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Thông Tin Tuyển Sinh & Hoạt Động Trí Minh
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Cập nhật những xu hướng thi cử mới nhất, phân tích đề thi tốt nghiệp THPT, kỳ thi ĐGNL ĐHQG TP.HCM và kinh nghiệm học tập bứt phá điểm số.
          </p>
        </div>

        {/* News Grid: 1 Featured large card + 4 side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured Article (Article 1: Thi thử ĐGNL 2027) */}
          <div className="lg:col-span-7">
            <div
              onClick={() => setSelectedArticle(featuredArticle)}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col h-full"
            >
              <div className="relative h-72 sm:h-84 w-full overflow-hidden bg-slate-900">
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-600 text-white shadow-md">
                    {featuredArticle.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black group-hover:text-amber-300 transition-colors leading-snug">
                    {featuredArticle.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {featuredArticle.summary}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
                  <span className="flex items-center gap-1">
                    Đọc toàn bộ bài viết <ChevronRight className="w-4 h-4" />
                  </span>
                  <span className="text-slate-400 font-normal">Sự kiện nổi bật</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other 4 Articles List */}
          <div className="lg:col-span-5 space-y-4">
            {otherArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-2xl border border-slate-200 p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex gap-4 group items-center"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-100 relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-slate-400">{article.date}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {article.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News Detail Modal */}
      <NewsDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onConsult={onOpenConsultForm}
      />
    </section>
  );
};
