import createActionHandlerMiddleware from './index';

describe('createActionHandlerMiddleware', () => {
  describe('should return redux middleware', () => {
    it('should have 4 curried arguments', () => {
      let first = createActionHandlerMiddleware;
      let second = first();
      let third = second();
      let fourth = third();

      expect(typeof first).toBe('function');
      expect(typeof second).toBe('function');
      expect(typeof third).toBe('function');
      expect(typeof fourth).toBe('function');
    });
  });
});
