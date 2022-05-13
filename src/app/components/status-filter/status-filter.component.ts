import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  @Input() status: string;

  public radioGroupForm: FormGroup;

  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.radioGroupForm = this.formBuilder.group({
      status: this.status
    });
  }

  public onChange(): void {
    this.filterChanged.emit(this.radioGroupForm.get('status')?.value);
  }
}
