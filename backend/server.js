import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js'; 
import cors from 'cors';

const port = process.env.PORT || 3000;

connectDB(); //Connect to MongoDB
const app = express();

// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

app.get('/', (req, res) => {
    res.send("API is running...");
    // res.end();

});

app.get('/api/products', (req, res) => {
    res.json(products);
    // res.end();
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => console.log(`Server is running on port http://localhost/${port}`));
