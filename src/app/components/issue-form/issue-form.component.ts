import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit, OnChanges {
  @Input() issue: Issue;

  public issueForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    console.log('init');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.issueForm = this.formBuilder.group({
      title: [ this.issue.title, [ Validators.required ]],
      description: this.issue.description,
      place: [ this.issue.place, [ Validators.required, Validators.pattern(/^PC\d+$/) ]],
      status: [ this.issue.status, [ Validators.required ]],
    });
  }

  public onSave(e: any) {
    console.log(this.issueForm);
  }

  public isInvalidAndTouchedOrDirty(name: string) {
    return !this.issueForm.get(name)?.valid && (this.issueForm.get(name)?.touched || this.issueForm.get(name)?.dirty)
  }
}
