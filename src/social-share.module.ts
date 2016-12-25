import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialShareComponent, SocialLabel } from './social-share.component';
import { MdIconModule } from '@angular/material/icon';
import { ShareButtonComponent } from './share-button/share-button.component'

@NgModule({
  imports: [
    CommonModule,
    MdIconModule.forRoot(),
  ],
  exports: [
    SocialShareComponent,
    ShareButtonComponent,
    SocialLabel,
  ],
  declarations: [SocialShareComponent, ShareButtonComponent, SocialLabel],
})
export class SocialShareModule { }
