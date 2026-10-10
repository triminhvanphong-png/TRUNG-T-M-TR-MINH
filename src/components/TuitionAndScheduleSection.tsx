import React, { useState } from 'react';
import { Clock, Calendar, Gift, CheckCircle2, MessageCircle, PhoneCall, Upload, ZoomIn, FileText, Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

interface TuitionAndScheduleSectionProps {
  onOpenConsultForm: () => void;
}

export const TuitionAndScheduleSection: React.FC<TuitionAndScheduleSectionProps> = ({ onOpenConsultForm }) => {
  const [scheduleImg, setScheduleImg] = useState<string | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setScheduleImg(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
      desc: 'Toàn bộ giáo trình biên soạn độc quyền, đề thi thử, tóm tắt lý thuyết rút gọn và tuyển tập bài tập phân dạng đều được phát miễn phí.',
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
                  Lộ trình học tập được thiết kế khoa học, đảm bảo học sinh tiếp thu chắc chắn kiến thức và có thời gian rèn luyện bài tập thực chiến.
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
            * Trung tâm cam kết bảo mật thông tin và hỗ trợ tư vấn hoàn toàn miễn phí.
          </p>
        </div>

        {/* Schedule Image Display Area (Bên dưới là khu vực hiển thị ảnh thời khóa biểu từng lớp) */}
        <div className="max-w-5xl mx-auto pt-6 border-t border-slate-200">
          <div className="bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-1">
                  LỊCH HỌC TẠI TRUNG TÂM
                </span>
                <h3 className="font-black text-slate-900 text-xl sm:text-2xl">
                  Thời Khóa Biểu Từng Lớp Học
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Lịch học các khối Lớp 8 • 9 • 10 • 11 • 12 LTĐH & Ôn thi ĐGNL ĐHQG TP.HCM.
                </p>
              </div>

              {/* Upload image button */}
              <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold transition cursor-pointer shadow-md shrink-0">
                <Upload className="w-4 h-4" />
                <span>Tải ảnh thời khóa biểu lên</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUploadImage}
                />
              </label>
            </div>

            {/* Display Box */}
            <div className="relative min-h-[380px] rounded-2xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-4">
              {scheduleImg ? (
                <div className="w-full flex items-center justify-center">
                  <img
                    src={scheduleImg}
                    alt="Thời khóa biểu Trí Minh"
                    className="w-full h-auto object-contain max-h-[700px] rounded-xl"
                  />
                  <button
                    onClick={() => setFullscreenImage(scheduleImg)}
                    className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-900/80 hover:bg-orange-600 text-white shadow transition cursor-pointer"
                    title="Xem phóng to thời khóa biểu"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="w-full max-w-4xl py-6 space-y-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-100">
                    <Calendar className="w-8 h-8 text-blue-800" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-base">
                      Khu Vực Hiển Thị Ảnh Thời Khóa Biểu Chi Tiết Từng Lớp
                    </h4>
                    <p className="text-xs text-slate-500 max-w-lg mx-auto">
                      Quý trung tâm có thể nhấp vào nút <strong>"Tải ảnh thời khóa biểu lên"</strong> ở góc phải trên để cập nhật ảnh lịch học chính thức mới nhất.
                    </p>
                  </div>

                  {/* Clean Timetable Overview Table (NO TUITION NUMBERS) */}
                  <div className="overflow-x-auto text-left">
                    <table className="w-full text-xs text-slate-700 border-collapse border border-slate-200 rounded-xl overflow-hidden">
                      <thead>
                        <tr className="bg-blue-950 text-white">
                          <th className="p-3 border border-blue-900">Khối Lớp</th>
                          <th className="p-3 border border-blue-900">Môn Học</th>
                          <th className="p-3 border border-blue-900">Các Ngày Học</th>
                          <th className="p-3 border border-blue-900">Khung Giờ</th>
                          <th className="p-3 border border-blue-900">Hệ Lớp</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-blue-950 border border-slate-200">Lớp 12 LTĐH (2K8)</td>
                          <td className="p-3 border border-slate-200">Toán (3 buổi) • Lý • Hóa • Văn • Anh (2 buổi/môn)</td>
                          <td className="p-3 border border-slate-200">Thứ 2 - 4 - 6 hoặc Thứ 3 - 5 - 7</td>
                          <td className="p-3 border border-slate-200">18:00 – 21:00</td>
                          <td className="p-3 border border-slate-200"><span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 font-bold">Lớp Chuẩn / Lớp 8+</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50 bg-slate-50/50">
                          <td className="p-3 font-bold text-blue-950 border border-slate-200">Ôn Thi ĐGNL ĐHQG</td>
                          <td className="p-3 border border-slate-200">Toán - Văn - Anh & Tư duy logic</td>
                          <td className="p-3 border border-slate-200">Tối Thứ 7 & Cả Ngày Chủ Nhật</td>
                          <td className="p-3 border border-slate-200">07:30 – 11:00 & 16:30 – 20:00</td>
                          <td className="p-3 border border-slate-200"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold">Chuyên Sâu ĐGNL</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-blue-950 border border-slate-200">Lớp 9 Tuyển Sinh 10</td>
                          <td className="p-3 border border-slate-200">Toán (3 buổi) • Ngữ Văn (2 buổi) • Tiếng Anh (2 buổi)</td>
                          <td className="p-3 border border-slate-200">Thứ 2 - 4 - 6 hoặc Thứ 3 - 5 - 7</td>
                          <td className="p-3 border border-slate-200">17:45 – 20:45</td>
                          <td className="p-3 border border-slate-200"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">Lớp Chuẩn / Lớp 8+</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50 bg-slate-50/50">
                          <td className="p-3 font-bold text-blue-950 border border-slate-200">Lớp 10 & 11 (GDPT 2018)</td>
                          <td className="p-3 border border-slate-200">Toán (3 buổi) • Lý • Hóa • Văn • Anh (2 buổi/môn)</td>
                          <td className="p-3 border border-slate-200">Các buổi tối trong tuần</td>
                          <td className="p-3 border border-slate-200">17:45 – 20:45</td>
                          <td className="p-3 border border-slate-200"><span className="px-2 py-0.5 rounded bg-sky-100 text-sky-700 font-bold">Nền Tảng / 8+</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-blue-950 border border-slate-200">Lớp 6, 7, 8 THCS</td>
                          <td className="p-3 border border-slate-200">Toán (3 buổi) • Ngữ Văn • Tiếng Anh (2 buổi/môn)</td>
                          <td className="p-3 border border-slate-200">Thứ 3 - 5 - 7 & Cuối tuần</td>
                          <td className="p-3 border border-slate-200">17:30 – 19:30</td>
                          <td className="p-3 border border-slate-200"><span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 font-bold">Củng Cố Gốc</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lightbox for zooming schedule image */}
        {fullscreenImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setFullscreenImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <img
                src={fullscreenImage}
                alt="Thời khóa biểu phóng to"
                className="max-w-full max-h-[90vh] object-contain rounded-xl"
              />
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs hover:bg-white/40"
              >
                Đóng [ESC]
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
