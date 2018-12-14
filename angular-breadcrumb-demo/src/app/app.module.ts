import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ItHelpdeskComponent } from './dashboard/it-helpdesk/it-helpdesk.component';
import { AppRoutingModule } from './app-routing.module';
import { IssueLogDetailComponent } from './it-helpdesk/issue-log/issue-log-detail/issue-log-detail.component';
import { IssueLogListComponent } from './it-helpdesk/issue-log/issue-log-list/issue-log-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    DashboardComponent,
    ItHelpdeskComponent,
    IssueLogDetailComponent,
    IssueLogListComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
