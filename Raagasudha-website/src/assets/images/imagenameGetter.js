import * as fs from "fs";
let imageList = [];

fs.readdir("./homeimg", (err, files) => {
  if (err) {
    console.log();
  } else {
    imageList = files;
    console.log(imageList);
    return imageList;
  }
});
export default imageList;
