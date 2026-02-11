const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkmode', 'active'); 
};

const disableDarkmode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkmode', 'inactive'); 
};


let darkmode = localStorage.getItem('darkmode');
if (darkmode === "active") enableDarkMode();


themeSwitch.addEventListener("click", () => {
  
  darkmode = localStorage.getItem('darkmode'); 
  
  if (darkmode !== "active") {
    enableDarkMode();
  } else {
    disableDarkmode();
  }
});

function setDynamicGreeting() {
  const greetingElement = document.getElementById('greeting');
  const hour = new Date().getHours();
  let message = "";
  
  if (hour < 12) {
    message = "Good Morning! I hope you slept well";

  } else if (hour < 18) {
    message = "Good Afternoon! I hope your day has been going well.";

  } else {
    message = "Good Evening! Time to wind down.";

  }
  greetingElement.innerText = message;
}
setDynamicGreeting();
