// read a pdf file
const fs = require('fs');
const PDFParser = require('pdf-parse');

const filePath = './test.pdf';

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  PDFParser(data).then(pdf => {
    console.log(pdf.text);
  }).catch(err => {
    console.error(err);
  });
});
