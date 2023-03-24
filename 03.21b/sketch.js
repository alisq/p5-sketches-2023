let c;


let myFont;
let points
function preload(){
    myFont = loadFont('BancoStd.otf')
}


let t = 0;
function setup() {
    
    c = createCanvas(1000,1000);
    
    

    
        fill('#ED225D');
        //myfont.textSize(600);
        textFont(myFont);
        
        //text('fffffs', 10, 500);
      

         points = myFont.textToPoints('p5', 10, 700, 800);

          

    
    //  background(0)
    //rect(100,100,50,300)
    //ellipse(400, 200, 500)

}

function draw() {
    background(0)
    // noFill();
    // strokeWeight(10)
    // stroke(mouseX,mouseY,0)

    // rect(50,50,mouseX,mouseY)

t=t+0.001;
    noise(t)
    for (let i=0; i<points.length;i++) {
        ellipse(points[i].x, points[i].y, noise(t*points[i].x)*50)
      }
      
      
    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}