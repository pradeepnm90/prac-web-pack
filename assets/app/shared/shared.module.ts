import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalBtnDirective } from './header/global-btn/global-btn.directive';
import { GlobalBtnComponent } from './header/global-btn/global-btn-component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { TreeViewDirective } from './treeview/treeView.directive';
import { TreeViewComponent } from './treeview/tree-view.component';
import { WindowRef } from './treeview/windowWrapper.service';
import { FileService } from './treeview/file.service';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FileUploadModule],
    declarations: [
        GlobalBtnDirective,
        GlobalBtnComponent,
        HeaderComponent,
        TreeViewDirective,
        TreeViewComponent
    ],
    exports: [
        GlobalBtnDirective,
        GlobalBtnComponent,
        HeaderComponent,
        AngularFontAwesomeModule,
        TreeViewComponent

    ],
    providers: [WindowRef, FileService]
})
export class SharedModule { }