let data = [];
function preload() {
  data = loadJSON("Beijing-PM2.5.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  //loading the JSON file as an array rather than an object, so we can get its length
  data = Object.values(data);

  for (let idx = 0; idx <data.length; idx++) {
    let aSample = data[idx];
    let tempColor = map(aSample.temperature, -10, 20, 0, 255);
    let ellipseX = map(idx, 0, data.length, 0, width);
    let ellipseY=map(idx, 0, data.length, 0, height);
    let ellipseD = map(aSample["pm2.5"], 0, 900, 1, 500);

    //color conveys temperature and size of ellipse conveys amount of pollution

    fill(tempColor, 0, 0, 100);
    stroke(tempColor, 0, 0, 100);
    ellipse(ellipseX, ellipseY, ellipseD);

    print(data.length)
  }
}




  