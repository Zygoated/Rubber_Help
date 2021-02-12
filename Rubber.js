class Rubber{
    constructor(x,y){
        var options={
            'restitution':0.3,
            'friction':5,
            'density':1   
        }
        this.body = Matter.Bodies.circle(x, y,10,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var posit = this.body.position;
        push();
        translate(posit.x,posit.y);
        fill("white");
        circle(0,0,this.width,this.height);
        pop();



    }













}