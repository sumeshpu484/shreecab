import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabRegComponent } from './cab-reg.component';

describe('CabRegComponent', () => {
  let component: CabRegComponent;
  let fixture: ComponentFixture<CabRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
