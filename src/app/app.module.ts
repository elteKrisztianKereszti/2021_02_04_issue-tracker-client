import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssueFormComponent } from './components/issue-form/issue-form.component';
import { IndexComponent } from './components/index/index.component';
import { GlinkComponent } from './components/glink/glink.component';
import { StatusFilterComponent } from './components/status-filter/status-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    IssueListComponent,
    IssueDetailComponent,
    IssueFormComponent,
    IndexComponent,
    GlinkComponent,
    StatusFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
