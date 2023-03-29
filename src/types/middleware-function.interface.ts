import { NextFunction, Request, Response } from 'express';

export type IMiddlewareFunction = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void;
