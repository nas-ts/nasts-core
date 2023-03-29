export function Auth(handler?: any) {
  return function (target: any, propertyKey?: string | symbol) {
    if (propertyKey) {
      Reflect.defineMetadata(
        `auth-${propertyKey.toString()}`,
        handler || true,
        target,
      );
    } else {
      Reflect.defineMetadata('auth', handler || true, target);
    }
  };
}
