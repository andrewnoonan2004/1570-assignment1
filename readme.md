# Website Rational
I made a website about linux, because it is a topic I enjoy, and gave me an opportunity to write about it.
## Page description
The *about page* was just a short sentence about me, and an example to use javascript to dynamically greet based on the time.
The *debian page* was used for giving a short overview about debian, same with the other distro pages. 
The *index* page was used for providing an overview of linux, and a simplified table to compare the distros.
## Sources used in the creation of this website
[Freecodecamp html starter](https://www.freecodecamp.org/news/html-starter-template-a-basic-html5-boilerplate-for-index-html/)
referenced for making the basic boilerplate of the website
[StackOverflow Nav bar](https://stackoverflow.com/questions/32009863/best-way-to-create-a-navigation-bar)
used for deciding how to make the nav bar
[Codetheweb](https://codetheweb.blog/style-a-navigation-bar-css/)
Tips for styling navbar
[MDN Hover](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:hover)
basic little hover effect 
[Gruvbox Color Scheme](https://github.com/morhetz/gruvbox?tab=readme-ov-file)
Color Scheme used for this website
[Create a Dark Mode Switch](https://www.youtube.com/watch?v=_gKEUYarehE)
very useful video for creating an aesthetic dark-mode switch

[MDN tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table) 
boilerplate table stuff
[Event listener stuff](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
)

## HTML Validation
No errors or warnings!
https://validator.w3.org/nu/#file
## CSS Validation
No errors were reported!
https://jigsaw.w3.org/css-validator/validator$link

## HTML Used
For the HTML, as instructed, I tried to use the various semantic elements and used divs for unique styling. I used <header> to make the navigation bar with a nested <nav> class, where I link to all of the pages that I made.
<buttons> were used for the various buttons I used, and <ul> was used for unordered lists. <table> was used for making a table

## CSS Used
The CSS that I used was a bit more interested. I wanted to make my website conform to my favorite colorscheme, Gruvbox. As such, I styled a bunch of the elements to abide by that colorscheme, and also created dark-mode versions that would be triggered by the button I created with in the HTML.
## JavaScript used
I had 6 javascript functions, with two of those being attached to event listeners to do specific things. My first two are to modify the localstorage and modify the html class names, so as to revert or reinstate the user preference from the last time the button was clicked. My themeSwitch function is essentially just calling these two functions, adding the event listener to the button. My next function is to set the dynamic greeting for the *About Me* page. My last one, which was also my last one with an eventlistener, is to cross out items in a list after they are clicked