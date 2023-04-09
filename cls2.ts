class DemoClass1
{
    x:number;

    square() : number
    {
        return this.x*this.x;
    }

    cube() : string
    {
        var str = this.x + " Cube value is " + (this.x*this.x*this.x);
        return str;
    }
}

var dc2 = new DemoClass1();
dc2.x = 10;
console.log(dc2.x + " Square Value is " + dc2.square());
console.log(dc2.cube());