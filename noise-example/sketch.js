let f = 0;

function setup() {
    c = createCanvas(1000,1000)

    
    colorMode(HSB,255);

    
    noStroke();
    fill(0)
}

function draw() {
    f=f+0.01

    console.log(  )

    background(255)
        ellipse(200,200,random(400))

        ellipse(600,200,noise(f)*400)


}
