import React from 'react';
import { CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';
import { IMAGES, handleImageErrorToNavy } from '../constants/images';

interface AboutSectionProps {
  onOpenConsultForm: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultForm }) => {
  const highlightPoints = [
    {
      title: 'Đúng trọng tâm – Đúng cấu trúc đề thi mới',
      desc: 'Luyện thi Đại học, Đánh giá năng lực ĐHQG TP.HCM, ôn thi 9 lên 10 và các lớp 10, 11, 12 theo chương trình GDPT 2018.',
    },
    {
      title: 'Thầy Cô giàu kinh nghiệm',
      desc: 'Nhiều Thầy Cô nguyên là Tổ trưởng bộ môn trường THPT, có hơn 20 – 40 năm kinh nghiệm luyện thi Đại học.',
    },
    {
      title: 'Học chuẩn – Hiểu sâu – Tăng điểm ngay',
      desc: 'Hệ thống hóa chương trình, giải theo từng dạng đề, rút gọn lý thuyết dễ nhớ dễ học. Tài liệu do ban giảng huấn biên soạn, phát miễn phí.',
    },
    {
      title: 'Theo dõi tiến độ – Báo cáo năng lực định kỳ',
      desc: 'Thầy Cô theo sát từng học sinh, kiểm tra định kỳ và trao đổi kết quả với Phụ huynh.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Cạnh đoạn giới thiệu: bên phải trên máy tính, phía trên trên điện thoại */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <figure className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="overflow-hidden rounded-[16px] shadow-md border border-slate-200/80 bg-[#0B1B3D]">
                <img
                  src={IMAGES.giangBai}
                  alt="Thầy Cô hướng dẫn học sinh giải bài trực tiếp trên lớp"
                  loading="lazy"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={handleImageErrorToNavy}
                />
              </div>
              <figcaption className="mt-2.5 text-center text-xs sm:text-sm text-slate-500 italic font-medium">
                Thầy Cô hướng dẫn học sinh giải bài trực tiếp trên lớp
              </figcaption>

              {/* Thông tin cơ sở & thành tích */}
              <div className="mt-4 p-3.5 rounded-[16px] bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-amber-950 font-bold">Chỉ 01 cơ sở duy nhất:</strong> 434 Tô Ký, Đông Thạnh, TP.HCM (Thành lập từ năm 1999 – Hơn 27 năm đồng hành cùng Phụ huynh & Học sinh).
                </div>
              </div>
            </figure>
          </div>

          {/* Đoạn giới thiệu: bên trái trên máy tính, phía dưới trên điện thoại */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                Về Chúng Tôi
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                Học Đúng Chất – Thi Là Đỗ <br />
                <span className="text-blue-900">Cùng Trung Tâm Trí Minh</span>
              </h2>
            </div>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Trung tâm Luyện thi Đại học Trí Minh thành lập từ năm 1999, nguyên là Trung tâm Luyện thi Đại học – Đại học Sư phạm (chi nhánh Hóc Môn). Hơn 27 năm qua, trung tâm đồng hành cùng Phụ huynh & Học sinh với phương châm Tận tâm – Kinh nghiệm – Hiệu quả cao. Hằng năm, tỷ lệ đậu Đại học của học sinh tại trung tâm rất cao (có năm đạt trên 70%).
            </p>

            {/* 4 ô nổi bật */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlightPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
                >
                  <div className="flex items-start gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{pt.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">{pt.desc}</p>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultForm}
                className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md shadow-orange-600/20 flex items-center gap-2 cursor-pointer transition"
              >
                <span>Nhận Tư Vấn Khóa Học</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-slate-500">
                Hotline tư vấn nhanh:{' '}
                <a
                  href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`}
                  className="font-bold text-blue-900 hover:text-orange-600"
                >
                  {CENTER_INFO.hotline}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
