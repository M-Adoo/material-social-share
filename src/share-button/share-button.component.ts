import { Component, OnInit, Input, HostListener } from '@angular/core';
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

  constructor() { }

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


  private _colorHolder: string;
  @HostListener('mouseenter') onMouseEnter() {
    let color = this.hoverColor;
    this._colorHolder = color ? color : this.info.hoverColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._colorHolder = this.color;
  }

  private _url: string;
  @Input() get url() {
    return this._url ? this._url : this.parent.url;
  }

  set url(url: string) {
    this._url = url;
  }

  private _color: string;
  @Input() set color(c: string) {
    this._color = c;
  }

  get color() {
    return this._color ? this._color : this.parent.color;
  }

  private _hoverColor: string;
  @Input() set hoverColor(c: string) {
    this._hoverColor = c;
  }
  get hoverColor() {
    return this._hoverColor ? this._hoverColor : this.parent.hoverColor;
  }
  
  private _title: string;
  @Input() get title() {
    return this._title ? this._title : this.parent.title;
  }
  set title(t: string) {
    this._title = t;
  }

  private _summary: string;
  @Input() get summary() { 
    return this._summary ? this._summary : this.parent.summary;
  }
  set summary(s: string) {
    this._summary = s;
  }

  private _img: string;
  @Input() get img() {
    return this._img ? this._img : this.parent.summary;
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

  parent: SocialShareComponent;
  private info: SocialService.SocialInfo;
}
