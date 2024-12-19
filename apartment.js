

let pages = [];


function initializeStorage() {
  try {
    const storedData = localStorage.getItem("pagesData");
    if (storedData) {
      pages = JSON.parse(storedData);
    } else {
      
      pages = [
        [
          {
            img: "./public/Room page Images/unsplash_UV81E0oXXWQ.jpg",
            address: "112 Ikotun-Idimu RD, Ikotun, Lagos",
            type: "4 Bedroom Flat",
            price: "$2500/Year",
            beds: 4,
            showers: 2,
            size: 5,
            description: "Spacious four bedroom flat in a serene environment",
          },
          {
            img: "./public/Room page Images/image4.jpg",
            address: "2 Tayo Lawal street Idimu Lagos",
            type: "3 Bedroom Flat",
            price: "$1800/Year",
            beds: 3,
            showers: 2,
            size: 3,
            description: "Spacious three bedroom flat in a serene environment",
          },
          {
            img: "./public/Room page Images/unsplash_KQgrVfR3r74.jpg",
            address: "14 Akinwunmi Street, Abaranje, Lagos",
            type: "2 Bedroom",
            price: "$2000/Year",
            beds: 2,
            showers: 1,
            size: 3,
            description: "Spacious two bedroom flat in a serene environment",
          },
          {
            img: "./public/Room page Images/unsplash_uDtC-1NLEzU.jpg",
            address: "16 Market Street, Igando, Lagos",
            type: "Self Contain",
            price: "$1000/Year",
            beds: 1,
            showers: 1,
            size: 2,
            description: "A one bedroom apartment in a serene environment",
          },
          {
            img: "./public/Room page Images/image3.jpg",
            address: "123 Tinubu Avenue, Egbeda, Lagos",
            type: "2 Bedroom",
            price: "$2000/Year",
            beds: 2,
            showers: 1,
            size: 2,
            description: "Spacious two bedroom flat in a serene environment",
          },
          {
            img: "./public/Room page Images/image4.jpg",
            address: "12 Akowonjo Street, Festac, Lagos",
            type: "4 Bedroom Flat",
            price: "$2800/Year",
            beds: 4,
            showers: 2,
            size: 5,
            description: "Spacious four bedroom flat in a serene environment",
          },
        ],
        [
          {
            img: "./public/Room page Images/image3.jpg",
            address: "45 Mission Street, Lekki, Lagos",
            type: "3 Bedoom",
            price: "$4000/Year",
            beds: 3,
            showers: 3,
            size: 4,
            description: "Spacious three bedroom flat in a serene environment",
          },
          {
            img: "./public/Room page Images/image4.jpg",
            address: "14 Fasali Street, Yaba, Lagos",
            type: "2 Bedroom",
            price: "$2000/Year",
            beds: 2,
            showers: 2,
            size: 3,
            description: "Spacious two bedroom flat in a serene environment",
          },
          {
            img: "./public/Room page Images/unsplash_uDtC-1NLEzU.jpg",
            address: "2 Belleface Street, Ajegunle, Lagos",
            type: "Entire Apartment",
            price: "$800/Year",
            beds: 1,
            showers: 1,
            size: 3,
            description: "A one bedroom apartment in a serene environment",
          },
          {
            img: "./public/Room page Images/image3.jpg",
            address: "106 Freedom Way, Victoria Island, Lagos",
            type: "5 Bedroom",
            price: "$3000/Year",
            beds: 5,
            showers: 1,
            size: 6,
            description: "Spacious five bedroom flat in a serene environment",
          },
          {
            img: "./public/Room page Images/unsplash_UV81E0oXXWQ.jpg",
            address: "12 Oloruntoba Street, Gbagada, Lagos",
            type: "3 Bedroom",
            price: "$2500/Year",
            beds: 3,
            showers: 2,
            size: 4,
            description: "Spacious three bedroom flat in a serene environment",
          },
          {
            img: "./public/Room page Images/unsplash_KQgrVfR3r74.jpg",
            address: "12 Idi-Araba Avenue, Shomolu, Lagos",
            type: "Mini Flat",
            price: "$1800/Year",
            beds: 2,
            showers: 2,
            size: 4,
            description: "Spacious two bedroom flat in a serene environment",
          },
        ],
        [
          {
            img: "./public/Room page Images/image3.jpg",
            address: "28 Dolores Street, Agege, Lagos",
            type: "Self Contain",
            price: "$850/Year",
            beds: 1,
            showers: 1,
            size: 2,
            description: "A one bedroom apartment in a serene environment",
          },
          {
            img: "./public/Room page Images/unsplash_uDtC-1NLEzU.jpg",
            address: "34 Obalende Way, Ketu, Lagos",
            type: "3 Bedroom",
            price: "$2800/Year",
            beds: 3,
            showers: 1,
            size: 3,
            description: "Spacious three bedroom flat in a serene environment",
          },
          {
            img: "./public/Room page Images/image4.jpg",
            address: "12 Mobolaji Johnson Avenue, Ikeja, Lagos",
            type: "4 Bedroom",
            price: "$4000/Year",
            beds: 4,
            showers: 4,
            size: 6,
            description: "Spacious four bedroom flat in a serene environment",
          },
        ],
      ];
      localStorage.setItem("pagesData", JSON.stringify(pages));
    }
    return pages;
  } catch (error) {
    console.error("Storage initialization failed:", error);
    alert("Error loading saved properties. Using default data.");

    return [[]];
  }
}

