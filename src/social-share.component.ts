import { Component, Input, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { ShareButtonComponent } from './share-button/share-button.component';
import { QrCodeButton } from './qrcode/qrcode.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'social-share',
  template: `<div [style.color] = 'color'>
              <ng-content select='social-label'></ng-content>
              <ng-content select='share-button, qrcode-button'></ng-content>
             </div>`,
  styleUrls: ['./social-share.component.scss']
})


export class SocialShareComponent implements AfterContentInit {

  constructor(private defaultTitle: Title) { };

  @ContentChildren(ShareButtonComponent) private btns: QueryList<ShareButtonComponent>;
  @ContentChildren(QrCodeButton) private btns2: QueryList<QrCodeButton>;

  ngAfterContentInit() {
    for (let btn of this.btns.toArray()) {
      btn.parent = this;
    }
    for (let btn of this.btns2.toArray()) {
      btn.parent = this;
    }
  }

  @Input() color: string;
  @Input() hoverColor: string;

  private _title: string;

  @Input() set title(t: string) {
    this._title = t;
  }

  get title() {
    return this._title ? this._title : this.defaultTitle.getTitle();
  }

  private _summary: string;

  @Input() set summary(s: string) {
    this._summary = s;
  }

  get summary() {
    //todo: if _summary is empty get default summary from head meta.
    return this._summary;
  }

  private _img: string;
  @Input() get img() {
    // todo: get the first img from current webpage.
    return this._img;
  }
  set img(i: string) {
    this._img = i
  }

  private _url: string;

  @Input() get url() {
    return this._url ? this._url : window.location.href;
  }

  set url(url: string) {
    this._url = url;
  }

}

@Component({
  selector: 'social-label',
  template: '<label><ng-content></ng-content></label>',
  styles: [':host {font-size: 0.9em;margin-right: .3em;}']
})
export class SocialLabel {
  constructor() { }
}