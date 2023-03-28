
//recap
//sine wave
//loading images
//editing images
    //—dot pattern
    //
//video capture

frame = 0
let vid;
let img;

function preload() {
    img = loadImage("work.jpeg")
}
function setup() {
    
    c = createCanvas(1000,1000)


    

    image(img,0,0)

    img.loadPixels();


    // fill(0)

    gridSize = 10;

    for (let y = 0; y<img.height; y=y+gridSize) {
        for (let x =0; x<img.width;x=x+gridSize) {
            let index = (y*width + x) *4
            let r = img.pixels[index]

            
            let big = map(r, 0, 255, 0, gridSize)

            ellipse(x, y, big)

        }

    }

    for (let i =0; i < 100; i++) {
            ellipse(random(width),random(height), 50)   
       }
  
}


function draw() {
colorMode(HSB)


    // console.log("no value: "+ random())
    // console.log("one value: "+ random(100))
    // console.log("two values: "+ random(100,200))

noStroke()
fill(random(0,50),255,255)
        
            // if ((mouseX > 500) && (mouseY > 500) && (mouseX < 600) && (mouseY < 600)) {
            //     ellipse(mouseX,mouseY, 50)
            // }



       



}