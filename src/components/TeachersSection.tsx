import React from 'react';

// Dữ liệu Ban Lãnh Đạo Trung Tâm Luyện Thi Đại Học Trí Minh
const DANH_SACH_BAN_LANH_DAO: Array<{
  hoTen: string;
  nhanChucVu: string;
  chucVuChiTiet: string;
  monHoc?: string;
  trinhDo: string;
  kinhNghiem?: string;
}> = [
  {
    hoTen: 'Thầy Lê Minh Tâm',
    nhanChucVu: 'Hiệu trưởng',
    chucVuChiTiet: 'Hiệu trưởng Trung tâm LTĐH Trí Minh',
    monHoc: 'Vật lý',
    trinhDo: 'Nguyên Tổ trưởng Bộ môn Vật lý trường THPT Lý Thường Kiệt – Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 40 năm kinh nghiệm ôn thi Đại học',
  },
  {
    hoTen: 'Thầy Tô Đình Trọng Nghĩa',
    nhanChucVu: 'Phó Hiệu trưởng',
    chucVuChiTiet: 'Phó Hiệu trưởng – Trưởng ban Chuyên môn',
    monHoc: 'Toán',
    trinhDo: 'Nguyên Tổ trưởng Bộ môn Toán trường THPT Lý Thường Kiệt – Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 40 năm kinh nghiệm ôn thi Đại học',
  },
];

// Dữ liệu Thầy Cô các bộ môn (thầy Nghĩa đã chuyển lên Ban lãnh đạo, không lặp lại ở nhóm Toán)
const DANH_SACH_GIAO_VIEN: Array<{
  hoTen: string;
  monHoc: 'Toán' | 'Lý' | 'Hóa' | 'Sinh' | 'Anh' | 'Văn';
  trinhDo: string;
  kinhNghiem?: string;
}> = [
  // TOÁN
  {
    hoTen: 'Cô Mai Thu Cúc',
    monHoc: 'Toán',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 10 năm kinh nghiệm giảng dạy THPT',
  },
  {
    hoTen: 'Cô Nguyễn Thị Ngọc Ly',
    monHoc: 'Toán',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 10 năm kinh nghiệm giảng dạy THPT',
  },
  {
    hoTen: 'Thầy Ngô Huỳnh Minh Đạt',
    monHoc: 'Toán',
    trinhDo: 'Thạc sĩ Toán học – Cử nhân Đại học KHTN TP.HCM',
    kinhNghiem: '',
  },

  // LÝ
  {
    hoTen: 'Thầy Lê Anh Tuấn',
    monHoc: 'Lý',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 20 năm kinh nghiệm giảng dạy THPT',
  },
  {
    hoTen: 'Thầy Trần Thanh Bình',
    monHoc: 'Lý',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 20 năm kinh nghiệm giảng dạy THPT',
  },
  {
    hoTen: 'Cô Hồ Thị Quỳnh Diêu',
    monHoc: 'Lý',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 10 năm kinh nghiệm giảng dạy THPT',
  },

  // HÓA
  {
    hoTen: 'Thầy Quách Vương Công Nguyên',
    monHoc: 'Hóa',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: '',
  },
  {
    hoTen: 'Thầy La Khải Tuấn',
    monHoc: 'Hóa',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: '',
  },

  // SINH
  {
    hoTen: 'Cô Ngô Thị Minh Hương',
    monHoc: 'Sinh',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 10 năm kinh nghiệm giảng dạy THPT',
  },

  // ANH
  {
    hoTen: 'Thầy Phạm Văn Trung',
    monHoc: 'Anh',
    trinhDo: 'Nguyên Tổ trưởng Bộ môn Tiếng Anh trường THPT Lý Thường Kiệt – Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 40 năm kinh nghiệm ôn thi Đại học',
  },
  {
    hoTen: 'Thầy Trần Minh Sơn',
    monHoc: 'Anh',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 40 năm kinh nghiệm ôn thi Đại học',
  },
  {
    hoTen: 'Thầy Nguyễn Khắc Sơn',
    monHoc: 'Anh',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 40 năm kinh nghiệm ôn thi Đại học',
  },
  {
    hoTen: 'Cô Phạm Tú Trinh',
    monHoc: 'Anh',
    trinhDo: 'Cử nhân Ngôn ngữ Anh – Đại học Mở TP.HCM',
    kinhNghiem: '',
  },

  // VĂN
  {
    hoTen: 'Cô Nguyễn Bích Vân',
    monHoc: 'Văn',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 30 năm kinh nghiệm giảng dạy THPT',
  },
  {
    hoTen: 'Cô Hồ Ngọc Thuận',
    monHoc: 'Văn',
    trinhDo: 'Cử nhân Đại học Sư phạm TP.HCM',
    kinhNghiem: 'Hơn 20 năm kinh nghiệm giảng dạy THPT',
  },
];

