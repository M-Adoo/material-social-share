import { Title } from '@angular/platform-browser';
import { BaseSocial } from './../base-social';
import {
  Directive, Input, HostListener,
  ElementRef, Renderer2
} from '@angular/core';
import { DefaultShareInfoService } from './../../default-share-info.service';

@Directive({
  selector: '[mdxTwitter]'
})
export class TwitterDirective extends BaseSocial {

  @Input() hoverColor = '#1da1f3';
  @Input() at: string;
  constructor(dsi: DefaultShareInfoService,
    elemRef: ElementRef,
    render: Renderer2) {
    super(dsi, elemRef, render);
  }

  @HostListener('click') share() {
    let [title, url, summary, img] = this.shareContent();
    let to = `https://twitter.com/intent/tweet?url=${url}${this.searchJoin('text', summary)}${this.searchJoin('via', this.at)}`;
    window.open(to, undefined, undefined, false);
  }

}