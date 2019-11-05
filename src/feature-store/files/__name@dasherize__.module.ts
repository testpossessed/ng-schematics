import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { <%= camelize(name) %>Reducer } from './<%= dasherize(name) %>.reducer';
import { %= camelize(name) %>Effects } from './<%= dasherize(name) %>.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('<%= name %>', <%= camelize(name) %>Reducer),
    EffectsModule.forFeature([<%= classify(name) %>Effects])
  ]
})
export class <%= classify(name) %>Module {}
