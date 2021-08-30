import { appActionType } from "../actions/appActionsTypes";
import { APP_LOADER_HIDE, APP_CONTENT_SHOW } from '../constants/actionsTypes';

interface IAppDefaultState {
    showLoader: boolean;
    showContent: boolean;
};

const appDefaultState: IAppDefaultState = {
    showLoader: true,
    showContent: false
};

export const appReducer = (state: IAppDefaultState = appDefaultState, action: appActionType): IAppDefaultState => {
    switch(action.type) {
        case APP_LOADER_HIDE:
            return { ...state, showLoader: false }
        case APP_CONTENT_SHOW:
            return { ...state, showContent: true }
        default:
            return state;
    };
};