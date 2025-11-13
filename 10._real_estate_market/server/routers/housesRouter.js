import { Router } from 'express';

const router = Router();

const housingMarket = [];

router.get("/houses", (req, res)  => {
    req.session.housingMarket = req.session.housingMarket || [];
    res.send({ data: req.session.housingMarket })
})



router.post("/houses", (req, res)  => {
    req.session.housingMarket = req.session.housingMarket || [];
    req.session.housingMarket.push(req.body);
    res.send({ data: req.session.housingMarket })
})

export default router;