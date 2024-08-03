const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, '/index.html')));
app.use(express.static(path.join(__dirname, '/public')));




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
// app.get('/sendmail', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/sendmail', (req, res) => {

    let { name, email, message } = req.body;
    console.log(name, email, message);

    // const transporter = nodemailer.createTransport({
    //     host: process.env.MAIL_HOST,
    //     port: process.env.MAIL_PORT,
    //     auth: {
    //         user: process.env.MAIL_USER,
    //         pass: process.env.MAIL_PASS
    //     }
    // });

    // const mailOptions = {
    //     from: email,
    //     to: 'kris32@ethereal.email',
    //     text: message
    // };
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //       console.log(error);
    //       res.status(500).json({ status: 'fail' });
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //       res.json({ status: 'success' });
    //     }

    //     res.redirect('/');
    //   });

});



app.listen(port, () => {
    console.log(`Listentining on port ${port}`);
});