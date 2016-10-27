import { Component} from '@angular/core';

@Component({
  selector: 'social-share',
  template: `<ng-content select='social-label'></ng-content>
                <ng-content select='share-button'></ng-content>`,
  styles: [":host { line-height: 24px;}"],

})
export class SocialShareComponent{
}

@Component({
  selector: 'social-label',
  template: '<label><ng-content></ng-content></label>',
  styles: [':host {font-size: 0.9em;margin-right: .3em;}']
})
export class SocialLabel {
  constructor() { }
}