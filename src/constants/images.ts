// 7 ảnh thật duy nhất của Trung Tâm Trí Minh
export const BASE = "https://cdn.jsdelivr.net/gh/triminhvanphong-png/triminh-anh@main/";

export const IMAGES = {
  banner: `${BASE}banner.jpg`,
  giangBai: `${BASE}giang-bai.jpg`,
  lop12: `${BASE}lop-12.jpg`,
  dgnl: `${BASE}dgnl.jpg`,
  lop9len10: `${BASE}9-len-10.jpg`,
  lop10: `${BASE}lop-10.jpg`,
  lop11: `${BASE}lop-11.jpg`,
  logo: `${BASE}logo.png`,
} as const;

// Khi ảnh không tải được: hiển thị nền màu xanh navy, KHÔNG thay bằng ảnh khác
export const handleImageErrorToNavy = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = 'none';
};
