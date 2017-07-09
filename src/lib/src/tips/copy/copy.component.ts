import {
  Component, OnInit, Input,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';


@Component({
  selector: 'mdx-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CopyComponent implements OnInit {

  @Input() url: string = "没有设置url地址哦";
  _urlCopied = false;

  constructor() { }

  ngOnInit() {
  }

  _onUrlCopy() {
    this._urlCopied = true;
  }

  _qrCodeTip() {
    return this._isTouchDevice ? '长按上方二维码可复制或直接分享二维码' : '右键点击上方二维码，然后复制图片。'
  }

  private _isTouchDevice() {
    return !!('ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints);       // works on IE10/11 and Surface
  };
}
