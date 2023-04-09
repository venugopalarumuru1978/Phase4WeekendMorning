interface iface1
{
    getValue(n:number);   
}

interface iface2
{
    printValue();
}

class DemoIface implements iface1, iface2
{
    private n:number;

    getValue(n:number)
    {
        this.n = n;
    }

    printValue() {
        console.log(this.n + " Square Value is " + (this.n*this.n));
    }
}

var df1 = new DemoIface();
df1.getValue(10);
df1.printValue();