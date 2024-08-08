import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private jsonURL = '../../../assets/data/posts.json';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonURL).pipe(
      map(posts => posts.sort((a, b) => this.parseDate(b.dataPublish) - this.parseDate(a.dataPublish)))
    );
  }

  private parseDate(dateString: string): number {
    const [day, month, year] = dateString.split('/').map(part => parseInt(part, 10));
    return new Date(year, month - 1, day).getTime();
  }
}
