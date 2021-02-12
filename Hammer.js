class Hammer {
    constructor(x,y,height){
        var options={
            'restitution':0.5,
            'friction':1,
            'density':2
        };
        this.body = Bodies.rectangle(x,y,100,height,options);
        this.width=100;
        this.height=height;
        World.add(world,this.body);
    };
    display(){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    };



};