import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/app/issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {
  @Input() issue: Issue;

  constructor() { }

  ngOnInit(): void {
  }

}
