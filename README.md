# Sentinel Scraper

Sentinel Scraper is a specialized automation tool designed to crawl news platforms(for this case [BBC NEWS](https://bbc.com)) , extract top-tier headlines, and archive them into structured data formats. Built as part of the 30-Day Full-Stack Challenge (Day 11), this project demonstrates the power of **Headless Browser Automation** and **Data Serialization**.

##  Overview

The scraper utilizes **Puppeteer** to simulate human-like browsing behavior. It navigates to a target URL, waits for dynamic content to render, parses the DOM using specific CSS selectors, and utilizes **csv-writer** to generate time-stamped intelligence reports.

##  Core Features

- **Headless Execution:** Performs data extraction in the background without a GUI for maximum efficiency.
- **Dynamic Content Handling:** Uses synchronization protocols to ensure JavaScript-heavy elements are fully loaded before extraction.
- **Automated Serialization:** Converts raw DOM text into clean, mapped CSV rows with unique IDs and ISO timestamps.
- **Scalable Architecture:** Easily adaptable to different news sites by updating CSS selectors.

##  Technical Architecture



The workflow follows a 4-stage pipeline:
1. **Launch:** Initiation of the Chromium instance.
2. **Breach:** Navigation to the target domain and bypass of initial rendering delays.
3. **Extraction:** Execution of logic within the browser context to isolate headline strings.
4. **Archiving:** Mapping data to a CSV schema and writing to the local file system.

## Project Structure

```text
sentinel-scraper/
├── data/                 # Archived intelligence (CSV files)
|    └── headlines.csv     # The final output file
├── node_modules/         # Automation dependencies
├── .gitignore            # Version control safety rules
├── package.json          # Project manifest and scripts
├── LICENSE               # MIT LICENSE
├── README.md             # Project documentation
└── scraper.js            # Core automation and extraction logic
```

## Installation and Setup

1.Clone the Repository:
```text
git clone https://github.com/Basliel-Sisay/Sentinel-Scraper.git
cd sentinel-scraper
```
2.Install Dependencies:
```text
npm install
```
3.Initialize Storage:
Ensure a **/data** folder exists in the root directory.

4.Execute Harvest:
```text
npm start
```

## Tech Stack

- Runtime: Node.js

- Automation Engine: Puppeteer (Headless Chrome)

- Data Serialization: csv-writer
