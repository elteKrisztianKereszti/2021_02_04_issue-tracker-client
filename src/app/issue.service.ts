import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private url = 'http://127.0.0.10/api/issues';

  constructor(private httpClient: HttpClient) {

  }

  // deprecated solution
  public getAllWithPromise(): Promise<Issue[]> {
    return this.httpClient.get<Issue[]>(this.url).toPromise();
  }

  public getAll(): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(this.url);
  }

  public get(id: number): Observable<Issue> {
    return this.httpClient.get<Issue>(`${this.url}/${id}`);
  }

  public update(id: number, modifiedIssue: Issue): Observable<Issue> {
    return this.httpClient.put<Issue>(`${this.url}/${id}`, modifiedIssue);
  }

  public add(newIssue: Issue): Observable<Issue> {
    return this.httpClient.post<Issue>(this.url, newIssue);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
