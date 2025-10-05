async function getDataPrograms(){
  const res = await fetch("../data/programs.json");
  const data = await res.json();
  const firstThrieCard=data.slice(0, 3);
  const Programs = document.querySelector(".Programs-container");
  let content = "";

  firstThrieCard.forEach(element => {
    content += `
      <div class="col-3 card" >
        <img src="${element.image}" alt="">
        <h2>${element.title}</h2>
      </div>
    `;
  });

  Programs.innerHTML = `
    <div class="container">
      <div class="row">
        ${content}
      </div>
    </div>
  `;
}
getDataPrograms();

async function getDataCourses(){
  const res = await fetch("../data/courses.json");
  const data = await res.json();
  const firstThrieCard=data.slice(0, 3);
  const Courses = document.querySelector(".courses-container");
   let Content = "";
  firstThrieCard.forEach(element => {
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
getDataCourses();
