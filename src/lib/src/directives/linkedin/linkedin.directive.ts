import { DefaultShareInfoService } from './../../default-share-info.service';
import { BaseSocial } from './../base-social';
import { Title } from '@angular/platform-browser';
import {
  Directive, Input, ElementRef, Renderer2, HostListener
} from '@angular/core';

@Directive({
  selector: '[mdxLinkedin]'
})
export class LinkedinDirective extends BaseSocial {

  @Input() hoverColor = '#0077b5';

  constructor(dsi: DefaultShareInfoService,
    elemRef: ElementRef,
    render: Renderer2) {
    super(dsi, elemRef, render);
  }

  @HostListener('click') share() {
    let [title, url, summary, img] = this.shareContent();
    let to = `http://www.linkedin.com/shareArticle?mini=true&ro=true${this.searchJoin('title', title)}&url=${url}`;
    window.open(to, undefined, undefined, false);
  }
}