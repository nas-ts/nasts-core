import { Method } from './method.decorator';

export function Put(path: string) {
  return Method('put', path);
}
