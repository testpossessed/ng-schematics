import { <$= classify(name) %>Actions, <$= classify(name) %>ActionTypes } from './<%= dasherize(name) %>.actions';

export interface <%= classify(name) %>State {
    isInitialised: boolean;
}

const initial<%= classify(name) %>State: <%= classify(name) %>State = {
    isInitialised: false
};

export function <%= camelize(name) %>Reducer(state: <$= classify(name) %>State = initial<%= classify(name) %>State, action: <$= classify(name) %>Actions) {
    switch(action.type) {
        case <$= classify(name) %>ActionTypes.InitialiseModuleSuccess:
            return {
                ...state,
                isInitialised: true
            };
            
        default:
            return state;
    }
}