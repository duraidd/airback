import express from "express";
import multer from "multer";
var app = express()

app.use('/uploads', express.static('uploads'));
const router = express.Router();




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Set the upload directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original file name
    }
});

const upload = multer({ storage: storage });



router.get("/", async (req, res) => {
    res.json({ kid: "meee" });

});


router.post('/upload', upload.single('image'), (req, res) => {
    // req.file contains the uploaded file
    // req.body contains the entire request body
    console.log(req.file);
    res.send(`Image uploaded successfully!`);
});


export default router;
