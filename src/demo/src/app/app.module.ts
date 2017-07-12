import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule, MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocialShareModule, DefaultSocialShareComponent } from 'material-social-share';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MdIconModule,
    MdButtonModule,
    SocialShareModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [DefaultSocialShareComponent]
})
export class AppModule { }
