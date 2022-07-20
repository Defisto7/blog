import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:5102004@cluster0.jshki4o.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("DB ok"))
.catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Dima!');
});

app.post('/auth/login', (req, res) => {
  console.log(req.body);

  const token = jwt.sign({
    email: req.body.email,
    fullName: "Ваня Иванов"
  },
  'secret123'
);

  res.json({
    success: true,
    token,
  });
})

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server ok')
});