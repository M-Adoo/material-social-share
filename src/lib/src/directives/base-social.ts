import { DefaultShareInfoService } from './../default-share-info.service';
import {
  Directive, Input, HostListener,
  Renderer2, ElementRef, AfterViewInit
} from '@angular/core';

export class BaseSocial {

  @Input() img: string;
  @Input() title: string;
  @Input() summary: string;
  @Input() url: string;
  @Input() color: string;
  @Input() hoverColor: string;

  constructor(protected _dsi: DefaultShareInfoService,
    protected _elemRef: ElementRef,
    protected _render: Renderer2) { }


  ngAfterViewInit() {
    this._render.setStyle(this._elemRef.nativeElement, 'color', this.color || 'currentColor');
    this._render.setStyle(this._elemRef.nativeElement, 'transition', 'color 0.2s linear');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._render.setStyle(this._elemRef.nativeElement, 'color', this.hoverColor || 'currentColor');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._render.setStyle(this._elemRef.nativeElement, 'color', this.color || 'currentColor');
  }

  shareContent() {
    let title = encodeURIComponent(this.title || this._dsi.title);
    let url = encodeURIComponent(this.url || window.location.href);
    let summary = encodeURIComponent(`[${title}]${this.summary || this._dsi.summary}`);
    let img = encodeURIComponent(this.img || this._dsi.img);
    return [title, url, summary, img];
  }

  searchJoin(key: string, value: string) {
    return value ? `&${key}=${value}` : '';
  }

}
