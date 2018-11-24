import { Action } from "@ngrx/store";
import * as  SetglobalBtnListActions from "../action/global-btn.actions";
import { DropdownMenuItem } from "../model/global-btn.model";


const initialState: DropdownMenuItem = {
    menuItems: ["Global Re", "CATCO", "Chubb", "Fed Fronted", "MINT", "Markell Assurance"]
};
export function globalBtnListReducer(state: DropdownMenuItem = initialState,
    action: SetglobalBtnListActions.SetglobalBtnListActions) {
    switch (action.type) {
        case SetglobalBtnListActions.SET_GRS_DROPDOWN:
            state.menuItems.unshift(action.payload);
            return Object.assign({}, state,
                [state.menuItems.filter((el, i) => {
                    return state.menuItems.indexOf(el) == i;
                })]);
        default:
            return state;
    }
}
