<h2 align="left"><img src="static/img/logo.png"></h2>

##### Click logo above to view live project


<h2 align="center"><img src="assets/images/Responsive Screenshot.jpg"></h2>

mograph.gallery is an online collection of motion graphics work. Motion graphics designers or motion designers as they are often called, take pride in showcasing their work online both for inspiration and also as a digital portfolio. Before now websites that served this purpose were either Vimeo(an online video-hub similar to youtube) or Behance(a more specialised portfolio hub for all creative professions). While these are veru useful, there has not been a tailored platform for motion graphics work solely. This means an often tedious process is required to search for inspiration or just to see the latest trends available. The current platform for a large collection of motion design work is on Vimeo, but this exist amidst a lot of other videos and parsing through can often be quite time consuming.

As a motion designer myself, my hope was to make a tool I would be willing to use in my creative process. I built mograph.gallery as a tool that is intended to be part of a daily workflow for motion designers who just want to access curated pieces quickly. Bearing in mind that Vimeo is the current platform where a majority of these videos currently exist. I tailored this website to be currently optimised for videos uploaded to Vimeo with a plan to add additional supprt in the future.


## User Experience (UX) 

- ### User Stories

  - #### First Time Visitor Goals

    a. As a First Time Visitor, I want to easily understand the main purpose of the site and sign up.  
    b. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
    c. As a First Time Visitor, I want to easily find details about about how to add a video.
    d. As a First Time Visitor, I want to be able to preview the videos in collections, in order to find specific videos.
    e. As a First Time Visitor, I want to be able to search through the videos using keywords to parse through the gallery.

  - #### Returning Visitor Goals

    a. As a Returning Visitor, I want to be able to easily log in after creating an account.  
    b. As a Returning Visitor, I want to be able to easily add a video, with easy steps and fields to help me input relevant information about my video, so others can locate it easily.

  - #### Frequent User Goals

    a. As a Frequent User, I want to find the videos uploaded by me, as well as information about how many vidoes I have uploaded.

* ### Design

  - #### Colour Scheme

    - The colour scheme across the website is a combination of tints of black, white and yellow. The website is designed to be clean and easily present access to preview videos with just a hover as the gallery shuffles fluidly like a pack of cards. With the aid of material design provided with the framework materializecss. I built the website to feel familiar to designers who would appreciated the fluid motion and the subtle use of aesthetic influences from the Windows explorer(the categories section uses familiar icons styles that are reminiscent of the folder icons from Windows 10) and osx(the video preview in the categories section on larger screens). 
    <img src="assets/images/Design.jpg">

    The entire website has a black background with links being either white or grey depending on their function. Accents and active links however are yellow.
    <img src="assets/images/Design.jpg">


  - #### Typography
    - The Google font Manrope is the primary font used across the website, with Sans-serif as the alternative font for cases when the default options aren't loaded onto the website correctly.
      It is very legible and contrast on the dark background given a very modern and light feel to the website. In bold and larger sizes it is used as a page header and at it's smallest for copyright information. The variation of weight, size and colour helps to create a consitent flow across the document that is easy to read. 

- ### Wireframes

  Initial Wireframes developed at the start of the project are below:

- <h4>Level 1</h4><img src="assets/images/Wireframe_level1_showing_colour_pairs.jpg" width="50%" height="50%" >
- <h4>Level 3</h4><img src="assets/images/Wireframe_level3_showing_colour_pairs.jpg" width="50%" height="50%" >

## Features

This section contains all the features of the website.

### Discover

This is the main section of the gallery, and consists all the videos uploaded by all users. 

- On page load, the user is presented with a naviagation bar which shows link to info on how to upload, all categories of videos upload and a links either login for existing account holders or sign up for prospective account holders. 
- If the user already has an account an additional link is visible to "Add a Video" to the database. 
- Additonally, if the user is the sites administrator, the Explore Categories link becomes a Manage Categories link has an account an additional link is visible to "Add a Video" to the database. 
- Below this is a collection of all videos uploaded. Each video has a name, description and deatils about it's creators and who uploaded it. 
- Below the video name, is an info icon hinting at "learn more" on hover for larger screens or with "learn more" beside it on smaller screens.  
- Upon activation this icon reveals all the details provided by the uploader about each video.

