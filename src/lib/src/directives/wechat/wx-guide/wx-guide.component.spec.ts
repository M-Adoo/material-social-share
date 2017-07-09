import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxGuideComponent } from './wx-guide.component';

describe('WxGuideComponent', () => {
  let component: WxGuideComponent;
  let fixture: ComponentFixture<WxGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
