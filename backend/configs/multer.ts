
import multer from 'multer';
import { Request } from 'express';
declare module 'multer' {
    interface File {
        buffer: Buffer;
    }
}
const imageFilter = (req:Request,file:Express.Multer.File,cb:multer.FileFilterCallback):void => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(new Error("Forbidden extension"));
    }
};

const storage = multer.memoryStorage();
const fileLimit = { fileSize: 5 * 1024 * 1024 } // 5mb Limit
const upload = multer({ storage, fileFilter: imageFilter, limits: fileLimit });

export default upload;