### Categories

This section provides a curated collection of all the videos on the site, pooled together into collections that are predetermined by the sites administrator. New categories can be addedd and existing categories can be edited only by the sites administrator.

### Info

This how-to section contains a breakdown of steps to take when adding a video to the database.

### Sign Up 

This link launches a modal with fields to create a username and passowrd.

### Login

This link launches a modal with fields to enter in a username and passowrd.

### Features Left to Implement

- A buttons that provides a colour palette from the unique to each video. 
- Add user specific collections, enabling users to create folders of videos unique to their needs, this will be useful for personalized curation.

## Technologies Used

### Languages Used

- HTML5
- CSS3
- jQuery and Javascript
- Python                                b                                                                                                

### Frameworks, Libraries & Programs Used

- [Materialize](https://materializecss.com/)

  - The game uses Materialize's library to aid responsiveness across various screen sizes and devices. The design of the website also benefits from the design aestherics of Google's Material UI, which is design backbone for Materialize.

- [JQuery](https://jquery.com) and Javascript

  - Materialize includes jQuery, which is used in the navbar, modals, forms and tooltips across the website.
  - jQuery and Javascript are used to enable dynamic scrolling and activation of Vimeo's API.
  - The light and dark mode toggle use both jQuery and Javascript.
  - The game-pad icon's functionality uses both jQuery and Javascript to drive the assigning of colours to the coloured grids.

- [Google Fonts](https://fonts.google.com/)

  - Google fonts were used to import the "Manrope" font into the style.css file which is used across the project.

- [Python](https://www.python.org/)

  - Python was used to manage the website's data and enable communication with MongoDB.

- [MongoDB](https://fontawesome.com/)

  - MongoDB was used to provide a database to enable creating, editing, updating and deleting videos.

- [Git](https://git-scm.com/)

  - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

- [GitHub](https://github.com/)

  - GitHub is used to store the project's code after being pushed from Git.

- [Heroku](https://www.heroku.com/)

  - Heroku is used to deploy the website.

- [Balsamiq](https://balsamiq.com/)

  - Balsamiq was used to create the wireframes during the design process.

- [Froogaloop](https://f.vimeocdn.com/js/froogaloop2.min.js)

  - Vimeo's froogaloop API was used to facilitate the triggering and listening of basic player methods.


## Testing

The W3C CSS Validator Services was used to validate the style.css page to ensure there were no syntax errors in the code. No errors were found during the validation process.

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

  <a href="assets/images/Validator Results.zip" download>Download results here</a>

### Testing User Stories from User Experience (UX) Section

- #### First Time Visitor Goals

  1. As a First Time Visitor, I want to easily understand the main purpose of the site and sign up.

     - Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar with the name of the website, which is quite descriptive of its purpose.
     - The website is optimised for use with larger screens, but also has a well considered mobile version. The animation and previewing options for the videos are specifically tailored for the website's man purpose which is quickly accessing motion design inspiration and content.
     - There is a link on the navbar to sign up, by creating a unique username and password.

  2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

     - The site has been designed to be minimal with little distraction to its main focus which is the gallery. Videos are enabled with an autoplay feature and animation which highlights the currently hovered video. Additionally, the description information about the videos are easily accessible on larger screens in the same way.

  3. As a First Time Visitor, I want to easily find details about about how to add a video.

     - The info link on the navbar provides a list of tips that tell the user how to go about adding a video in easy steps.

  4. As a First Time Visitor, I want to be able to preview the videos in collections, in order to find specific videos.

     - Beside the Info link is an "Explore Categories" which presents the vidoes on the homepage in a collection of predefined folders that are representative of the major areas of focus of the field of motion graphic design. As user add videos to the site they are automatically collated into these categories for easy curation. 

  5. As a First Time Visitor, I want to be able to search through the videos using keywords to parse through the gallery.

     - There is a search field underneath the navbar, that enables keyword searches which is indexed using the name of each video, its description, name of its creators and the tags that can be provided at the time of upload.  

- #### Returning Visitor Goals

  1. As a Returning Visitor, I want to be able to easily log in after creating an account.

     - There is a link on the navbar to log in to an existing account, using the login credentials created during signup.

  2. As a Returning Visitor, I want to be able to easily add a video, with easy steps and fields to help me input relevant information about my video, so others can locate it easily.

     - There is a link on the navbar to add a video, which launches a modal with a collection of fields to enable the user add information about the video being uploaded.

* #### Frequent User Goals

  1. As a Returning Visitor, I want to be able to easily log in after creating an account.

     - There is a link on the navbar to log in to an existing account, using the login credentials created during signup.

### Further Testing

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, Samsung Galaxy Note 10, Samsung S9 & iPhone8, iPhone 12 and iPhone 12 mini.
- A large amount of testing was done to ensure that all the levels work correctly. Details below

| Test                                     | Actions Taken                                                                                                                            | Expected Outcome                                 | Result                                                                                                                                                                                                                       |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Responsiveness                           | Multiple devices on different operating systems were used with Safari, Chrome and Firefox                                                | Consistent Layout, behaviour and Icons           | I noticed certain inconsistencies on the iPhone 12, which I fixed in CSS using the appearance attribute                                                                                                                      |
| Colour appearance on different screens   | Testing colour representation on various device screens LCD, OLED and AMOLED                                                             | Consistent gaming experience                     | Yes, the result was consistent.                                                                                                                                                                                              |
| EmailJS functionality                    | Testing with varied accounts and inserting console-logging and consequently modal-triggers to alert the user to either a successful submission or an error | Consistent behaviour and ability to catch errors | Yes, it worked perfectly                                                                                                                                                                                                     |
| Generating Colours and Level Progression | Console-logging and alerts to indicate when function were producing desired arrays                                                      | Consistent behaviour with stress testing         | I noticed my initial implementation of the game-pad click allowed for multiple clicks on the button which created undesirable results. I fixed this by disabling the button right after it is clicked until it is needed again. |

- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
- Additional automated testing was done using [Browser Stack](https://live.browserstack.com/)

## Deployment

### GitHub Pages

The project was deployed to Heroku using the following steps...

1. Log in to Heroku and locate the [project](https://github.com/Rexayo/click-match)
2. At the top of the Repository (not top of page), locate the "Settings" button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://rexayo.github.io/click-match/) in the "GitHub Pages" section.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Rexayo/click-match)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/Rexayo/click-match
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/Rexayo/click-match.git
Cloning into 'everyday-why'...
remote: Enumerating objects: 140, done.
remote: Counting objects: 100% (140/140), done.
remote: Compressing objects: 100% (83/83), done.
Receiving objects:  90% remote: Total 329 (delta 73), reused 109 (delta 44), pack-reused 189
Receiving objects: 100% (329/329), 82.67 MiB | 6.53 MiB/s, done.
Resolving deltas: 100% (153/153), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

- [Materialize](https://materializecss.com/): Bootstrap Library was used throughout the project mainly to make the website responsive using the Bootstrap Grid System.

- [HTML & CSS](https://www.w3schools.com/): I researched a lot of code support from W3 Schools. Additional research on CSS was done on [CSS Tricks](https://css-tricks.com/). Base code for gallery layout was gotten from [Code Pen](https://codepen.io/gaeowyn/pen/oiyHF).

- [jQuery](https://codeinstitute.net/)-Validation of select fields on forms was done with JQuery code provided by Code Institute.

- Code Pen - Base code for gallery layout was gotten from [Code Pen](https://codepen.io/gaeowyn/pen/oiyHF).
- Stack Overflow
  - [Scroll to Top](https://stackoverflow.com/questions/2450954/).
  - [Autocenter active video description](https://stackoverflow.com/questions/20228961/how-to-make-each-letter-in-text-a-different-random-color-in-javascript).
- Froogaloop - [Event triggering for Vimeo videos](https://stackoverflow.com/questions/35549780/play-vimeo-videos-on-mouse-hover).

## Credits

### Acknowledgements

- I received inspiration for this project from a website called [Design Inspiration](https://www.designspiration.com/). Much of functionality is also based on [Pinterest](https://www.pinterest.co.uk/) and [Behance](https://www.behance.net/) with the added bonus being that mogrpah.gallery has features tailored to the niche sector of the motion graphics whilst all the other are catering to a much larger audience.