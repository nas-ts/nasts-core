export function Method(method: string, path: string) {
  return function (target: any, propertyKey: string | symbol) {
    Reflect.defineMetadata(
      `route-${propertyKey.toString()}`,
      {
        path,
        requestMethod: method.toLowerCase(),
      },
      target,
    );
  };
}
