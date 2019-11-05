import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import { StoreModule } from '@ngrx/store';

import { InitialiseModule, InitialiseModuleSucceeded } from './<%= dasherize(name) %>.actions';

import { <%= classify(name) %>Effects } from './<%= dasherize(name) %>.effects';

describe('ShellEffects', () => {
  let actions$: ReplaySubject<any>;
  let effects: <%= classify(name) %>Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(
          {},
          {
            runtimeChecks: {
              strictActionImmutability: true,
              strictActionSerializability: true,
              strictStateImmutability: true,
              strictStateSerializability: true
            }
          }
        )
      ],
      providers: [<%= classify(name) %>Effects, provideMockActions(() => actions$)]
    });

    actions$ = new ReplaySubject(1);
    effects = TestBed.get(<%= classify(name) %>Effects);
  });

  it('should compile', () => {
    expect(effects).toBeTruthy();
  });

  it('should return action to indicate intialisation succeeded', () => {
    const action = new InitialiseModule();
    const completion = new InitialiseModuleSucceeded();
    actions$.next(action);

    effects.initialiseModule$.subscribe(result => {
      expect(result).toEqual(completion);
    });
  });
});
