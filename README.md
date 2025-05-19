ALU Regex Data Extraction
This repository contains a JavaScript implementation of a RegexExtractor class designed to extract various data patterns from text using regular expressions.
Project Overview
This project was created as part of the "Regex Onboarding Hackathon" assignment. The task was to implement regular expressions to extract various types of data from text, simulating the scenario of processing large volumes of string data from an API.
Features
The RegexExtractor class can extract the following types of data:
Email addresses, URLs, Phone numbers, HTML tags, as well as Currency amounts.

Implementation
The project consists of two main files:
1. regex-data-extraction.js: Contains the RegexExtractor class with methods for each data type extraction
2.test.js: Provides test cases and demonstrates the functionality of the extractor

Regular Expressions Used

Email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g
URLs: /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%\+.~#?&//=]*)/g
Phone Numbers: /(?:\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]?\d{4}/g
HTML Tags: /<([a-z][a-z0-9])\b[^>]>/gi
Currency Amounts: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g

Usage
To use the RegexExtractor in your project:
javascript// Import the RegexExtractor class
import RegexExtractor from './regex-data-extraction.js';

// Create an instance of the extractor
const extractor = new RegexExtractor();

// Sample text with various data patterns
const text = `
  Contact us at support@example.com or visit https://example.com.
  Call our customer service at (123) 456-7890.
  The product costs $19.99.
  <div class="content">This is some content</div>
`;

// Extract specific data type
const emails = extractor.extractEmails(text);
console.log(emails);  // ['support@example.com']

// Or extract all supported data types at once
const allData = extractor.extractAllData(text);
console.log(allData);

Edge Cases Handling
The implementation handles various edge cases:

Different email formats and domains
URLs with subdomains and query parameters
Various phone number formats with different separators
HTML tags with and without attributes
Currency amounts with and without thousand separators

Testing
Run the test script to see the extractor in action with various test cases:
node test.js
Future Improvements
Potential enhancements for this project:

Support for additional data types (credit card numbers, time formats, hashtags)
Improved pattern matching for international phone numbers
More robust HTML tag parsing
Support for additional currency symbols

