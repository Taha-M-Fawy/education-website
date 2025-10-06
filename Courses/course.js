const Courses =document.querySelector(".courses-container");
const viewAllBtn = document.querySelector(".view-all-container");
let allCourses =[];

function displayCourses(courses) {
    let Content = "";
    courses.forEach(element => {
        Content+=`
        <div class="col-4 card">
        <img class="image" src="${element.image}" alt="">
        <h2>${element.title}</h2>
        <p>${element.description}</p>
        <div class="d-flex teacher">
        <img class="imageTeacher" src="${element.imageTeacher}" alt="">
        <h3>${element.teacher}</h3>
        </div>
        </div>
        `;
    });
    Courses.innerHTML = `
    <div class="container">
    <div class="row">
    ${Content}
    </div>
    </div>
    `;
    
}
    async function GetDataCourses() {
        const res = await fetch("../data/courses.json");
        const data =await res.json();
        allCourses=data
        displayCourses(allCourses.slice(0,6))
    }
GetDataCourses();

viewAllBtn.addEventListener('click',()=> {
    displayCourses(allCourses);
    viewAllBtn.style.display="none" ;
});