import { APP_LOADER_HIDE, APP_CONTENT_SHOW } from '../constants/actionsTypes';
import { IAppLoaderHide, IAppContentShow } from './appActionsTypes';

export const appLoaderHide = (): IAppLoaderHide => {
    return {
        type: APP_LOADER_HIDE
    };
};

export const appContentShow = (): IAppContentShow => {
    return {
        type: APP_CONTENT_SHOW
    };
};