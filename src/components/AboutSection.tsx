import React from 'react';
import { CheckCircle2, Award, BookOpen, Users, Compass, ShieldAlert, ArrowRight } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

interface AboutSectionProps {
  onOpenConsultForm: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultForm }) => {
  const highlightPoints = [
    {
      title: 'Chuyên môn sâu & Toàn diện',
      desc: 'Chuyên luyện thi đại học, kỳ thi Đánh giá năng lực (ĐGNL) ĐHQG TP.HCM, ôn thi tuyển sinh lớp 10 và bồi dưỡng các khối lớp từ 6 đến 12 theo chuẩn GDPT mới.',
    },
    {
      title: 'Đội ngũ Thầy Cô giàu kinh nghiệm',
      desc: 'Nhiều Thầy Cô được Sở GD&ĐT TP.HCM công nhận danh hiệu dạy giỏi, thạc sĩ đầu ngành, tận tụy và thấu hiểu tâm lý học sinh.',
    },
    {
      title: 'Phương pháp giảng dạy ưu việt',
      desc: 'Hệ thống hóa toàn bộ chương trình, phân loại bài tập theo từng dạng đề cụ thể, rút gọn lý thuyết cô đọng, dễ hiểu, dễ nhớ và ứng dụng thực chiến ngay.',
    },
    {
      title: 'Cam kết sát sao từng học viên',
      desc: 'Theo dõi tiến độ, kiểm tra định kỳ phân tích phổ điểm, thông báo kết quả cho phụ huynh và tổ chức phụ đạo bổ trợ cho học sinh chưa vững.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual feature card & campus badge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-orange-100 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-blue-100 rounded-3xl -z-10" />

              <div className="bg-slate-900 text-white rounded-3xl p-7 sm:p-9 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-4">
                  <Award className="w-3.5 h-3.5" />
                  Kể từ năm 1999
                </div>

                <h3 className="text-2xl font-black tracking-tight mb-3">
                  TRUNG TÂM LUYỆN THI ĐẠI HỌC TRÍ MINH
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Nơi chắp cánh ước mơ giảng đường đại học và trường chuyên lớp chọn cho hàng chục ngàn thế hệ học sinh tại TP.HCM trong suốt 25 năm qua.
                </p>

                {/* Important Campus Alert Notice */}
                <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs space-y-1.5 mb-6">
                  <div className="flex items-center gap-2 font-bold text-amber-300">
                    <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
                    <span>LƯU Ý QUAN TRỌNG VỀ CƠ SỞ:</span>
                  </div>
                  <p className="leading-relaxed">
                    Trung tâm chỉ có <strong className="text-white underline">01 CƠ SỞ DUY NHẤT</strong> tại: <br />
                    <span className="font-bold text-white">434 đường Tô Ký, xã Đông Thạnh, TP.HCM</span>.
                  </p>
                  <p className="text-[11px] text-amber-300/80">
                    Quý phụ huynh và học sinh lưu ý để tránh các đơn vị mạo danh thương hiệu Trí Minh.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center pt-2 border-t border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-800/60">
                    <div className="text-xl font-black text-orange-400">25+</div>
                    <div className="text-[11px] text-slate-400 font-medium">Năm bền vững</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/60">
                    <div className="text-xl font-black text-amber-400">10.000+</div>
                    <div className="text-[11px] text-slate-400 font-medium">Học sinh đỗ đạt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content and Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                Về Chúng Tôi
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                Học Đúng Chất – Thi Là Đỗ <br />
                <span className="text-blue-900">Cùng Trung Tâm Trí Minh</span>
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              Thành lập từ năm 1999, <strong>Trung Tâm Luyện Thi Đại Học Trí Minh</strong> tự hào là cái nôi đào tạo uy tín hàng đầu khu vực TP.HCM. Chúng tôi kiên định với tôn chỉ <em>"Tận tâm – Kinh nghiệm – Hiệu quả cao"</em>, không dạy mẹo chụp giật mà chú trọng rèn luyện tư duy bản chất, củng cố nền tảng vững vàng để học sinh tự tin bước vào mọi kỳ thi lớn.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlightPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <h4 className="text-sm font-bold text-slate-900">{pt.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultForm}
                className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md shadow-orange-600/20 flex items-center gap-2 cursor-pointer transition"
              >
                <span>Nhận Tư Vấn Lộ Trình Học</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-slate-500">
                Hotline tư vấn nhanh: <a href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`} className="font-bold text-blue-900 hover:text-orange-600">{CENTER_INFO.hotline}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
