/* change the background to black */
document.body.style.backgroundColor = 'black';
/* create a menu with home,about,contact */
var menu = document.createElement('div');
menu.innerHTML = '<a href="">Home</a> | <a href="">About</a> | <a href="">Contact</a>';
document.body.appendChild(menu);
/* change the color of the menu into white */
menu.style.color = 'white';
/* change the nav items into white */
var navItems = document.getElementsByTagName('a');
for (var i = 0; i < navItems.length; i++) {
  navItems[i].style.color = 'white';
}
/* remove decoration */
for (var i = 0; i < navItems.length; i++) {
  navItems[i].style.textDecoration = 'none';
}
/* add spacing on the menu items */
for (var i = 0; i < navItems.length; i++) {
  navItems[i].style.padding = '10px';
}
/* change the nav menu spacing into 20px */
for (var i = 0; i < navItems.length; i++) {
  navItems[i].style.padding = '20px';
}
/* center the menu */
menu.style.textAlign = 'center';
/* add a padding to the top of the menu */
menu.style.paddingTop = '20px';
/* change the background of the menu into white */
menu.style.backgroundColor = 'white';
/* change the nav font color into black */
for (var i = 0; i < navItems.length; i++) {
  navItems[i].style.color = 'black';
}
/* add 5px padding to the nav items */
for (var i = 0; i < navItems.length; i++) {
  navItems[i].style.padding = '5px';
}
/* add padding bottom to the menu */
menu.style.paddingBottom = '20px';
/* add a banner after the menu */
var banner = document.createElement('div');
banner.innerHTML = '<img src="https://www.w3schools.com/w3css/img_lights.jpg" style="width:100%">';
document.body.appendChild(banner);
/* change the banner height into 300px */
banner.style.height = '300px';
/* change the banner height into 100px */
banner.style.height = '100px';
/* change the image height into 100px */
banner.firstChild.style.height = '100px';
/* change the image height into 150px */
banner.firstChild.style.height = '150px';
/* set padding 0 and margin 0 to the body */
document.body.style.padding = '0';
document.body.style.margin = '0';
/* change the background into white */
document.body.style.backgroundColor = 'white';
/* add 2 columns after the banner */
var columns = document.createElement('div');
columns.innerHTML = '<div style="width:50%;float:left;">Column 1</div><div style="width:50%;float:left;">Column 2</div>';
document.body.appendChild(columns);
/* on the column 1 add a slideshow */
columns.firstChild.innerHTML = '<div class="w3-content w3-section" style="max-width:500px"><img class="mySlides" src="https://www.w3schools.com/w3css/img_fjords.jpg" style="width:100%"><img class="mySlides" src="https://www.w3schools.com/w3css/img_lights.jpg" style="width:100%"><img class="mySlides" src="https://www.w3schools.com/w3css/img_mountains.jpg" style="width:100%"><img class="mySlides" src="https://www.w3schools.com/w3css/img_nature.jpg" style="width:100%"></div>';
/* add a header before the slideshow */
columns.firstChild.innerHTML = '<h2>Slideshow</h2><div class="w3-content w3-section" style="max-width:500px"><img class="mySlides" src="https://www.w3schools.com/w3css/img_fjords.jpg" style="width:100%"><img class="mySlides" src="https://www.w3schools.com/w3css/img_lights.jpg" style="width:100%"><img class="mySlides" src="https://www.w3schools.com/w3css/img_mountains.jpg" style="width:100%"><img class="mySlides" src="https://www.w3schools.com/w3css/img_nature.jpg" style="width:100%"></div>';
/* change the header color into black */
columns.firstChild.firstChild.style.color = 'black';
/* remove the slideshow */
columns.firstChild.innerHTML = '<h2>Slideshow</h2>';
/* add <h1>hello world</h1> after the banner */
var helloWorld = document.createElement('div');
helloWorld.innerHTML = '<h1>Hello World</h1>';
document.body.appendChild(helloWorld);
/* add padding top the h1 */
helloWorld.firstChild.style.paddingTop = '20px';
/* align the h1 to the center of the screen */
helloWorld.firstChild.style.textAlign = 'center';
/* add padding 20px to the h1 */
helloWorld.firstChild.style.paddingTop = '20px';
/* add vanta.js after the banner */
var vanta = document.createElement('script');
vanta.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.17/dist/vanta.net.min.js';
document.body.appendChild(vanta);
/* remove h1 */
document.body.removeChild(helloWorld);
/* add a harry potter story after the banner */
var harryPotter = document.createElement('div');
harryPotter.innerHTML = '<h2>Harry Potter</h2><p>Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry\'s struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.</p>';
document.body.appendChild(harryPotter);
/* add 50px padding bottom after the banner */
harryPotter.style.paddingBottom = '50px';
/* image padding bottom 50px */
harryPotter.firstChild.style.paddingBottom = '50px';
/* h1 padding top 50px */
harryPotter.firstChild.style.paddingTop = '50px';
/* add padding to the main content */
harryPotter.style.padding = '50px';
/* change the image into harry potter */
harryPotter.firstChild.firstChild.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_wordmark.svg/1200px-Harry_Potter_wordmark.svg.png';
/* change the banner into harry potter picture */
banner.firstChild.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_wordmark.svg/1200px-Harry_Potter_wordmark.svg.png';
/* undo the last change */
banner.firstChild.src = 'https://www.w3schools.com/w3css/img_lights.jpg';
/* redo the last change */
banner.firstChild.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_wordmark.svg/1200px-Harry_Potter_wordmark.svg.png';
/* undo the change */
banner.firstChild.src = 'https://www.w3schools.com/w3css/img_lights.jpg';
/* create a footer */
var footer = document.createElement('div');
footer.innerHTML = '<h2>Footer</h2>';
document.body.appendChild(footer);
/* change the footer background color into black */
footer.style.backgroundColor = 'black';
/* add facebook icon to the footer */
footer.innerHTML = '<h2>Footer</h2><a href=""><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" style="width:50px;height:50px;"></a>';
/* align the facebook logo to the center */
footer.firstChild.style.textAlign = 'center';
/* align the facebook icon to the center */
footer.firstChild.firstChild.style.margin = '0 auto';
/* set footer contents to the center */
footer.firstChild.style.textAlign = 'center';
/* align footer items to center */
footer.firstChild.firstChild.style.margin = '0 auto';
/* add center tag to the facebook icon */
footer.firstChild.firstChild.style.margin = '0 auto';
/* set facebook link to https://www.facebook.com/makkunii */
footer.firstChild.firstChild.href = 'https://www.facebook.com/makkunii';
/* remove footer */
document.body.removeChild(footer);
/* create a footer with social media links */
var footer = document.createElement('div');
footer.innerHTML = '<h2>Footer</h2><a href="https://www.facebook.com/makkunii"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" style="width:50px;height:50px;"></a><a href="https://www.instagram.com/makkunii/"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_color-512.png" style="width:50px;height:50px;"></a><a href="https://twitter.com/makkunii"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-512.png" style="width:50px;height:50px;"></a>';
document.body.appendChild(footer);
/* align the footer items to the center */
footer.firstChild.firstChild.style.margin = '0 auto';
/* padding right 50% to the footer content */
footer.firstChild.style.paddingRight = '50%';
/* remove footer */
document.body.removeChild(footer);
/* add a footer */
var footer = document.createElement('div');
footer.innerHTML = '<h2>Footer</h2><a href="https://www.facebook.com/makkunii"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" style="width:50px;height:50px;"></a><a href="https://www.instagram.com/makkunii/"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_color-512.png" style="width:50px;height:50px;"></a><a href="https://twitter.com/makkunii"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-512.png" style="width:50px;height:50px;"></a>';
document.body.appendChild(footer);
/* change the background color to black */
footer.style.backgroundColor = 'black';
