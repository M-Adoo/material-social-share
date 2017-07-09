import { Title } from '@angular/platform-browser';
import {
  Directive, Input, HostListener,
  ElementRef, Renderer2
} from '@angular/core';
import { BaseSocial } from './../base-social';
import { DefaultShareInfoService } from './../../default-share-info.service';


@Directive({
  selector: '[mdxDouban]'
})
export class DoubanDirective extends BaseSocial {
  @Input() hoverColor = '#071';

  constructor(dsi: DefaultShareInfoService,
    elemRef: ElementRef,
    render: Renderer2) {
    super(dsi, elemRef, render);
  }

  @HostListener('click') share() {
    let [title, url, summary, img] = this.shareContent();
    let to = `http://shuo.douban.com/!service/share?href=${url}${this.searchJoin('name', title)}${this.searchJoin('text', summary)}${this.searchJoin("image", img)}&starid=0&aid=0&style=11`;
    window.open(to, undefined, undefined, false);
  }

}