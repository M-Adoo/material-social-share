import { Component } from '@angular/core';
import { ShareButtonBase } from '../share-button-base';

@Component({
  selector: 'share-button',
  template: `<md-icon fontSet='socail-icon' (click)= 'share()' [fontIcon]="info.icon" [style.color] = "_colorHolder"></md-icon>`,
})
export class ShareButtonComponent extends ShareButtonBase {

  constructor() {
    super();
  }

  ngOnInit() { }

  share() {
    if (!this.info) {
      console.log('unsopported socail service, assign social withe supported service!');
      return;
    }

    let target_url = this.info.linkTo(this.title, this.url, this.summary, this.img, this.origin, this.key);
    window.open(target_url, undefined, undefined, false);
  }
}
