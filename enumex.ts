enum  Courses
{
    Angular, ReactJS, NodeJS, ExpressJS, VueJS
}

class StdCourses
{
    sname:string;
    scourse:Courses;

    getValues()
    {
        this.sname = "Geetha";
        this.scourse = Courses.Angular; // assigning course: here it will assgin only index.
    }

    printValue()
    {
        console.log("Student name : " + this.sname);
        console.log("Course : " + Courses[this.scourse]);// to get value
    }
}

var c = new StdCourses;
c.getValues();
c.printValue();