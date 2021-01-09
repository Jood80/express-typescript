import { Request, Response, NextFunction } from 'express';
import logging from '../utils/logging';

const NAMESPACE = 'Sample Controller';

const sampleHeathCheck = (_req: Request, res: Response, _next: NextFunction) => {
  logging.info(NAMESPACE, `Sample heath check for route call.`);

  return res.status(200).json({
    message: 'Welll recieveddddd'
  });
};

export { sampleHeathCheck };
