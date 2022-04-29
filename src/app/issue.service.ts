import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issues: Array<Issue> = [
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

  public getAll(): Issue[] {
    return this.issues;
  }
}