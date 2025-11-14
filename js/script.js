// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll section

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=` + id + `]`)
          .classList.add("active");
      });

      // active section for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
  //   sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click on link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Slider for projects start here
// Slider
const slides = [
  {
    image: "./images/data-analytics.png",
    title: "Data Science Solutions",
    para: "A modern website for a tech company specializing in data science.",
    src: "https://practice-web-2.vercel.app/",
  },
  {
    image: "./images/E-Commerce.png",
    title: "E-Commerce Store",
    para: "A modern website for Devine Coders.",
    src: "https://divinecoders.vercel.app/",
  },
  {
    image: "./images/gsap-apple-web.png",
    title: "gsap apple web",
    para: "A modern website for Apple IPhone using Gsap, Three.js and React.",
    src: "https://gsap-apple-web.vercel.app/",
  },
  {
    image: "./images/WeatherReact.png",
    title: "A modern website for Weather reports",
    para: "A modern website for weather forcasts made in react",
    src: "https://weather-react-five-beta.vercel.app/",
  },

  {
    image: "./images/pocket.png",
    title: "Visa Assistance Hub",
    para: "A modern website for Poket, a visa services company.",
    src: "https://practice-web-3.vercel.app/",
  },
  {
    image: "./images/calculator.jpg",
    title: "A simple Calculator",
    para: "A Simple Calculator web made by me which perform simple calculations.",
    src: "https://my-calculator-eta-smoky.vercel.app/",
  },
];

let activeIndex = 2;

function calculateStyle(index) {
  let stt = 0;
  let style = {};

  if (index === activeIndex) {
    return {
      transform: "none",
      zIndex: 1,
      filter: "none",
      opacity: 1,
    };
  }

  if (index > activeIndex) {
    stt = index - activeIndex;
    style.transform = `translateX(${280 * stt}px) scale(${
      0.8 - 0.1 * stt
    }) perspective(16px) rotateY(-1deg)`;
  } else {
    stt = activeIndex - index;
    style.transform = `translateX(${-280 * stt}px) scale(${
      0.8 - 0.1 * stt
    }) perspective(16px) rotateY(1deg)`;
  }

  style.zIndex = -stt;
  style.filter = "blur(4px)";
  style.opacity = stt > 2 ? 0 : 0.6;

  return style;
}

function createSlider() {
  const slider = document.getElementById("slider");

  // Create items once
  slides.forEach((slide, index) => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
      <div class="image-container">
        <img src="${slide.image}" alt="${slide.title}" onerror="this.src='https://via.placeholder.com/400x300';">
      </div>
      <div class="content">
        <h2>${slide.title}</h2>
        <p>${slide.para}</p>
        <a href="${slide.src}" target="_blank" class="cardBtn">View</a>
      </div>
    `;
    slider.appendChild(item);
  });

  // Add navigation buttons once
  slider.innerHTML += `
    <button class="nav-btn prev" onclick="handlePrev()"><</button>
    <button class="nav-btn next" onclick="handleNext()">></button>
  `;
}

function updateSlider() {
  const items = document.querySelectorAll(".item");
  items.forEach((item, index) => {
    const style = calculateStyle(index);
    item.style.transform = style.transform;
    item.style.zIndex = style.zIndex;
    item.style.filter = style.filter;
    item.style.opacity = style.opacity;
  });
}

function handleNext() {
  activeIndex = Math.min(activeIndex + 1, slides.length - 1);
  updateSlider();
}

function handlePrev() {
  activeIndex = Math.max(activeIndex - 1, 0);
  updateSlider();
}

// Initialize slider and set initial styles
createSlider();
updateSlider();

// Make functions globally available
window.handleNext = handleNext;
window.handlePrev = handlePrev;
// Slider
const text = "MERN Stack Developer";
const typedText = document.getElementById("typed-text");
let index = 0;
let forward = true;

function typeEffect() {
  if (forward) {
    typedText.textContent += text.charAt(index);
    index++;
    if (index === text.length) {
      forward = false;
      setTimeout(typeEffect, 1500); // pause at full text
      return;
    }
  } else {
    typedText.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      forward = true;
    }
  }
  setTimeout(typeEffect, forward ? 150 : 50);
}

typeEffect();
