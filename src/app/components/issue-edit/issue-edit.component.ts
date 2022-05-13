import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent {
  public issue: Issue;

  constructor(private issueService: IssueService, private activatedRoute: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.issue = this.issueService.get(id) as Issue;
  }

  public onSave(issue: Issue): void {
    this.issueService.update(issue.id, issue);
    this.router.navigate(['/issues']);
  }
}
