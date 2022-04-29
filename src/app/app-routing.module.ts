import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueNewComponent } from './components/issue-new/issue-new.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "issues",
    component: IssueListComponent,
  },
  {
    path: "issues/new",
    component: IssueNewComponent,
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
