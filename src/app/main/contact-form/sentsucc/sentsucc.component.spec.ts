import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentsuccComponent } from './sentsucc.component';

describe('SentsuccComponent', () => {
  let component: SentsuccComponent;
  let fixture: ComponentFixture<SentsuccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentsuccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentsuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
