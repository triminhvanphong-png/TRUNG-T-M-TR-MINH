import React from 'react';
import { Clock, Gift, CheckCircle2, MessageCircle, PhoneCall, FileText, Sparkles, HelpCircle, Phone } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

interface TuitionAndScheduleSectionProps {
  onOpenConsultForm: () => void;
}

export const TuitionAndScheduleSection: React.FC<TuitionAndScheduleSectionProps> = ({ onOpenConsultForm }) => {
  const highlights = [
    {
      title: 'Ưu Đãi Đặc Biệt Khi Đăng Ký Combo 3 Môn',
      desc: 'Chính sách ưu đãi hấp dẫn dành cho học sinh đăng ký combo tổ hợp 3 môn luyện thi tốt nghiệp THPT, ĐGNL hoặc tuyển sinh lớp 10.',
      icon: <Sparkles className="w-5 h-5 text-orange-500" />,
      bg: 'bg-orange-50/70 border-orange-200',
    },
    {
      title: 'Học Viên Cũ Được Giảm Học Phí',
      desc: 'Chương trình tri ân thân thiết dành cho toàn thể học viên đã từng theo học tại Trí Minh khi đăng ký các khóa học tiếp theo.',
      icon: <Gift className="w-5 h-5 text-amber-500" />,
      bg: 'bg-amber-50/70 border-amber-200',
    },
    {
      title: 'Tài Liệu Học Tập Miễn Phí 100%',
      desc: 'Toàn bộ tài liệu học tập, đề thi thử, tóm tắt lý thuyết rút gọn và tuyển tập bài tập phân dạng đều được phát miễn phí.',
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      bg: 'bg-blue-50/70 border-blue-200',
    },
    {
      title: 'Thi Thử Được Khấu Trừ Vào Học Phí',
      desc: '100% lệ phí tham gia các kỳ thi thử tại Trí Minh (như Thi thử ĐGNL 2027) được khấu trừ trực tiếp vào học phí khi đăng ký khóa học.',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      bg: 'bg-emerald-50/70 border-emerald-200',
    },
  ];

  const faqs = [
    {
      question: 'Lịch học các môn tại Trí Minh được sắp xếp như thế nào?',
      answer: 'Toán học 3 buổi/tuần; Lý, Hóa, Anh, Sinh, Văn mỗi môn 2 buổi/tuần. Vui lòng liên hệ hotline/Zalo 0703 672 542 để nhận lịch học cụ thể.',
    },
    {
      question: 'Làm thế nào để nhận bảng học phí chi tiết và các mức ưu đãi?',
      answer: 'Quý Phụ huynh và Học viên có thể nhấn nút "Nhận bảng học phí qua Zalo" hoặc để lại số điện thoại tại form bên dưới. Phòng Đào tạo Trí Minh sẽ liên hệ tư vấn lộ trình và gửi biểu phí chi tiết kèm các chương trình ưu đãi (combo 3 môn, học viên cũ).',
    },
    {
      question: 'Hệ Lớp Chuẩn và Lớp Ôn thi Cấp tốc khác nhau như thế nào?',
      answer: 'Lớp Chuẩn củng cố kiến thức nền tảng vững chắc, học chắc học đều. Lớp Ôn thi Cấp tốc dành cho học sinh cần hệ thống lại kiến thức trong thời gian ngắn trước kỳ thi; tập trung các dạng bài trọng tâm, luyện đề và chữa đề sát cấu trúc đề thi.',
    },
  ];

  return (
    <section id="tuition-schedule" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            Chính Sách Khóa Học
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Học Phí & Ưu Đãi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Trung Tâm Luyện Thi Đại Học Trí Minh luôn áp dụng chính sách học phí linh hoạt cùng nhiều chương trình ưu đãi đồng hành cùng phụ huynh và học sinh.
          </p>
        </div>

        {/* Course Duration & Subject Sessions Structure Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/40">
                  <Clock className="w-3.5 h-3.5 text-orange-400" />
                  THỜI LƯỢNG & PHÂN BỔ MÔN HỌC
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Mỗi khóa học gồm 4 tuần (tương đương 1 tháng)
                </h3>
                <p className="text-xs sm:text-sm text-blue-200 leading-relaxed max-w-xl">
                  Lộ trình học tập được thiết kế khoa học, đảm bảo học sinh tiếp thu chắc chắn kiến thức và có thời gian rèn luyện bài tập bám sát cấu trúc đề thi.
                </p>
              </div>

              {/* Sessions Pill Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto shrink-0">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-center">
                  <div className="text-2xl font-black text-amber-300">3 buổi / tuần</div>
                  <div className="text-xs font-bold text-white uppercase mt-0.5">Môn Toán Học</div>
                  <div className="text-[11px] text-blue-200 mt-1">Học chắc nền tảng & nâng cao</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-center">
                  <div className="text-2xl font-black text-orange-300">2 buổi / tuần</div>
                  <div className="text-xs font-bold text-white uppercase mt-0.5">Lý • Hóa • Anh • Sinh • Văn</div>
                  <div className="text-[11px] text-blue-200 mt-1">Mỗi môn học chuyên sâu</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Highlight Perk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border ${item.bg} flex items-start gap-4 transition-all hover:shadow-md`}
            >
              <div className="p-3 rounded-2xl bg-white shadow-sm shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Big Action Buttons */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Nhận Bảng Học Phí Chi Tiết & Các Gói Ưu Đãi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Chọn một trong 2 hình thức thuận tiện dưới đây để nhận thông tin học phí nhanh chóng từ Phòng Đào tạo Trí Minh:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Button 1: Nhận bảng học phí qua Zalo */}
            <a
              href="https://zalo.me/0703672542"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 rounded-2xl font-black text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Nhận bảng học phí qua Zalo</span>
            </a>

            {/* Button 2: Để lại số điện thoại – trung tâm gọi lại báo học phí */}
            <button
              onClick={onOpenConsultForm}
              className="px-6 py-4 rounded-2xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 shrink-0" />
              <span>Để lại SĐT – Trung tâm gọi lại báo học phí</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-500">
            * Trung tâm luôn bảo mật thông tin và hỗ trợ tư vấn hoàn toàn miễn phí.
          </p>
        </div>

        {/* FAQ Area: Câu Hỏi Thường Gặp Về Lịch Học & Học Phí */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-slate-200">
          <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-100 text-blue-900">
                <HelpCircle className="w-5 h-5 text-blue-800" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                  Câu Hỏi Thường Gặp (FAQ) Về Lịch Học & Học Phí
                </h3>
                <p className="text-xs text-slate-500">
                  Giải đáp nhanh các thắc mắc phổ biến của Quý Phụ huynh và Học sinh
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2"
                >
                  <h4 className="text-sm sm:text-base font-bold text-blue-950 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 pl-7 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="text-xs text-slate-700">
                Cần xếp lịch học thử hoặc nhận tư vấn trực tiếp từ Thầy Cô?
              </div>
              <a
                href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition shadow-sm shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hotline: {CENTER_INFO.hotline}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
