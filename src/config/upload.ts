import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  directory: uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename: (req, file, cb) => {
      const filehash = crypto.randomBytes(10).toString('hex');
      const fileName = `${filehash}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
};
