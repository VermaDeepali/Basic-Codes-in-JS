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


// write file if the given path doesn't exist create the path and write file

const fsp = require('fs/promises');
const fs = require('fs');
let filePath = './temp/example.txt';

async function createFile() {
  if (!fs.existsSync(filePath)) {
    await fsp.mkdir('./temp', { recursive: true });
  }

  await fsp.writeFile(filePath, 'write your file content here', { encoding: 'utf-8' })
    .then(() => {
      console.log('File created!!');
    })
    .catch((error) => {
      console.error('Error creating file:', error);
    });
}

createFile();


