import { Component, Compiler, Injector, NgModuleRef, ViewChild, ViewContainerRef, AfterViewInit, NgModule, OnInit, Renderer, ElementRef, ViewChildren } from '@angular/core';
import { TreeView } from './treeview.model';
@Component({
    selector: 'parent-tree-view',
    template: `<child-tree-view [directories]="directories" 
              (uploadFileEvent)="receiveFiles($event)">
              </child-tree-view>`
})

export class ParentTreeViewComponent implements OnInit {
    directories: Array<TreeView>;
    file: any; whichFolder: string; _container: string;

    constructor() {
        this.loadDirectories();
    }
    loadDirectories() {
        const submission = new TreeView('Submission', [], ['Submission_Oldv1.cat', 'Submission_Oldv2.cat']);
        const pricing = new TreeView('Pricing', [], ['Pricing_Oldv1.cat', 'Pricing_Oldv2.cat']);
        const contractDocs = new TreeView('Contract Docs', [], ['Contract Docs_Oldv1.cat', 'Contract Docs_Oldv2.cat']);
        const correspondence = new TreeView('Correspondence', [], ['Correspondence_Oldv1.cat', 'Correspondence_Oldv2.cat']);
        const dealTracking = new TreeView('Deal tracking', [], ['Deal tracking_Oldv1.cat', 'Deal tracking_Oldv2.cat']);
        const finalDocs = new TreeView('Final Documents', [], ['Final Documents_Oldv1.cat', 'Final Documents_Oldv2.cat']);
        this.directories = [submission, pricing, contractDocs, correspondence, dealTracking, finalDocs];
    }
    receiveFiles(fileInput) {
        const { formData, folder } = fileInput;
        this.file = formData;
        this.whichFolder = folder;
        let matchedTreeView = this.directories.filter(treeview => {
            return treeview.name === this.whichFolder;
        })
        matchedTreeView[0].files.push(this.file);
        alert("file: " + this.file + "    uploaded in" + "  folder-- " + this.whichFolder.toUpperCase());
    }
    ngOnInit() {

    }
}