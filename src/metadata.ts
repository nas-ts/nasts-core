export function getControllerMetadata(
  metadataKey: string,
  target: any,
): string | undefined {
  return Reflect.getMetadata(metadataKey, target);
}

export function getRequestMethodMetadata(
  metadataKey: string,
  target: any,
): { path: string; requestMethod: string } | undefined {
  return Reflect.getMetadata(metadataKey, target);
}

export function getAuthMetadata(
  metadataKey: string,
  target: any,
): boolean | (() => void) | undefined {
  return Reflect.getMetadata(metadataKey, target);
}
