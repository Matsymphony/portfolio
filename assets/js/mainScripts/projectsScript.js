// Funkcja generująca dynamiczną treść w sekcji main dla 'Projects'
function loadProjectsMainContent() {
  clearMainContentClasses();
  mainContent.classList.add("projects-content");
  mainContent.innerHTML = "";

  const projectWrapper = document.createElement("div");
  projectWrapper.className = "project-wrapper";
  const addButton = document.createElement("button");
  addButton.className = "add-project-button";
  addButton.textContent = "Add project";
  const addButtonImage = document.createElement("img");
  addButtonImage.className = "addButtonImage";
  addButtonImage.src = "./assets/images/Add Image.png";
  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";

  if (projects.length === 0) {
    projectContainer.innerHTML =
      "<p class='no-projects-message'>There are no projects to display</p>";
  } else {
    renderProjects(projectContainer);
  }
  const modal = createProjectModal(projectContainer);
  addButton.addEventListener("click", () => {
    openModal(modal);
  });

  addButton.appendChild(addButtonImage);
  projectWrapper.appendChild(addButton);
  projectWrapper.appendChild(projectContainer);
  mainContent.appendChild(projectWrapper);
  document.body.appendChild(modal);
}

function resetModalFields(modal) {
  const projectTitle = modal.querySelector("#project-title");
  const projectTechnologies = modal.querySelector("#project-technologies");
  const titleError = modal.querySelector("#title-error");
  const techError = modal.querySelector("#tech-error");

  projectTitle.value = "";
  projectTechnologies.value = "";
  titleError.textContent = "";
  techError.textContent = "";
  projectTitle.style.borderColor = "";
  projectTechnologies.style.borderColor = "";
}

function openModal(modal) {
  modal.classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function createProjectModal(projectContainer) {
  const modal = document.createElement("div");
  modal.className = "modal hidden";

  modal.innerHTML = `
        <div class="modal-content">
          <span class="close-button">&times;</span>
          <h3>Project title</h3>
          <input type="text" id="project-title" placeholder="Project title" />
          <span class="error" id="title-error"></span>
          <h3>Technologies</h3>
          <input type="text" id="project-technologies" placeholder="html, css, javascript" />
          <span class="error" id="tech-error"></span>
          <button id="save-project-button">
            <img src="./assets/images/Add Image.png" alt="Add" class="add-icon" />
            Add project
          </button>
        </div>
      `;

  const projectTitleInput = modal.querySelector("#project-title");
  const projectTechnologiesInput = modal.querySelector("#project-technologies");
  const titleError = modal.querySelector("#title-error");
  const techError = modal.querySelector("#tech-error");

  projectTitleInput.addEventListener("input", () => {
    if (projectTitleInput.value.trim().length < 3) {
      projectTitleInput.style.borderColor = "red";
      titleError.textContent = "The title must be at least 3 characters long.";
    } else {
      projectTitleInput.style.borderColor = "black";
      titleError.textContent = "";
    }
  });

  projectTechnologiesInput.addEventListener("input", () => {
    if (projectTechnologiesInput.value.trim().length < 1) {
      projectTechnologiesInput.style.borderColor = "red";
      techError.textContent = "Please add some technologies.";
    } else {
      projectTechnologiesInput.style.borderColor = "black";
      techError.textContent = "";
    }
  });

  modal.querySelector(".close-button").addEventListener("click", () => {
    closeModal(modal);
    resetModalFields(modal);
  });

  modal.querySelector("#save-project-button").addEventListener("click", () => {
    saveProject(modal, projectContainer);
  });

  return modal;
}
function closeModal(modal) {
  modal.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function saveProject(modal, projectContainer) {
  const projectTitle = modal.querySelector("#project-title");
  const projectTechnologies = modal.querySelector("#project-technologies");
  const titleError = modal.querySelector("#title-error");
  const techError = modal.querySelector("#tech-error");

  let hasError = false;

  if (projectTitle.value.trim().length < 3) {
    titleError.textContent = "The title must be at least 3 characters long.";
    projectTitle.style.borderColor = "red";
    hasError = true;
  } else if (projectTitle.value.trim().length > 30) {
    titleError.textContent = "The title must not exceed 30 characters.";
    projectTitle.style.borderColor = "red";
    hasError = true;
  } else {
    titleError.textContent = "";
    projectTitle.style.borderColor = "black";
  }

  if (!projectTechnologies.value.trim()) {
    techError.textContent = "Please add some technologies.";
    projectTechnologies.style.borderColor = "red";
    hasError = true;
  } else {
    techError.textContent = "";
    projectTechnologies.style.borderColor = "black";
  }

  if (hasError) return;

  projects.push({
    title: projectTitle.value.trim(),
    technologies: projectTechnologies.value
      .trim()
      .split(",")
      .map((tech) => tech.trim()),
  });

  renderProjects(projectContainer);

  closeModal(modal);
  resetModalFields(modal);
}

function renderProjects(projectContainer) {
  projectContainer.innerHTML = "";
  projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.style.backgroundImage = "url('./assets/images/Rectangle.png')";

    const cardTitle = document.createElement("h4");
    cardTitle.textContent = project.title;
    const techList = document.createElement("ul");
    project.technologies.forEach((tech) => {
      const techItem = document.createElement("li");
      techItem.textContent = tech;
      techList.appendChild(techItem);
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-project";
    const trashIcon = document.createElement("img");
    trashIcon.src = "assets/images/Vector2x.png";
    deleteButton.appendChild(trashIcon);
    deleteButton.addEventListener("click", () => {
      projects.splice(index, 1);
      renderProjects(projectContainer);
    });

    projectCard.appendChild(cardTitle);
    projectCard.appendChild(techList);
    projectCard.appendChild(deleteButton);
    projectContainer.appendChild(projectCard);
  });

  if (projects.length === 0) {
    projectContainer.innerHTML =
      "<p class='no-projects-message'>There are no projects to display</p>";
  }
}
