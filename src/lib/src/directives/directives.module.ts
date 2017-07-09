import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule } from '@angular/material';
import { WeiboDirective } from './weibo/weibo.directive';
import { QQDirective } from './qq/qq.directive';
import { QzoneDirective } from './qzone/qzone.directive';
import { DoubanDirective } from './douban/douban.directive';
import { TwitterDirective } from './twitter/twitter.directive';
import { FacebookDirective } from './facebook/facebook.directive';
import { GplusDirective } from './gplus/gplus.directive';
import { LinkedinDirective } from './linkedin/linkedin.directive';
import { WechatDirective } from './wechat/wechat.directive';
import { WxGuideComponent } from './wechat/wx-guide/wx-guide.component';

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule
  ],
  declarations: [
    WeiboDirective, QQDirective,
    QzoneDirective, DoubanDirective,
    TwitterDirective,
    FacebookDirective,
    GplusDirective,
    LinkedinDirective,
    WechatDirective,
    WxGuideComponent,
  ],
  exports: [
    WeiboDirective, QQDirective,
    QzoneDirective, DoubanDirective,
    TwitterDirective, FacebookDirective,
    GplusDirective, LinkedinDirective,
    WechatDirective,
  ],
  entryComponents: [WxGuideComponent]
})
export class SocialDirectivesModule { }
