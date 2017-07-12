import { DefaultSocialShareComponent } from 'material-social-share';
import { MdDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _dlg: MdDialog) {

  }

  share() {
    this._dlg.open(DefaultSocialShareComponent, { panelClass: 'xs-full-dlg' });
  }
}
