let c;
let ourFont;
let f = 0;
let profs = ["ali","diane","craig","nancy","roderick","sadie","richard"]
console.log(profs)
let points;


function preload() {
    ourFont = loadFont('AAHA.otf');
}

function setup() {
    c = createCanvas(1000,1000)

    
    

    textSize(100)
    textFont(ourFont);
    
    points = ourFont.textToPoints("GD2",100,600,600);

    noStroke();
    



    textSize(50)
    fill(0)
    text("https://github.com/alisq/p5-sketches-2023",100,100)
    


    

}

function draw() {
    colorMode(HSB,255);
f=f+0.0001;
    
    
    
    
    for(let i=0; i<points.length; i++) {
        fill(noise(f*points[i].x)*255,255,255)
        ellipse(points[i].x+random(-5,5), points[i].y+random(-5,5),random(10,20))
        
    }
    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}