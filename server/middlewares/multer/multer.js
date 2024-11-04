//Import Statement
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Set Storage
const storage = multer.diskStorage({
    destination:function(req,file,cb){
      cb(null, path.join(__dirname, '', 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname +"_"+Date.now()+path.extname(file.originalname));
      },
})

// File filter for image uploads 
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      return cb(new Error('Only images are allowed'), false);
    }
    cb(null, true);
  };

// Initialize multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }
  });
  
export default upload;  