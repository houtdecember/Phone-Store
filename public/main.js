// navbar
const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[7%]");
}
// dorpdown
function toggleDropdow() {
  let dropdown = document.querySelector("#dropdownButton #dropdown");
  dropdown.classList.toggle("hidden");

}






// carousel functionality
const carouselItems = document.querySelectorAll("[data-carousel-item]");
const indicatorDots = document.querySelectorAll(".indicator-dot");
let currentIndex = 0;
let autoSlideInterval;
let isTransitioning = false;

function showCarouselItem(index) {
  if (isTransitioning) return;
  isTransitioning = true;

  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.remove("hidden");
      item.classList.remove("opacity-0");
      item.classList.add("opacity-100");
    } else {
      item.classList.add("opacity-0");
      setTimeout(() => {
        item.classList.add("hidden");
      }, 700);
    }
  });

  // Update indicator dots
  indicatorDots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove("bg-white/50");
      dot.classList.add("bg-white");
    } else {
      dot.classList.add("bg-white/50");
      dot.classList.remove("bg-white");
    }
  });

  setTimeout(() => {
    isTransitioning = false;
  }, 700);
}

function nextSlide() {
  currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
  showCarouselItem(currentIndex);
}

function prevSlide() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
  showCarouselItem(currentIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Event listeners for buttons
document.querySelector("[data-carousel-prev]").addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

document.querySelector("[data-carousel-next]").addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

// Event listeners for indicator dots
indicatorDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showCarouselItem(currentIndex);
    resetAutoSlide();
  });
});

// Initialize the first item and start auto-slide
showCarouselItem(currentIndex);
startAutoSlide();

// card 4

const items1 = {
  item1: [
    "https://www.ione.com.kh/wp-content/uploads/2025/09/iphone-17-pro-4-cambodia.png",
    "iPhone 17 Pro",
    "From $1559 ",
  ],
  item2: [
    "https://www.giztop.com/media/catalog/product/cache/97cc1143d2e20f2b0c8ea91aaa12053c/o/p/oppo_find_x9_pro_1.jpg",
    "OPPO Find X9 Pro",
    "From $849 ",
  ],
  item3: [
    "https://images.samsung.com/is/image/samsung/p6pim/us/f2507/gallery/us-galaxy-z-fold7-f966-sm-f966ulgaxaa-547827985?$PD_GALLERY_PNG$?$product-card-small-jpg$",
    "Galaxy Z Fold7",
    "From $1599 ",
  ],
  item4: [
    "https://www.giztop.com/media/catalog/product/cache/97cc1143d2e20f2b0c8ea91aaa12053c/v/i/vivo_x300_pro-.jpg",
    "Vivo X300 Pro",
    "From $1299 ",
  ],
};

const cards1 = document.getElementById("card4");
const keys = Object.keys(items1);

cards1.innerHTML = "";
for (let i = 0; i < 4; i++) {
  cards1.innerHTML += `<div class="w-[23%] max-w-[400px] h-[90%] bg-white shadow-xl rounded-md flex flex-col items-center cursor-pointer  hover:scale-105 transition-all duration-500 ease-in-out">
                    <!-- top -->
                    <div class="w-[90%] h-[60%] ">
                        <img class="w-full h-full object-cover" src="${
                          items1[keys[i]][0]
                        }" alt="">
                    </div>
                    <!-- bottom -->
                     <div class="w-full h-[40%] flex flex-col items-center">
                         <div class="w-[90%] h-[30%]">${
                           items1[keys[i]][1]
                         }</div>
                         <div class="w-[90%] h-[30%] text-gray-500  ">${
                           items1[keys[i]][2]
                         } </div>
                        <button class="w-full h-[40%] bg-gray-100 cursor-pointer  flex justify-end items-center px-3 bg-gradient-to-r from-black to-blue-400 text-transparent bg-clip-text">More Details ></button>

                    </div>
                </div>`;
}
// card accessories

const items2 = {
  item1: [
    "https://www.ione.com.kh/wp-content/uploads/2025/07/apple-accessories-cambodia-1.png",
    "Mouse",
  ],
  item2: [
    "https://www.ione.com.kh/wp-content/uploads/2025/07/bag-sleev-accessories-cambodia.png",
    "Bag & Sleeves",
  ],
  item3: [
    "https://www.ione.com.kh/wp-content/uploads/2025/07/cable-cambodia.png",
    "Cables & Adapters",
  ],
  item4: [
    "https://www.ione.com.kh/wp-content/uploads/2025/07/case-protection.png",
    "Cases & Protection",
  ],
  item5: [
    "https://www.ione.com.kh/wp-content/uploads/2025/07/power-bank-accessories-cambodia.png",
    "Power Banks",
  ],
  item6: [
    "https://www.ione.com.kh/wp-content/uploads/2025/07/speaker-headphone-accessories-cambodia.png",
    "Headphones",
  ],
};

const cards2 = document.getElementById("card-accessories");
const keys2 = Object.keys(items2);
cards2.innerHTML = "";
for (let i = 0; i < 6; i++) {
  cards2.innerHTML += `<div class="min-w-[180px] h-[250px] bg-gray-100 rounded-md flex flex-col items-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div class="w-full h-[80%] overflow-hidden rounded-t-md">
        <img class="w-full h-full object-cover" src="${
          items2[keys2[i]][0]
        }" alt="${items2[keys2[i]][1]}">
      </div>
      <div class="w-full h-[20%] flex justify-center items-center text-center px-2">
        <p class="text-sm font-medium">${items2[keys2[i]][1]}</p>
      </div>
    </div>`;
}

// Apple card


