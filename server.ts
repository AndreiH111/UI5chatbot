import cds from '@sap/cds'
import type { Request, Response , Application} from "express";

cds.on('bootstrap', (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
  });
  console.log("Hi");
})

export default cds.server;



