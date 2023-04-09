import { Students } from "./stdinfo";
class TestStudents
{
    sinfo:Students[]=[
        new Students(101, "Pavan", "Java", 12000.00),
        new Students(102, "Murali", "Java", 12000.00),
        new Students(103, "Lokesh", "Java", 12000.00),
        new Students(104, "Ramana", "Java", 12000.00),
        new Students(105, "Pavani", "Java", 12000.00),
    ];

    printStudentsInfo()
    {
        for(var i in this.sinfo) // here index number passed to the "i"
        {
            console.log(this.sinfo[i].rollno + "\t" + this.sinfo[i].sname + "\t" + this.sinfo[i].course + "\t" + this.sinfo[i].fees);
        }
    }
}

var std = new TestStudents();
std.printStudentsInfo();