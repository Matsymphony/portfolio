const scripts = [
  "./assets/js/mainScripts/homeScript.js",
  "./assets/js/mainScript.js",
  "./assets/js/mainScripts/projectsScript.js",
  "./assets/js/mainScripts/aboutScript.js",
  "./assets/js/mainScripts/contactScript.js",
  "./assets/js/mainScripts/messagesScript.js",
];

scripts.forEach((src) => {
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  document.head.appendChild(script);
});
