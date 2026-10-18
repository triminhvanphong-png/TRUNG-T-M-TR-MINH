import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize server-side Gemini SDK
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const SYSTEM_INSTRUCTION = `Bạn là Trợ lý Tư vấn Tuyển sinh thông minh của "TRUNG TÂM LUYỆN THI ĐẠI HỌC TRÍ MINH" (thành lập từ năm 1999 tại TP.HCM, hơn 25 năm kinh nghiệm).

THÔNG TIN QUAN TRỌNG VÀ CHÍNH XÁC CỦA TRÍ MINH:
- Khẩu hiệu: "Tận tâm – Kinh nghiệm – Hiệu quả cao" và "Học đúng chất – Thi là đỗ cùng Trí Minh".
- Địa chỉ: 434 đường Tô Ký, xã Đông Thạnh, TP.HCM.
- ĐẶC BIỆT LƯU Ý: Trung tâm chỉ có 1 CƠ SỞ DUY NHẤT (nhắc nhở học viên/phụ huynh tránh nhầm lẫn với các trung tâm mạo danh).
- Hotline / Zalo: 0703 672 542 – Điện thoại bàn: 028 3636 4292.
- Email: triminhvanphong@gmail.com
- Facebook: https://www.facebook.com/TrungTamLuyenThiDaiHocTriMinh/
- YouTube: https://www.youtube.com/@trungtamtriminh8023
- Giờ làm việc:
  + Thứ 2 – Thứ 7: 08:00 – 11:00 và 16:00 – 21:00
  + Chủ nhật: 07:00 – 11:00 và 16:30 – 20:30
- Thời lượng học tập:
  + Mỗi khóa học gồm 4 tuần (tương đương 1 tháng).
  + Môn Toán học: 3 buổi/tuần.
  + Các môn Lý, Hóa, Anh, Sinh, Văn: mỗi môn 2 buổi/tuần.
- Chính sách ưu đãi nổi bật:
  + Ưu đãi đặc biệt khi đăng ký combo 3 môn.
  + Học viên cũ được giảm học phí.
  + 100% tài liệu học tập được phát miễn phí.
  + Toàn bộ lệ phí thi thử được khấu trừ vào học phí khi đăng ký khóa học.

CÁC KHÓA HỌC:
1. Lớp 12 LTĐH (2K8 và thí sinh tự do): bám sát cấu trúc đề thi tốt nghiệp THPT mới, thi thử thường xuyên, chiến lược làm bài.
2. Ôn thi ĐGNL ĐHQG TP.HCM: Toán – Văn – Anh, tư duy logic, phân tích số liệu, đề thi thử mô phỏng.
3. Ôn thi 9 lên 10: phân tích đề tuyển sinh các năm, định hướng chọn trường.
4. Lớp 11 hướng ĐGNL (GDPT 2018): rèn luyện mức độ 1–2–3.
5. Lớp 10 hướng ĐGNL (GDPT 2018): cơ bản đến nâng cao.
6. Lớp 6, 7, 8 chương trình GDPT 2018.

HAI HỆ LỚP:
- LỚP CHUẨN: ôn tập củng cố nền tảng, học trước chương trình mới, rèn kỹ năng làm bài, học chắc học đều.
- LỚP ÔN THI CẤP TỐC: dành cho học sinh cần hệ thống lại kiến thức trong thời gian ngắn trước kỳ thi; tập trung các dạng bài trọng tâm, luyện đề và chữa đề sát cấu trúc đề thi.

SỰ KIỆN: "Thi thử ĐGNL 2027" – nhận phiếu phân tích kết quả, tặng sổ tay "Chiến lược chinh phục ĐGNL 2027", chữa đề Toán–Văn–Anh cùng Thầy Cô giỏi, 100% lệ phí thi thử trừ vào học phí, ưu đãi đến 20%.

QUY TẮC BẮT BUỘC VỀ LỊCH HỌC VÀ THỜI KHÓA BIỂU:
- Khi được hỏi về lịch học hoặc thời khóa biểu, trả lời:
  "Toán học 3 buổi/tuần; Lý, Hóa, Anh, Sinh, Văn mỗi môn 2 buổi/tuần. Vui lòng liên hệ hotline/Zalo 0703 672 542 để nhận lịch học cụ thể."

QUY TẮC BẮT BUỘC VỀ HỌC PHÍ:
- Chatbot KHÔNG BIẾT và KHÔNG ĐƯỢC ĐOÁN bất kỳ con số học phí nào. Tuyệt đối không đưa ra bất kỳ con số học phí hay giá tiền nào.
- Khi người dùng hỏi về học phí, trả lời rằng:
  "Trung tâm có rất nhiều chính sách ưu đãi hấp dẫn như: Ưu đãi đặc biệt khi đăng ký combo 3 môn, Học viên cũ được giảm học phí, Tài liệu học tập được phát miễn phí, và Lệ phí thi thử được khấu trừ 100% vào học phí.
  Mỗi khóa học kéo dài 4 tuần (tương đương 1 tháng): Toán học 3 buổi/tuần; các môn Lý, Hóa, Anh, Sinh, Văn mỗi môn 2 buổi/tuần.
  Mời Quý Phụ huynh / Học viên để lại số điện thoại trên Form Đăng ký tư vấn của website hoặc nhắn tin Zalo 0703 672 542 để nhận bảng học phí chi tiết và áp dụng ưu đãi tốt nhất ạ!"
- Xưng hô: Chuẩn mực sư phạm, ân cần, nhiệt tình, xưng "Trí Minh" hoặc "Thầy Cô Trí Minh" và gọi người hỏi là "em" hoặc "Quý Phụ huynh". Luôn dùng từ "Thầy Cô" thay cho giáo viên hay giảng viên.`;

