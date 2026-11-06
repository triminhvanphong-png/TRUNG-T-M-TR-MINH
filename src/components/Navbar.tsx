import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, ChevronRight } from 'lucide-react';
import { CENTER_INFO } from '../data/mockData';
import { IMAGES, handleImageErrorToNavy } from '../constants/images';

interface NavbarProps {
  onOpenConsultModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(() => {
    // Tự ẩn sau 20h00 ngày 14/11/2026 (giờ Việt Nam, UTC+7)
    const expirationDate = new Date('2026-11-14T20:00:00+07:00');
    return new Date() < expirationDate;
  });

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
    { label: 'Tin tức & Sự kiện', href: '#tin-tuc-su-kien' },
    { label: 'Bảng vàng', href: '#bang-vang' },
    { label: 'Lớp Chuẩn & Cấp Tốc', href: '#class-types' },
    { label: 'Ban giảng huấn', href: '#teachers' },
    { label: 'Học phí & Ưu đãi', href: '#tuition-schedule' },
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

  const handleScrollToEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#tin-tuc-su-kien');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. THANH THÔNG BÁO trên cùng trang (nền đỏ cam, chữ trắng) */}
      {bannerVisible && (
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-2 px-3 sm:px-4 shadow-md text-xs sm:text-sm font-semibold relative z-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex-1 flex items-center justify-center sm:justify-start gap-2 flex-wrap text-center sm:text-left">
              <span className="text-white drop-shadow-sm">
                🎯 <strong>THI THỬ ĐGNL 2027 MIỄN PHÍ</strong> – Thứ Bảy 14/11/2026 – 17h30
              </span>
              <button
                onClick={handleScrollToEvent}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-white text-orange-600 hover:bg-orange-50 hover:scale-105 active:scale-95 transition-all shadow cursor-pointer shrink-0"
              >
                Đăng ký ngay
              </button>
            </div>
            <button
              onClick={() => setBannerVisible(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-black/20 transition cursor-pointer shrink-0"
              aria-label="Đóng thông báo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Thành lập từ năm 1999 – Hơn 27 năm đồng hành cùng Phụ huynh & Học sinh
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
            className="flex items-center gap-2.5 sm:gap-3 group text-left"
          >
            <img
              src={IMAGES.logo}
              alt="Logo Trung Tâm Luyện Thi Đại Học Trí Minh"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              onError={handleImageErrorToNavy}
            />
            <div>
              <div className="text-white font-extrabold text-sm sm:text-base md:text-lg tracking-wide uppercase leading-tight">
                TRÍ MINH
              </div>
              <p className="text-[11px] sm:text-xs text-amber-300 font-medium tracking-normal whitespace-nowrap">
                Luyện thi Đại học · Từ 1999
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
