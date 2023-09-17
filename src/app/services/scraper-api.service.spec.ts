import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScraperApiService {
  private apiUrl = 'http://127.0.0.1:8001/api/test'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  scrapeWebsite(url: string, depth: number): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
