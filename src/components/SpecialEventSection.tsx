import React from 'react';
import { Sparkles, Gift, CheckCircle, FileSpreadsheet, Calendar, Percent, BookMarked, ArrowRight } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

interface SpecialEventSectionProps {
  onRegisterEvent: () => void;
}

export const SpecialEventSection: React.FC<SpecialEventSectionProps> = ({ onRegisterEvent }) => {
  const perks = [
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-orange-400" />,
      title: 'Nhận Phiếu Phân Tích Kết Quả',
      desc: 'Báo cáo chi tiết điểm mạnh - yếu từng phần năng lực (Tiếng Việt, Tiếng Anh, Toán học - Logic, Phân tích số liệu).',
    },
    {
      icon: <Gift className="w-5 h-5 text-amber-400" />,
      title: 'Tặng Sổ Tay Độc Quyền',
      desc: 'Nhận ngay cẩm nang "Chiến lược chinh phục ĐGNL 2027" do ban giảng huấn Trí Minh trực tiếp biên soạn.',
    },
    {
      icon: <BookMarked className="w-5 h-5 text-emerald-400" />,
      title: 'Buổi Chữa Đề Trực Tiếp 3 Môn',
      desc: 'Tham gia buổi giải mã chi tiết toàn bộ đề thi Toán – Văn – Anh cùng các thầy cô giỏi, chỉ rõ bẫy đề thi.',
    },
    {
      icon: <Percent className="w-5 h-5 text-sky-400" />,
      title: '100% Hoàn Lệ Phí Vào Học Phí',
      desc: 'Toàn bộ 100% lệ phí thi thử được trừ thẳng vào học phí khi đăng ký khóa học chính thức tại trung tâm.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-slate-900/90 border-2 border-orange-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-gradient-to-r from-orange-500/30 to-red-500/30 border border-orange-400/50 text-orange-300">
                <Sparkles className="w-4 h-4 text-orange-400" />
                SỰ KIỆN NỔI BẬT NĂM NAY
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                  Kỳ Thi Thử ĐGNL 2027
                  <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 text-2xl sm:text-3xl md:text-4xl">
                    Mô Phỏng Chuẩn Format ĐHQG TP.HCM
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                  Cơ hội vàng giúp sĩ tử rà soát kiến thức sớm, trải nghiệm áp lực phòng thi thật và nắm vững chiến thuật làm bài trước khi bước vào kỳ thi chính thức!
                </p>
              </div>

              {/* 4 Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {perks.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-xl bg-slate-700/60 shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{p.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Discount Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border border-orange-500/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl font-black text-amber-300">20%</span>
                  <div className="text-xs text-slate-200">
                    <strong className="text-white block">Ưu Đãi Học Phí Đặc Biệt:</strong>
                    Giảm đến 20% học phí khi đăng ký khóa học sau khi tham gia thi thử!
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onRegisterEvent}
                  className="px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ĐĂNG KÝ THAM GIA THI THỬ NGAY</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  Hotline đăng ký trực tiếp: <a href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`} className="font-bold text-orange-400 hover:underline">{CENTER_INFO.hotline}</a>
                </div>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-5 text-center sm:text-left">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div>
                    <h3 className="font-bold text-white text-base">Thông Tin Đợt Thi Thử</h3>
                    <p className="text-xs text-slate-400">Đợt 1 & Đợt 2 - Năm 2026-2027</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/40">
                    Số lượng giới hạn
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Địa điểm tổ chức:</strong>
                      <p>Trực tiếp tại Trung Tâm Trí Minh – 434 Tô Ký, Đông Thạnh, TP.HCM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Hình thức thi:</strong>
                      <p>Làm bài trên phiếu trả lời trắc nghiệm chuẩn máy chấm tự động</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Gift className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Quà tặng đặc biệt:</strong>
                      <p>Sổ tay "Chiến Lược Chinh Phục ĐGNL 2027" (Số lượng có hạn cho học viên đăng ký sớm)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700 text-xs text-slate-400 text-center">
                  * Kết quả thi thử và phân tích phổ điểm được công bố nhanh chóng, bảo mật thông tin cá nhân.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
