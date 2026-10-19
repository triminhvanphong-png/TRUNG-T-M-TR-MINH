import React from 'react';
import { Stethoscope, Cog, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

export type KhoiNganh = 'y_duoc' | 'ky_thuat' | 'kinh_te' | 'ngon_ngu_xa_hoi';

export interface HocVienTieuBieu {
  ten: string;
  truong: string;
  nganh: string;
  khoi: KhoiNganh;
  nam: number;
}

// Dữ liệu học sinh tiêu biểu (dễ dàng thêm năm mới)
export const DANH_SACH_HOC_VIEN: HocVienTieuBieu[] = [
  // KHỐI Y – DƯỢC
  {
    ten: 'Trần Nguyễn Phương Uyên',
    truong: 'Đại học Y Dược TP.HCM',
    nganh: 'Y học Dự phòng',
    khoi: 'y_duoc',
    nam: 2026,
  },
  {
    ten: 'Lường Hữu Phú',
    truong: 'Đại học Y Dược TP.HCM',
    nganh: 'Y khoa',
    khoi: 'y_duoc',
    nam: 2026,
  },
  {
    ten: 'Trần Nguyễn Hoàng Tuấn',
    truong: 'Đại học Y khoa Phạm Ngọc Thạch TP.HCM',
    nganh: 'Y đa khoa',
    khoi: 'y_duoc',
    nam: 2026,
  },
  {
    ten: 'Nguyễn Hà Kim Hồng',
    truong: 'Đại học Y khoa Phạm Ngọc Thạch TP.HCM',
    nganh: 'Điều dưỡng',
    khoi: 'y_duoc',
    nam: 2026,
  },

  // KHỐI KỸ THUẬT
  {
    ten: 'Nguyễn Lê Trường An',
    truong: 'Đại học Bách Khoa TP.HCM',
    nganh: 'Kỹ thuật Tàu thủy – Hàng không',
    khoi: 'ky_thuat',
    nam: 2026,
  },
  {
    ten: 'Nguyễn Lê Hoàng Trung',
    truong: 'Đại học Giao thông Vận tải TP.HCM',
    nganh: 'Kỹ thuật Điều khiển & Tự động hóa',
    khoi: 'ky_thuat',
    nam: 2026,
  },

  // KHỐI KINH TẾ
  {
    ten: 'Hồng Thiên Ân',
    truong: 'Đại học Kinh tế TP.HCM',
    nganh: 'Kế toán Doanh nghiệp',
    khoi: 'kinh_te',
    nam: 2026,
  },
  {
    ten: 'Võ Thành Tài',
    truong: 'Đại học Kinh tế TP.HCM',
    nganh: 'Kiểm toán',
    khoi: 'kinh_te',
    nam: 2026,
  },

  // KHỐI NGÔN NGỮ – XÃ HỘI – SƯ PHẠM
  {
    ten: 'Nguyễn Huỳnh Yến Nhi',
    truong: 'Đại học Khoa học Xã hội & Nhân văn TP.HCM',
    nganh: 'Ngôn ngữ Trung Quốc',
    khoi: 'ngon_ngu_xa_hoi',
    nam: 2026,
  },
  {
    ten: 'Phạm Quỳnh Như Ý',
    truong: 'Đại học Giao thông Vận tải TP.HCM',
    nganh: 'Ngôn ngữ Anh',
    khoi: 'ngon_ngu_xa_hoi',
    nam: 2026,
  },
  {
    ten: 'Lâm Quốc Huy',
    truong: 'Đại học Sư phạm TP.HCM',
    nganh: '',
    khoi: 'ngon_ngu_xa_hoi',
    nam: 2026,
  },
];

interface GoldenBoardSectionProps {
  onOpenConsultForm: () => void;
}

export const GoldenBoardSection: React.FC<GoldenBoardSectionProps> = ({ onOpenConsultForm }) => {
  const yDuocStudents = DANH_SACH_HOC_VIEN.filter((h) => h.khoi === 'y_duoc');
  const kyThuatStudents = DANH_SACH_HOC_VIEN.filter((h) => h.khoi === 'ky_thuat');
  const kinhTeStudents = DANH_SACH_HOC_VIEN.filter((h) => h.khoi === 'kinh_te');
  const xaHoiStudents = DANH_SACH_HOC_VIEN.filter((h) => h.khoi === 'ngon_ngu_xa_hoi');

  return (
    <section id="bang-vang" className="py-20 sm:py-24 bg-[#0B132B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Phần Đầu Mục: Tiêu đề, Dòng phụ & Danh sách trường */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-tight">
            Gương Mặt Tiêu Biểu 2026
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 font-medium">
            Một số học viên Trí Minh tiêu biểu đã chinh phục các trường Đại học hàng đầu TP.HCM
          </p>
          <p className="text-xs sm:text-sm text-amber-200/90 font-medium tracking-wide pt-1">
            Học viên đậu vào ĐH Y Dược · ĐH Y khoa Phạm Ngọc Thạch · ĐH Bách Khoa · ĐH Kinh tế · ĐH KHXH & NV · ĐH Sư phạm · ĐH GTVT TP.HCM
          </p>
        </div>

        {/* Bố cục 4 Khối Ngành:
            Máy tính:
              - Khối Y - Dược bên trái
              - Khối Kỹ thuật và Khối Kinh tế xếp chồng bên phải
              - Khối Ngôn ngữ – Xã hội – Sư phạm nằm ngang bên dưới, toàn chiều rộng, 3 học sinh 3 cột
            Điện thoại: Tất cả 1 cột
        */}
        <div className="space-y-6">
          {/* Hàng Trên: 2 Cột trên máy tính, 1 cột trên điện thoại */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 1. KHỐI Y – DƯỢC (bên trái) */}
            <div className="border border-amber-400/35 rounded-[16px] bg-white/[0.05] backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/10 text-amber-400">
                  <Stethoscope className="w-5 h-5 text-amber-400 shrink-0" />
                  <h3 className="font-extrabold text-base sm:text-lg tracking-wide uppercase">
                    KHỐI Y – DƯỢC
                  </h3>
                </div>

                <div className="divide-y divide-white/10">
                  {yDuocStudents.map((hv, idx) => (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="text-white font-bold text-sm sm:text-base leading-snug">
                        {hv.ten}
                      </div>
                      <div className="text-amber-200/90 text-xs sm:text-sm mt-0.5 leading-snug">
                        {hv.truong} · {hv.nganh}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cột Phải: Khối Kỹ thuật & Khối Kinh tế xếp chồng */}
            <div className="flex flex-col gap-6 justify-between">
              {/* 2. KHỐI KỸ THUẬT */}
              <div className="border border-amber-400/35 rounded-[16px] bg-white/[0.05] backdrop-blur-sm p-6 sm:p-7 shadow-lg flex-1">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/10 text-amber-400">
                  <Cog className="w-5 h-5 text-amber-400 shrink-0" />
                  <h3 className="font-extrabold text-base sm:text-lg tracking-wide uppercase">
                    KHỐI KỸ THUẬT
                  </h3>
                </div>

                <div className="divide-y divide-white/10">
                  {kyThuatStudents.map((hv, idx) => (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="text-white font-bold text-sm sm:text-base leading-snug">
                        {hv.ten}
                      </div>
                      <div className="text-amber-200/90 text-xs sm:text-sm mt-0.5 leading-snug">
                        {hv.truong} · {hv.nganh}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. KHỐI KINH TẾ */}
              <div className="border border-amber-400/35 rounded-[16px] bg-white/[0.05] backdrop-blur-sm p-6 sm:p-7 shadow-lg flex-1">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/10 text-amber-400">
                  <TrendingUp className="w-5 h-5 text-amber-400 shrink-0" />
                  <h3 className="font-extrabold text-base sm:text-lg tracking-wide uppercase">
                    KHỐI KINH TẾ
                  </h3>
                </div>

                <div className="divide-y divide-white/10">
                  {kinhTeStudents.map((hv, idx) => (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="text-white font-bold text-sm sm:text-base leading-snug">
                        {hv.ten}
                      </div>
                      <div className="text-amber-200/90 text-xs sm:text-sm mt-0.5 leading-snug">
                        {hv.truong} · {hv.nganh}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. KHỐI NGÔN NGỮ – XÃ HỘI – SƯ PHẠM (Nằm ngang bên dưới, chiếm toàn chiều rộng, 3 học sinh xếp 3 cột trên máy tính) */}
          <div className="border border-amber-400/35 rounded-[16px] bg-white/[0.05] backdrop-blur-sm p-6 sm:p-7 shadow-lg">
            <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/10 text-amber-400">
              <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="font-extrabold text-base sm:text-lg tracking-wide uppercase">
                KHỐI NGÔN NGỮ – XÃ HỘI – SƯ PHẠM
              </h3>
            </div>

            {/* 3 học sinh xếp 3 cột trên máy tính, 1 cột trên điện thoại */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {xaHoiStudents.map((hv, idx) => (
                <div
                  key={idx}
                  className="py-3 md:py-0 md:px-5 first:pl-0 last:pr-0 first:pt-0 last:pb-0"
                >
                  <div className="text-white font-bold text-sm sm:text-base leading-snug">
                    {hv.ten}
                  </div>
                  <div className="text-amber-200/90 text-xs sm:text-sm mt-0.5 leading-snug">
                    {hv.nganh ? `${hv.truong} · ${hv.nganh}` : hv.truong}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cuối Mục: Dòng chữ trắng căn giữa & nút Đăng ký tư vấn */}
        <div className="mt-14 sm:mt-16 text-center space-y-4">
          <p className="text-lg sm:text-xl font-bold text-white tracking-wide">
            Bạn sẽ là gương mặt tiếp theo?
          </p>
          <div>
            <button
              onClick={onOpenConsultForm}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-orange-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Đăng ký tư vấn</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