// Hàm lấy chữ cái đầu của TÊN (từ cuối cùng trong họ tên, VD: "Tâm" -> "T", "Nghĩa" -> "N")
const getInitialFromTen = (hoTen: string): string => {
  const parts = hoTen.trim().split(/\s+/);
  const ten = parts[parts.length - 1];
  return ten ? ten.charAt(0).toUpperCase() : '';
};

// Thứ tự bộ môn theo yêu cầu: Toán, Lý, Hóa, Sinh, Anh, Văn
const CAC_MON_HOC: Array<{ key: 'Toán' | 'Lý' | 'Hóa' | 'Sinh' | 'Anh' | 'Văn'; label: string }> = [
  { key: 'Toán', label: 'Môn Toán' },
  { key: 'Lý', label: 'Môn Lý' },
  { key: 'Hóa', label: 'Môn Hóa' },
  { key: 'Sinh', label: 'Môn Sinh' },
  { key: 'Anh', label: 'Môn Anh' },
  { key: 'Văn', label: 'Môn Văn' },
];

export const TeachersSection: React.FC = () => {
  return (
    <section id="teachers" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tiêu đề mục Ban giảng huấn */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            Đội Ngũ Sư Phạm Tinh Hoa
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ban Giảng Huấn Trung Tâm Trí Minh
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Hội tụ các Thầy Cô giàu kinh nghiệm, nguyên tổ trưởng bộ môn THPT uy tín, cử nhân và thạc sĩ Sư phạm TP.HCM với tâm huyết đồng hành cùng các thế hệ học sinh.
          </p>
        </div>

        {/* MỤC BAN LÃNH ĐẠO Ở TRÊN CÙNG, TRƯỚC CÁC NHÓM BỘ MÔN */}
        <div className="mb-16 space-y-6">
          <div className="border-b-2 border-orange-500 pb-1.5 inline-block">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-wide uppercase">
              BAN LÃNH ĐẠO
            </h3>
          </div>

          {/* 2 thẻ nổi bật đặt cạnh nhau (1 cột trên điện thoại), viền cam, thẻ Hiệu trưởng đứng trước */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {DANH_SACH_BAN_LANH_DAO.map((lanhDao, index) => {
              const chuCaiDau = getInitialFromTen(lanhDao.hoTen);

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border-2 border-orange-500 p-6 sm:p-7 shadow-lg shadow-orange-500/10 flex flex-col justify-between hover:shadow-xl transition-all"
                >
                  <div className="space-y-4">
                    {/* Header thẻ: Vòng tròn chữ cái đầu + Họ tên + Nhãn chức vụ màu cam đậm */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Vòng tròn nhỏ màu xanh đậm có chữ cái đầu của TÊN */}
                        <div className="w-10 h-10 rounded-full bg-blue-950 text-white flex items-center justify-center font-black text-base shadow-sm shrink-0">
                          {chuCaiDau}
                        </div>

                        {/* Họ tên: viết hoa chữ cái đầu mỗi từ, chữ đậm, màu xanh đậm */}
                        <div>
                          <h4 className="font-extrabold text-blue-950 text-lg sm:text-xl tracking-tight leading-snug">
                            {lanhDao.hoTen}
                          </h4>
                          <div className="flex items-center gap-2 flex-wrap mt-0.5">
                            <p className="text-xs text-orange-700 font-semibold">
                              {lanhDao.chucVuChiTiet}
                            </p>
                            {lanhDao.monHoc && (
                              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-100 text-orange-800 border border-orange-200">
                                Bộ môn: {lanhDao.monHoc}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Nhãn chức vụ màu cam đậm (Hiệu trưởng / Phó Hiệu trưởng) */}
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-600 text-white shadow-sm shrink-0">
                        {lanhDao.nhanChucVu}
                      </span>
                    </div>

                    <div className="h-px bg-orange-100 w-full" />

                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {/* 🎓 Trình độ / chức vụ */}
                      <div className="flex items-start gap-2.5">
                        <span className="shrink-0 text-base">🎓</span>
                        <span className="font-medium text-slate-800 leading-relaxed">
                          {lanhDao.trinhDo}
                        </span>
                      </div>

                      {/* ⏱ Kinh nghiệm */}
                      {lanhDao.kinhNghiem && (
                        <div className="flex items-start gap-2.5 text-orange-950 font-semibold">
                          <span className="shrink-0 text-base">⏱</span>
                          <span className="leading-relaxed">{lanhDao.kinhNghiem}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Danh sách các nhóm bộ môn: Toán, Lý, Hóa, Sinh, Anh, Văn */}
        <div className="space-y-14">
          {CAC_MON_HOC.map((mon) => {
            // Lấy danh sách Thầy Cô của môn này
            const danhSachMon = DANH_SACH_GIAO_VIEN.filter((gv) => gv.monHoc === mon.key);

            if (danhSachMon.length === 0) return null;

            return (
              <div key={mon.key} className="space-y-6">
                {/* Tiêu đề môn (chữ đậm, gạch chân màu cam) */}
                <div className="border-b-2 border-orange-500 pb-1.5 inline-block">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-wide uppercase">
                    {mon.label}
                  </h3>
                </div>

                {/* Lưới 4 cột máy tính, 2 cột máy tính bảng, 1 cột điện thoại */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {danhSachMon.map((gv, idx) => {
                    const chuCaiDau = getInitialFromTen(gv.hoTen);
                    const coKinhNghiem =
                      gv.kinhNghiem &&
                      gv.kinhNghiem.trim() !== '' &&
                      gv.kinhNghiem.trim() !== '(trống)';

                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-3.5">
                          {/* Header thẻ: Vòng tròn chữ cái đầu + Tên + Badge bộ môn */}
                          <div className="flex items-start justify-between gap-2.5">
                            <div className="flex items-center gap-2.5 min-w-0">
                              {/* 1. Vòng tròn nhỏ màu xanh đậm có chữ cái đầu của TÊN */}
                              <div className="w-9 h-9 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                                {chuCaiDau}
                              </div>

                              {/* 2. Họ tên (viết hoa chữ cái đầu mỗi từ, chữ đậm, màu xanh đậm) */}
                              <h4 className="font-bold text-blue-950 text-sm sm:text-base leading-snug truncate">
                                {gv.hoTen}
                              </h4>
                            </div>

                            {/* 3. Nhãn bộ môn (badge cam nhạt) */}
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-100 text-orange-800 border border-orange-200 shrink-0">
                              {gv.monHoc}
                            </span>
                          </div>

                          <div className="h-px bg-slate-100 w-full" />

                          {/* 4. 🎓 Trình độ / chức vụ */}
                          <div className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                            <span className="shrink-0 text-sm">🎓</span>
                            <span className="font-normal">{gv.trinhDo}</span>
                          </div>

                          {/* 5. ⏱ Kinh nghiệm — nếu để trống thì ẨN dòng này */}
                          {coKinhNghiem && (
                            <div className="flex items-start gap-2 text-xs text-orange-900 font-semibold leading-relaxed">
                              <span className="shrink-0 text-sm">⏱</span>
                              <span>{gv.kinhNghiem}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
