import { Component, Input, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { ShareButtonComponent } from './share-button/share-button.component';

@Component({
  selector: 'social-share',
  template: `<div [style.color] = 'color'>
              <ng-content select='social-label'></ng-content>
              <ng-content select='share-button'></ng-content>
             </div>`,
  styles: [":host { line-height: 24px; display:block;}"],

})


export class SocialShareComponent implements AfterContentInit {
  @Input() color: string;
  @Input() hoverColor: string;
  @ContentChildren(ShareButtonComponent) btns: QueryList<ShareButtonComponent>;
  ngAfterContentInit() {
    for (let btn of this.btns.toArray()) {
       btn.parent = this;
    }
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