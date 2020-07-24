import { <%= classify(storename) %>Actions, <%= classify(storename) %>ActionTypes } from './<%= dasherize(storename) %>.actions';

export interface <%= classify(feature) %>State {
    isInitialised: boolean;
}

export const initial<%= classify(feature) %>State: <%= classify(feature) %>State = {
    isInitialised: false
};

export function <%= camelize(storename) %>Reducer(state: <%= classify(feature) %>State = initial<%= classify(feature) %>State, action: <%= classify(storename) %>Actions) {
    switch(action.type) {
        case <%= classify(storename) %>ActionTypes.InitialiseModuleSucceeded:
            return {
                ...state,
                isInitialised: true
            };
            
        default:
            return state;
    }
}