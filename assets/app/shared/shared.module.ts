import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalBtnDirective } from './header/global-btn/global-btn.directive';
import { GlobalBtnComponent } from './header/global-btn/global-btn-component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildTreeViewComponent } from './treeview/childTreeView.component';
import { ParentTreeViewComponent } from './treeview/parentTreeView.component';
import { TreeViewDirective } from './treeview/treeView.directive';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [
        GlobalBtnDirective,
        GlobalBtnComponent,
        HeaderComponent,
        ParentTreeViewComponent,
        TreeViewDirective,
        ChildTreeViewComponent,

    ],
    exports: [
        GlobalBtnDirective,
        GlobalBtnComponent,
        HeaderComponent,
        AngularFontAwesomeModule,
        ParentTreeViewComponent,
        ChildTreeViewComponent,

    ]
})
export class SharedModule { }