const fs = require('fs');
const path = require('path');

// Path to your JS file
const filePath = path.join(__dirname, 'site-variables.js');

console.log('About to read the file');

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  console.log('Before replacement:', data);

  // Replace placeholders with environment variable values
  let result = data.replace(/{{COMPANY_NAME}}/g, process.env.COMPANY_NAME)
                   .replace(/{{PHONE_NUMBER}}/g, process.env.PHONE_NUMBER);

  console.log('After replacement:', result);

  // Write the file back
  fs.writeFile(filePath, result, 'utf8', (err) => {
     if (err) return console.log(err);
  });
});
