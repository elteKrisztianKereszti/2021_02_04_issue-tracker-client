import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  public issues: Array<Issue> = [];

  constructor(private issueService: IssueService) {
    this.issues = issueService.getAll();
  }

  ngOnInit(): void {
  }

}
