import { IMiddlewareFunction } from './middleware-function.interface';

/**
 * Options when creating a new nasts app
 */
export interface IAppOptions {
  /** The port the app should run on. Default is 3000 */
  port?: number;
  corsEnabled?: boolean;
  auth?: IMiddlewareFunction;
  middleware?: IMiddlewareFunction[];
  controllers?: (new (...args: any[]) => any)[];
  onListen?: () => void;
}
