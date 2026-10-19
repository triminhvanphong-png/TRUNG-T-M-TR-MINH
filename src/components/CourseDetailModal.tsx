import React from 'react';
import { X, CheckCircle2, Calendar, BookOpen, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { Course } from '../types';
import { CENTER_INFO } from '../data/mockData';
import { IMAGES, handleImageErrorToNavy } from '../constants/images';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onRegisterCourse: (courseName: string) => void;
}

// Map course to photo from CDN
const getCourseModalImage = (courseId: string) => {
  switch (courseId) {
    case 'course-12-ltdh':
      return IMAGES.lop12;
    case 'course-dgnl-hcm':
      return IMAGES.dgnl;
    case 'course-tuyen-sinh-10':
      return IMAGES.lop9len10;
    case 'course-lop-10':
      return IMAGES.lop10;
    case 'course-lop-11':
      return IMAGES.lop11;
    default:
      return IMAGES.lop12;
  }
};

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onRegisterCourse,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header với ảnh thật */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-[#0B1B3D] text-white">
          <img
            src={getCourseModalImage(course.id)}
            alt={course.title}
            loading="lazy"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={handleImageErrorToNavy}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/70 to-[#0B1B3D]/30" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition cursor-pointer z-10"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-600 text-white mb-1.5 shadow">
              {course.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-black drop-shadow text-white">{course.title}</h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">{course.subtitle}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Target audience */}
          <div className="flex items-center gap-3 p-3.5 bg-blue-50/70 rounded-2xl border border-blue-100">
            <Users className="w-5 h-5 text-blue-700 shrink-0" />
            <div>
              <div className="text-xs font-bold text-blue-900 uppercase">Đối tượng tuyển sinh</div>
              <div className="text-sm font-semibold text-slate-800">{course.targetAudience}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Giới Thiệu Mục Tiêu Khóa Học
            </h4>
            <p className="text-slate-600 leading-relaxed">{course.description}</p>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Các Môn Học Đào Tạo
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.subjects.map((sub, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Điểm Nổi Bật Của Khóa Học
            </h4>
            <div className="space-y-2">
              {course.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Lộ Trình Đào Tạo Chi Tiết
            </h4>
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {course.curriculumDetails.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="flex items-center gap-3 p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200/80">
            <Calendar className="w-5 h-5 text-amber-700 shrink-0" />
            <div>
              <div className="text-xs font-bold text-amber-900 uppercase">Thời Gian Học Dự Kiến</div>
              <div className="text-xs sm:text-sm text-slate-800 font-medium">{course.scheduleOverview}</div>
            </div>
          </div>

          {/* Note on tuition */}
          <div className="p-3.5 bg-blue-50/80 rounded-xl text-xs text-slate-600 border border-blue-200">
            💡 <strong>Chính sách học phí & Ưu đãi:</strong> Ưu đãi đặc biệt khi đăng ký combo 3 môn, học viên cũ được giảm học phí, 100% tài liệu học tập miễn phí. Mời Quý Phụ huynh & Học viên nhắn Zalo <strong>{CENTER_INFO.hotline}</strong> hoặc nhấn nút đăng ký bên dưới để trung tâm gọi lại báo bảng học phí chi tiết!
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-200 transition cursor-pointer"
          >
            Đóng
          </button>
          <button
            onClick={() => {
              onRegisterCourse(course.title);
              onClose();
            }}
            className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition"
          >
            <span>Đăng Ký Khóa Này</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
