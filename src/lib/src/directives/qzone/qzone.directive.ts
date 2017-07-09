import { DefaultShareInfoService } from './../../default-share-info.service';
import { Title } from '@angular/platform-browser';
import { BaseSocial } from './../base-social';
import {
  Directive, ElementRef, Renderer2,
  Input, HostListener
} from '@angular/core';

@Directive({
  selector: '[mdxQzone]'
})
export class QzoneDirective extends BaseSocial {

  @Input() hoverColor = '#ecb934';

  constructor(dsi: DefaultShareInfoService,
    elemRef: ElementRef,
    render: Renderer2) {
    super(dsi, elemRef, render);
  }

  @HostListener('click') share() {
    let [title, url, summary, img] = this.shareContent();
    let to = `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&${summary ? `&desc=${summary}` : ''}${img ? `&pics=${img}` : ''}`
    window.open(to, undefined, undefined, false);
  }
}