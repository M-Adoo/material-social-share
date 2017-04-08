import { Component, Input } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material'
import { ShareButtonBase } from '../share-button-base';

@Component({
    selector: 'qrcode-dlg',
    template: `
    <h1 md-dialog-title>扫码分享</h1>
    <qsj-qrcode [value]="url" level='Q' cellSize= 4></qsj-qrcode>
    `
})
export class QrcodeDialog {

    constructor() {
    }

    @Input() url: string;

    ngOnInit() { }
}


@Component({
    selector: 'qrcode-button',
    template: `<md-icon fontSet='socail-icon' (click)= 'share()' [fontIcon]="info.icon" [style.color] = "_colorHolder"></md-icon>`,
})
export class QrCodeButton extends ShareButtonBase {

    constructor(private _dg: MdDialog) {
        super();
    }

    ngOnInit() { }

    share() {
        let ref = this._dg.open(QrcodeDialog);
        ref.componentInstance.url = this.url;
    }
}
