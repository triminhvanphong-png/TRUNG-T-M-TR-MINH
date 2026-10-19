import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, GraduationCap, ChevronRight, MessageCircle } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenConsultModal: () => void;
  onOpenChatbot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultModal, onOpenChatbot }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Khóa học', href: '#courses' },
    { label: 'Bảng vàng', href: '#bang-vang' },
    { label: 'Lớp Chuẩn & Cấp Tốc', href: '#class-types' },
    { label: 'Ban giảng huấn', href: '#teachers' },
    { label: 'Học phí & Ưu đãi', href: '#tuition-schedule' },
    { label: 'Tin tức', href: '#news' },
    { label: 'Không gian học', href: '#khong-gian-hoc-tap' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Thành lập 1999 • Hơn 25 năm kinh nghiệm luyện thi tại TP.HCM
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Chỉ có 1 cơ sở duy nhất: 434 Tô Ký, Đông Thạnh, TP.HCM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>T2–T7: 08:00–11:00 & 16:00–21:00</span>
            </span>
            <a
              href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 text-orange-400 hover:text-orange-300 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hotline/Zalo: {CENTER_INFO.hotline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-blue-950/95 backdrop-blur-md shadow-lg border-b border-blue-900 py-2.5'
            : 'bg-blue-950/90 backdrop-blur-sm border-b border-blue-900/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-md shadow-orange-600/30 text-white font-black text-xl tracking-tight border border-orange-400/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-extrabold text-lg sm:text-xl tracking-wide uppercase">
                  TRÍ MINH
                </span>
                <span className="text-[10px] uppercase font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 px-1.5 py-0.5 rounded">
                  EST. 1999
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-blue-200 font-medium tracking-normal hidden xs:block">
                Trung Tâm Luyện Thi Đại Học TP.HCM
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-blue-900/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenChatbot}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-100 bg-blue-900/80 hover:bg-blue-800 rounded-lg border border-blue-700 transition"
              title="Trợ lý tư vấn AI Trí Minh"
            >
              <MessageCircle className="w-4 h-4 text-orange-400" />
              <span>Hỏi Trí Minh AI</span>
            </button>

            <button
              onClick={onOpenConsultModal}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Đăng Ký Tư Vấn</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-blue-900 focus:outline-none"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-blue-950 border-b border-blue-900 px-4 pt-3 pb-6 space-y-1.5 animate-fadeIn">
            <div className="p-3 mb-2 bg-blue-900/40 rounded-xl border border-blue-800 text-xs text-blue-200 space-y-1">
              <p className="font-semibold text-amber-400">
                ⭐ Cơ sở duy nhất: 434 Tô Ký, Đông Thạnh, TP.HCM
              </p>
              <p>Hotline/Zalo hỗ trợ trực tiếp: <span className="text-white font-bold">{CENTER_INFO.hotline}</span></p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-blue-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChatbot();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg text-blue-100 bg-blue-900 border border-blue-700 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-orange-400" />
                Hỏi Trợ Lý Tuyển Sinh AI Trí Minh
              </button>
              <a
                href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`}
                className="w-full py-2.5 px-4 text-xs font-bold rounded-lg text-white bg-slate-800 border border-slate-700 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Gọi Ngay {CENTER_INFO.hotline}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
