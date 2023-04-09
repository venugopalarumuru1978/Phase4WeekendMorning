class Student
{
    protected sname:string;
    protected course:string;

    getStdInfo(sn:string, cur:string)
    {
        this.sname = sn;
        this.course = cur;
    }
}

class Marks extends Student
{
    protected sub1:number;
    protected sub2:number;

    getMarks(s1:number, s2:number)
    {
        this.sub1 = s1;
        this.sub2 = s2;
    }
}

class Results extends Marks
{

    printResult()
    {
        console.log("Student Name : " + this.sname);
        console.log("Student Course : " + this.course);
        console.log("Sub1 Marks : " + this.sub1);
        console.log("Sub2 Marks : " + this.sub2);
        console.log("Total Marks : " + (this.sub1+this.sub2));
        if(this.sub1>=35 && this.sub2>=35)
            console.log("Passed");
        else
            console.log("Failed");
    }
}

var r1 = new Results();
r1.getStdInfo("Praveen", "Java");
r1.getMarks(56,67);
r1.printResult();