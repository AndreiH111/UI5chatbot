import { Express } from "express";
import type { Request, Response } from "express";

const app = Express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});
export default app;
