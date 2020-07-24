import { <%= classify(storename) %>ActionTypes, InitialiseModule, InitialiseModuleSucceeded } from './<%= dasherize(storename) %>.actions';

describe('<%= classify(storename) %>Actions', () => {
  let action: any;

  it('should define enum with correct set of actions', () => {
    expect(<%= classify(storename) %>ActionTypes.InitialiseModule).toBe('[<%= classify(feature) %>] Initialise module');
    expect(<%= classify(storename) %>ActionTypes.InitialiseModuleSucceeded).toBe('[<%= classify(feature) %>] Initialise module succeeded');
  });

  describe('InitialiseModule', () => {
    beforeEach(() => {
      action = new InitialiseModule();
    });

    it('should be defined', () => {
      expect(action).toBeDefined();
    });

    it('should have correct type', () => {
      expect(action.type).toEqual(<%= classify(storename) %>ActionTypes.InitialiseModule);
    });
  });

  describe('InitialiseModuleSucceeded', () => {
    beforeEach(() => {
      action = new InitialiseModuleSucceeded();
    });

    it('should be defined', () => {
      expect(action).toBeDefined();
    });

    it('should have correct type', () => {
      expect(action.type).toEqual(<%= classify(storename) %>ActionTypes.InitialiseModuleSucceeded);
    });
  });
});
