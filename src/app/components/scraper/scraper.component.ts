import { Component, OnInit } from '@angular/core';
import { ScraperApiService } from 'src/app/services/scraper-api.service';
import Swal from 'sweetalert2';
import { CrawlRequest } from './crawl-request.model';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.css']
})
export class ScraperComponent implements OnInit {
  url: string = '';
  depth: number = 0;
  crawl_again: boolean = false;
  urlResult: any = {};
  formSubmitted: boolean = false;

  constructor(private scraperService: ScraperApiService) { }

  ngOnInit() { }

  onSubmit() {
    if (!this.url) {
      this.formSubmitted = true;
      return; // Stop the function execution
    }
    // Create a CrawlRequest object with the input values
    const requestData: CrawlRequest = {
      url: this.url,
      depth: this.depth,
      crawl_again: this.crawl_again,
    };

    this.scraperService.scrapeWebsite(requestData).subscribe(
      (data) => {
        if (!data.existingUrl) {
          return;
        }

        const date = new Date(data.existingUrl.created_at);
        // Handle the response here as needed
        this.urlResult = {
          url: data.existingUrl.url,
          depth: data.existingUrl.depth,
          scrawled_at: date.toLocaleDateString('en-US'),
        };
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: error,
        });
      }
    );

    // Reset the input fields
    this.url = '';
    this.depth = 0;
    this.formSubmitted = false;
  }
}
