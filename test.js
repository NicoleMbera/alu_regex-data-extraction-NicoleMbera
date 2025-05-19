import RegexExtractor from './regex-data-extraction.js';

const extractor = new RegexExtractor();

const testData = `
Here are some sample emails: user@example.com, firstname.lastname@company.co.uk, invalid@email, 
test.email+extension@domain.co.

URLs to check: https://www.example.com, http://subdomain.example.org/page?param=value, 
ftp://invalid.com, https://www.test-site.co.uk/path/to/resource.html

Phone numbers in various formats: (123) 456-7890, 123-456-7890, 123.456.7890, 
1234567890, +1 (123) 456-7890

HTML tags examples: <p>, <div class="example">, <img src="image.jpg" alt="description">, 
<a href="https://example.com">Link</a>, <br>, <span style="color: red;">

Currency values: $19.99, $1,234.56, $0.50, $1000, 
$5,000,000.00, $19, €20.00
`;

console.log("=== EMAIL EXTRACTION ===");
const emails = extractor.extractEmails(testData);
console.log(emails);
console.log(`Found ${emails.length} email addresses\n`);

console.log("=== URL EXTRACTION ===");
const urls = extractor.extractURLs(testData);
console.log(urls);
console.log(`Found ${urls.length} URLs\n`);

console.log("=== PHONE NUMBER EXTRACTION ===");
const phones = extractor.extractPhoneNumbers(testData);
console.log(phones);
console.log(`Found ${phones.length} phone numbers\n`);

console.log("=== HTML TAG EXTRACTION ===");
const htmlTags = extractor.extractHTMLTags(testData);
console.log(htmlTags);
console.log(`Found ${htmlTags.length} HTML tags\n`);

console.log("=== CURRENCY AMOUNT EXTRACTION ===");
const currencies = extractor.extractCurrencyAmounts(testData);
console.log(currencies);
console.log(`Found ${currencies.length} currency amounts\n`);

// Complete data extraction test
console.log("=== COMPLETE DATA EXTRACTION ===");
const allData = extractor.extractAllData(testData);
console.log(JSON.stringify(allData, null, 2));

// Edge case testing
console.log("\n=== EDGE CASE TESTING ===");

const edgeCaseData = `
Edge case emails: very.unusual."@".unusual.com, admin@mailserver1, email@[123.123.123.123]
Edge case URLs: https://example.com/path_(with_parentheses), http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com
Edge case phones: 1-800-FLOWERS, (123)456-7890, 123 456 7890
Edge case HTML: <input type="text" name="username" value="" />
Edge case currency: $1.234.567,89, $1,234,567.89, $.99, $0
`;

console.log("Testing edge cases for email extraction:");
console.log(extractor.extractEmails(edgeCaseData));

console.log("\nTesting edge cases for URL extraction:");
console.log(extractor.extractURLs(edgeCaseData));

console.log("\nTesting edge cases for phone number extraction:");
console.log(extractor.extractPhoneNumbers(edgeCaseData));

console.log("\nTesting edge cases for HTML tag extraction:");
console.log(extractor.extractHTMLTags(edgeCaseData));

console.log("\nTesting edge cases for currency extraction:");
console.log(extractor.extractCurrencyAmounts(edgeCaseData));