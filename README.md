 #Web Crawler Application

This is a simple Angular application that allows users to crawl websites by providing a URL and depth. The application also has an optional feature that allows users to rerun the crawler for the same URL.

## Getting Started

To run this application locally, you need to have Node.js and npm (Node Package Manager) installed on your system. If you don't have them, you can download and install them from [Node.js official website](https://nodejs.org/).

### Prerequisites

Before running the application, you need to install the required dependencies. Open a terminal/command prompt, navigate to the project's root directory, and run the following command:

```bash
npm install

# Web Crawler Application

This is a simple Angular application that allows users to crawl websites by providing a URL and depth. The application also has an optional feature that allows users to rerun the crawler for the same URL.

## Getting Started

To run this application locally, you need to have Node.js and npm (Node Package Manager) installed on your system. If you don't have them, you can download and install them from [Node.js official website](https://nodejs.org/).
### Prerequisites
Before running the application, you need to install the required dependencies. Open a terminal/command prompt, navigate to the project's root directory, and run the following command:

```bash
npm install
Running the Application
Once the dependencies are installed, you can start the application by running:
bash
Copy code
ng serve
This will compile the application and make it available at http://localhost:4200/. Open your web browser and navigate to this URL to use the application.
Usage
Launch the application by following the instructions in the "Running the Application" section.
On the application's homepage, you'll find input fields for entering a URL and depth.
Enter the URL of the website you want to crawl into the "URL" input field.
Enter the depth to control how many levels deep you want to crawl.
Optionally, check the "Crawl again" checkbox if you want to rerun the crawler for the same URL.
Click the "Crawl" button to initiate the crawler.
If the URL is already present in the database, the application will retrieve it; otherwise, it will initiate the crawler.
Extra Feature
This application also includes a bonus feature that allows you to rerun the crawler for the same URL. Simply check the "Crawl again" checkbox before clicking the "Crawl" button.
Note
This application utilizes the SweetAlert2 package for error handling, ensuring that users receive concise and informative error messages. This helps users quickly understand and address any issues they encounter, improving the overall user experience, and angular input validation as well.
Happy crawling!
