import { Auth } from '../../src/decorators/auth.decorator';
import 'reflect-metadata';

describe('Auth', () => {
  const mockDefineMetadata = jest.spyOn(Reflect, 'defineMetadata');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when called without a handler', () => {
    it('should define metadata on the class with value true', () => {
      class TestClass {}
      Auth()(TestClass);
      expect(mockDefineMetadata).toHaveBeenCalledWith('auth', true, TestClass);
    });

    it('should define metadata on the class with value true for static methods', () => {
      class TestClass {
        static testMethod() {
          // Doing something
        }
      }
      Auth()(TestClass, 'testMethod');
      expect(mockDefineMetadata).toHaveBeenCalledWith(
        'auth-testMethod',
        true,
        TestClass,
      );
    });

    it('should define metadata on the class with value true for instance methods', () => {
      class TestClass {
        testMethod() {
          // Doing something
        }
      }
      Auth()(TestClass.prototype, 'testMethod');
      expect(mockDefineMetadata).toHaveBeenCalledWith(
        'auth-testMethod',
        true,
        TestClass.prototype,
      );
    });
  });

  describe('when called with a handler', () => {
    it('should define metadata on the class with the provided handler', () => {
      const handler = jest.fn();
      class TestClass {}
      Auth(handler)(TestClass);
      expect(mockDefineMetadata).toHaveBeenCalledWith(
        'auth',
        handler,
        TestClass,
      );
    });

    it('should define metadata on the class with the provided handler for static methods', () => {
      const handler = jest.fn();
      class TestClass {
        static testMethod() {
          // Doing something
        }
      }
      Auth(handler)(TestClass, 'testMethod');
      expect(mockDefineMetadata).toHaveBeenCalledWith(
        'auth-testMethod',
        handler,
        TestClass,
      );
    });

    it('should define metadata on the class with the provided handler for instance methods', () => {
      const handler = jest.fn();
      class TestClass {
        testMethod() {
          // Doing something
        }
      }
      Auth(handler)(TestClass.prototype, 'testMethod');
      expect(mockDefineMetadata).toHaveBeenCalledWith(
        'auth-testMethod',
        handler,
        TestClass.prototype,
      );
    });
  });
});
