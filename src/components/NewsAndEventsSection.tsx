import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, MessageCircle, Eye, CheckCircle2, X, Copy, Check } from 'lucide-react';
import { DANH_SACH_SU_KIEN } from '../data/mockData';
import { SuKienItem } from '../types';
import { handleImageErrorToNavy } from '../constants/images';

export const NewsAndEventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<SuKienItem | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Kiểm tra trạng thái hết hạn theo thời gian hiện tại
  const now = new Date();

  const handleCopy = () => {
    navigator.clipboard.writeText('THI THỬ ĐGNL');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="tin-tuc-su-kien" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tiêu đề mục */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            Hoạt Động & Thông Báo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tin Tức & Sự Kiện
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Các kỳ thi thử, chuyên đề bồi dưỡng và thông tin tuyển sinh mới nhất từ Trung Tâm Luyện Thi Đại Học Trí Minh
          </p>
        </div>

        {/* Danh sách thẻ sự kiện (sự kiện mới nhất hiện trước) */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {DANH_SACH_SU_KIEN.map((sk) => {
            const isExpired = new Date(sk.hetHan) < now;

            return (
              <article
                key={sk.id}
                className="bg-white rounded-3xl border-2 border-orange-200/80 hover:border-orange-400 shadow-lg shadow-orange-500/5 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Bên trái trên máy tính, ở trên trên điện thoại: Poster */}
                <div className="md:w-5/12 lg:w-1/2 relative bg-[#0B1B3D] overflow-hidden group cursor-pointer shrink-0">
                  <div
                    className="aspect-[4/3] md:aspect-auto md:h-full w-full relative flex items-center justify-center p-3 sm:p-4"
                    onClick={() => setPreviewImage(sk.anh)}
                  >
                    <img
                      src={sk.anh}
                      alt={sk.tieuDe}
                      loading="lazy"
                      className="w-full h-full object-contain max-h-[380px] md:max-h-[460px] group-hover:scale-[1.02] transition-transform duration-300 rounded-xl"
                      onError={handleImageErrorToNavy}
                    />
                    {/* Hover hint */}
                    <div className="absolute inset-0 bg-blue-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                        <Eye className="w-3.5 h-3.5 text-orange-400" />
                        Bấm để xem ảnh lớn
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bên phải trên máy tính, ở dưới trên điện thoại: Nội dung */}
                <div className="p-6 sm:p-8 md:w-7/12 lg:w-1/2 flex flex-col justify-between space-y-5 bg-gradient-to-br from-white to-orange-50/20">
                  <div className="space-y-4">
                    {/* Nhãn trạng thái */}
                    <div>
                      {isExpired ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700">
                          <span className="w-2 h-2 rounded-full bg-slate-400" />
                          Đã diễn ra
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-red-600 text-white shadow-sm animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-white" />
                          Sắp diễn ra
                        </span>
                      )}
                    </div>

                    {/* Tiêu đề */}
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                      {sk.tieuDe}
                    </h3>

                    {/* 3 dòng có icon */}
                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-1">
                      <div className="flex items-start gap-2.5">
                        <Calendar className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-800">{sk.ngay}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-800">{sk.gio}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{sk.diaChi}</span>
                      </div>
                    </div>
                  </div>

                  {/* Các nút hành động */}
                  <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedEvent(sk)}
                      className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-blue-900" />
                      <span>Xem chi tiết</span>
                    </button>

                    {!isExpired && (
                      <a
                        href="https://zalo.me/0703672542"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md shadow-orange-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Nhắn Zalo đăng ký</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* POPUP BÀI VIẾT ĐẦY ĐỦ */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header popup */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white flex items-start justify-between gap-4 border-b border-blue-900">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase bg-red-600 text-white mb-2">
                  Thi Thử Miễn Phí
                </span>
                <h3 className="text-lg sm:text-xl font-black text-amber-300 leading-snug">
                  {selectedEvent.noiDung.tieuDeBaiViet}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer shrink-0"
                aria-label="Đóng popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nội dung bài viết đầy đủ (đúng nguyên văn) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-slate-900 leading-relaxed">
                {selectedEvent.noiDung.doanVanDau}
              </p>

              <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 space-y-2 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-base">📅</span>
                  <span className="text-slate-900 font-bold">{selectedEvent.noiDung.ngay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">⏰</span>
                  <span className="text-slate-900 font-bold">{selectedEvent.noiDung.gio}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">📍</span>
                  <span className="text-slate-900">{selectedEvent.noiDung.diaChi}</span>
                </div>
              </div>

              <p className="font-medium text-slate-800">
                📝 {selectedEvent.noiDung.moTaDe}
              </p>

              <div className="space-y-2 pt-1">
                <p className="font-bold text-slate-900">Tham gia thi thử, các bạn sẽ có cơ hội:</p>
                <div className="space-y-1.5 pl-1">
                  {selectedEvent.noiDung.coHoi.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold mt-0.5">✅</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-1">
                <p>{selectedEvent.noiDung.huongDanDangKy}</p>
                <p>{selectedEvent.noiDung.xacNhanSuatThi}</p>
              </div>

              {/* Dòng chữ nghiêng nhỏ màu xám */}
              <p className="text-xs italic text-slate-500 pt-2 border-t border-slate-100">
                {selectedEvent.noiDung.ghiChuNho}
              </p>
            </div>

            {/* Cuối popup: Nút Sao chép & Nút Mở Zalo */}
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    <span className="text-emerald-700 font-bold">Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>Sao chép nội dung: THI THỬ ĐGNL</span>
                  </>
                )}
              </button>

              <a
                href="https://zalo.me/0703672542"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Mở Zalo 0703 672 542</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL XEM POSTER LỚN */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
            aria-label="Đóng xem ảnh lớn"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewImage}
              alt="Poster Thi thử ĐGNL 2027"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
              onError={handleImageErrorToNavy}
            />
          </div>
        </div>
      )}
    </section>
  );
};
