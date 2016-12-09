import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as SocialService from '../social-share.service';
import { SocialShareComponent } from '../social-share.component';

@Component({
  selector: 'share-button',
  template: `<md-icon fontSet='socail-icon' (click)= 'share()' [fontIcon]="info.icon" [style.color] = "_colorHolder"></md-icon>`,
  styles: [`md-icon {  cursor: pointer; } 
            md-icon:hover {font-size: 1.05em;
              transform: translate(-0.02em, -0.02em);
              text-shadow: .05em .05em #ddd;} `],
})
export class ShareButtonComponent implements OnInit {

  constructor(private defaultTitle: Title) { }

  ngOnInit() {
  }

  share() {
    if (!this.info) {
      console.log('unsopported socail service, assign social withe supported service!');
      return;
    }

    let target_url = this.info.linkTo(this.title, this.url, this.summary, this.img, this.origin, this.key);
    window.open(target_url, null, null, false);
  }


  @HostListener('mouseenter') onMouseEnter() {
    let color = this.hoverColor;
    if (!color && this.parent) { color = this.parent.hoverColor; }
    if (!color) { color = this.info.hoverColor; }
    this._colorHolder = color;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._colorHolder = this.color;
  }

  private _url: string;
  @Input() get url() {
    return this._url ? this._url : window.location.href;
  }

  set url(url: string) {
    this._url = url;
  }

  private _colorHolder: string;
  @Input() color: string;
  @Input() hoverColor: string;

  parent: SocialShareComponent;

  private info: SocialService.SocialInfo;
  private _title: string;
  @Input() get title() {
    return this._title ? this._title : this.defaultTitle.getTitle();
  }
  set title(t: string) {
    this._title = t;
  }

  private _summary: string;
  @Input() get summary() {
    //todo: if _summary is empty get default summary from head meta. 
    return this._summary;
  }
  set summary(s: string) {
    this._summary = s;
  }

  private _img: string;
  @Input() get img() {
    // todo: get the first img from current webpage.
    return this._img;
  }
  set img(img: string) {
    this._img = img;
  }

  @Input() origin: string;
  @Input() key: string;
  _social: SocialService.SSS;
  @Input() get social() {
    return this._social;
  }
  set social(s: SocialService.SSS) {
    this._social = s;
    this.info = SocialService.QuerySocialService(s);
    if (!this.info) {
      console.log(`${this.social} is unsupported social service.`)
    }
  }
}
