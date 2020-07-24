import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import { <%= classify(feature) %>State } from './<%= dasherize(storename) %>.reducer';
import { InitialiseModule, InitialiseModuleSucceeded, <%= classify(storename) %>ActionTypes } from './<%= dasherize(storename) %>.actions';

@Injectable()
export class <%= classify(storename) %>Effects {
  constructor(
    private actions$: Actions,
    private store: Store<<%= classify(feature) %>State>
  ) { }

  @Effect()
  initialiseModule$ = this.actions$.pipe(
    ofType<InitialiseModule>(<%= classify(storename) %>ActionTypes.InitialiseModule),
    exhaustMap(a => of(new InitialiseModuleSucceeded())),
    catchError(e => {
      console.log(e);
      return EMPTY;
    })
  );
}
