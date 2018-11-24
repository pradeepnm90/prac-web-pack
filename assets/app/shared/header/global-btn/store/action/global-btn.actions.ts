import { Action } from "@ngrx/store";
import { DropdownMenuItem } from "../model/global-btn.model";

export const SET_GRS_DROPDOWN = "SET_GRS_DROPDOWN";

export class Setglobalbtn implements Action {
    readonly type = SET_GRS_DROPDOWN;
    constructor(public payload: string) { }
}

export type SetglobalBtnListActions = Setglobalbtn;


