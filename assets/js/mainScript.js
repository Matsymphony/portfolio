// Zmienne globalne
const mainContent = document.querySelector("#main-content");
const mainTitle = document.querySelector("#main-upper-title h1");
const mainSubtitle = document.querySelector("#main-upper-title h2");
const navLinksHeader = document.querySelectorAll(".nav-list-header .nav-link");
const navLinksFooter = document.querySelectorAll(".nav-list-footer .nav-link");

// Globalna lista projektów
let projects = [
  {
    technologies: ["html", "css", "java"],
    title: "Pierwszy projekt w obiekcie",
  },
  {
    technologies: ["html", "css", "java"],
    title: "Drugi projekt w obiekcie",
  },
  {
    technologies: ["html", "css", "java"],
    title: "Trzeci projekt w obiekcie",
  },
  {
    technologies: ["html", "css", "java"],
    title: "Czwarty projekt w obiekcie",
  },
];

// Tablica przechowująca wiadomości
let messages = [
  {
    name: "Matthew",
    email: "matthewtest@test.pl",
    message: "Pierwsza wiadomość w obiekcie",
  },
  {
    name: "Matthew",
    email: "matthewtest@test.pl",
    message: "Druga wiadomość w obiekcie",
  },
  {
    name: "Matthew",
    email: "matthewtest@test.pl",
    message: "Trzecia wiadomość w obiekcie",
  },
];

// Dynamiczne menu nawigacyjne
function loadMainContent(pageName) {
  switch (pageName) {
    case "HOME":
      loadHomeMainContent();
      break;
    case "PROJECTS":
      loadProjectsMainContent();
      break;
    case "ABOUT":
      loadAboutMainContent();
      break;
    case "CONTACT":
      loadContactMainContent();
      break;
    case "MESSAGES":
      loadMessagesMainContent();
      break;
    default:
      mainContent.innerHTML = "<p>Page not found.</p>";
  }
}
// Dynamiczne menu nawigacyjne hamburger
function toggleMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navListHeader = document.querySelector(".nav-list-header");
  hamburgerMenu.addEventListener("click", () => {
    navListHeader.classList.toggle("active");
    hamburgerMenu.classList.toggle("clicked");
  });
}
// Dynamiczna zmiana nagłówków
function updateHeaderContent(pageName) {
  switch (pageName) {
    case "HOME":
      mainTitle.textContent = "MATEUSZ LATKOWSKI";
      mainSubtitle.textContent = "WEB-DESIGNER";
      break;
    case "PROJECTS":
      mainTitle.textContent = "MY PROJECTS";
      mainSubtitle.textContent = "MADE WITH LOVE";
      break;
    case "ABOUT":
      mainTitle.textContent = "ABOUT ME";
      mainSubtitle.textContent = "IT’S A-ME, Matthew!";
      break;
    case "CONTACT":
      mainTitle.textContent = "CONTACT ME";
      mainSubtitle.textContent = "SAY HELLO TO ME";
      break;
    case "MESSAGES":
      mainTitle.textContent = "MESSAGES";
      mainSubtitle.textContent = "MESSAGE FROM THE INTERESTED PERSON";
      break;
    default:
      mainTitle.textContent = "PAGE NOT FOUND";
      mainSubtitle.textContent = "";
  }
}
// Usunięcie i restart clas w main-content
function clearMainContentClasses() {
  mainContent.className = "";
}
// Dynamiczna synchronizacja menu header i footer
function addClickHandlers() {
  const navLinksHeader = document.querySelectorAll(
    ".nav-list-header .nav-link"
  );
  const navLinksFooter = document.querySelectorAll(
    ".nav-list-footer .nav-link"
  );

  [...navLinksHeader, ...navLinksFooter].forEach((link) => {
    link.addEventListener("click", () => {
      syncActiveLink(link);
    });
  });
  // Domyślnie podświetl pierwszy link i ustaw nagłówki
  syncActiveLink(navLinksHeader[0]);
}

// Główna funkcja synchronizacji aktywnego linku
function syncActiveLink(clickedLink) {
  clearActiveLinks();

  const linkIndexHeader = [...navLinksHeader].indexOf(clickedLink);
  if (linkIndexHeader !== -1) {
    setActiveLink(linkIndexHeader, true);
    updatePageContent(linkIndexHeader, true);
  } else {
    const linkIndexFooter = [...navLinksFooter].indexOf(clickedLink);
    if (linkIndexFooter !== -1) {
      setActiveLink(linkIndexFooter, false);
      updatePageContent(linkIndexFooter, false);
    }
  }
}
// Dynamiczne usunięcie poprzednio naciśniętej zakładki menu nawigacyjnego
function clearActiveLinks() {
  [...navLinksHeader, ...navLinksFooter].forEach((link) =>
    link.classList.remove("active")
  );
}
// Ustawienie aktywnego linku na podstawie indeksu
function setActiveLink(linkIndex, isHeader = true) {
  if (isHeader) {
    navLinksHeader[linkIndex].classList.add("active");
    navLinksFooter[linkIndex].classList.add("active");
  } else {
    navLinksFooter[linkIndex].classList.add("active");
    navLinksHeader[linkIndex].classList.add("active");
  }
}
// Aktualizacja zawartości strony
function updatePageContent(linkIndex, isHeader = true) {
  const activeLink = isHeader
    ? navLinksHeader[linkIndex]
    : navLinksFooter[linkIndex];
  const pageName = activeLink.textContent.trim();
  updateHeaderContent(pageName);
  loadMainContent(pageName);
}
toggleMenu();
addClickHandlers();
