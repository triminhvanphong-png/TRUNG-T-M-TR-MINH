import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, GraduationCap, ShieldAlert, ChevronRight, Heart } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Center Identity & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/30">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-wide uppercase">
                  TRÍ MINH
                </h3>
                <p className="text-xs text-orange-400 font-bold">
                  Luyện Thi Đại Học & ĐGNL (Từ 1999)
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Hơn 25 năm tận tâm cống hiến vì sự nghiệp giáo dục. Trung Tâm Trí Minh luôn là địa chỉ tin cậy của Quý phụ huynh và các thế hệ học sinh TP.HCM trong các kỳ thi Tốt nghiệp THPT, ĐGNL ĐHQG và Tuyển sinh lớp 10.
            </p>

            {/* Slogans */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-1">
              <p className="text-amber-400 font-bold italic">
                "{CENTER_INFO.slogans[0]}"
              </p>
              <p className="text-slate-300 font-medium">
                "{CENTER_INFO.slogans[1]}"
              </p>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CENTER_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white flex items-center justify-center transition border border-blue-500/30"
                title="Facebook Trí Minh"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={CENTER_INFO.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white flex items-center justify-center transition border border-red-500/30"
                title="YouTube Trí Minh"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={CENTER_INFO.zalo}
                target="_blank"
                rel="noreferrer"
                className="px-3 h-10 rounded-xl bg-blue-500/20 hover:bg-blue-500 text-blue-300 hover:text-white flex items-center justify-center transition border border-blue-400/30 text-xs font-bold"
                title="Zalo Trí Minh"
              >
                Zalo: {CENTER_INFO.hotline}
              </a>
            </div>
          </div>

          {/* Col 2: Contact Details & Single Campus Warning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-3 border-orange-500 pl-3">
              Thông Tin Liên Hệ
            </h4>

            {/* Single campus emphasis note */}
            <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-bold">LƯU Ý QUAN TRỌNG:</strong>
                <span>Trung tâm chỉ có <span className="underline font-bold text-white">01 CƠ SỞ DUY NHẤT</span> tại: 434 Tô Ký, Đông Thạnh, TP.HCM. Không có chi nhánh nào khác!</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white">Địa chỉ duy nhất:</span>
                  <p>{CENTER_INFO.address}</p>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Hotline / Zalo: </span>
                  <a href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`} className="font-bold text-orange-400 hover:underline">
                    {CENTER_INFO.hotline}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Điện thoại bàn: </span>
                  <a href="tel:02836364292" className="text-slate-300 hover:underline">
                    {CENTER_INFO.landline}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Email văn phòng: </span>
                  <a href={`mailto:${CENTER_INFO.email}`} className="text-slate-300 hover:underline">
                    {CENTER_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div className="space-y-0.5 text-xs">
                  <span className="font-semibold text-white">Giờ làm việc:</span>
                  <p>• {CENTER_INFO.workingHours.weekdays}</p>
                  <p>• {CENTER_INFO.workingHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Embedded Google Maps (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-3 border-orange-500 pl-3">
              Vị Trí Trên Bản Đồ (Google Maps)
            </h4>

            <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-800 shadow-md relative bg-slate-900">
              <iframe
                title="Bản đồ Trung Tâm Trí Minh"
                src="https://maps.google.com/maps?q=434%20T%C3%B4%20K%C3%BD,%20%C4%90%C3%B4ng%20Th%E1%BA%A1nh,%20H%C3%B3c%20M%C3%B4n,%20TP.HCM&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-110"
              />
            </div>
            <div className="text-[11px] text-slate-400 flex items-center justify-between">
              <span>📍 434 Tô Ký, Đông Thạnh, TP.HCM</span>
              <a
                href="https://maps.google.com/?q=434+Tô+Ký,+Đông+Thạnh,+Hóc+Môn,+Thành+phố+Hồ+Chí+Minh"
                target="_blank"
                rel="noreferrer"
                className="text-orange-400 hover:underline font-semibold"
              >
                Mở Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © 1999 – 2026 <strong>TRUNG TÂM LUYỆN THI ĐẠI HỌC TRÍ MINH</strong>. Mọi quyền được bảo lưu.
          </p>
          <p className="flex items-center gap-1 justify-center">
            <span>Tận tâm – Kinh nghiệm – Hiệu quả cao</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
