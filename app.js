var azure = require('azure');
var blobService = azure.createBlobService();
var cssFile = '../../../../styles/style.css'

blobService.putBlockBlobFromFile('css', 'omerwazir.css', cssFile, {contentType:'text/css'}, function(error) {
  if(!error) {
    console.log('omerwazir.css uploaded');
  } else {
    console.error('Error: ' + error);
  }
});