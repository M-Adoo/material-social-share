import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeCopyComponent } from './iframe-copy.component';

describe('IframeCopyComponent', () => {
  let component: IframeCopyComponent;
  let fixture: ComponentFixture<IframeCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
