import { Request, Response, NextFunction } from "express";

const corsSetup = (req: Request, res: Response, next: NextFunction) => {
  res.header(`Access-Control-Allow-Origin`, `http://localhost:5173`);
  res.header(`Access-Control-Allow-Methods`, `GET`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};

export {
  corsSetup,
}