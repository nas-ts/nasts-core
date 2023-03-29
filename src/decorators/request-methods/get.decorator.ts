import { Method } from './method.decorator';

export function Get(path: string) {
  return Method('get', path);
}
