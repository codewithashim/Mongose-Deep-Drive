import express, { Application, Request, Response } from "express";

import cors from "cors";
const app: Application = express();
app.use(cors());

///////////////////////////////////////////////
//                Router Import             //
/////////////////////////////////////////////*/
import UserRouter from "../Modules/User/user.router";

///////        End of Router Import   ////////

///////////////////////////////////////////////
//                Middilware                 //
/////////////////////////////////////////////*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///////         End of Middilware      ////////

///////////////////////////////////////////////
//               Router Middelware           //
/////////////////////////////////////////////*/

app.use("/api/v1/user", UserRouter);

app.get("/api", (req: Request, res: Response) => {
  res.send("Hey Wellcome to Mongos Deep Drive!");
});

///////      End of Router Middelware  ////////

export default app;