function renderContent(pageIndex = 0) {
  try {
    const contentSection = document.getElementById("content");
    if (!contentSection) return;

    const pages = JSON.parse(localStorage.getItem("pagesData")) || [[]];
    const selectedPage = pages[pageIndex] || [];

    contentSection.innerHTML = selectedPage
      .map(
        (item) => `
        <a href="mailto:prospermarshalls@gmail.com">
          <div class="flex flex-col border border-gray-500 rounded-3xl  cursor-pointer h-full ">
            <img src="${
              item.img
            }" alt="Room Image" class="rounded-t-3xl h-64 w-full object-cover" onerror="this.src='./public/Room page Images/fallback.jpg'"/>
            <div class="p-4 flex flex-col gap-2">
              <h4 class="font-semibold">${escapeHtml(item.address)}</h4>
              <h5 class="text-gray-500">${escapeHtml(item.type)}</h5>
              <h6 class="text-[#F4511E] font-semibold">${escapeHtml(
                item.price
              )}</h6>
              <p class="text-gray-600 text-sm line-clamp-2">${escapeHtml(
                item.description
              )}</p>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-3 border-t border-gray-300">
              <span class="flex items-center justify-center p-4 gap-2 hover:opacity-50 cursor-pointer">
                <img src="./public/Room page Images/Bed.svg" alt="Beds" />${
                  item.beds
                }
              </span>
              <span class="flex items-center justify-center border-gray-300 p-4 gap-2 hover:opacity-50 cursor-pointer">
                <img src="./public/Room page Images/Shower.svg" alt="Showers" />${
                  item.showers
                }
              </span>
              <span class="flex items-center justify-center p-4 gap-2 hover:opacity-50 cursor-pointer">
                <img src="./public/Room page Images/Size.svg" alt="Size" />${
                  item.size
                }
              </span>
            </div>
          </div>
        </a>`
      )
      .join("");
  } catch (error) {
    console.error("Error rendering content:", error);
    contentSection.innerHTML =
      '<p class="text-red-500">Error loading properties. Please refresh the page.</p>';
  }
}


function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let currentIndex = 0; // Initialize the current index

function updateNavStyles(activeIndex) {
  try {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item, index) => {
      if (index === activeIndex) {
        item.classList.add("bg-[#F4511E]", "text-white");
        item.classList.remove(
          "text-[#F4511E]",
          "hover:bg-[#F4511E]",
          "hover:text-white"
        );
      } else {
        item.classList.remove("bg-[#F4511E]", "text-white");
        item.classList.add(
          "text-[#F4511E]",
          "hover:bg-[#F4511E]",
          "hover:text-white"
        );
      }
    });
  } catch (error) {
    console.error("Error updating navigation:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  pages = initializeStorage();
  
  renderContent(currentIndex);
  updateNavStyles(currentIndex);

  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      currentIndex = index; 
      renderContent(currentIndex);
      updateNavStyles(currentIndex);
    });
  });

  const next = document.getElementById("next");
  const back = document.getElementById("back");

  next.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentIndex < navItems.length - 1) {
      currentIndex++; 
      renderContent(currentIndex);
      updateNavStyles(currentIndex);
    }
  });

  back.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentIndex > 0) { 
      currentIndex--;
      renderContent(currentIndex);
      updateNavStyles(currentIndex);
    }
  });
});
