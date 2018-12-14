import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueLogListComponent } from './issue-log-list.component';

describe('IssueLogListComponent', () => {
  let component: IssueLogListComponent;
  let fixture: ComponentFixture<IssueLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
