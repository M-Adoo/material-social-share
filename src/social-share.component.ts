import { Component, OnInit, Injectable, ContentChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular2-material/icon';

@Component({
  selector: 'social-share',
  template: `<ng-content select='social-label'></ng-content>
                <ng-content select='share-button'></ng-content>`,
  styles: ["@import '/node_modules/social-icon/css/socail-icon.css';:host { line-height: 24px;}"]
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