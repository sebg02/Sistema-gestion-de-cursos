class Student {
    constructor(nameStudent) {
        this.nameStudent = nameStudent;
    }

    enrollInCourse(course, platform){
        const foundCourse = platform.courseCatalogue.find(item => item.nameCourse === course);
        if (foundCourse) {
            foundCourse.students.push(this.nameStudent);
            platform.showCatalogue();
        } else {
           alert("Curso no encontrado en el catálogo.")
        }  
    } 

}