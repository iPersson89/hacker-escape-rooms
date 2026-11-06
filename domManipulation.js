const header = document.querySelector("header");
const headerContainer = document.querySelector("header > div");

const hamburgerBtn = document.createElement("button");
hamburgerBtn.className = "flex md:hidden items-center justify-center p-2 bg-transparent -mt-10 cursor-pointer";
hamburgerBtn.id = "main-menu-toggle";
hamburgerBtn.setAttribute("aria-expanded", "false");
hamburgerBtn.setAttribute("aria-controls", "main-menu");
hamburgerBtn.setAttribute("aria-label", "Open menu");

const hamburgerIcon = document.createElement("img");
hamburgerIcon.src = "img/hamburgerMenu.png";
hamburgerIcon.alt = "Öppna Meny";
hamburgerIcon.className = "w-12 h-12 object-contain";

hamburgerBtn.appendChild(hamburgerIcon);
headerContainer.appendChild(hamburgerBtn);


const mainMenu = document.createElement("nav");
mainMenu.id = "main-menu";
mainMenu.className = "font-roboto animate-fade-in fixed inset-4 z-50 hidden flex flex-col items-center justify-center space-y-10 bg-[#011827] px-4 text-3xl font-bold ring-16 ring-white/30 md:static md:flex md:flex-row md:space-y-0 md:space-x-24 md:bg-transparent md:pt-6 md:pb-2 md:text-xl md:ring-0";

const menuClose = document.createElement("button");
menuClose.className = "font-roboto absolute top-6 right-6 p-2 text-7xl text-white hover:text-gray-300 md:hidden cursor-pointer";
menuClose.id = "main-menu-close";
menuClose.setAttribute("aria-label", "Close menu");

const closeIcon = document.createElement("img");
closeIcon.src = "img/close.png";
closeIcon.alt = "Closing Menu";

menuClose.appendChild(closeIcon);
mainMenu.appendChild(menuClose);

const menuLinks = [
  { text: "Play online", href: "#play online" },
  { text: "Play on site", href: "#play on site" },
  { text: "The story", href: "#the story" },
  { text: "Contact us", href: "#contact us", className: "hover:opacity-90 md:text-[#8ACFE5]" }
];

menuLinks.forEach(linkData => {
  const a = document.createElement("a");
  a.href = linkData.href;
  a.textContent = linkData.text;
  a.className = linkData.className || "hover:opacity-90";
  mainMenu.appendChild(a);
});


header.appendChild(mainMenu);


hamburgerBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});

menuClose.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});
