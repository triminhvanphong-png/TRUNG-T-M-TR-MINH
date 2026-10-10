import React, { useState } from 'react';
import { Award, GraduationCap, CheckCircle, Upload, Camera, Sparkles } from 'lucide-react';
import { TEACHERS } from '../data/mockData';
import { Teacher } from '../types';

export const TeachersSection: React.FC = () => {
  const [teacherList, setTeacherList] = useState<Teacher[]>(TEACHERS);
  const [activeTeacherIndex, setActiveTeacherIndex] = useState<number | null>(null);

  const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const updated = [...teacherList];
          updated[index] = {
            ...updated[index],
            avatarUrl: event.target.result as string,
          };
          setTeacherList(updated);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="teachers" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            Đội Ngũ Sư Phạm Tinh Hoa
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ban Giảng Huấn Trung Tâm Trí Minh
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Hội tụ các thầy cô giàu kinh nghiệm, nhiều giáo viên giỏi được Sở GD&ĐT TP.HCM công nhận, thạc sĩ đầu ngành, tận tâm đồng hành và truyền lửa đam mê học tập.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-blue-100/80 text-blue-900 border border-blue-200">
            <Camera className="w-3.5 h-3.5 text-blue-700" />
            <span>Ảnh hiển thị mẫu chất lượng cao — Quý trung tâm có thể nhấp vào biểu tượng camera để tải ảnh thật lên thay thế bất cứ lúc nào!</span>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teacherList.map((teacher, index) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Photo Area */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={teacher.avatarUrl}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Subject badge floating */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-900/90 text-white backdrop-blur-md shadow-md border border-blue-700/60">
                    {teacher.subject}
                  </span>
                </div>

                {/* Upload Image Button overlay */}
                <label
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 hover:bg-orange-600 text-white backdrop-blur-md shadow cursor-pointer transition flex items-center justify-center group/btn"
                  title="Thay ảnh giáo viên này"
                >
                  <Upload className="w-4 h-4" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(index, e)}
                  />
                </label>

                {/* Name over gradient at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {teacher.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-orange-300 font-semibold mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
                    <span>{teacher.degree}</span>
                  </div>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-950 bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                    <Award className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{teacher.experience}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {teacher.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Sở GD&ĐT Công Nhận
                  </span>
                  <span className="text-slate-400">Trí Minh Giảng Viên</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
