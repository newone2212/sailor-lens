const express = require('express');
const mongoose = require('mongoose');
require("./db/conn");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const path = require('path');

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));
app.use(cors())
// app.use(formidable());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);
const aboutRoutes = require('./routes/aboutRoutes');
app.use('/about', aboutRoutes);
const courseRoutes = require('./routes/courseRoutes');
app.use('/course', courseRoutes);
const focusRoutes = require('./routes/focusRoutes');
app.use('/focus', focusRoutes);
const footerRoutes = require('./routes/footerRoutes');
app.use('/footer', footerRoutes);
const homeRoutes = require('./routes/homeRoutes');
app.use('/home', homeRoutes);
const reviewRoutes = require('./routes/reviewRoutes');
app.use('/review', reviewRoutes);
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);
const workRoutes = require('./routes/workRoutes');
app.use('/work', workRoutes);
const imageUploadRoutes = require('./routes/imageUploadRoutes');
app.use('/media', imageUploadRoutes);
const faqRoutes = require('./routes/faqRoutes');
app.use('/faq', faqRoutes);
const paymentRoutes = require('./routes/paymentRoutes');
app.use('/payment', paymentRoutes);
const mobileOtpRoutes = require('./routes/mobileOtpRoutes');
app.use('/mobile', mobileOtpRoutes);
const email= require('./routes/emailOtpRoutes');
app.use('/email', email);
app.get("/", (req,res)=>{
    res.send("Hello! This is Sailor Lens Backend");
});



const port = process.env.PORT || 8000

app.listen(port, () =>{
    console.log(`app is running at ${port}`);
})