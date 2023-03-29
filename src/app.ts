import express, {
  Express,
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';
import {
  getAuthMetadata,
  getControllerMetadata,
  getRequestMethodMetadata,
} from './metadata';
import { IAppOptions } from './types/app.interface';
import { IRouterMethodArguments } from './types/routerMethodArguments.interface';
import cors from 'cors';

export class App {
  private _expressApp: Express;

  constructor(private options: IAppOptions) {
    this._expressApp = express();
    this._expressApp.use(express.json());
    this.setMiddleware();
    this.setRoutes();
  }

  public start(): void {
    const port = this.options?.port || 3000;
    if (this.options.onListen) {
      this._expressApp.listen(port, this.options.onListen);
    } else {
      this._expressApp.listen(port, () => {
        console.log(`Listening on ${port}`);
      });
    }
  }

  private setMiddleware(): void {
    if (this.options.corsEnabled) {
      this._expressApp.use(cors());
    }

    if (this.options.middleware) {
      for (const middleware of this.options.middleware) {
        this._expressApp.use(middleware);
      }
    }
  }

  private setRoutes(): void {
    if (this.options.controllers) {
      for (const controller of this.options.controllers) {
        const path = getControllerMetadata('controller', controller);
        const auth = getAuthMetadata('auth', controller);
        if (path) {
          const router = this.buildRouter(controller.prototype);
          if (auth && this.options.auth) {
            this._expressApp.use(path, this.options.auth, router);
          } else {
            this._expressApp.use(path, router);
          }
        }
      }
    }
  }

  private buildRouter(controllerPrototype: any): Router {
    const router: Router & Record<string, any> = Router();

    for (const functionName in controllerPrototype) {
      const metadata = getRequestMethodMetadata(
        `route-${functionName}`,
        controllerPrototype,
      );

      const auth = getAuthMetadata(`auth-${functionName}`, controllerPrototype);

      if (metadata) {
        const { path, requestMethod } = metadata;
        if (auth && this.options.auth) {
          router[requestMethod](
            path,
            typeof auth === 'boolean' ? this.options.auth : auth,
            (request: Request, response: Response, next: NextFunction) => {
              const routerMethodArgs: IRouterMethodArguments = {
                request,
                response,
                next,
                params: this.getParams(request),
                headers: this.getHeaders(request),
              };
              response.send(
                controllerPrototype[functionName](routerMethodArgs),
              );
            },
          );
        } else {
          router[requestMethod](
            path,
            (request: Request, response: Response, next: NextFunction) => {
              const routerMethodArgs: IRouterMethodArguments = {
                request,
                response,
                next,
                params: this.getParams(request),
                headers: this.getHeaders(request),
              };
              response.send(
                controllerPrototype[functionName](routerMethodArgs),
              );
            },
          );
        }
      }
    }
    return router;
  }

  private getParams(request: Request): { [key: string]: string } {
    return request.params;
  }

  private getHeaders(request: Request): any {
    return request.headers;
  }
}
