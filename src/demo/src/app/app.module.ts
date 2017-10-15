import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';
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
    MatIconModule,
    MatButtonModule,
    SocialShareModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [DefaultSocialShareComponent]
})
export class AppModule { }
