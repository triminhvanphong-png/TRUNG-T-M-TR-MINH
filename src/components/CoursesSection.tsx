import React, { useState } from 'react';
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { COURSES } from '../data/mockData';
import { Course } from '../types';
import { CourseDetailModal } from './CourseDetailModal';
import { IMAGES, handleImageErrorToNavy } from '../constants/images';

interface CoursesSectionProps {
  onOpenConsultFormWithCourse: (courseName: string) => void;
}

// Map course to real photo from CDN
const getCourseImage = (courseId: string) => {
  switch (courseId) {
    case 'course-12-ltdh':
      return { src: IMAGES.lop12, alt: 'Khóa học Lớp 12 LTĐH tại Trung Tâm Trí Minh' };
    case 'course-dgnl-hcm':
      return { src: IMAGES.dgnl, alt: 'Khóa Ôn thi Đánh giá năng lực ĐHQG TP.HCM' };
    case 'course-tuyen-sinh-10':
      return { src: IMAGES.lop9len10, alt: 'Khóa Ôn thi Tuyển sinh 9 lên 10' };
    case 'course-lop-10':
      return { src: IMAGES.lop10, alt: 'Khóa học Lớp 10 hướng ĐGNL' };
    case 'course-lop-11':
      return { src: IMAGES.lop11, alt: 'Khóa học Lớp 11 hướng ĐGNL' };
    default:
      return { src: IMAGES.lop12, alt: 'Khóa học tại Trung Tâm Trí Minh' };
  }
};

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenConsultFormWithCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            Chương Trình Đào Tạo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Các Khóa Học Trọng Điểm Tại Trí Minh
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Chương trình thiết kế chuyên sâu, bám sát ma trận đề thi chuẩn của Bộ GD&ĐT và ĐHQG TP.HCM, kết hợp 2 hệ đào tạo: Lớp Chuẩn & Lớp Ôn thi Cấp tốc.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => {
            const courseImg = getCourseImage(course.id);
            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Header với ảnh thật 16:9, object-fit: cover, phủ gradient tối mờ ở dưới */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0B1B3D]">
                  <img
                    src={courseImg.src}
                    alt={courseImg.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={handleImageErrorToNavy}
                  />
                  {/* Phủ gradient tối mờ ở dưới để nhãn và tiêu đề chữ trắng đọc rõ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/60 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end">
                    <div className="inline-block self-start px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-500/90 text-white backdrop-blur-sm border border-orange-400/50 mb-1.5 shadow-sm">
                      {course.badge}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm group-hover:text-amber-300 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5 line-clamp-1 font-medium">
                      {course.subtitle}
                    </p>
                  </div>
                </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  {/* Target */}
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Đối tượng: </span>
                    {course.targetAudience}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Features highlights */}
                  <div className="space-y-1.5 pt-1">
                    {course.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Subject Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {course.subjects.slice(0, 4).map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        {sub}
                      </span>
                    ))}
                    {course.subjects.length > 4 && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        +{course.subjects.length - 4} môn
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200/60 flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-700" />
                    <span>Xem Chi Tiết</span>
                  </button>

                  <button
                    onClick={() => onOpenConsultFormWithCourse(course.title)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-sm flex items-center justify-center gap-1 transition cursor-pointer"
                  >
                    <span>Đăng Ký</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onRegisterCourse={(cName) => onOpenConsultFormWithCourse(cName)}
      />
    </section>
  );
};
