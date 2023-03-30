import { NextFunction, Request, Response } from 'express';

export interface IRouterMethodArguments {
  request: Request;
  response: Response;
  next: NextFunction;
  params: { [key: string]: string };
  headers: any;
  body: any;
}
