import { Router } from 'express';
const videoRouter = Router();

videoRouter.post("/", async (req, res) => {

    const obj = req.body;
    return res.status(201).json({ status: "OK"});

})

export { videoRouter};


