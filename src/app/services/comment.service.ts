// src/app/services/comment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommentsService {
  private baseUrl = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getOne(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  reply(id: string, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, body);
  }

  rate(id: string, body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/rate`, body);
  }
}
