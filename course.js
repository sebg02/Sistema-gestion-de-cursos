class Course {
  constructor(nameCourse, description, duration){
      this.nameCourse = nameCourse;
      this.description = description;
      this.duration = duration;
      this.students = [];
      this.instructor = "";
  }

  getCourseInfo(){
    return `${this.nameCourse}: ${this.description}, dura: ${this.duration}.    Instructor: ${this.instructor}, Estudiantes: ${this.students}`
  }

}