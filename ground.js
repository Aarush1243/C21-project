class Ground{
    constructor(x, y, w, h){
        var groundOptions={
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, w, h, groundOptions)
        World.add(world, this.body)
        this.w = w;
        this.h = h;

    }
    show(){
        var pos = this.body.position
        push ();
        fill("yellow")
        rectMode(CENTER)
        rect(pos.x, pos.y, this.w, this.h)
        pop ();
        
    }
}