import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

import { <%= classify(name) %>FacadeService } from './<%= dasherize(name) %>-facade.service';
import { <%= classify(name) %>State } from './<%= dasherize(name) %>.reducer';

describe('<%= classify(name) %>FacadeService', () => {
  const <%= camelize(name) %>State: <%= classify(name) %>State = {
    isInitialised: false
      // TODO: populate feature state for testing
  };

  const initialState: any = {
    <%= camelize(name) %>: <%= camelize(name) %>State
  };

  let service: <%= classify(name) %>FacadeService;
  let store: MockStore<<%= classify(name) %>State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore<<%= classify(name) %>State>({ initialState })]
    });

    service = TestBed.get(<%= classify(name) %>FacadeService);
    store = TestBed.get<Store<<%= classify(name) %>State>>(Store);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should indicate whether initialised', () => {
    service.isInitialized().subscribe(n => 
      expect(n).toEqual(<%= camelize(name)State.isInitialised);
      );
  });
});
