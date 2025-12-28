 import { db } from '../../lib/db';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Disable bodyParser for Multer
export const config = {
  api: {
    bodyParser: false,
  },
};

// Ensure upload folder exists
const uploadDir = path.join(process.cwd(), 'public', 'schoolImages');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single('image');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const { name, address, city, state, contact, email_id } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Image is required' });
    }

    const image = req.file.filename;

    try {
      const [result] = await db.query(
        'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, address, city, state, contact, image, email_id]
      );
      res.status(200).json({ message: 'School added successfully', id: result.insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
