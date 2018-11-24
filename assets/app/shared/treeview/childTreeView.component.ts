import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeView } from './treeview.model';

@Component({
    selector: 'child-tree-view',
    templateUrl: './childTreeView.html',
    styleUrls: ['./childTreeView.scss']
})

export class ChildTreeViewComponent {
    @Input() directories: Array<TreeView>;
    files: any; filesToUpload: Array<File>;
    @Output() uploadFileEvent = new EventEmitter<any>();
    folder: any;
    constructor() {
        this.filesToUpload = [];
    }
    dragover(event, folder) {
        event.preventDefault();
        event.stopPropagation();
    }
    dragleave(event, folder) {
        event.preventDefault();
        event.stopPropagation();
    }
    drop(event, folder) {
        event.preventDefault();
        event.stopPropagation();
        this.files = event.dataTransfer.files;
        this.folder = folder;
        this.processFile(this.files, this.folder);

    }

    processFile(fileInput: any, folder) {
        this.filesToUpload = <Array<File>>fileInput;
        this.upload(this.folder);
    }

    upload(folderName) {
        ;
        this.makeFileRequest("http://localhost:1337/", [], this.filesToUpload, folderName).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>, folderName) {
        ;
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            this.uploadFileEvent.emit({ formData: formData.get('uploads[]').name, folder: folderName });
            xhr.send(formData);
        });
    }
}