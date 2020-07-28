class chainclass{
 
    constructor(a, b){
       
        var options = {
            bodyA : a,
            bodyB : b,
            stiffness: 0.04,
            length : 10 
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){

        var bodyApos = this.chain.bodyA.position;
        var bodyBpos = this.chain.bodyB.position;

        strokeWeight(4);
        
        line(bodyApos.x, bodyApos.y, bodyBpos.x, bodyBpos.y);

    }
}