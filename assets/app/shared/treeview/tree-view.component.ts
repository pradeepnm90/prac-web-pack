import { Component, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FileService } from './file.service';
import { saveAs } from 'file-saver';
import { HttpClientModule } from '@angular/common/http';
import { TreeView } from './treeview.model';
import { WindowRef } from './windowWrapper.service';

const uri = 'http://localhost:3000/file/upload';
@Component({
    selector: 'tree-view',
    templateUrl: 'tree.component.html',
    providers: [FileService, HttpClientModule, WindowRef]
})
export class TreeViewComponent {

    uploader: FileUploader = new FileUploader({ url: uri });
    msgObjDetails: any = {}
    imageRightAPI: any = [];

    @ViewChild('dropArea') el: ElementRef;

    directories: Array<TreeView>;
    files: any[];
    hasBaseDropZoneOver: boolean;
    attachmentList: any = [];
    wnw: any;
    fileObj: any;

    constructor(private _fileService: FileService, private winRef: WindowRef, ) {
        this.loadDirectories();
        this.wnw = this.winRef.nativeWindow;
        this.hasBaseDropZoneOver = false;
    }
    public fileOverBase(e: any, folderName: any): void {
        this.hasBaseDropZoneOver = e;
        this.uploader.uploadAll();
        let matchedTreeView = this.directories.filter(treeview => {
            return treeview.name === folderName;
        })
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log(typeof (response), "response");
            this.fileObj = this.uploader.queue[this.uploader.queue.length - 1];
            alert("uploaded   " + this.fileObj.some.name + "   file");
            matchedTreeView[0].files.push(JSON.parse(response));
            this.el.nativeElement.style.backgroundColor = 'transparent';
            if (this.fileObj.file.type == "") {
                this.getMsgDetails(this.fileObj);
            }
        }
        this.uploader.onSuccessItem = (item: any, response: any, status: any, headers: any) => {

        }
        // matchedTreeView[0].files.push(this.uploader.queue[0].file.name);

    }
    download(receiveFile) {
        console.log(receiveFile, "index");
        var downloadingFile = receiveFile.originalname;
        var filename = receiveFile.uploadname;
        alert("downloading  " + downloadingFile + "  file");
        this._fileService.downloadFile(filename)
            .subscribe(
                data => saveAs(data, filename),
                error => console.error(error)
            );
    }
    loadDirectories() {
        // console.log($, "$$$$$$$$$$$$$$$$$$$$$$$$$");
        //  console.log($("#myModal2").width());
        const submission = new TreeView('Submission', [], []);
        const pricing = new TreeView('Pricing', [], []);
        const contractDocs = new TreeView('Contract Docs', [], []);
        const correspondence = new TreeView('Correspondence', [], []);
        const dealTracking = new TreeView('Deal tracking', [], []);
        const finalDocs = new TreeView('Final Documents', [], []);
        this.directories = [submission, pricing, contractDocs, correspondence, dealTracking, finalDocs];

        /*  this.imageRightAPI = [
             {
                 "id": 1,
                 "fileName": "node1",
                 "files": [
                     {
                         "id": 11,
                         "fileName": "node1.1",
                         "files": [
                             {
                                 "id": 110,
                                 "fileName": "node1.1.1",
                                 "files": []
                             }
                         ]
                     }
                 ]
             }
         ]; */
    }
    isSupportedFileAPI() {
        return this.wnw.File && this.wnw.FileReader && this.wnw.FileList && this.wnw.Blob;
    }
    formatEmail(data) {
        return data.name ? data.name + " [" + data.email + "]" : data.email;
    }
    parseHeaders(headers) {
        var parsedHeaders = {};
        if (!headers) {
            return parsedHeaders;
        }
        var m;
        var headerRegEx = /(.*)\: (.*)/g;
        while (m = headerRegEx.exec(headers)) {
            // todo: Pay attention! Header can be presented many times (e.g. Received). Handle it, if needed!
            parsedHeaders[m[1]] = m[2];
        }
        return parsedHeaders;
    }
    getMsgDate(rawHeaders) {
        // Example for the Date header
        var headers = this.parseHeaders(rawHeaders);
        if (!headers['Date']) {
            return '-';
        }
        return new Date(headers['Date']);
    }
    getMsgDetails(getFileObj) {
        if (this.isSupportedFileAPI) {
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
                console.log(e, "fil reader on load");
                let buffer = e.target.result;
                let msgReader = new MSGReader(buffer);
                let fileData = msgReader.getFileData();
                if (!fileData.error) {
                    let sendername = fileData.senderName;
                    let sendermail = fileData.senderEmail;
                    let reCipients = fileData.recipients.map((recipient) => {
                        return this.formatEmail(recipient);
                    });
                    let msgDate = this.getMsgDate(fileData.headers);
                    let subject = fileData.subject;
                    let msgBody = fileData.body ? fileData.body.substring(0, Math.min(500, fileData.body.length))
                        + (fileData.body.length > 500 ? '...' : '') : '';
                    let attchMent;
                    fileData.attachment ?
                        (attchMent = fileData.attachment.fileName + ' [' + fileData.attachment.contentLength + 'bytes]' +
                            (fileData.attachment.pidContentId ? '; ID = ' + fileData.attachment.pidContentId : '')) : attchMent = "No attachement";
                    this.msgObjDetails = {
                        sendername,
                        sendermail,
                        reCipients,
                        msgDate,
                        subject,
                        msgBody
                    }

                    alert(JSON.stringify(this.msgObjDetails, null, 4));
                }
            }
            fileReader.readAsArrayBuffer(getFileObj.file.rawFile);
        }
    }
}