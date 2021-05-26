import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {hydrationMetaReducer} from '../currency/store/reducer/hydration.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = [hydrationMetaReducer];
