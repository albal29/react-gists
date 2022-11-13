import express from 'express';
import router from './gist/router.js';
import cors from "cors";


const app = express();
app.use(cors());
app.use('/api',router);
app.listen(3000,() => console.log("listening on port 3000"));
