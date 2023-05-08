import Express, { Request, Response, NextFunction } from "express";
const router = Express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("User List");
});

router.get("/new", (req: Request, res: Response) => {
  res.send("User New Form");
  const a = 5;
});

router.get("/:userID", (req: Request, res: Response) => {
  console.log(`From router.get(/:userID)... ${req.userID}`);
  res.send(`Grabbing the user @ ${req.params.userID}`);
});

router.param(
  "userID",
  (req: Request, res: Response, next: NextFunction, userID: string) => {
    req.userID = userID;
    console.log(`From router.param... ${req.userID}`);
    next();
  }
);

export default router;
