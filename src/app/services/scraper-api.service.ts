import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from './alert-service.service';
import { CrawlRequest } from '../components/scraper/crawl-request.model';

@Injectable({
  providedIn: 'root',
})
export class ScraperApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/crawl';

  constructor(private alertService: AlertService) { }

  scrapeWebsite(requestData: CrawlRequest): Observable<any> {
    this.alertService.showLoading('Crawling...');

    const headers = {
      'Content-Type': 'application/json',
    };

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData),
    };

    return new Observable((observer) => {
      fetch(this.apiUrl, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Call response.json() once to parse the response body
          return response.json();
        })
        .then((data) => {
          if (data.errors) {
            this.alertService.showError(`${Object.keys(data.errors)[0]} is required!`);
          } else if (data.existingUrl) {
            this.alertService.showSuccess('URL has been crawled already');
          } else {
            this.alertService.showSuccess('Crawled and saved successfully!');
          }
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          this.alertService.showError('Oops... Something went wrong!');
          observer.error(error);
        });
    });

  }
}
