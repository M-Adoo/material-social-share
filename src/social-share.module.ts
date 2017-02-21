import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule } from '@angular/material/icon';
import { MdDialogModule } from '@angular/material/dialog';
import { SocialShareComponent, SocialLabel } from './social-share.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import { QrCodeButton, QrcodeDialog } from './qrcode/qrcode.component';
import { QrcodeModule } from '../../qrcode';


@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    QrcodeModule,
    MdDialogModule
  ],
  exports: [
    SocialShareComponent,
    ShareButtonComponent,
    QrCodeButton,
    SocialLabel,
    QrcodeDialog
  ],
  entryComponents: [QrcodeDialog],
  declarations: [SocialShareComponent, ShareButtonComponent,
    SocialLabel, QrCodeButton, QrcodeDialog]
})
export class SocialShareModule { }
