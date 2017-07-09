import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { WechatTipsComponent } from './wechat-tips/wechat-tips.component';
import { QRCodeModule } from 'angular2-qrcode';
import { CopyComponent } from './copy/copy.component';
import { ClipboardModule } from 'ngx-clipboard';
import { IframeCopyComponent } from './iframe-copy/iframe-copy.component'

@NgModule({
  imports: [
    CommonModule,
    QRCodeModule,
    MdButtonModule,
    MdInputModule,
    ClipboardModule,
  ],
  declarations: [WechatTipsComponent, CopyComponent, IframeCopyComponent],
  exports: [WechatTipsComponent, CopyComponent, IframeCopyComponent]
})
export class TipsModule { }
