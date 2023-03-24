let c;

function setup() {
    c = createCanvas(1000,1000)
    //  background(0)
    //rect(100,100,50,300)
    //ellipse(400, 200, 500)

}

function draw() {

    noFill();
    strokeWeight(10)
    stroke(mouseX,mouseY,0)

    rect(50,50,mouseX,mouseY)
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}