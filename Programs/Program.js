const viewAllBtn = document.getElementById("view-all-btn");
const Programs = document.querySelector(".Programs-container");
let allPrograms = [];

// دالة العرض
function displayPrograms(programs) {
  let content = "";
  programs.forEach((program) => {
    content += `
      <div class="card">
        <img src="${program.image}" alt="">
        <h2>${program.title}</h2>
        <p><span>Description:</span> ${program.description}</p>
        <button class="btn">Enroll Now</button>
      </div>
    `;
  });
  Programs.innerHTML = `<div class="container">${content}</div>`;
}

// جلب الداتا
async function getDataPrograms() {
  const res = await fetch("../data/programs.json");
  const data = await res.json();
  allPrograms = data; // خزن الكل
  displayPrograms(allPrograms.slice(0, 3)); // اعرض أول 3 فقط
}

getDataPrograms();

// الزر "View All"
viewAllBtn.addEventListener("click", () => {
  displayPrograms(allPrograms); // اعرض الكل
  viewAllBtn.style.display = "none"; // اخفي الزر
});
