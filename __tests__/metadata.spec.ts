import {
  getControllerMetadata,
  getRequestMethodMetadata,
  getAuthMetadata,
} from '../src/metadata';
import 'reflect-metadata';

describe('metadata', () => {
  describe('getAuthMetadata', () => {
    it('should return undefined if metadata is not found', () => {
      class TestClass {}
      const result = getAuthMetadata('test', TestClass);
      expect(result).toBeUndefined();
    });

    it('should return the metadata value if it exists', () => {
      class TestClass {}
      Reflect.defineMetadata('test', true, TestClass);
      const result = getAuthMetadata('test', TestClass);
      expect(result).toBe(true);
    });
  });

  describe('getControllerMetadata', () => {
    it('should return undefined if metadata is not found', () => {
      class TestClass {}
      const result = getControllerMetadata('test', TestClass);
      expect(result).toBeUndefined();
    });

    it('should return the metadata value if it exists', () => {
      class TestClass {}
      Reflect.defineMetadata('test', 'value', TestClass);
      const result = getControllerMetadata('test', TestClass);
      expect(result).toBe('value');
    });
  });

  describe('getRequestMethodMetadata', () => {
    it('should return undefined if metadata is not found', () => {
      class TestClass {}
      const result = getRequestMethodMetadata('test', TestClass);
      expect(result).toBeUndefined();
    });

    it('should return the metadata value if it exists', () => {
      class TestClass {}
      Reflect.defineMetadata(
        'test',
        { path: '/test', requestMethod: 'GET' },
        TestClass,
      );
      const result = getRequestMethodMetadata('test', TestClass);
      expect(result).toEqual({ path: '/test', requestMethod: 'GET' });
    });
  });
});
