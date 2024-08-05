const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../my-vite-app')));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  method:"GET, POST,PUT,DELETE,PATCH",
}));

app.post('/api/mail', (req, res) => {
  let { name, email, message } = req.body;
  console.log(name, email, message);

  
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secureConnection: false, 
        logger: true,
         debug: true,
        auth: {
            user: 'hermina35@ethereal.email',
            pass: 'NaqeZZYfMXj2Wmjn4s'
        }
    });

  try {
    transporter.sendMail({
      to: 'hermina35@ethereal.email',
      from: email,
      subject: `Message from ${name}`,
      text: message
    });
    res.send({ status: 'uccess' });
}catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
      }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});