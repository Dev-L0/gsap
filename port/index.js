const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/index.html')));
app.use(express.static(path.join(__dirname, '/public')));



app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/sendmail', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/sendmail',(req,res)=>{
    let {name, email, message} = req.body;
    console.log(name, email, message);

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: 'sasasa6697@gmail.com',
        text: message
    };
    transporter.sendMail(mailOptions, (error, info)=>{
if(error){
    console.log("error");
} else {
    console.log("Email sentt!," , info.response);
}
res.redirect('/');
    })
   
    })



app.listen(port,()=>{
    console.log(`Listentining on port ${port}`);
})