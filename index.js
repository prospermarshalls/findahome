document.addEventListener("DOMContentLoaded", () => {
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  const dropdownOptions = document.querySelectorAll(".dropdown-option");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dropdownId = button.getAttribute("data-dropdown");
      const dropdown = document.getElementById(dropdownId);

     
      if (dropdown.classList.contains("hidden")) {
        openDropdown(dropdown);
      } else {
        closeDropdown(dropdown);
      }

      closeOtherDropdowns(dropdownId);
    });
  });

  dropdownOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      const selectedValue = option.getAttribute("data-value");
      const dropdownMenu = option.closest(".dropdown-content");
      const button = dropdownMenu.previousElementSibling;

      button.querySelector("span").textContent = selectedValue;

      closeDropdown(dropdownMenu);
    });
  });

  function openDropdown(dropdown) {
    dropdown.classList.remove("hidden");
    dropdown.classList.remove("scale-y-0");
    dropdown.classList.add("scale-y-100");
  }

  function closeDropdown(dropdown) {
    dropdown.classList.add("scale-y-0");
    dropdown.classList.remove("scale-y-100");
    setTimeout(() => {
      dropdown.classList.add("hidden");
    }, 300);
  }

  function closeOtherDropdowns(activeId) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      if (dropdown.id !== activeId && !dropdown.classList.contains("hidden")) {
        closeDropdown(dropdown);
      }
    });
  }

  window.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown-btn")) {
      const dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach((dropdown) => {
        closeDropdown(dropdown);
      });
    }
  });
});

const menuButton = document.getElementById("menu");
const menuItems = document.getElementById("menu-items");
let count = 0;

const dropdownFunction = () => {
  if (count === 0) {
    count++;
    menuItems.classList.remove("opacity-0", "scale-y-0");
    setTimeout(() => {
      menuItems.classList.add("opacity-100", "scale-y-100");
      menuButton.innerHTML = `<i class="fa-solid fa-x text-white active:animate-spin transition duration-500 ease-in-out"></i>`;
    }, 200);
  } else {
    count = 0;
    menuItems.classList.remove("opacity-100", "scale-y-100");
    menuItems.classList.add("scale-y-0");
    setTimeout(() => {
      menuItems.classList.add("opacity-0");
      menuButton.innerHTML = `<i class="fa-solid fa-bars text-white active:animate-spin transition duration-500 ease-in-out"></i>`;
    }, 300);
  }
};

menuButton.addEventListener("click", dropdownFunction);

const data = [
  [
    {
      text: ` I can't believe how easy it was to find a tenant using this app! It streamlined every step,
       from listing my property to managing inquiries and completing the rental process.
        I secured a trustworthy tenant in just a few days, avoiding the typical frustrations
         of agents and paperwork. The app is so user-friendly and the response time was fantastic.
         I highly recommend it to any landlord wanting a smooth and efficient rental experience!`,
      name: "Shola Banks",
      img:'./public/Home page Images/Ellipse 4.png',
    },
  ],
  [
    {
      text: ` Finding a tenant has never been easier! This app made the entire
            process seamless from listing my property to managing inquiries and
            finalizing the rental. Within days, I secured a reliable tenant
            without the hassle of agents or paperwork. The app’s user-friendly
            interface and fast communication saved me so much time. Highly
            recommend it to any landlord looking for a stress-free rental
            experience`,
      name: "Ijebu Man",
      img:'./public/Home page Images/Image2.jpg',
    },
  ],
  [
    {
      text: ` The renting process has become a breeze with this app! From creating my property listing
       to handling inquiries and sealing the deal, everything was incredibly straightforward.
        I had a dependable tenant lined up within just a few days, all without the usual
         headaches of dealing with agents or excessive paperwork. I wholeheartedly recommend
           it to any landlord seeking a hassle-free rental process!`,
      name: "Bala Titi",
      img:'./public/Home page Images/Image3.jpg',
    },
  ],
];

document.addEventListener("DOMContentLoaded", function () {
  updateStyles(0);

  function updateStyles(index) {
    const spanItems = document.querySelectorAll(".span-1");
    const ownerName = document.getElementById("property-owner");
    const ownerText = document.getElementById("owner-words");
    const ownerImg = document.getElementById("owner-img");

    const currentData = data[index][0];
    ownerText.textContent = currentData.text;
    ownerName.textContent = currentData.name;
    ownerImg.setAttribute('src', currentData.img);

    spanItems.forEach((item, idx) => {
      if (idx === index) {
        item.classList.remove("bg-[#D9DBE1]");
        item.classList.add("bg-[#F4511E]");
      } else {
        item.classList.remove("bg-[#F4511E]");
        item.classList.add("bg-[#D9DBE1]");
      }
    });
  }


  const spanItems = document.querySelectorAll(".span-1");
  spanItems.forEach((span, index) => {
    span.addEventListener("click", () => updateStyles(index));
  });
});
