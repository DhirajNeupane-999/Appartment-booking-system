import express from 'express';
import cors from 'cors'
import 'dotenv/config'

// app config
const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get('/', (req, res)=>res.json("Hello Server!"))

app.listen(port, ()=> console.log(`Server is running on PORT ${port}`));
