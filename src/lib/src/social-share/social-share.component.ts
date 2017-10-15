import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { DefaultShareInfoService } from './../default-share-info.service';

const _svgIcons = [
  { name: 'ss_qq', url: 'assets/social/qq.svg' },
  { name: 'ss_wechat', url: 'assets/social/wechat.svg' },
  { name: 'ss_weibo', url: 'assets/social/weibo.svg' },
  { name: 'ss_qzone', url: 'assets/social/qzone.svg' },
  { name: 'ss_douban', url: 'assets/social/douban.svg' },
  { name: 'ss_linkedin', url: 'assets/social/linkedin.svg' },
  { name: 'ss_gplus', url: 'assets/social/gplus.svg' },
  { name: 'ss_twitter', url: 'assets/social/twitter.svg' },
  { name: 'ss_facebook', url: 'assets/social/facebook.svg' },
]

@Component({
  selector: 'mdx-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.css']
})
export class DefaultSocialShareComponent implements OnInit {

  constructor(
    private _dsi: DefaultShareInfoService,
    private _fr: MatIconRegistry,
    private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    _svgIcons.forEach(v => this._fr.addSvgIcon(
      v.name, this._sanitizer.bypassSecurityTrustResourceUrl(v.url)))
  }

  @Input() get img() { return this._dsi.img; }

  set img(i) { this._dsi.img = i; }

  @Input() get title() { return this._dsi.title; }

  set title(t) { this._dsi.title = t; }

  @Input() get summary() { return this._dsi.summary; }

  set summary(s) { this._dsi.summary = s; }

  @Input() get url() { return this._dsi.url; }

  set url(u) { this._dsi.url = u; }
}
