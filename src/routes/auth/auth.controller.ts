import { NextFunction, Request, Response } from 'express';

export const registerController = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response> => {
  return response.json('xd');
};
