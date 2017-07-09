import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mdx-iframe-copy',
  templateUrl: './iframe-copy.component.html',
  styleUrls: ['./iframe-copy.component.css']
})
export class IframeCopyComponent implements OnInit {

  @Input() url: string = "https://www.union-earth.com/pano/59641fdc4a2d7d092ad6c074";
  _urlCopied = false;

  constructor() { }

  ngOnInit() {
  }

  _onUrlCopy() {
    this._urlCopied = true;
  }

  _iframeCode() {
    return `<iframe width="100%" height="100%"
      src="${this.url}"
      frameborder=0 'allowfullscreen'>
        <p>Your browser does not support iframes.</p>
 </iframe>`
  }
}
