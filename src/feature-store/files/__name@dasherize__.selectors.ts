import { createFeatureSelector, createSelector } from '@ngrx/store';

import { <%= classify(name) %>State } from './<%= dasherize(name) %>.reducer';

export const get<%= classify(name) %>Feature = createFeatureSelector<<%= classify(name) %>State>('<%= name %>');

export const getIsInitialised = createSelector(
  get<%= classify(name) %>Feature,
  (state: <%= classify(name) %>State) => state.isInitialised
);