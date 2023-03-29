import { Method } from './method.decorator';

export function Delete(path: string) {
  return Method('delete', path);
}
