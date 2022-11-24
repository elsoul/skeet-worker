import { Request, Response } from "express";

export const Root = (req: Request, res: Response) => {
	if (req.query.id) {
		return res.status(200).send(`Hi! ${req.query.id}`);
	}

	res.status(200).json({ status: "Running Skeet Worker Server" });
};

export const Run = (req: Request, res: Response) => {
	res.status(200).json({ status: "success!" });
};
