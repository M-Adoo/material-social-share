import {
  Directive, ElementRef, Renderer2,
  HostListener, Input
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BaseSocial } from '../base-social';
import { DefaultShareInfoService } from './../../default-share-info.service';

@Directive({
  selector: '[mdxWeibo]',
  exportAs: 'mdxWeibo'
})
export class WeiboDirective extends BaseSocial {

  @Input() appkey: string = "3293353154";
  @Input() hoverColor = "#e32529";

  constructor(dst: DefaultShareInfoService,
    elemRef: ElementRef,
    render: Renderer2) {
    super(dst, elemRef, render);
  }

  @HostListener('click') share() {
    let [title, url, summary, img] = this.shareContent();
    let to = `http://service.weibo.com/share/share.php?title=${summary}%20${url}${this.searchJoin('pic', img)}${this.searchJoin('appkey', this.appkey)}`;
    window.open(to, undefined, undefined, false);
  }
}