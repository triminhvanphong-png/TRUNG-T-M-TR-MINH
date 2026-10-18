import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Phone, Sparkles, RefreshCw, MessageSquare, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';
import { CENTER_INFO } from '../data/mockData';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultForm: () => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultForm,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Dạ chào bạn! Thầy/Cô tư vấn Trung Tâm Luyện Thi Đại Học Trí Minh (thành lập 1999 tại 434 Tô Ký, Đông Thạnh, TP.HCM) xin chào bạn.\n\nBạn đang quan tâm đến khóa học nào (Lớp 12 LTĐH, Ôn ĐGNL ĐHQG, Tuyển sinh 9 lên 10, Hệ Lớp Chuẩn hay Lớp Ôn thi Cấp tốc)?`,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'Học phí các khóa học bao nhiêu?',
    'Lịch học các môn như thế nào?',
    'Khóa Lớp 12 LTĐH cho 2K8 học thế nào?',
    'Ôn thi ĐGNL ĐHQG TP.HCM có những môn gì?',
    'Lớp Chuẩn và Lớp Ôn thi Cấp tốc khác nhau thế nào?',
    'Địa chỉ và giờ làm việc của trung tâm?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-5),
        }),
      });

      if (!response.ok) {
        throw new Error('Lỗi phản hồi');
      }

      const data = await response.json();
      const botReply: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: data.reply || 'Xin lỗi, Trí Minh chưa thể phản hồi lúc này. Mời bạn gọi hotline 0703 672 542 để được tư vấn nhanh!',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      // Local fallback in case network fails
      const lower = text.toLowerCase();
      let replyText = '';
      if (lower.includes('học phí') || lower.includes('giá') || lower.includes('bao nhiêu tiền') || lower.includes('chi phí')) {
        replyText = 'Dạ chào bạn! Trung tâm Trí Minh có rất nhiều chính sách ưu đãi hấp dẫn như: Ưu đãi đặc biệt khi đăng ký combo 3 môn, Học viên cũ được giảm học phí, 100% tài liệu miễn phí và lệ phí thi thử được khấu trừ vào học phí. Mỗi khóa gồm 4 tuần (Toán 3 buổi/tuần; Lý, Hóa, Anh, Sinh, Văn 2 buổi/tuần). Mời bạn để lại số điện thoại tại Form Đăng ký tư vấn trên website hoặc nhắn tin Zalo 0703 672 542 để nhận bảng học phí chi tiết nhé!';
      } else if (lower.includes('lịch học') || lower.includes('thời khóa biểu') || lower.includes('mấy buổi') || lower.includes('ngày nào')) {
        replyText = 'Toán học 3 buổi/tuần; Lý, Hóa, Anh, Sinh, Văn mỗi môn 2 buổi/tuần. Vui lòng liên hệ hotline/Zalo 0703 672 542 để nhận lịch học cụ thể.';
      } else if (lower.includes('lớp chuẩn') || lower.includes('cấp tốc') || lower.includes('hệ lớp')) {
        replyText = 'Trí Minh có 2 hệ lớp:\n1. LỚP CHUẨN: Củng cố nền tảng, học trước chương trình mới, rèn kỹ năng làm bài, phương châm "Học chắc - Học đều".\n2. LỚP ÔN THI CẤP TỐC: Dành cho học sinh cần hệ thống lại kiến thức trong thời gian ngắn trước kỳ thi; tập trung các dạng bài trọng tâm, luyện đề và chữa đề sát cấu trúc đề thi.';
      } else if (lower.includes('địa chỉ') || lower.includes('ở đâu')) {
        replyText = 'Trung Tâm Luyện Thi Đại Học Trí Minh tọa lạc tại 434 đường Tô Ký, xã Đông Thạnh, TP.HCM. Lưu ý: Trung tâm chỉ có 1 CƠ SỞ DUY NHẤT để đảm bảo chất lượng giảng dạy tốt nhất!';
      } else {
        replyText = 'Dạ cảm ơn bạn đã quan tâm. Để nhận thông tin chi tiết và xếp lịch kiểm tra trình độ đầu vào cùng Thầy Cô, bạn vui lòng gọi ngay Hotline 0703 672 542 hoặc nhấn nút "Đăng Ký Tư Vấn" trên trang nhé!';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full sm:max-w-lg h-[92vh] sm:h-[650px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-md">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base text-white">
                  Trợ Lý Tuyển Sinh AI Trí Minh
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-blue-200">
                Hỗ trợ 24/7 • Hotline: 0703 672 542
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={`tel:${CENTER_INFO.hotline.replace(/\s+/g, '')}`}
              className="p-2 rounded-lg bg-orange-600/30 hover:bg-orange-600 text-orange-300 hover:text-white transition"
              title="Gọi hotline"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
              title="Đóng chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice on single campus & tuition hotline */}
        <div className="px-4 py-2 bg-amber-50 border-b border-amber-200 text-amber-900 text-[11px] flex items-center justify-between">
          <span>⭐ Chỉ 1 cơ sở duy nhất: 434 Tô Ký, Đông Thạnh, TP.HCM</span>
          <span className="font-bold text-orange-700">Hotline: {CENTER_INFO.hotline}</span>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-xs sm:text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white text-xs font-bold ${
                  msg.sender === 'user'
                    ? 'bg-orange-600'
                    : 'bg-blue-900 shadow-sm'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl p-3.5 space-y-1 shadow-sm whitespace-pre-wrap ${
                  msg.sender === 'user'
                    ? 'bg-orange-600 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                }`}
              >
                <div className="leading-relaxed">{msg.text}</div>
                <div
                  className={`text-[9px] text-right ${
                    msg.sender === 'user' ? 'text-orange-200' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white p-3 rounded-2xl border border-slate-200 w-fit">
              <Bot className="w-4 h-4 text-orange-500 animate-spin" />
              <span>Trợ lý Trí Minh đang soạn câu trả lời...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Prompts */}
        <div className="p-2.5 bg-white border-t border-slate-200 overflow-x-auto flex gap-2 no-scrollbar">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-medium bg-slate-100 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300 border border-slate-200 text-slate-700 transition cursor-pointer shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            placeholder="Nhập câu hỏi của bạn (ví dụ: học phí, khóa học...)"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs sm:text-sm bg-slate-50"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim() || isLoading}
            className="p-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white transition cursor-pointer shadow-md"
            title="Gửi"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
