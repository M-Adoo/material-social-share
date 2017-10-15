import { DefaultSocialShareComponent } from 'material-social-share';
import { MatDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _dlg: MatDialog) {

  }

  share() {
    let ref = this._dlg.open(DefaultSocialShareComponent, { panelClass: 'xs-full-dlg' });
    ref.componentInstance.summary = "Best wish for you!";
  }
}
