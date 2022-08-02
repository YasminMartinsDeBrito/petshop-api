import { Response } from "express";

type Tmessage = string | Record<string, any>;

class ErrorHandler {
  public statusCode: number;
  public message: Tmessage;

  constructor(statusCode: number, message: Tmessage) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

const errorHandler = (err: Error, res: Response) => {
  if (err instanceof ErrorHandler) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log(err);

  return res.status(500).json({ message: "Internal server errror." });
};
export { ErrorHandler, errorHandler };
