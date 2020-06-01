import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentredContentLayoutComponent } from './centred-content-layout.component';

describe('CentredContentLayoutComponent', () => {
  let component: CentredContentLayoutComponent;
  let fixture: ComponentFixture<CentredContentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentredContentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentredContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
