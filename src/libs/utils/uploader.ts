
/** MULTER IMAGE UPLOADER **/
// function getTargetImageStorage(address: any) {
//   return multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, `./uploads/${address}`);
//     },
//     filename: function (req, file, cb) {
//       const extension = path.parse(file.originalname).ext;
//       const random_name = v4() + extension;
//       cb(null, random_name);
//     },
//   });
// }

// const makeUploader = (address: string) => {
//   const storage = getTargetImageStorage(address);
//   return multer({ storage: storage });
// };

// export default makeUploader;

/*
const product_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/products");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const extension = path.parse(file.originalname).ext;
    const random_name = v4() + extension;
    cb(null, random_name);
  },
});

export const uploadProductImage = multer({ storage: product_storage });
*/
import multer from 'multer';
import path from 'path';
import { v4 } from 'uuid';
import fs from 'fs';

function getTargetImageStorage(address: any) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = `./uploads/${address}`;
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const extension = path.parse(file.originalname).ext;
      const random_name = v4() + extension;
      cb(null, random_name);
    },
  });
}


const ensureBaseDirectoriesExist = (baseDir: string) => {
  const uploadsDir = path.join(baseDir, '../../../uploads');
  const membersDir = path.join(uploadsDir, 'members');
  const productsDir = path.join(uploadsDir, 'products');

  if (
    !fs.existsSync(uploadsDir) && 
    !fs.existsSync(membersDir)&&
    !fs.existsSync(productsDir)
  ) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    fs.mkdirSync(membersDir, { recursive: true });
    fs.mkdirSync(productsDir, { recursive: true });
  }
}

const makeUploader = (address: string) => {
  ensureBaseDirectoriesExist(__dirname);
  const storage = getTargetImageStorage(address);
  return multer({ storage: storage });
};


export default makeUploader;
