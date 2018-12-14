import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ItHelpdeskComponent } from './dashboard/it-helpdesk/it-helpdesk.component';
import { IssueLogListComponent } from './it-helpdesk/issue-log/issue-log-list/issue-log-list.component';
import { IssueLogDetailComponent } from './it-helpdesk/issue-log/issue-log-detail/issue-log-detail.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    }, {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            breadcrumb: 'Dashboard',
        },
        children: [
            {
                path: 'it-helpdesk',
                component: ItHelpdeskComponent,
                data: {
                    breadcrumb: 'IT Helpdesk'
                },
                children: [
                    {
                        path: 'issue-log',
                        data: {
                            breadcrumb: 'Issue Log'
                        },
                        children: [
                            {
                                path: '',
                                component: IssueLogListComponent
                            },
                            {
                                path: 'new',
                                component: IssueLogDetailComponent,
                                data: {
                                    breadcrumb: 'New'
                                }
                            },
                            {
                                path: ':id',
                                component: IssueLogDetailComponent,
                                data: {
                                    breadcrumb: ''
                                }
                            }
                        ]
                    },
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
