import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit, OnChanges {
  @Input() issue: Issue;

  @Output() save: EventEmitter<Issue> = new EventEmitter<Issue>();

  public issueForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      id: [ this.issue?.id ],
      title: [ this.issue?.title, [ Validators.required ]],
      description: this.issue?.description,
      place: [ this.issue?.place, [ Validators.required, Validators.pattern(/^PC\d+$/) ]],
      status: [ this.issue?.status, [ Validators.required ]],
    });
  }

  public ngOnChanges(): void {
    this.issueForm = this.formBuilder.group({
      id: [ this.issue?.id ],
      title: [ this.issue?.title, [ Validators.required ]],
      description: this.issue?.description,
      place: [ this.issue?.place, [ Validators.required, Validators.pattern(/^PC\d+$/) ]],
      status: [ this.issue?.status, [ Validators.required ]],
    });
  }

  public onSave(e: any): void {
    this.save.emit(this.issueForm.value);
  }

  public isInvalidAndTouchedOrDirty(name: string): boolean {
    return !this.issueForm.get(name)?.valid && (this.issueForm.get(name)?.touched || this.issueForm.get(name)?.dirty);
  }
}
