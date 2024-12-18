function clearMainContentClasses() {
  mainContent.className = "";
}
function loadHomeMainContent() {
  clearMainContentClasses();
  mainContent.classList.add("home-content");
  mainContent.innerHTML = "";

  const skills = [
    {
      name: "HTML",
      experience: "2 years",
      icon: "./assets/images/html-icon.png",
    },
    {
      name: "CSS",
      experience: "2 years",
      icon: "./assets/images/css-icon.png",
    },
    {
      name: "JavaScript",
      experience: "2 years",
      icon: "./assets/images/js-icon.png",
    },
    {
      name: "Git",
      experience: "2 years",
      icon: "./assets/images/git-icon.png",
    },
    {
      name: "Figma",
      experience: "3 years",
      icon: "./assets/images/figma-icon.png",
    },
    {
      name: "Chrome",
      experience: "4 years",
      icon: "./assets/images/chrome-icon.png",
    },
    {
      name: "VSCode",
      experience: "3 years",
      icon: "./assets/images/vscode-icon.png",
    },
    {
      name: "GitHub",
      experience: "3 years",
      icon: "./assets/images/github-icon.png",
    },
  ];
  const aboutSection = document.createElement("div");
  aboutSection.className = "about-section";
  const imageElement = document.createElement("img");
  imageElement.src = "./assets/images/portfolioimg.png";
  imageElement.alt = "Portfolio Image";
  const homeTitle = document.createElement("h2");
  homeTitle.textContent = "About me";
  const homeSubtitle = document.createElement("p");
  homeSubtitle.className = "about-paragraph";
  homeSubtitle.textContent = `Moim celem zawodowym jest dalszy rozwój w dziedzinie informatyki, z naciskiem na tworzenie oprogramowania. 
    Obecnie jestem na trzecim roku studiów inżynierskich na kierunku informatyki stosowanej, ze specjalizacją w inżynierii oprogramowania. Posiadam doświadczenie 
    w pracy z systemami bankowymi co pozwoliło mi zrozumieć potrzeby użytkowników oraz wdrażać skuteczne rozwiązania technologiczne. Dążę do pogłębiania swojej 
    wiedzy w zakresie programowania i rozwoju aplikacji, a moim długofalowym celem jest praca jako programista.`;
  const skillsSection = document.createElement("section");
  skillsSection.className = "skills-section";
  const skillsTitle = document.createElement("h2");
  skillsTitle.textContent = "My Skills";
  const skillsContainer = document.createElement("div");
  skillsContainer.className = "skills-container";

  aboutSection.appendChild(imageElement);
  aboutSection.appendChild(homeTitle);
  aboutSection.appendChild(homeSubtitle);
  mainContent.appendChild(aboutSection);
  skillsSection.appendChild(skillsTitle);
  skillsSection.appendChild(skillsContainer);
  mainContent.appendChild(skillsSection);

  skills.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.className = "skill-card";
    const skillIconWrapper = document.createElement("div");
    skillIconWrapper.className = "skill-icon-wrapper";
    const skillIcon = document.createElement("img");
    skillIcon.src = skill.icon;
    skillIcon.alt = `${skill.name} Icon`;
    skillIconWrapper.appendChild(skillIcon);
    const skillDetails = document.createElement("div");
    skillDetails.className = "skill-details";
    const skillName = document.createElement("h4");
    skillName.textContent = skill.name;
    const dotsContainer = createExperienceDots(
      parseInt(skill.experience.split(" ")[0])
    );
    const skillExperience = document.createElement("p");
    skillExperience.textContent = skill.experience;

    skillDetails.appendChild(skillName);
    skillDetails.appendChild(dotsContainer);
    skillDetails.appendChild(skillExperience);
    skillCard.appendChild(skillIconWrapper);
    skillCard.appendChild(skillDetails);
    skillsContainer.appendChild(skillCard);
  });

  function createExperienceDots(years) {
    const maxDots = 5;
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dots-container";

    for (let i = 0; i < maxDots; i++) {
      const dot = document.createElement("span");
      dot.className = i < years ? "dot filled" : "dot empty";

      dotsContainer.appendChild(dot);
    }

    return dotsContainer;
  }

  const projectsSection = document.createElement("section");
  projectsSection.className = "projects-section";
  const projectsContainer = document.createElement("div");
  projectsContainer.className = "home-projects-container";
  const leftButton = document.createElement("button");
  leftButton.className = "carousel-button left-button";
  const leftIcon = document.createElement("img");
  leftIcon.src = "./assets/images/Arrow left.png";
  leftIcon.alt = "Left";

  leftButton.appendChild(leftIcon);

  leftButton.addEventListener("click", () => {
    startIndex = (startIndex - 1 + projects.length) % projects.length;
    updateCarouselView(projectsContainer);
  });

  const rightButton = document.createElement("button");
  rightButton.className = "carousel-button right-button";
  const rightIcon = document.createElement("img");
  rightIcon.src = "./assets/images/Arrow right.png";
  rightIcon.alt = "Right";
  rightButton.appendChild(rightIcon);
  rightButton.addEventListener("click", () => {
    startIndex = (startIndex + 1) % projects.length;
    updateCarouselView(projectsContainer);
  });
  updateCarouselView(projectsContainer);
  projectsSection.appendChild(projectsContainer);

  if (projects.length > 3) {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "carousel-buttons-container";

    buttonsContainer.appendChild(leftButton);
    buttonsContainer.appendChild(rightButton);
    projectsSection.appendChild(buttonsContainer);
  }
  mainContent.appendChild(projectsSection);
}
function updateCarouselView(projectsContainer) {
  projectsContainer.innerHTML = "";

  if (projects.length === 0) {
    projectsContainer.innerHTML =
      "<p class='no-projects-message'>No projects to display. Add some in the Projects section!</p>";
    return;
  }
  for (let i = 0; i < Math.min(3, projects.length); i++) {
    const projectIndex = (startIndex + i) % projects.length;
    const project = projects[projectIndex];

    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.style.background =
      "url('./assets/images/Rectangle.png') no-repeat center center";
    const cardTitle = document.createElement("h4");
    cardTitle.textContent = project.title;
    const techList = document.createElement("ul");
    project.technologies.forEach((tech) => {
      const techItem = document.createElement("li");
      techItem.textContent = tech;
      techList.appendChild(techItem);
    });

    projectCard.appendChild(cardTitle);
    projectCard.appendChild(techList);
    projectsContainer.appendChild(projectCard);
  }
}
// Indeks początkowego projektu w karuzeli
let startIndex = 0;
