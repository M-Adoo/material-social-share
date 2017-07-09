import { BaseSocial } from './../base-social';
import { Title } from '@angular/platform-browser';
import {
  Directive, Input, ElementRef, Renderer2, HostListener
} from '@angular/core';
import { DefaultShareInfoService } from './../../default-share-info.service';


@Directive({
  selector: '[mdxGplus]'
})
export class GplusDirective extends BaseSocial {

  @Input() hoverColor = '#d0422a';

  constructor(dsi: DefaultShareInfoService,
    elemRef: ElementRef,
    render: Renderer2) {
    super(dsi, elemRef, render);
  }

  @HostListener('click') share() {
    let [title, url, summary, img] = this.shareContent();
    let to = `https://plus.google.com/share?url=${url}`;
    window.open(to, undefined, undefined, false);
  }
}