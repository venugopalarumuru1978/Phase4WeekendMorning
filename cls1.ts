class DemoClass
{
   private x:number = 100;
   private y:number = 100;

    printvalues() : void
    {
        console.log("X value is : " + this.x);
        console.log("Y value is : " + this.y);
        var sum = this.x + this.y;
        console.log("Addition : " + sum);
    }
}
// object creation
var dc1 = new DemoClass();
dc1.printvalues();
