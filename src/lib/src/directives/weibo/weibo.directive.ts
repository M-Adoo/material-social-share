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

  @Input() appkey: string;
  @Input() hoverColor = "#e32529";

  constructor(dst: DefaultShareInfoService,
    elemRef: ElementRef,
    render: Renderer2) {
    super(dst, elemRef, render);
  }

  @HostListener('click') share() {
    let [title, url, summary, img] = this.shareContent();
    let to = `http://service.weibo.com/share/share.php?url=${url}&title=${summary}${img ? `&pic=${img}` : ''}${this.appkey ? `&appkey=${this.appkey}` : ''}`;
    window.open(to, undefined, undefined, false);
  }
}
