class DemoCons
{
    private x:number;
    constructor()
    {
        console.log("It is Constructor");
        this.x = 10;
    }

    printval() 
    {
        console.log("X value is : " + this.x);
    }
}

var obj1 = new DemoCons();
obj1.printval();