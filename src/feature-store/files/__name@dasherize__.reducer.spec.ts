import { InitialiseModule } from './<%= dasherize(name) %>.actions';
import { initial<%= classify(name) %>State, <%= dasherize(name) %>Reducer } from './<%= dasherize(name) %>.reducer';

describe('<%= classify(name) %> Reducer', () => {
  it('should default to original state', () => {
    const action = {} as any;

    const result = <%= dasherize(name) %>Reducer(initial<%= classify(name) %>State, action);

    expect(result).toBe(initial<%= classify(name) %>State);
  });

  it('should handle initialise module succeeded', () => {
    const result = <%= dasherize(name) %>Reducer(initial<%= classify(name) %>State, new InitialiseModule());

    expect(result.isInitialised).toBe(true);
  });
});
