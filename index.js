const tinify = require("tinify");
tinify.key = "";

const imgFolder = './images';
const fs = require('fs');

fs.readdir(imgFolder, (err, files) => {
  files.forEach(file => {
    const source = tinify.fromFile(`images/${file}`);
    try{
        source.toFile(`./optimizedImg/optimized_${file}`);

    }catch(e){
        console.log(e)
    }
  });
});
