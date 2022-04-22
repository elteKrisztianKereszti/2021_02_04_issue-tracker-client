import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  public issues: Array<Issue> = [
    {
      id : 1,
      title: 'Bad Machine',
      description: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam egetrisus varius blandit.',
      place: 'PC1',
      status: 'NEW'
    },
    {
      id : 2,
      title: 'Bad Mosue',
      description: 'Mickey Mouse destoyed the mouse',
      place: 'PC2',
      status: 'DOING'
    },
    {
      id : 3,
      title: 'Jim Raynor cannot play',
      description: 'Jim Raynor cannot start the starcraft on 386 arch pc',
      place: 'PC42',
      status: 'NEW'
    },
    {
      id : 4,
      title: 'No power',
      description: 'Summon more Pylon',
      place: 'PC66',
      status: 'DONE'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
