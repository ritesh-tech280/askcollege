 
document.addEventListener("DOMContentLoaded" , () =>  {

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

async function loadCourse() {

  const courses = await fetch("./data/courses.json").then(r => r.json());
  const colleges = await fetch("./data/colleges.json").then(r => r.json());

  const course = courses.find(c => c.slug === slug);

  if (!course) {
    document.body.innerHTML = "Course not found";
    return;
  }

  // ===== Course info =====
  document.getElementById("title").textContent = course.title;
  document.getElementById("description").textContent = course.description;
  document.getElementById("fees").textContent = course.fees;

  const careerList = document.getElementById("career");
  careerList.innerHTML = course.career.map(c => `<li>${c}</li>`).join("");

  // ===== College cards =====
  const grid = document.getElementById("collegeGrid");

  const related = colleges.filter(col =>
    col.courses.includes(slug)
  );

  related.forEach(col => {
    grid.innerHTML += `
      <a href="./college.html?slug=${col.slug}"
         class="block bg-white border rounded-lg shadow-sm p-3
                flex gap-3 items-start hover:shadow-md transition">

        <img src="${col.logo}" class="w-10 h-10 object-contain rounded" />

        <div class="flex-1">
          <div class="flex justify-between">
            <h3 class="text-sm font-semibold truncate">${col.name}</h3>
            <span class="text-xs bg-yellow-100 px-2 rounded">⭐ ${col.rating}</span>
          </div>

          <p class="text-xs text-gray-500">${col.location}</p>

          <div class="flex justify-between mt-1">
            <span class="text-xs text-blue-600">${col.fees}</span>
            <span class="text-[10px] px-2 rounded
              ${col.type === 'Gov'
                ? 'bg-green-100 text-green-700'
                : 'bg-purple-100 text-purple-700'}">
              ${col.type}
            </span>
          </div>
        </div>

      </a>
    `;
  });
}

 
      loadCourse();   // homepage
  

})
