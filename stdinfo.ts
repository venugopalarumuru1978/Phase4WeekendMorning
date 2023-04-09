export class Students
{
    rollno:number;
    sname:string;
    course:string;
    fees:number;

    constructor(rno:number, sname:string, course:string, fees:number)
    {
        this.rollno = rno;
        this.sname = sname;
        this.course = course;
        this.fees = fees;
    }
}
