import { MdDialog } from '@angular/material';
import { BaseSocial } from './../base-social';
import { WxGuideComponent } from './wx-guide/wx-guide.component';
import { DefaultShareInfoService } from './../../default-share-info.service';
import {
  Component, Directive, Input,
  HostListener, ElementRef, Renderer2
} from '@angular/core';

@Directive({
  selector: '[mdxWechat]',
  exportAs: 'mdxWechat'
})
export class WechatDirective extends BaseSocial {

  @Input() hoverColor = '#609700';
  @Input() at: string;
  constructor(dsi: DefaultShareInfoService,
    elemRef: ElementRef,
    private _dlg: MdDialog,
    render: Renderer2) {
    super(dsi, elemRef, render);
  }

  @HostListener('click', ['$event']) share(event: MouseEvent) {
    if (this.inWechatBrowser()) {
      event.stopPropagation();
      this._dlg.open(WxGuideComponent, { panelClass: 'wx-guide-dialog' });
    }
  }

  inWechatBrowser() {
    return (/MicroMessenger/i).test(window.navigator.userAgent);
  }

}


