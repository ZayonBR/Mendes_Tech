const { Jimp } = require('jimp');

async function cropFavicon() {
  try {
    const image = await Jimp.read('public/favicon.png');
    image.autocrop();
    await image.write('public/favicon-cropped.png');
    console.log('Successfully cropped favicon.png to favicon-cropped.png');
  } catch (err) {
    console.error('Error cropping image:', err);
  }
}

cropFavicon();
