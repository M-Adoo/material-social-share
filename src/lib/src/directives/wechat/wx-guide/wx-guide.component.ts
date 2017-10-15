import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'mdx-wx-guide',
  templateUrl: './wx-guide.component.html',
  styleUrls: ['./wx-guide.component.css']
})
export class WxGuideComponent implements OnInit {

  constructor(private _ref: MatDialogRef<WxGuideComponent>) { }

  ngOnInit() {
  }

  @HostListener('click') close() {
    this._ref.close();
  }
}
