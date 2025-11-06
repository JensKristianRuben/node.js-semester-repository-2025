import { Router } from "express";

const router = Router();

router.get("/addicecream", (req, res) => {
    req.session.flavor = "Chocolate Caramel"
    req.session.amount = 5;
    res.send({data: req.session});
});

router.get("/eaticecream", (req, res) => {
    res
    res.send({data: req.session.flavor, amount: req.session.amount});
});

router.get("/closeshop", (req, res) => {
    req.session.destroy(() => {
        res.send({message: "Shop has been closed"})
    });
})


export default router; 