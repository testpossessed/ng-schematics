import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { <%= classify(name) %>State } from './<%= dasherize(name) %>.reducer';
import { getIsInitialised } from './<%= dasherize(name) %>.selectors';
import { Init<%= classify(name) %>Module } from './<%= dasherize(name) %>.actions';

export interface I<%= classify(name) %>FacadeService {
  isInitialised(): Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>FacadeService implements I<%= classify(name) %>FacadeService {
  constructor(private store: Store<<%= classify(name) %>State>) {}

  public isInitialised(): Observable<boolean> {
    return this.store.pipe(select(getIsInitialised));
  }
}
