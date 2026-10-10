import React from 'react';
import { Check, Star, Zap, Shield, ArrowRight, HelpCircle } from 'lucide-react';
import { CLASS_COMPARISON } from '../data/mockData';

interface ClassComparisonSectionProps {
  onSelectClassType: (type: string) => void;
}

export const ClassComparisonSection: React.FC<ClassComparisonSectionProps> = ({ onSelectClassType }) => {
  return (
    <section id="class-types" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            Mô Hình Đào Tạo Phân Hóa
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hai Hệ Lớp Đào Tạo Tại Trí Minh
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Nhằm đảm bảo hiệu quả tối ưu cho từng học viên, Trung Tâm Trí Minh phân lớp theo năng lực và mục tiêu với 2 hệ lớp riêng biệt: <strong>Lớp Chuẩn</strong> và <strong>Lớp 8+</strong>.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Column 1: LỚP CHUẨN */}
          <div className="rounded-3xl border-2 border-blue-200 bg-blue-50/30 p-7 sm:p-9 flex flex-col justify-between shadow-md relative hover:border-blue-400 transition-all">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200">
                  <Shield className="w-3.5 h-3.5 text-blue-700" />
                  {CLASS_COMPARISON.standard.badge}
                </span>
                <span className="text-xs font-semibold text-slate-500">Mục tiêu 7.0 – 8.2+</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-blue-950 mb-2">
                {CLASS_COMPARISON.standard.name}
              </h3>
              <p className="text-sm font-semibold text-blue-800 mb-4">
                {CLASS_COMPARISON.standard.tagline}
              </p>

              {/* Target info */}
              <div className="p-3.5 rounded-2xl bg-white border border-blue-100 text-xs text-slate-700 mb-6">
                <span className="font-bold text-blue-950">Đối tượng phù hợp: </span>
                {CLASS_COMPARISON.standard.target}
              </div>

              {/* Bullet points */}
              <div className="space-y-3 mb-8">
                {CLASS_COMPARISON.standard.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectClassType('Lớp Chuẩn')}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-blue-900 bg-blue-100 hover:bg-blue-200 border border-blue-300 flex items-center justify-center gap-2 cursor-pointer transition shadow-sm"
            >
              <span>Đăng Ký Hệ Lớp Chuẩn</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Column 2: LỚP 8+ (ĐẶC BIỆT) */}
          <div className="rounded-3xl border-2 border-orange-500 bg-gradient-to-b from-orange-50/60 to-amber-50/40 p-7 sm:p-9 flex flex-col justify-between shadow-xl relative ring-4 ring-orange-500/10 hover:border-orange-600 transition-all">
            {/* Best choice badge */}
            <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-orange-500 to-red-600 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-current" />
              Bứt Phá Điểm Cao
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-950 border border-orange-300">
                  <Zap className="w-3.5 h-3.5 text-orange-600" />
                  {CLASS_COMPARISON.advanced.badge}
                </span>
                <span className="text-xs font-bold text-orange-600">Mục tiêu 8.5 – 9.8+</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                {CLASS_COMPARISON.advanced.name}
              </h3>
              <p className="text-sm font-semibold text-orange-700 mb-4">
                {CLASS_COMPARISON.advanced.tagline}
              </p>

              {/* Target info */}
              <div className="p-3.5 rounded-2xl bg-white border border-orange-200 text-xs text-slate-700 mb-6 shadow-sm">
                <span className="font-bold text-slate-900">Đối tượng phù hợp: </span>
                {CLASS_COMPARISON.advanced.target}
              </div>

              {/* Bullet points */}
              <div className="space-y-3 mb-8">
                {CLASS_COMPARISON.advanced.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectClassType('Lớp 8+')}
              className="w-full py-3.5 rounded-xl font-black text-sm text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md shadow-orange-600/30 flex items-center justify-center gap-2 cursor-pointer transition"
            >
              <span>Đăng Ký Hệ Lớp 8+ Chuyên Sâu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Assistance hint */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-orange-500" />
          <span>
            Chưa chắc chắn mình phù hợp với hệ lớp nào? Đừng lo lắng, Trí Minh sẽ tổ chức bài kiểm tra đánh giá năng lực đầu vào miễn phí để tư vấn xếp lớp chuẩn xác nhất!
          </span>
        </div>
      </div>
    </section>
  );
};
