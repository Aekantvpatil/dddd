class rope{
    constructor(bodyA,pointB){
        var options ={
            body:bodyA,
            pointB: pointB,
            stiffness:1,
            angularStiffness:1,
            length:200
        };
        this.pointB=pointB;
        this.pointX=bodyA.x;
        this.pointy=bodyA.y-250;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(3.5);
            stroke ("#fff");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop()
        }
    }
}