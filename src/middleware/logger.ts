import { Request, Response, NextFunction } from "express";
export default function logger(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(`Request Received On: ${req.originalUrl}`);
  next();
  return;
}
