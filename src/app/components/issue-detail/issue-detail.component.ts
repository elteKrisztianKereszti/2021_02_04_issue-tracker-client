import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  public issue: Issue = new Issue();

  constructor(private issueService: IssueService,
    private activatedRoute: ActivatedRoute) {
      console.log(activatedRoute);
  }

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.issue = this.issueService.getAll().filter((issue: Issue) => issue.id === id)[0];
  }
}
