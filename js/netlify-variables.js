const fs = require('fs');
const path = path.join(__dirname, 'site-variables.js');

// Path to your JS file
const filePath = path.join(__dirname, 'path', 'to', 'your', 'script.js');

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  // Replace placeholders with environment variable values
  let result = data.replace(/{{COMPANY_NAME}}/g, process.env.COMPANY_NAME)
                   .replace(/{{PHONE_NUMBER}}/g, process.env.PHONE_NUMBER);

  // Write the file back
  fs.writeFile(filePath, result, 'utf8', (err) => {
     if (err) return console.log(err);
  });
});
