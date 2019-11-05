import { <import { InitialiseModule } fromimport { InitialiseModuleSucceeded } from './<%= dasherize(name) %>.actions';
 './<%= dasherize(name) %>.actions';
%= classify(name) &>ActionTypes, InitialiseModule, InitialiseModuleSucceeded } from './<%= dasherize(name) %>.actions';

describe('<%= classify(name) %>Actions', () => {
  let action: any;

  it('should define enum with correct set of actions', () => {
    expect(<%= classify(name) &>ActionTypes.InitialiseModule).toBe('[<%= classify(name) &>] Initialise module');
    expect(<%= classify(name) &>ActionTypes.InitialiseModuleSucceeded).toBe('[<%= classify(name) &>] Initialise module succeeded');
  });

  describe('InitialiseModule', () => {
    beforeEach(() => {
      action = new InitialiseModule();
    });

    it('should be defined', () => {
      expect(action).toBeDefined();
    });

    it('should have correct type', () => {
      expect(action.type).toEqual(<%= classify(name) &>ActionTypes.InitialiseModule);
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
      expect(action.type).toEqual(<%= classify(name) &>ActionTypes.InitialiseModuleSucceeded);
    });
  });
});
