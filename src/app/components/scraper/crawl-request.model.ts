// crawl-request.model.ts

export interface CrawlRequest {
    url: string;
    depth: number;
    crawl_again: boolean;
  }
  