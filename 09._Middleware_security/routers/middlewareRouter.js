import { Router } from "express";   

const router = Router();

router.use("/room", ipLogger);
router.use("/room", greeter);

function ipLogger(req, res, next){
    console.log(req.ip);
    next();
}

function greeter(req, res, next) {
    console.log("Hallo friend from ip adress: ", req.ip);
    next();
}


router.get("/route", (req, res) => {
    console.log();
})

router.get("/room", (req, res) => {
    res.send({data: "You are in room 1"})
})

router.get("/room", (req, res) => {
    res.send({data: "You are in room 2"})
});

export default router;