
class RegexExtractor {

    
     //Extracts email addresses from text
    
    extractEmails(text) {
    
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
      return text.match(emailRegex) || [];
    }
  
    // Extracts URLs from text
     
    extractURLs(text) {
    
      const urlRegex = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
      return text.match(urlRegex) || [];
    }
  
    //Extracts phone numbers from text
     
    extractPhoneNumbers(text) {
      const phoneRegex = /(?:\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]?\d{4}/g;
      return text.match(phoneRegex) || [];
    }
  
    //Extracts HTML tags from text
  
    
    extractHTMLTags(text) {
      // Match opening HTML tags with optional attributes
      const htmlTagRegex = /<([a-z][a-z0-9]*)\b[^>]*>/gi;
      return text.match(htmlTagRegex) || [];
    }
  
    // Extracts currency amounts from text
    
    extractCurrencyAmounts(text) {
      const currencyRegex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
      return text.match(currencyRegex) || [];
    }
  
    // Process a text string and extract all supported data types
     
    extractAllData(text) {
      return {
        emails: this.extractEmails(text),
        urls: this.extractURLs(text),
        phoneNumbers: this.extractPhoneNumbers(text),
        htmlTags: this.extractHTMLTags(text),
        currencyAmounts: this.extractCurrencyAmounts(text)
      };
    }
  }
  
  export default RegexExtractor;