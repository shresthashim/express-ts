import { Request, Response } from "express";

const getSample = (req: Request, res: Response): void => {
  res.json({ message: "Hello from Express with TypeScript!" });
};

export default getSample;
