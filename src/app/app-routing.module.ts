import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssueFormComponent } from './components/issue-form/issue-form.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/issues",
    pathMatch: "full",
  },
  {
    path: "issues",
    component: IssueListComponent,
  },
  {
    path: "issues/new",
    component: IssueFormComponent,
  },
  {
    path: "issues/:id",
    component: IssueDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
