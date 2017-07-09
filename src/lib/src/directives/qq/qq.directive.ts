import { BaseSocial } from './../base-social';
import { Title } from '@angular/platform-browser';
import {
  Directive, ElementRef, Renderer2,
  Input, HostListener
} from '@angular/core';
import { DefaultShareInfoService } from './../../default-share-info.service';

@Directive({
  selector: '[mdxQQ]',
  exportAs: 'mdxWeibo'
})
export class QQDirective extends BaseSocial {

  @Input() hoverColor = '#2b82d9';

  constructor(dsi: DefaultShareInfoService,
    elemRef: ElementRef,
    render: Renderer2) {
    super(dsi, elemRef, render);
  }

  @HostListener('click') share() {
    let [title, url, summary, img] = this.shareContent();
    let to = `http://connect.qq.com/widget/shareqq/index.html?url=${url}${this.searchJoin('title', title)}${this.searchJoin('desc', summary)}${this.searchJoin('pics', img)}`;
    window.open(to, undefined, undefined, false);
  }
}