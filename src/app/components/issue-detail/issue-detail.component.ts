import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  public issue: Issue;

  constructor(private issueService: IssueService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  public ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.issue = this.issueService.get(id) as Issue;
  }

  public onDeleteClick() {
    this.issueService.delete(this.issue.id);
    this.router.navigate(['/issues']);
  }
}
