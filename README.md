# Interactive Front-End Development Milestone Project

## memoryON! A memory game for everyone.

This website has been developed for Code Institute´s Interactive Front End Development Project 2.
memoryON! is a simple memorygame for everyone. The App is composed by a simple layout with impactfuil colors with the objective of making the navigation of the user clear and animated. 

## UX

This Project has been made according to the knowledge acquired during the HTML, CSS User-Centric Front End Development lessons and JavaScript Interactive Front End section as well. 
The App Game has been built up following the principle Mobile First and the UX is designed using mostly the guidelines of Bootstrap.

The main idea was to develop a memory game suitable for everyone, following, from an UX´s point of view, the following outline:


- The first user interaction takes place in the Overlay where you have the possibility to register with your username and start playing. 
- Starting from the left side of the screen, we have the game control panel - composed by Play, Reset and Mute buttons. Going down, we find two sections dedicated to: Instructions of the game and how to change Player Name
- The right side of the dashboard is dedicated to informations on the level and score achieved as well as to the display of the cards (start of the game).
- At the top there is the logo of the App depicting the main objective of the game, namely to match the cards with the same color.

## Scenarios 

As announced memoryON is a game for any age and really for everyone.

###### Adult & Child users:

- The memory game is quite intuitive and consists, as mentioned, in matchare the cards with the same color. To make it accessible to everyone, the instructions were written in a simple and straightforward manner and different levels have been programmed to pleasantly entertain the user.

- To make it even more appealing for children, funny ringtones are added, that are activated at every interaction with the game platform (e.g: passing the level, matching the cards or simply flip them back)

- It is possible in any case to deactivate the sound with the button on the dashboard, making the app usable even in public places.


## Futures

As announced above the style of the App is really simple and intuitive and is composed by the structure as described below:

- Right side of Dashboard: this part of the game is composed of all the buttons functional to the same one including also the instructions and alternative functionalities like "player change". The App is totally responsive also from Mobile users, all functions have been integrated using the "Hamburger" Menu as per Bootstrap reference

- Top of Dashboard: in this section you have all the tools you need to control your progress levels in the game as well as the set player name. 

- GameDashboard: this section is the game table where the cards will be displayed

The stylistic and structural realization of the entire project was performed with reference to Bootstrap and stylistically modified with CSS.

###### Game buttons control

- Play button: the play button has been stylized with CSS and can be activated with a JavaScript class. After a certain period of time, the session will expire. To reactivate the game mode just refresh the page

- Reset buton: with the reset button all the progress of the game will be canceled and you will start from scratch. when the button is clicked, a reset confirmation window will open.

- Volume On/Off: as with the Play button, the same rule applies to the Sounds as well. The button was stylized with Css and operated with a Javascript class. After selecting the mute mode, clicking again can return to sound mode.


###### Menu

The application menu, as mentioned, is quite simple and contains:

- Instruction Modal: the instructions are explained in a clear and linear way to guarantee maximum usability to all

- Change Player Section: The App gives the possibility to change the selected player from the initial Fade Modal. Attention, the name of the player is fundamental. In case of non-selection, a generic name "Player" will be saved or the alert function will be activated. 


###### GameDashboard

The game was developed starting from an array "card List" function and an Onclick able to create a random variable of playing cards on the table.
The initial dashboard will create a 4-card variable whose number increases starting from the difficulty level (5) where 10 cards will be added.
The user will always have to match two cards with the same color to pass the level.

The Timer is activated at the passage of the 1st level (the simplest).


## Futures left to Implement 

- Game graphics in general.

- The ability to simultaneously save multiple names in the player list and have the ability to activate multiplayer games.

- Adding levels with different degrees of complexity.


## Technologies Used

For this Project, I have used:

[HTML5](https://en.wikipedia.org/wiki/HTML5)

- The project uses HTML5 to structure the content in line with modern semantic html5.

[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)

- The project uses CSS3 to style the html content.

[Bootstrap](https://getbootstrap.com/)

- The project uses Bootstrap 4.3.1 to Layout the html content on different screen sizes.

[FontAwesome](https://fontawesome.com)

- The project uses FontAwesome to add icons for social media and contact forms.

[Hover.css](http://ianlunn.github.io/Hover/)

- The project uses Hover.css to add animations.

[Google Fonts](https://fonts.google.com)

- The project uses GoogleFonts to add the following fonts: Bubblegum, Fredoka.

[JQuery](https://jquery.com)

- The project uses JQuery to control scrolling and toggle features.

[Unsplash](https://unsplash.com)

- The project uses Unsplash to find the best pics for the App.

[Canva](https://www.canva.com)

- The project uses Canva to design the Logo of the App.

[Google Images](https://www.google.com/imghp?hl=en)

- The project uses Google Images to find the most suitable Imgs for the App.

[Stackoverflow](https://stackoverflow.com/)

- I have used Stackoverflows to find var, explanations and answer to my questions during the project development.

[SoundBible](http://soundbible.com/)

- The project uses SoundBible to find the most suitable Sounds for the App.

[Developer Mozilla](https://developer.mozilla.org/en-US/)

- I have used Stackoverflows to find var, explanations and answer to my questions during the project development.


## Testing

To test this project I used various browsers and devices.

###  Mobile Browsers

- Chrome
- Safari

### Desktop Browsers

- Chrome
- Firefox
- Edge
- Safari

### Devices

- Hp Laptop
- MacBook Pro Laptop
- IPhone 6s
- IPhone X

During testing i used Chrome Developer tools to test the responsive design on different size and the features of the page on different width.

The site was developed following the Bootstrap Grid System and the same was tested to ensure that all the elements are responsive on the following resolutions on each page:

- Width ≥1200px
- Width between 1200px and 768px
- Width ≤ 768px

## Testing

My whole project was tested with the command console.log() function to test if every relevant function had been called correctly.
A copy of my Javascript testing files has been uploaded and available in the folder "testing". 

Please note: The Jasmine test was not applied to my project.

## Validation Testings

For HTML validation testing I used [W3 Validator](https://validator.w3.org/) which shows the html documents to be valid.

For CSS validation testing I used [W3 CSS Validator](https://jigsaw.w3.org/css-validator) which shows the stylesheet to be valid CSS3.

For JavaScript validation testing I used [JSHint](https://jshint.com/) with whom i checked the presence of code errors/variables.

## Deployment

This page has been deployed to [GitHub Pages](https://github.com/aledfb)

GitHub is used to host the code and publish the pages.

A new repository was created in GitHub called: https://github.com/aledfb/memoryON_Second_Milestone_Project_Alessandro_Di_Fabio.git

After a initial Git Add and Git commit

$git add .

$git commit -m "Initial commit"

The pages were pushed to the GitHub repository

$ git push -u origin master

$Username

$Password

Under the Settings – GitHub Pages of the new repository, the master branch of the code is published to the url: https://aledfb.github.io/memoryON_Second_Milestone_Project_Alessandro_Di_Fabio/.

## Credits

For this project I had ispiration by all projects shared on the slack community by other fellow students. Particular inspiration came by the open source library of GitHub Pages, Video tutorial on YouTube, Books like: "Java, corso pratico di Programmazione" and "Web Design with HTML, CSS, Javascript and JQuery Set" and additional "Udemy Academy" paid course "Programmare in Javascript".
Special contribution also to the Stackoverflow website, colleagues from my current job, and Slack community that help me a lot answering all my questions during the deployment time.

## Media

The photos used in this project are all taken from Unsplash.com, Canva.com and Google Images.


