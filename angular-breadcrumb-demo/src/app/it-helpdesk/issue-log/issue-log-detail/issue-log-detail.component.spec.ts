import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueLogDetailComponent } from './issue-log-detail.component';

describe('IssueLogDetailComponent', () => {
  let component: IssueLogDetailComponent;
  let fixture: ComponentFixture<IssueLogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueLogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueLogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
