import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, User, BookOpen, Layers, MessageSquare, AlertCircle, ShieldCheck } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

interface ConsultationFormSectionProps {
  initialCourse?: string;
  initialClassType?: string;
}

export const ConsultationFormSection: React.FC<ConsultationFormSectionProps> = ({
  initialCourse = '',
  initialClassType = 'Lớp Chuẩn',
}) => {
  const [formData, setFormData] = useState({
    hoTen: '',
    soDienThoai: '',
    lop: 'Lớp 12',
    khoaHoc: initialCourse || 'Lớp 12 Luyện Thi Đại Học (LTĐH)',
    heLop: initialClassType || 'Lớp Chuẩn',
    ghiChu: '',
    website: '', // Honeypot field for anti-spam bot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, khoaHoc: initialCourse }));
    }
  }, [initialCourse]);

  React.useEffect(() => {
    if (initialClassType) {
      setFormData((prev) => ({ ...prev, heLop: initialClassType }));
    }
  }, [initialClassType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Honeypot anti-spam check: real human leaves this empty
    if (formData.website) {
      console.warn('Spam detected via honeypot');
      return;
    }

    const trimmedName = formData.hoTen.trim();
    const trimmedPhone = formData.soDienThoai.trim();

    // 1. Kiểm tra Họ tên bắt buộc
    if (!trimmedName) {
      setErrorMessage('Vui lòng nhập Họ và tên của bạn.');
      return;
    }

    // 2. Kiểm tra số điện thoại Việt Nam 10 số bắt đầu bằng 0
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(trimmedPhone)) {
      setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam 10 chữ số bắt đầu bằng số 0 (ví dụ: 0912345678).');
      return;
    }

    setIsSubmitting(true);

    try {
      const GOOGLE_APPS_SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbybsTxGrMZu6pUq0GtbNeB5wn4YDws5ndQqQnxvnKV2_oJpwN0BO8YHKJ_g1AreC2HEWw/exec';

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          hoTen: trimmedName,
          soDienThoai: trimmedPhone,
          lop: formData.lop,
          khoaHoc: formData.khoaHoc,
          heLop: formData.heLop,
          ghiChu: formData.ghiChu.trim(),
          website: formData.website,
        }),
      });

      const data = await response.json();

      if (data && data.ok === true) {
        setSuccessMessage('Cảm ơn bạn! Trung tâm sẽ liên hệ trong thời gian sớm nhất.');
        // Xóa form sau khi gửi thành công
        setFormData({
          hoTen: '',
          soDienThoai: '',
          lop: 'Lớp 12',
          khoaHoc: 'Lớp 12 Luyện Thi Đại Học (LTĐH)',
          heLop: 'Lớp Chuẩn',
          ghiChu: '',
          website: '',
        });
      } else {
        setErrorMessage('Gửi chưa thành công, vui lòng gọi/Zalo 0703 672 542');
      }
    } catch (err) {
      console.error('Lỗi khi gửi form Google Sheets:', err);
      setErrorMessage('Gửi chưa thành công, vui lòng gọi/Zalo 0703 672 542');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-form" className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-6 sm:p-10 md:p-12 relative overflow-hidden">
          {/* Decorative bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-blue-900" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Tư Vấn Miễn Phí & Giữ Chỗ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Đăng Ký Tư Vấn & Nhận Báo Học Phí
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Điền thông tin bên dưới, Phòng Đào Tạo Trung Tâm Trí Minh sẽ liên hệ trong thời gian sớm nhất để tư vấn lộ trình học và gửi báo học phí ưu đãi!
            </p>
          </div>

          {/* Success Banner */}
          {successMessage && (
            <div className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-emerald-900">
                {successMessage}
              </h3>
              <p className="text-xs text-emerald-700">
                Hotline/Zalo hỗ trợ trực tiếp:{' '}
                <a href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`} className="font-bold underline">
                  {CENTER_INFO.hotline}
                </a>
              </p>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-8 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot hidden input for bot detection (Ẩn bằng CSS, tabIndex=-1, autocomplete=off) */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="sr-only opacity-0 pointer-events-none absolute -left-[9999px]"
              style={{ display: 'none' }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Họ tên (Bắt buộc) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Họ và Tên Học Viên / Phụ Huynh <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn An"
                    value={formData.hoTen}
                    onChange={(e) => setFormData({ ...formData, hoTen: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Số điện thoại (Bắt buộc - 10 số bắt đầu bằng 0) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Số Điện Thoại / Zalo (10 số bắt đầu bằng 0) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Ví dụ: 0703672542"
                    value={formData.soDienThoai}
                    onChange={(e) => setFormData({ ...formData, soDienThoai: e.target.value.replace(/\D/g, '') })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-slate-50/50"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Lớp */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Khối Lớp
                </label>
                <select
                  value={formData.lop}
                  onChange={(e) => setFormData({ ...formData, lop: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-slate-50/50"
                >
                  <option value="Lớp 12">Lớp 12 (Năm học 2026-2027)</option>
                  <option value="Lớp 11">Lớp 11 (GDPT 2018)</option>
                  <option value="Lớp 10">Lớp 10 (GDPT 2018)</option>
                  <option value="Lớp 9">Lớp 9 (Chuẩn bị thi tuyển sinh 10)</option>
                  <option value="Lớp 8">Lớp 8</option>
                  <option value="Lớp 7">Lớp 7</option>
                  <option value="Lớp 6">Lớp 6</option>
                  <option value="Thí sinh tự do">Thí sinh tự do / Thi lại</option>
                </select>
              </div>

              {/* Khóa học quan tâm */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Khóa Học Quan Tâm
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    value={formData.khoaHoc}
                    onChange={(e) => setFormData({ ...formData, khoaHoc: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-slate-50/50"
                  >
                    <option value="Lớp 12 Luyện Thi Đại Học (LTĐH)">Lớp 12 Luyện Thi Đại Học (LTĐH)</option>
                    <option value="Ôn Thi Đánh Giá Năng Lực (ĐGNL) ĐHQG TP.HCM">Ôn Thi ĐGNL ĐHQG TP.HCM</option>
                    <option value="Ôn Thi Tuyển Sinh 9 Lên 10">Ôn Thi Tuyển Sinh 9 Lên 10</option>
                    <option value="Lớp 11 Định Hướng ĐGNL (GDPT 2018)">Lớp 11 Định Hướng ĐGNL (GDPT 2018)</option>
                    <option value="Lớp 10 Định Hướng ĐGNL (GDPT 2018)">Lớp 10 Định Hướng ĐGNL (GDPT 2018)</option>
                    <option value="Khối Lớp 6, 7, 8 Chương Trình GDPT 2018">Khối Lớp 6, 7, 8 GDPT 2018</option>
                    <option value="Kỳ Thi Thử ĐGNL 2027">Kỳ Thi Thử ĐGNL 2027</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Hệ lớp: Lớp Chuẩn / Lớp 8+ */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Hệ Lớp Đăng Ký (Phân Hóa Trình Độ)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-3.5 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition ${
                    formData.heLop === 'Lớp Chuẩn'
                      ? 'border-blue-700 bg-blue-50/80 text-blue-950 font-bold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="heLop"
                      value="Lớp Chuẩn"
                      checked={formData.heLop === 'Lớp Chuẩn'}
                      onChange={(e) => setFormData({ ...formData, heLop: e.target.value })}
                      className="text-blue-900 focus:ring-blue-800"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold">LỚP CHUẨN</div>
                      <div className="text-[11px] text-slate-500">Củng cố nền tảng, học chắc học đều</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded font-bold">
                    Nền Tảng
                  </span>
                </label>

                <label
                  className={`p-3.5 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition ${
                    formData.heLop === 'Lớp 8+'
                      ? 'border-orange-500 bg-orange-50/80 text-orange-950 font-bold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="heLop"
                      value="Lớp 8+"
                      checked={formData.heLop === 'Lớp 8+'}
                      onChange={(e) => setFormData({ ...formData, heLop: e.target.value })}
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold">LỚP 8+ (ĐẶC BIỆT)</div>
                      <div className="text-[11px] text-slate-500">Bứt phá điểm cao, rèn câu phân loại</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-orange-200 text-orange-900 px-2 py-0.5 rounded font-bold">
                    Bứt Phá
                  </span>
                </label>
              </div>
            </div>

            {/* Ghi chú */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Ghi Chú Hoặc Nguyện Vọng Cụ Thể
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <textarea
                  rows={3}
                  placeholder="Ví dụ: Em muốn đăng ký học thêm môn Toán và Hóa; mong muốn nhận bảng học phí combo 3 môn..."
                  value={formData.ghiChu}
                  onChange={(e) => setFormData({ ...formData, ghiChu: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-slate-50/50"
                />
              </div>
            </div>

            {/* Nút gửi: Trong lúc gửi, nút hiện "Đang gửi..." và bị khóa để tránh bấm 2 lần */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 flex items-center justify-center gap-2 cursor-pointer transition transform active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Đang gửi...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>GỬI ĐĂNG KÝ TƯ VẤN NGAY</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Dữ liệu được lưu trữ trực tiếp và bảo mật an toàn tại Trung Tâm Trí Minh.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
