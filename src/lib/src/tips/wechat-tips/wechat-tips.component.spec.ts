import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechatTipsComponent } from './wechat-tips.component';

describe('WechatTipsComponent', () => {
  let component: WechatTipsComponent;
  let fixture: ComponentFixture<WechatTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechatTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechatTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
