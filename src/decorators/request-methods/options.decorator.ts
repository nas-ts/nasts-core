import { Method } from './method.decorator';

export function Options(path: string) {
  return Method('options', path);
}
