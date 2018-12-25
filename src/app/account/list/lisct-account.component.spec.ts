import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisctAccountComponent } from './lisct-account.component';

describe('LisctAccountComponent', () => {
  let component: LisctAccountComponent;
  let fixture: ComponentFixture<LisctAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisctAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisctAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
