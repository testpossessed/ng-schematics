import { Action } from '@ngrx/store';

export enum <%= classify(name) %>ActionTypes {
    InitialiseModule = '[<%= classify(name) %>] Initialise module',
    InitialiseModuleSucceeded = '[<%= classify(name) %>] Initialise module succeeded'
}

export class InitialiseModule implements Action {
    readonly type: string = <%= classify(name) %>ActionTypes.InitialiseModule;
}

export class InitialiseModuleSucceeded implements Action {
    readonly type: string = <%= classify(name) %>ActionTypes.InitialiseModuleSucceeded;
}

export type <%= classify(name) %>Actions = InitialiseModule | InitialiseModuleSucceeded;