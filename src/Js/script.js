
document.addEventListener("DOMContentLoaded", function () {



  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
    document.body.classList.add("overflow-hidden")
  });

  closeBtn.addEventListener("click", closeSidebar);



  function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden")

  }


  const sidebarBtns = document.querySelectorAll(".sidebar-btn");

  sidebarBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const dropdown = btn.nextElementSibling;
      const icon = btn.querySelector("i");

      const isOpen = dropdown.classList.contains("max-h-60");

      // close all
      document.querySelectorAll(".sidebar-dropdown").forEach(d => {
        d.classList.remove("max-h-60", "opacity-100");
        d.classList.add("max-h-0", "opacity-0");
      });

      document.querySelectorAll(".sidebar-btn i").forEach(i => {
        i.classList.remove("rotate-180");
      });

      // open current
      if (!isOpen) {
        dropdown.classList.remove("max-h-0", "opacity-0");
        dropdown.classList.add("max-h-60", "opacity-100");
        icon.classList.add("rotate-180");
      }
    });
  });

  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {

      const target = this.dataset.tab;

      // 👉 Reset tabs styles
      tabs.forEach(t => {
        t.classList.remove("border-blue-600", "text-blue-600");
        t.classList.add("border-transparent", "text-gray-700");
      });

      // 👉 Active tab style
      this.classList.remove("border-transparent", "text-gray-700");
      this.classList.add("border-blue-600", "text-blue-600");

      // 👉 Hide all panels
      panels.forEach(panel => {
        panel.classList.add("hidden");
      });


      // 👉 Show correct panel
      document.querySelector(`.tab-panel[data-content="${target}"]`).classList.remove("hidden");

    });
  });



  const colleges = [{
    name: "IIT Bombay - Indian Institute of Technology",
    location: "Mumbai",
    type: "Govt",
    nirf: "#3 NIRF",
    courses: "25 Courses",
    rating: "4.6",
    exams: "JEE Main, JEE Advanced",
    fees: "₹8 L",
    salary: "₹17.92 - 19.63 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg"
  }, {
    name: "IIT Delhi - Indian Institute of Technology",
    location: "New Delhi",
    type: "Govt",
    nirf: "#2 NIRF",
    courses: "23 Courses",
    rating: "4.7",
    exams: "JEE Main, JEE Advanced",
    fees: "₹8 L",
    salary: "₹18 - 20 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg"
  },
  {
    name: "IIT Madras - Indian Institute of Technology",
    location: "Chennai, Tamil Nadu",
    type: "Govt",
    nirf: "#1 NIRF",
    courses: "24 Courses",
    rating: "4.8",
    exams: "JEE Main, JEE Advanced",
    fees: "₹8.2 L",
    salary: "₹19 - 21 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg"
  },
  {
    name: "IIT Kanpur - Indian Institute of Technology",
    location: "Kanpur, Uttar Pradesh",
    type: "Govt",
    nirf: "#4 NIRF",
    courses: "22 Courses",
    rating: "4.6",
    exams: "JEE Main, JEE Advanced",
    fees: "₹8 L",
    salary: "₹17.5 - 19 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/hi/f/f3/Iitk-logo.jpg"
  }];

  const container = document.getElementById("collegeContainer");
  container.innerHTML = "";
  colleges.forEach(college => {

    container.innerHTML += `

<div class="max-w-xs slide w-full shrink-0   sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto bg-white  rounded-2xl overflow-hidden border border-gray-200   transition-all duration-300 transform">
        <!-- Header with Logo and Basic Info -->
        <div class="flex items-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white relative">
            <img class="w-12 h-12 rounded-full mr-3 border-2 border-white shadow-sm" src=${college.logo} alt="Harvard University Logo">
            <div class="flex-1">
                <h2 class="text-lg font-bold leading-tight">${college.name} </h2>
                <p class="text-sm opacity-90">${college.location} </p>
                <p class="text-xs font-semibold bg-white text-blue-600 bg-opacity-20 px-2 py-1 rounded-full inline-block mt-1">${college.nirf}</p>
            </div>
            <!-- Subtle star icon for rank emphasis -->
             
        </div>
        
        <!-- Card Content -->
        <div class="p-4 space-y-4">
            <!-- Courses Offered -->
            <div class="flex items-start space-x-3 group">
                <svg class="w-5 h-5 text-indigo-500 mt-0.5 group-hover:text-indigo-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <div>
                    <h3 class="text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-200">Courses Offered</h3>
                    <p class="text-gray-700 text-xs leading-relaxed">${college.courses} </p>
                </div>
            </div>
            
            <!-- Exams Accepted -->
            <div class="flex items-start space-x-3 group">
                <svg class="w-5 h-5 text-indigo-500 mt-0.5 group-hover:text-indigo-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                    <h3 class="text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-200">Exams Accepted</h3>
                    <p class="text-gray-700 text-xs leading-relaxed">${college.exams}</p>
                </div>
            </div>
            
            <!-- Total Fee (Made normal as requested) -->
            <div class="text-center bg-gray-50 rounded-lg p-3 border border-gray-100">
                <p class="text-lg text-gray-800">${college.fees}</p>
                <p class="text-xs text-gray-500">Total Fee (Annual)</p>
            </div>
            
            <!-- Action Button -->
            <button class="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
                <svg class="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Download Brochure</span>
            </button>
        </div>
    </div>
`;
  });


  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const slideWidth = document.querySelectorAll(".slide");

  let index = 0;

  function cardsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  const perView = cardsPerView();
  function updateSlider() {
    slideWidth.forEach((slide) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    })
  }

  next.onclick = () => {

    const totalSlides = Math.ceil(container.children.length / perView);

    if (index < totalSlides - 1) index++;
    updateSlider();
  };

  prev.onclick = () => {
    if (index > 0) index--;
    updateSlider();
  };

  window.addEventListener("resize", () => {
    index = 0;
    updateSlider();
  });

  const regionColleges = [{
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Invertis_University_gate_01.jpg",
    rating: 4.5,
    name: "Invertis University",
    region: "Bareilly",
    nirf: "#29 NIRF",
    type: "Private University",
    course: "34+",
    fees: 3.00
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/M.J.P._Rohilkhand_University%2C_Administrative_Block.JPG",
    rating: 3.3,
    name: "Mahatma Jyotiba Phule Rohilkhand University",
    region: "Bareilly",
    nirf: "201-300 NIRF",
    type: "Government University",
    course: "9",
    fees: 1.65
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Shri_Ram_Murti_Smarak_College_of_Engineering%2C_Technology_%26_Research%2C_Bareilly.jpeg",
    rating: 3.4,
    name: "Shri Ram Murti Smarak College of Engineering and Technology",
    region: "Bareilly",
    nirf: "#29 NIRF",
    type: "Private College",
    course: "14",
    fees: 2.98
  },
  {
    image: "https://cdn.prod.website-files.com/66aca13f24279ac628932e6e/66aca13f24279ac628933460_Mask%20group%20(5).jpg",
    rating: 4.3,
    name: "RBMI Group of Institution Bareilly",
    region: "Bareilly",
    nirf: "#29 NIRF",
    type: "Private College",
    course: "7",
    fees: 2.00
  }]

  const regionCollege = document.getElementById("regionCollege");
  regionCollege.innerHTML = "";


  regionColleges.forEach(college => {

    regionCollege.innerHTML += `
 <div class="bg-white  shrink-0 md:w-80  slidee w-80 rounded-2xl border  border-gray-300  overflow-hidden   transition duration-300 pt-2  m-auto mt-8">

    <!-- Image Section -->
    <div class="relative">
      <img 
        src=${college.image}
        class="w-76 mx-auto h-40 rounded-lg object-cover"
      />

      <!-- Rating Badge -->
      <span class="absolute top-3 right-3 bg-transparent-400 text-black text-sm font-semibold px-2 py-1 rounded-lg shadow flex items-center">
      <i class="fa-solid fa-star text-yellow-400 mr-1"></i>  ${college.rating}
      </span>
    </div>

    <!-- Content -->
    <div class="p-5 space-y-3">

      <!-- College Name -->
      <h2 class="text-lg font-bold text-gray-800">
        ${college.name}
      </h2>

      <!-- Location + Rank -->
      <div class="flex justify-start items-center gap-2 text-sm text-gray-600">
        <span class="flex items-center"><span class="material-symbols-outlined text-[12px]">
location_on
</span> ${college.region}</span>
        <span>|</span>
        <span class="font-medium text-blue-600">${college.nirf}</span>
      </div>

      <!-- Type -->
      <p class="text-sm text-gray-500 flex items-center"><span class="material-symbols-outlined mr-1">
school
</span> ${college.type}</p>

      <!-- Fees + Courses -->
      <div class="text-sm flex justify-between text-gray-500 space-y-1">
         <div class="flex flex-col">
           <span>Courses</span>
           <span>${college.course} Courses</span>
         </div>
         <div class="flex flex-col">
           <span>Fees</span>
           <span>₹ ${college.fees}L Annual</span>
         </div>
      </div>

      <!-- Button -->
      <div class="flex justify-center pt-3">
        <button class="bg-blue-600 w-100 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>

    </div>
  </div>

 `

    const nextt = document.getElementById("nextt");
    const prevv = document.getElementById("prevv");
    const slideWidthh = document.querySelectorAll(".slidee");


    let index = 0;

    function cardsPerView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    const perView = cardsPerView();
    function updateSlider() {
      slideWidthh.forEach((slidee) => {
        slidee.style.transform = `translateX(-${index * 100}%)`;
      })
    }

    nextt.onclick = () => {

      const totalSlides = Math.ceil(regionCollege.children.length / perView);

      if (index < totalSlides - 1) index++;
      updateSlider();
    };

    prevv.onclick = () => {
      if (index > 0) index--;
      updateSlider();
    };

    window.addEventListener("resize", () => {
      index = 0;
      updateSlider();
    });

  })
});



