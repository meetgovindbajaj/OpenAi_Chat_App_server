import { NextFunction, Request, Response } from "express";

interface Props {
  req: Request;
  res: Response;
  next?: NextFunction;
}

const getAllRoutes = ({ req, res }: Props) => {
  res.json({ hi: "ji" });
};

const userController = { getAllRoutes };
export default userController;
