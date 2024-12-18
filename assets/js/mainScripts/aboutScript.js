// Funkcja generująca dynamiczną treść w sekcji main dla 'About'
function loadAboutMainContent() {
  clearMainContentClasses();
  mainContent.classList.add("about-content");
  mainContent.innerHTML = "";

  const backgroundSection = document.createElement("section");
  backgroundSection.className = "about-section";
  const aboutSection2 = document.createElement("div");
  const imageElement = document.createElement("img");
  imageElement.src = "./assets/images/portfolioimg.png";
  imageElement.alt = "Portfolio Image";
  imageElement.className = "about-image";
  const backgroundTitle = document.createElement("h2");
  backgroundTitle.textContent = "My background";
  backgroundTitle.className = "about-title";
  const backgroundText = document.createElement("p");
  backgroundText.textContent = `Moim celem zawodowym jest dalszy rozwój w dziedzinie informatyki, 
    z naciskiem na tworzenie oprogramowania. Obecnie jestem na trzecim 
    roku studiów inżynierskich na kierunku informatyki stosowanej, ze 
    specjalizacją w inżynierii oprogramowania. Posiadam doświadczenie w 
    pracy z systemami bankowymi co pozwoliło mi zrozumieć potrzeby użytkowników 
    oraz wdrażać skuteczne rozwiązania technologiczne. Dążę do pogłębiania 
    swojej wiedzy w zakresie programowania i rozwoju aplikacji, a moim 
    długofalowym celem jest praca jako programista.`;
  backgroundText.className = "about-paragraph";
  const hobbiesSection = document.createElement("section");
  hobbiesSection.className = "about-section";
  const hobbiesTitle = document.createElement("h2");
  hobbiesTitle.textContent = "My hobbies and interests";
  hobbiesTitle.className = "about-title";
  const hobbiesText = document.createElement("p");
  hobbiesText.textContent = `Interesuje się fotografią, ktróra jest jednocześnie moim hobby, 
    dodatkowo w chwilach wolnych realizuję sesje zdjęciowe oraz pełnoklatkowe nagrania filmowe. 
    Ciekawią mnie zagadnienia związane ze światem IT i informatyką. 
    Oprócz tego lubię biegać i aktywnie spędzać czas.   `;
  hobbiesText.className = "about-paragraph";

  mainContent.appendChild(aboutSection2);
  backgroundSection.appendChild(imageElement);
  backgroundSection.appendChild(backgroundTitle);
  backgroundSection.appendChild(backgroundText);
  mainContent.appendChild(backgroundSection);
  hobbiesSection.appendChild(hobbiesTitle);
  hobbiesSection.appendChild(hobbiesText);
  mainContent.appendChild(hobbiesSection);

  const buttonWrapper = document.createElement("div");
  buttonWrapper.className = "button-wrapper";
  const contactButton = document.createElement("button");
  contactButton.className = "add-project-button";
  const contactButtonArrow = document.createElement("img");
  contactButtonArrow.className = "contactButtonArrow";
  contactButtonArrow.src = "./assets/images/Arrow right-4.png";
  contactButtonArrow.alt = "Left Arrow img";
  contactButton.textContent = "Contact me";

  contactButton.addEventListener("click", () => {
    updateHeaderContent("CONTACT");
    loadContactMainContent();
    const navLinksHeader = document.querySelectorAll(
      ".nav-list-header .nav-link"
    );
    const contactLink = [...navLinksHeader].find(
      (link) => link.textContent.trim() === "CONTACT"
    );
    if (contactLink) {
      syncActiveLink(contactLink);
    }
  });
  contactButton.appendChild(contactButtonArrow);
  buttonWrapper.appendChild(contactButton);
  mainContent.appendChild(buttonWrapper);
}
