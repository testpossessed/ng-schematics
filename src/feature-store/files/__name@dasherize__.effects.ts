import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { <%= classify(name) %>State } from './<%= dasherize(name) %>.reducer';
import { InitialiseModule, InitialiseModuleSucceeded } from './<%= dasherize(name) %>.actions';

@Injectable()
export class <%= classify(name) %>Effects {
  constructor(
    private actions$: Actions,
    private store: Store<<%= classify(name) %>State>
  ) { }

  @Effect()
  initialiseModule$ = this.actions$.pipe(
    ofType<InitialiseModule>(<%= classify(name) %>ActionTypes.InitialiseModule),
    exhaustMap(a => new InitialiseModuleSucceeded()),
    catchError(e => {
      console.log(e);
      return EMPTY;
    })
  );
}
