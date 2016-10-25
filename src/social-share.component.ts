import { Component, OnInit, Injectable, ContentChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular2-material/icon';

@Component({
  selector: 'social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {
  constructor(iconRegister: MdIconRegistry) {
    iconRegister.setDefaultFontSetClass('socail-icon');
  }
  ngOnInit() {
  }
}

@Component({
  selector: 'social-label',
  template: '<label><ng-content></ng-content></label>',
  styles: [':host {font-size: 0.9em;margin-right: .3em;}']
})
export class SocialLabel {
  constructor() { }
}