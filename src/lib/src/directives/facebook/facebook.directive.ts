import { BaseSocial } from './../base-social';
import { Title } from '@angular/platform-browser';
import {
  Directive, Input, ElementRef, Renderer2, HostListener
} from '@angular/core';
import { DefaultShareInfoService } from './../../default-share-info.service';

@Directive({
  selector: '[mdxFacebook]'
})
export class FacebookDirective extends BaseSocial {

  @Input() hoverColor = '#3b5998';

  constructor(dsi: DefaultShareInfoService,
    elemRef: ElementRef,
    render: Renderer2) {
    super(dsi, elemRef, render);
  }

  @HostListener('click') share() {
    let [title, url, summary, img] = this.shareContent();
    let to = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(to, undefined, undefined, false);
  }

}