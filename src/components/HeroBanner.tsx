import React from 'react';
import { Phone, ArrowRight, Award, ShieldCheck, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';
import { IMAGES, handleImageErrorToNavy } from '../constants/images';

interface HeroBannerProps {
  onOpenConsultForm: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenConsultForm }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B1B3D] text-white overflow-hidden">
      {/* 1. Background Image: banner.jpg (Không lazy-load) */}
      <img
        src={IMAGES.banner}
        alt="Lớp luyện đề đông học viên tại trung tâm Trí Minh"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        referrerPolicy="no-referrer"
        onError={handleImageErrorToNavy}
      />
      {/* Phủ gradient xanh đậm mờ khoảng 75% ở bên trái nhạt dần sang phải để chữ trắng đọc rõ */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D]/95 via-[#0B1B3D]/80 to-[#0B1B3D]/40 z-0 pointer-events-none" />

      {/* Decorative background grid and subtle blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                KHAI GIẢNG THƯỜNG XUYÊN
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-900/60 text-blue-200 border border-blue-700/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Thành lập từ năm 1999 – Hơn 27 năm đồng hành cùng Phụ huynh & Học sinh
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                KHAI GIẢNG THƯỜNG XUYÊN
                <span className="block mt-2 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  Lớp 9 • 10 • 11 • 12 LTĐH – ĐGNL TPHCM
                </span>
              </h1>
              <p className="text-sm sm:text-base text-amber-300 font-extrabold tracking-wide uppercase">
                Học đúng sức – Rèn đúng cách – Đạt điểm cao
              </p>
            </div>

            {/* Slogans */}
            <div className="p-4 rounded-2xl bg-blue-900/40 border border-blue-800/80 backdrop-blur-sm max-w-2xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-bold text-amber-300 italic">
                    "{CENTER_INFO.slogans[0]}"
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    "{CENTER_INFO.slogans[1]}"
                  </p>
                </div>
                <div className="shrink-0 px-3 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold">
                  Chỉ 1 cơ sở duy nhất
                </div>
              </div>
            </div>

            {/* 4 ý ngắn dưới banner theo đúng yêu cầu tờ rơi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thầy Cô giàu kinh nghiệm luyện thi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tài liệu bám sát cấu trúc đề thi mới nhất</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hai hệ: Lớp Chuẩn & Lớp Ôn thi Cấp tốc</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Giảm ít nhất 10% học phí cho học viên cũ</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenConsultForm}
                className="px-8 py-4 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ĐĂNG KÝ TƯ VẤN</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl font-bold text-base text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-orange-400 animate-bounce" />
                <span>Gọi {CENTER_INFO.hotline}</span>
              </a>
            </div>

            <p className="text-xs text-blue-300">
              * Trung tâm tư vấn và xếp lớp phù hợp với năng lực, mục tiêu của học sinh (Phòng Đào tạo trực máy 08:00 – 21:00 hàng ngày).
            </p>
          </div>

          {/* Right Hero Card / Visual Info Box */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/30 to-blue-600/30 rounded-3xl blur-xl transform rotate-1 scale-105" />

              <div className="relative bg-slate-900/95 border border-blue-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Trung Tâm Trí Minh</h3>
                      <p className="text-xs text-slate-400">434 Tô Ký, Đông Thạnh, TP.HCM</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    Hơn 27 Năm Uy Tín
                  </span>
                </div>

                <div className="py-5 space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Các Khóa Học Tuyển Sinh Thường Xuyên:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                      <div>
                        <strong className="text-white">Lớp 12 LTĐH:</strong> Ôn trọn kiến thức lớp 10 – 11 – 12, luyện đủ 3 dạng câu hỏi.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                      <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                      <div>
                        <strong className="text-white">Ôn thi ĐGNL ĐHQG TP.HCM:</strong> Trọn bộ đề chuẩn cấu trúc, học cùng Thầy Cô hơn 27 năm kinh nghiệm.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                      <div>
                        <strong className="text-white">Ôn thi 9 lên 10:</strong> Toán – Ngữ văn – Tiếng Anh, phân tích đề tuyển sinh các năm.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                      <span className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                      <div>
                        <strong className="text-white">Lớp 10 & 11 GDPT 2018:</strong> Vững nền – Học theo chuyên đề – Rèn tư duy từng bước.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Event callout */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase text-orange-400 tracking-wide">
                        SỰ KIỆN ĐẶC BIỆT
                      </div>
                      <div className="text-xs font-semibold text-white">
                        Thi thử ĐGNL 2027 • Tặng sổ tay chiến lược
                      </div>
                    </div>
                    <button
                      onClick={onOpenConsultForm}
                      className="px-3 py-1.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow cursor-pointer transition"
                    >
                      Đăng Ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
