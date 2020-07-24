import { Action } from '@ngrx/store';

export enum <%= classify(storename) %>ActionTypes {
    InitialiseModule = '[<%= classify(feature) %>] Initialise module',
    InitialiseModuleSucceeded = '[<%= classify(feature) %>] Initialise module succeeded'
}

export class InitialiseModule implements Action {
    readonly type: string = <%= classify(storename) %>ActionTypes.InitialiseModule;
}

export class InitialiseModuleSucceeded implements Action {
    readonly type: string = <%= classify(storename) %>ActionTypes.InitialiseModuleSucceeded;
}

export type <%= classify(storename) %>Actions = InitialiseModule | InitialiseModuleSucceeded;