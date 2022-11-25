import { Request, Response } from "express";
import { sendDiscord } from "../lib/discord";

export const Run = (req: Request, res: Response) => {
	sendDiscord("Skeet Worker Task Done!");
	res.status(200).json({ status: "success!" });
};
