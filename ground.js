class Ground{
    constructor(x,y,l,a){
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,l,a, options);
        this.l = l;
        this.a = a;
        World.add(world, this.body);

    }

    mostrar(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill('purple');
        rect(pos.x, pos.y, this.l, this.a);
        pop();
    }
}