import { Controller } from '../../src/decorators/controller.decorator';
import 'reflect-metadata';

describe('Controller', () => {
  const mockDefineMetadata = jest.spyOn(Reflect, 'defineMetadata');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should define metadata on the class with the provided path', () => {
    class TestController {}
    Controller('/test')(TestController);
    expect(mockDefineMetadata).toHaveBeenCalledWith(
      'controller',
      '/test',
      TestController,
    );
  });

  it('should define metadata on the class with an empty string if no path is provided', () => {
    class TestController {}
    Controller('')(TestController);
    expect(mockDefineMetadata).toHaveBeenCalledWith(
      'controller',
      '',
      TestController,
    );
  });
});
