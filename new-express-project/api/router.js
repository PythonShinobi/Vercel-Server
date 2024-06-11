// new-express-project/api/router.js
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Express on Vercel");
});

export default router;