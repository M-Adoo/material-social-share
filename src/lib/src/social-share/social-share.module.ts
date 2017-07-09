import { DefaultShareInfoService } from './../default-share-info.service';
import {
  MdIconModule, MdExpansionModule,
  MdButtonModule, MdListModule, MdExpansionPanel
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
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdExpansionModule,
    SocialDirectivesModule,
    TipsModule
  ],
  providers: [DefaultShareInfoService],
  declarations: [DefaultSocialShareComponent],
  exports: [DefaultSocialShareComponent]
})
export class SocialShareModule { }
