import { APP_LOADER_HIDE, APP_CONTENT_SHOW } from '../constants/actionsTypes';

export interface IAppLoaderHide {
    type: typeof APP_LOADER_HIDE
};

export interface IAppContentShow {
    type: typeof APP_CONTENT_SHOW
};

export type appActionType = IAppLoaderHide | IAppContentShow;