// Chatbot API endpoint
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Nội dung tin nhắn không hợp lệ.' });
    return;
  }

  // If Gemini API is available, call it
  if (ai) {
    try {
      // Build conversation history
      const formattedContents = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          if (item.sender === 'user') {
            formattedContents.push({ role: 'user', parts: [{ text: item.text }] });
          } else if (item.sender === 'bot') {
            formattedContents.push({ role: 'model', parts: [{ text: item.text }] });
          }
        }
      }

      // Append current message
      formattedContents.push({ role: 'user', parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: formattedContents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.5,
        },
      });

      const reply = response.text || 'Xin lỗi, Trí Minh chưa thể phản hồi lúc này. Quý phụ huynh và học viên vui lòng gọi/nhắn Zalo Hotline 0703 672 542 để được tư vấn trực tiếp!';
      res.json({ reply });
      return;
    } catch (err) {
      console.error('Gemini API error:', err);
    }
  }

  // Intelligent local fallback if API key is not ready or fails
  const lower = message.toLowerCase();
  let fallbackReply = '';

  if (lower.includes('học phí') || lower.includes('giá') || lower.includes('bao nhiêu tiền') || lower.includes('chi phí') || lower.includes('tiền học')) {
    fallbackReply = 'Dạ chào bạn! Trung tâm Trí Minh có rất nhiều chính sách ưu đãi hấp dẫn như: Ưu đãi đặc biệt khi đăng ký combo 3 môn, Học viên cũ được giảm học phí, Tài liệu học tập hoàn toàn miễn phí, và Lệ phí thi thử được khấu trừ 100% vào học phí.\n\nMỗi khóa học gồm 4 tuần (tương đương 1 tháng): Toán học 3 buổi/tuần; các môn Lý, Hóa, Anh, Sinh, Văn mỗi môn 2 buổi/tuần.\n\nMời bạn để lại số điện thoại tại Form Đăng ký tư vấn trên website hoặc nhắn Zalo 0703 672 542 để nhận bảng học phí chi tiết nhé!';
  } else if (lower.includes('địa chỉ') || lower.includes('ở đâu') || lower.includes('cơ sở') || lower.includes('vị trí')) {
    fallbackReply = 'Trung Tâm Luyện Thi Đại Học Trí Minh toạ lạc tại: 434 đường Tô Ký, xã Đông Thạnh, TP.HCM. Lưu ý: Trung tâm chỉ có 1 CƠ SỞ DUY NHẤT để đảm bảo chất lượng giảng dạy cao nhất!';
  } else if (lower.includes('giờ làm việc') || lower.includes('mở cửa') || lower.includes('thời gian làm việc')) {
    fallbackReply = 'Giờ làm việc của Trí Minh:\n• Thứ 2 – Thứ 7: 08:00 – 11:00 & 16:00 – 21:00\n• Chủ nhật: 07:00 – 11:00 & 16:30 – 20:30\nHotline: 0703 672 542 hoặc ĐT bàn: 028 3636 4292 luôn sẵn sàng hỗ trợ bạn!';
  } else if (lower.includes('đgnl') || lower.includes('đánh giá năng lực')) {
    fallbackReply = 'Khóa Ôn thi ĐGNL ĐHQG TP.HCM tại Trí Minh rèn luyện toàn diện Toán – Văn – Anh, tư duy logic, phân tích dữ liệu cùng bộ đề thi thử độc quyền chuẩn cấu trúc ĐHQG. Ngoài ra, Trí Minh đang có sự kiện "Thi thử ĐGNL 2027" với ưu đãi học phí lên tới 20% và tặng sổ tay chiến lược!';
  } else if (lower.includes('lớp 12') || lower.includes('luyện thi đại học') || lower.includes('2k8') || lower.includes('tốt nghiệp')) {
    fallbackReply = 'Khóa Lớp 12 LTĐH dành cho học sinh 2K8 và thí sinh tự do, bám sát cấu trúc đề thi tốt nghiệp THPT, thi thử định kỳ và rèn chiến thuật làm bài tối ưu. Có 2 hệ lớp: Lớp Chuẩn (học chắc vững nền) và Lớp Ôn thi Cấp tốc (hệ thống kiến thức, luyện đề trọng tâm). Bạn có thể đăng ký ngay tại form tư vấn trên trang!';
  } else if (lower.includes('lớp 9') || lower.includes('9 lên 10') || lower.includes('tuyển sinh 10')) {
    fallbackReply = 'Khóa Ôn thi 9 lên 10 tại Trí Minh bám sát cấu trúc đề tuyển sinh lớp 10 TP.HCM các năm, ôn tập 3 môn Toán – Văn – Anh và định hướng chọn trường THPT phù hợp nhất với năng lực học sinh.';
  } else if (lower.includes('lịch học') || lower.includes('thời khóa biểu') || lower.includes('mấy buổi') || lower.includes('buổi học')) {
    fallbackReply = 'Toán học 3 buổi/tuần; Lý, Hóa, Anh, Sinh, Văn mỗi môn 2 buổi/tuần. Vui lòng liên hệ hotline/Zalo 0703 672 542 để nhận lịch học cụ thể.';
  } else if (lower.includes('lớp chuẩn') || lower.includes('cấp tốc') || lower.includes('hệ lớp')) {
    fallbackReply = 'Trí Minh có 2 hệ lớp:\n1. LỚP CHUẨN: Củng cố nền tảng, học trước chương trình mới, rèn kỹ năng làm bài, phương châm "Học chắc - Học đều".\n2. LỚP ÔN THI CẤP TỐC: Dành cho học sinh cần hệ thống lại kiến thức trong thời gian ngắn trước kỳ thi; tập trung các dạng bài trọng tâm, luyện đề và chữa đề sát cấu trúc đề thi.';
  } else {
    fallbackReply = 'Dạ chào bạn! Trung Tâm Luyện Thi Đại Học Trí Minh (thành lập 1999 tại 434 Tô Ký, Đông Thạnh, TP.HCM) chuyên luyện thi THPT, ĐGNL ĐHQG TP.HCM, tuyển sinh 9 lên 10 và các lớp THCS/THPT. Bạn quan tâm đến khóa học nào hay cần thông tin gì, Trí Minh luôn sẵn lòng hỗ trợ hoặc bạn gọi ngay Hotline 0703 672 542 nhé!';
  }

  res.json({ reply: fallbackReply });
});

// Mock registration store endpoint for consulting requests
const registrations: Array<{
  id: string;
  fullName: string;
  phone: string;
  grade: string;
  course: string;
  classType: string;
  notes?: string;
  createdAt: string;
}> = [];

app.post('/api/consultation', (req, res) => {
  const { fullName, phone, grade, course, classType, notes } = req.body;
  if (!fullName || !phone) {
    res.status(400).json({ error: 'Họ tên và số điện thoại là bắt buộc' });
    return;
  }
  const newReg = {
    id: 'REG-' + Date.now(),
    fullName,
    phone,
    grade: grade || 'Lớp 12',
    course: course || 'Lớp 12 LTĐH',
    classType: classType || 'Lớp Chuẩn',
    notes: notes || '',
    createdAt: new Date().toISOString(),
  };
  registrations.push(newReg);
  res.json({ success: true, message: 'Đăng ký thành công', data: newReg });
});

app.get('/api/consultation', (_req, res) => {
  res.json({ data: registrations });
});

// Vite middleware in dev or static files in prod
if (process.env.NODE_ENV !== 'production') {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server Trí Minh is running on http://0.0.0.0:${PORT}`);
});
