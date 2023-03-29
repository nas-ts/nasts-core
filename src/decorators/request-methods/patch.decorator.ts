import { Method } from './method.decorator';

export function Patch(path: string) {
  return Method('patch', path);
}
