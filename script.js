const enableDarkMode = () => {
  document.body.classList.add('dark-mode'); // adding dark-mode to the class names so that their style will be changed by CSS
  localStorage.setItem('darkmode', 'active'); // setting the value in localstorage after the change occurred so that we'll be able to check for it in our later function
};

const disableDarkmode = () => {
  document.body.classList.remove('dark-mode'); // remove dark-mode from the class names to revert back to their default 'light' style
  localStorage.setItem('darkmode', 'inactive'); //setting the value in localstorage to check later
};

document.addEventListener('DOMContentLoaded', () => { // making the function run after all of the DOM has been loaded. Should be unneccessary, but the toggle was failing without.
  const themeSwitch = document.getElementById('theme-switch'); // creating a variable for the id of our button 

  let darkmode = localStorage.getItem('darkmode'); // setting darkmode = the value in local storage
  if (darkmode === 'active') enableDarkMode(); // checking if darkmode is set to active in local storage, if so, enable it.

  if (themeSwitch) { // if our button exists on the page
    themeSwitch.addEventListener('click', () => { //attaching a click listener to the button we mapped as a variable earlier
      darkmode = localStorage.getItem('darkmode'); // checking for dark mode again
      if (darkmode !== 'active') {
        enableDarkMode();
      } else {
        disableDarkmode();
      }
    });
  }

  function setDynamicGreeting() {
    const greetingElement = document.getElementById('greeting'); // setting greetingElement as a variable equal to the location within the DOM
    if (!greetingElement) return; // if we can't find an element by the Id 'greeting' on the DOM for that page, exit the function(avoids error in console)
    const hour = new Date().getHours(); // getting the current hour of the day
    let message = '';
    if (hour < 12) {
      message = 'Good Morning! I hope you slept well';
    } else if (hour < 18) {
      message = 'Good Afternoon! I hope your day has been going well.';
    } else {
      message = 'Good Evening! Time to wind down.';
    }
    greetingElement.innerText = message; //modifying the text to our message
  }
  setDynamicGreeting(); // run the function 

const listItems = document.querySelectorAll("li"); //get a list of all <li>

function toggleDone(e) {
 e.target.classList.toggle("done") //assign the class done to the object if it wasn't already marked as such, and remove it if it was
}

  listItems.forEach((item) => {
    item.addEventListener('click', toggleDone); 
  });
});