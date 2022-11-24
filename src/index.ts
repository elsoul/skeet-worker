import express from "express";
import dotenv from "dotenv";
import { Root, Run } from "./root";

dotenv.config();
export const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

router.get("/", Root);
router.post("/run", Run);
app.use("/", router);

export const server = app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
