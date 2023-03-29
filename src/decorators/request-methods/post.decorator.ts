import { Method } from './method.decorator';

export function Post(path: string) {
  return Method('post', path);
}
