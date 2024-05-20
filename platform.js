class Platform {
    constructor(name){
        this.name = name;
        this.courseCatalogue = [];
    }

    addCourse(item){
        this.courseCatalogue.push(item);
        this.showCatalogue();
    }

    showCatalogue() {
        const courseCatalogueList = document.getElementById('course-catalogue');
        courseCatalogueList.innerHTML = '';
        this.courseCatalogue.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.getCourseInfo();
            courseCatalogueList.appendChild(li);
        })
    }
}