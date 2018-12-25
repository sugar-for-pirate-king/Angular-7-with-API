import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustFormComponent } from './cust-form.component';

describe('CustFormComponent', () => {
  let component: CustFormComponent;
  let fixture: ComponentFixture<CustFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
