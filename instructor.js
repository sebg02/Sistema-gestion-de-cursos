class Instructor {
    constructor(nameInstructor) {
        this.nameInstructor = nameInstructor
    }

    asignCourse(course, platform){
        const foundCourse = platform.courseCatalogue.find(item => item.nameCourse === course);
        if (foundCourse) {
            foundCourse.instructor = this.nameInstructor;
            platform.showCatalogue();
        } else {
           alert("Curso no encontrado en el catálogo.")
        }  
    } 

}