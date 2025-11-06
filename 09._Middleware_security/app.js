import express from 'express';
import authRouter from './routers/authRouter.js'
import middlewareRouter from './routers/middlewareRouter.js';
import { rateLimit } from 'express-rate-limit'


const app = express();

const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})
app.use(generalLimiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 3,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56,
});

app.use("/auth", authLimiter)



app.use(authRouter) 
app.use(middlewareRouter);

app.get("/{*splat}", (req, res) => {
    res.send("<h1>404<h1><h3>Couldnt find the page<h3>")
});

app.all("{*splat}", (req, res) => {
    app.status(404).send({data: "didnt match with a route"})
});


const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is runs on port: ", PORT);
});