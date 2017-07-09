import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSocialShareComponent } from './default-social-share.component';

describe('DefaultSocialShareComponent', () => {
  let component: DefaultSocialShareComponent;
  let fixture: ComponentFixture<DefaultSocialShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultSocialShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSocialShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
