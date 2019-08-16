import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenterrorComponent } from './senterror.component';

describe('SenterrorComponent', () => {
  let component: SenterrorComponent;
  let fixture: ComponentFixture<SenterrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenterrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
