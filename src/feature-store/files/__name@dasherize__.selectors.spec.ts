import { getIsInitialised } from './<%= dasherize(name) %>.selectors';

describe('<%= classify(name) %> Selectors', () => {
  const state = {
    <%= camelize(name) %>: {
      isInitialised: false
    }
  };

  it('should provide selector to get module initialisation state', () => {
    expect(getIsInitialised(state)).toBe(state.<%= camelize(name) %>.isInitialised);
  });
});
