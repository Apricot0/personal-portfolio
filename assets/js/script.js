'use strict';

const currentDate = new Date();

// Format the date as "DD Month, YYYY"
const formattedDate = currentDate.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

// Set the formatted date as the content of the <time> element
document.getElementById('currentDate').textContent = formattedDate;


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


//--------------------SIDEBAR----------------//
// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


//--------------------testimonials----------------//
// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


//--------------------PAGE NAV----------------//
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
console.log(navigationLinks);
const main_page_group = document.querySelector(".main-page-group");
const main_pages = main_page_group.querySelectorAll("[data-page]");
const contact_page = document.querySelector(".contact");

// add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    // Remove "active" class from all navigation links
    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.remove("active");
    }

    // Add "active" class to the clicked navigation link
    this.classList.add("active");

    // Your existing code for handling other actions based on the link clicked
    if (this.innerHTML.toLowerCase() === "contact") {
      contact_page.classList.add("active");
      for (let j = 0; j < main_pages.length; j++) {
        main_pages[j].classList.remove("active");
      }
      window.scrollTo(0, 0);
    } else {
      contact_page.classList.remove("active");
      for (let j = 0; j < main_pages.length; j++) {
        main_pages[j].classList.add("active");
      }
      // console.log(this.innerHTML.toLowerCase());
      if (this.innerHTML.toLowerCase() === "about") {
        const about = document.querySelector(".about");
        document.documentElement.scrollIntoView({ behavior: "smooth" });
      } else if (this.innerHTML.toLowerCase() === "cv") {
        const experience = document.querySelector(".experience");
        experience.scrollIntoView({ behavior: "smooth" });
      } else if (this.innerHTML.toLowerCase() === "projects") {
        const projects = document.querySelector(".projects");
        projects.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

function openFileInBrowser(filePath, fileName) {
  const link = document.createElement('a');
  link.href = filePath;
  link.target = '_blank'; // Open in a new tab/window
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadCV() {
  const cvFilePath = 'https://apricot0.github.io/personal-portfolio/assets/file/Qingguang_Zeng_resume.pdf';
  const link = document.createElement('a');
  link.href = cvFilePath;
  link.download = 'qingguang_zeng_cv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadPressRelease() {
  // const release = '../assets/file/Press-release.pdf';
  // const link = document.createElement('a');
  // link.href = release;
  // link.download = 'press_release.pdf';
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);

  const release = 'https://apricot0.github.io/personal-portfolio/assets/file/Press-release.pdf';
  openFileInBrowser(release, 'press_release.pdf');
}

function downloadInstruction() {
  // const release = '../assets/file/Github_pages_Instruction.pdf';
  // const link = document.createElement('a');
  // link.href = release;
  // link.download = 'Github_pages_Instruction.pdf';
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);

  const instruction = 'https://apricot0.github.io/personal-portfolio/assets/file/Github_pages_Instruction.pdf';
  openFileInBrowser(instruction, 'Github_pages_Instruction.pdf');
}