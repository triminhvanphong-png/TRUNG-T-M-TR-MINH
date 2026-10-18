/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { ClassComparisonSection } from './components/ClassComparisonSection';
import { SpecialEventSection } from './components/SpecialEventSection';
import { TeachersSection } from './components/TeachersSection';
import { TuitionAndScheduleSection } from './components/TuitionAndScheduleSection';
import { NewsSection } from './components/NewsSection';
import { ConsultationFormSection } from './components/ConsultationFormSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ChatbotModal } from './components/ChatbotModal';

export default function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [selectedCourseForForm, setSelectedCourseForForm] = useState<string>('');
  const [selectedClassTypeForForm, setSelectedClassTypeForForm] = useState<string>('Chưa rõ – cần tư vấn');

  const scrollToConsultationForm = () => {
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourseForForm(courseName);
    scrollToConsultationForm();
  };

  const handleSelectClassType = (type: string) => {
    setSelectedClassTypeForForm(type);
    scrollToConsultationForm();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* 1. Menu cố định (Navbar) */}
      <Navbar
        onOpenConsultModal={scrollToConsultationForm}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Banner chính */}
        <HeroBanner onOpenConsultForm={scrollToConsultationForm} />

        {/* 3. Số liệu nổi bật */}
        <StatsSection />

        {/* 4. Giới thiệu */}
        <AboutSection onOpenConsultForm={scrollToConsultationForm} />

        {/* 5. Khóa học (Dạng thẻ, mỗi thẻ có popup chi tiết) */}
        <CoursesSection onOpenConsultFormWithCourse={handleSelectCourse} />

        {/* 6. Hai hệ lớp (So sánh 2 cột) */}
        <ClassComparisonSection onSelectClassType={handleSelectClassType} />

        {/* 7. Sự kiện nổi bật: Thi thử ĐGNL 2027 */}
        <SpecialEventSection onRegisterEvent={() => handleSelectCourse('Kỳ Thi Thử ĐGNL 2027')} />

        {/* 8. Ban giảng huấn */}
        <TeachersSection />

        {/* 9. Học phí & Ưu đãi (Không hiện con số học phí, có FAQ lịch học) */}
        <TuitionAndScheduleSection onOpenConsultForm={scrollToConsultationForm} />

        {/* 10. Tin tức */}
        <NewsSection onOpenConsultForm={scrollToConsultationForm} />

        {/* 11. Form đăng ký tư vấn */}
        <ConsultationFormSection
          initialCourse={selectedCourseForForm}
          initialClassType={selectedClassTypeForForm}
        />
      </main>

      {/* 12. Chân trang (Footer + Google Maps) */}
      <Footer />

      {/* 13. Nút nổi góc phải (Zalo, Hotline, Messenger, Chatbot) */}
      <FloatingActions
        onOpenChatbot={() => setIsChatbotOpen(true)}
        onOpenConsultForm={scrollToConsultationForm}
      />

      {/* 14. Chatbot tư vấn dùng Gemini */}
      <ChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onOpenConsultForm={() => {
          setIsChatbotOpen(false);
          scrollToConsultationForm();
        }}
      />
    </div>
  );
}
