import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as SocialService from '../social-share.service';

@Component({
  selector: 'share-button',
  template: `<md-icon fontSet='socail-icon' (click)= 'share()' [fontIcon]="info.icon"></md-icon>`,
  styles: [`md-icon {  cursor: pointer; } 
            md-icon:hover {font-size: 1.05em;
              transform: translate(-0.1em, -0.1em);
              text-shadow: .1em .1em #666;} `],
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
    let url = window.location.href;
    let target_url = this.info.linkTo(this.title, url, this.summary, this.img, this.origin, this.key);
    window.open(target_url, null, null, false);
  }

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
