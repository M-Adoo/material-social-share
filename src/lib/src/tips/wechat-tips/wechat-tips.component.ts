import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mdx-wechat-tips',
  templateUrl: './wechat-tips.component.html',
  styleUrls: ['./wechat-tips.component.css']
})
export class WechatTipsComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
