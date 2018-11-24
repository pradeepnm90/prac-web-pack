import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { } from "ag-grid-enterprise"

import { AppComponent } from './app.component';
import { AgGridModule, } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { globalBtnListReducer } from './shared/header/global-btn/store/reducer/global-btn-list.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AgGridComponent } from './ag-grid/ag-grid.component';

@NgModule({
    declarations: [
        AppComponent,
        AgGridComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AgGridModule.withComponents([AppComponent]),
        HttpClientModule,
        StoreModule.forRoot({ menus: globalBtnListReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
