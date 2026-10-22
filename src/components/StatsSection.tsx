import React from 'react';
import { Calendar, GraduationCap, FileText, Percent, Award } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

export const StatsSection: React.FC = () => {
  const statItems = [
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      value: '27+ Năm',
      title: 'Kinh nghiệm luyện thi',
      description: 'Thành lập từ năm 1999 – Hơn 27 năm đồng hành cùng Phụ huynh & Học sinh',
      badge: 'Thành lập 1999',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      value: '> 70%',
      title: 'Tỷ lệ đậu Đại học',
      description: 'Hằng năm, tỷ lệ đậu Đại học của học sinh tại trung tâm rất cao (có năm đạt trên 70%)',
      badge: 'Tỷ lệ đậu cao',
    },
    {
      icon: <FileText className="w-8 h-8 text-amber-500" />,
      value: 'Miễn Phí',
      title: 'Tài liệu biên soạn',
      description: 'Hệ thống hóa chương trình, giải theo từng dạng đề, rút gọn lý thuyết dễ nhớ dễ học',
      badge: 'Phát miễn phí',
    },
    {
      icon: <Percent className="w-8 h-8 text-emerald-600" />,
      value: '≥ 10%',
      title: 'Giảm học phí học viên cũ',
      description: 'Giảm ít nhất 10% học phí khi học viên cũ đăng ký khóa học mới',
      badge: 'Ưu đãi thường niên',
    },
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {statItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                  {item.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {item.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-blue-950 mt-1">
                {item.title}
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
