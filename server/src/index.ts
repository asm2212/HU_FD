
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

async function main() {
  try {
    await mongoose.connect(String(process.env.mongourl));
    console.log('Database connected successfully');
    
    app.use(cors());

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

main();