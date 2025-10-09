async function GetDataTeachers() {
  try {
    const res = await fetch("../data/teachers.json");
    const data = await res.json();

    Object.keys(data).forEach(programKey => {
      const section = document.querySelector(`.${programKey} .row`);

      if (section) {
        data[programKey].forEach(teacher => {
          section.innerHTML += `
            <div class="card col-lg-4 ">
              <img class="imageTeacher" src="${teacher.image}" alt="${teacher.name}">
              <h2>${teacher.name}</h2>
              <p>${teacher.description}<br><strong>${teacher.specialization}</strong></p>
              <button class="btn">Know More</button>
            </div>
          `;
        });
      }
    });
  } catch (err) {
    console.error("Error loading teacher data:", err);
  }
}

GetDataTeachers();
