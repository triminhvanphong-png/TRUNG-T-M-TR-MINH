export interface Course {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  badge: string;
  highlightColor: string;
  description: string;
  features: string[];
  scheduleOverview: string;
  subjects: string[];
  curriculumDetails: string[];
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  degree: string;
  experience: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string[];
  imageUrl: string;
  tags: string[];
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  grade: string;
  course: string;
  classType: string;
  notes: string;
}

export interface SuKienItem {
  id: string;
  tieuDe: string;
  anh: string;
  ngay: string;
  gio: string;
  diaChi: string;
  noiDung: {
    tieuDeBaiViet: string;
    doanVanDau: string;
    ngay: string;
    gio: string;
    diaChi: string;
    moTaDe: string;
    coHoi: string[];
    huongDanDangKy: string;
    xacNhanSuatThi: string;
    ghiChuNho: string;
  };
  hetHan: string; // ISO 8601 string or date string (e.g. '2026-11-14T20:00:00+07:00')
}
