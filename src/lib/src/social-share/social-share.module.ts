import { DefaultShareInfoService } from './../default-share-info.service';
import {
  MatIconModule, MatExpansionModule,
  MatButtonModule, MatListModule, MatExpansionPanel
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSocialShareComponent } from './social-share.component';
import { SocialDirectivesModule } from '../directives/index'
import { TipsModule } from '../tips/index'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    SocialDirectivesModule,
    TipsModule
  ],
  providers: [DefaultShareInfoService],
  declarations: [DefaultSocialShareComponent],
  exports: [DefaultSocialShareComponent]
})
export class SocialShareModule { }
