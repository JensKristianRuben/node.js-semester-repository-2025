import { Router } from 'express';
import { rateLimit } from 'express-rate-limit'

const router = Router();




const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 3,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56,
});

router.use("/auth", authLimiter)

function isAdmin(req, res, next) {
    const isAdmin = true;

    if(isAdmin) {
        req.isAdmin = isAdmin;
        req.username = "Johnny"
         return next();
    } else {
        res.status(403).send({data: "you need to be a admin"})
    }
}

router.get("/auth/secretroute", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.username);
    res.send({data: "some secret data"});
})

export default router;