import { Component, OnInit, HostListener } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'mdx-wx-guide',
  templateUrl: './wx-guide.component.html',
  styleUrls: ['./wx-guide.component.css']
})
export class WxGuideComponent implements OnInit {

  constructor(private _ref: MdDialogRef<WxGuideComponent>) { }

  ngOnInit() {
  }

  @HostListener('click') close() {
    this._ref.close();
  }
}
