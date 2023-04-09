class ConsParam
{
    private x:number;
    constructor(x:number)
    {
        console.log("It is Constructor with parameter");
        this.x = x;
    }

    printval() 
    {
        console.log("X value is : " + this.x);
    }
}

var obj2 = new ConsParam(100);
obj2.printval();

