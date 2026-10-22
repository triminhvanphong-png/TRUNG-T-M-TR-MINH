import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Registration store endpoint for consulting requests
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
