import 'dotenv/config';
import express from 'express';
import realEstateAgentsRouter from './routers/realEstateAgentsRouter.js'
import housesRouter from './routers/housesRouter.js'
import session from 'express-session';
import cors from 'cors'



const app = express();

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(realEstateAgentsRouter)
app.use(housesRouter);


const PORT = Number(process.env.PORT || 8080);

app.listen(PORT, () => {
    console.log("The server is running on PORT: ", PORT);
})