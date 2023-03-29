import { Method } from './method.decorator';

export function Head(path: string) {
  return Method('head', path);
}
