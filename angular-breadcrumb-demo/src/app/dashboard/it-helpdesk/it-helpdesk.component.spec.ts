import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItHelpdeskComponent } from './it-helpdesk.component';

describe('ItHelpdeskComponent', () => {
  let component: ItHelpdeskComponent;
  let fixture: ComponentFixture<ItHelpdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItHelpdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
