import React, { useState, useEffect, useCallback } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { IMAGES, handleImageErrorToNavy } from '../constants/images';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  isLarge?: boolean;
}

// 7 ảnh thật duy nhất với chú thích chuẩn theo yêu cầu
const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'img-banner',
    src: IMAGES.banner,
    alt: 'Lớp luyện đề đông học viên tại trung tâm Trí Minh',
    caption: 'Lớp luyện đề đông học viên tại trung tâm',
    isLarge: true,
  },
  {
    id: 'img-giang-bai',
    src: IMAGES.giangBai,
    alt: 'Thầy hướng dẫn học sinh giải bài trên bảng tại Trí Minh',
    caption: 'Thầy hướng dẫn học sinh giải bài trên bảng',
  },
  {
    id: 'img-lop-12',
    src: IMAGES.lop12,
    alt: 'Thầy giảng chuyên đề Toán lớp 12',
    caption: 'Thầy giảng chuyên đề Toán lớp 12',
  },
  {
    id: 'img-9-len-10',
    src: IMAGES.lop9len10,
    alt: 'Cô giảng chuyên đề Ngữ pháp Tiếng Việt',
    caption: 'Cô giảng chuyên đề Ngữ pháp Tiếng Việt',
  },
  {
    id: 'img-lop-11',
    src: IMAGES.lop11,
    alt: 'Học viên tập trung làm bài trên lớp',
    caption: 'Học viên tập trung làm bài trên lớp',
  },
  {
    id: 'img-lop-10',
    src: IMAGES.lop10,
    alt: 'Học viên làm bài trên đề do trung tâm biên soạn',
    caption: 'Học viên làm bài trên đề do trung tâm biên soạn',
  },
  {
    id: 'img-dgnl',
    src: IMAGES.dgnl,
    alt: 'Thi thử trắc nghiệm tại trung tâm',
    caption: 'Thi thử trắc nghiệm tại trung tâm',
  },
];

export const LearningEnvironmentSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) =>
      prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
    );
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
    );
  }, []);

  const handleClose = useCallback(() => {
    setActiveIdx(null);
  }, []);

  // Keyboard navigation: Escape to close, Left/Right arrow to navigate
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, handleClose, handlePrev, handleNext]);

  return (
    <section id="khong-gian-hoc-tap" className="py-20 sm:py-28 bg-slate-100/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 border border-orange-200">
            <Camera className="w-3.5 h-3.5" />
            Hình Ảnh Thực Tế
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Không Gian Học Tập
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Môi trường học tập nghiêm túc, thân thiện và giàu cảm hứng tại Trung Tâm Luyện Thi Đại Học Trí Minh
          </p>
        </div>

        {/* Lưới Mosaic: 3 cột máy tính, 2 cột điện thoại; banner.jpg to chiếm 2 ô */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[250px]">
          {GALLERY_IMAGES.map((item, idx) => {
            const isBanner = item.isLarge;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`group relative overflow-hidden rounded-2xl bg-[#0B1B3D] shadow-sm hover:shadow-xl border border-slate-200/80 cursor-pointer transition-all duration-300 ${
                  isBanner
                    ? 'col-span-2 row-span-1 sm:row-span-2'
                    : 'col-span-1 row-span-1'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={isBanner ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  onError={handleImageErrorToNavy}
                />

                {/* Gradient overlay for caption readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/90 via-[#0B1B3D]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Zoom hover indicator icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption card content */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 text-white">
                  <p className="font-bold text-sm sm:text-base lg:text-lg leading-snug drop-shadow-sm group-hover:text-amber-300 transition-colors line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal (Bấm vào ảnh mở xem lớn, có mũi tên chuyển ảnh, phím Esc để đóng) */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#071126]/95 backdrop-blur-md p-3 sm:p-6 animate-fadeIn"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition cursor-pointer"
            aria-label="Đóng (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition cursor-pointer backdrop-blur-sm"
            aria-label="Ảnh trước (Mũi tên trái)"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition cursor-pointer backdrop-blur-sm"
            aria-label="Ảnh tiếp theo (Mũi tên phải)"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Main image container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0B1B3D] shadow-2xl max-h-[75vh] flex items-center justify-center">
              <img
                src={GALLERY_IMAGES[activeIdx].src}
                alt={GALLERY_IMAGES[activeIdx].alt}
                className="max-h-[75vh] w-auto max-w-full object-contain select-none"
                referrerPolicy="no-referrer"
                onError={handleImageErrorToNavy}
              />
            </div>

            {/* Lightbox Caption & Counter */}
            <div className="mt-4 text-center text-white space-y-1 px-4">
              <div className="flex items-center justify-center gap-2">
                <h4 className="text-base sm:text-lg font-bold text-amber-300">
                  {GALLERY_IMAGES[activeIdx].caption}
                </h4>
                <span className="text-xs text-slate-300 bg-white/10 px-2 py-0.5 rounded-full">
                  {activeIdx + 1} / {GALLERY_IMAGES.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
