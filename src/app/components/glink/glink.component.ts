import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-glink',
  templateUrl: './glink.component.html',
  styleUrls: ['./glink.component.css']
})
export class GlinkComponent implements OnInit {
  @Input() query: string = 'apple';

  @Output() prevented: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(event:any) {
    if (this.query.length < 2) {
      event.preventDefault();
      this.prevented.emit('Cannot navigate!');
      //
    }
  }
}
