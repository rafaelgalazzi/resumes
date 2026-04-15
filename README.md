# HTML Resume to PDF Converter

A simple Node.js script to easily convert HTML resumes into PDF files.

## Overview

Managing resumes in HTML gives you full control over styling and formatting. This project bridges the gap between HTML and the universally accepted PDF format — making it effortless to share or print your resumes.

## How It Works

The script uses [Puppeteer](https://pptr.dev/) (headless Chromium) to load each HTML file and export it as a properly formatted A4 PDF. Output files are saved inside the `output/` folder.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

## Setup

```bash
npm install
```

## Usage

```bash
node html-to-pdf.js
```

The PDFs will be generated in the `output/` directory.

## Files Converted

- `Cover Letter.html`
- `Rafael_Galazzi_CV_Portugues_Final.html`
- `Rafael_Galazzi_CV_SmallFont.html`

To add more files, simply add their filenames to the `files` array in `html-to-pdf.js`.
