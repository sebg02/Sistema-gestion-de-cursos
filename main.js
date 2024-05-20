document.addEventListener('DOMContentLoaded', () => {
    const platform = new Platform("Talento Tech");

    document.getElementById("add-course-form").addEventListener('submit', (event) => {
        event.preventDefault();
        const nameCourse = document.getElementById('name-course').value;
        const description = document.getElementById('description').value;
        const duration = document.getElementById('duration').value;

        let item = new Course(nameCourse, description, duration);
        platform.addCourse(item);

        document.getElementById("add-course-form").reset();
    })

    document.getElementById("enroll-student-in-course-form").addEventListener('submit', (event) => {
        event.preventDefault();
        const nameStudent = document.getElementById('name-student').value;
        const nameCourse = document.getElementById('name-course-enrollment').value;

        const student = new Student(nameStudent);
        student.enrollInCourse(nameCourse, platform);
    });

    document.getElementById("assign-instructor-in-course-form").addEventListener('submit', (event) => {
        event.preventDefault();
        const nameInstructor = document.getElementById('name-instructor').value;
        const nameCourse = document.getElementById('name-course-assignment').value;

        const instructor = new Instructor(nameInstructor)
        instructor.asignCourse(nameCourse, platform)
    });
});

