# Explore Berlin Tours

This page is developed for educational purposes as part of the Code Institute Coding Bootcamp. As as educational project, it is meant to showcast my understanding and usage of the main frontend development technologies. 

The concept behind the website is a Berlin-based tour agency, which specializes in custom tours. The two main services provided include the possibility to hire a personalized guide or to book one of the pre-planned tours. The concept and styling was developed to represent a welcoming and warm feel of a tour agency, which provides a custom and personalized experience to its customers.
 
## UX
 
The website was developed with the goal to be easy to navigate, straightforward in its content and sections. There are two main services provided by the agency: 1) the option to book personalized guides per location of choice; 2) to book a pre-planned tour.

What makes the agency unique in its offering is the personalized guide tour, which is the fist thing you see once you land on the page and it's the first and key feature of the Home page. From a user perspective, they can straight away look for the place they want to visit through the search bar and be redirected to a contact page to book a tour with an available guide. 

Given they go past this section, the assumption is the user is looking for other options and suggestions, hence the pre-planned tours section starts.

The goal was to make each option each actionable and easy to book through clear options and pathways. There is a clear and direct pathway between choosing a service and booking it.

User Stories:
- As a user, I want to search for a location, so that I book a guide to take me there.
- As a user, I want to see look through tour options, so that I can make a decision on which one I'm interested in.
- As a user, I want to see more information about the agency I'm booking with, so that I can make an informed decision.
- As a user, I want to be able to see detailed information about each tour option, so that I can decide whether to book.
- As a user, I want to be able to contact the agency, in order to book a tour.
- As a user, I want to see information about the guide I will be booking a tour with, so that I can make an informed decision.

Wireframes used in the design process are added in a folder 'wireframes' withing this project.

## Features

The main sections of the website are the Home page, containing the 'Hire a Personalized Guide section', the alternative tour options, as well as an About section and a Reviews section. Each tour option listed on the Home page has its own individual page with an overview and possibiltiy to book. The last page is the 'Contact Us' section, allowing users to reach out and book a tour. 
 
### Existing Features
- Hire a personal guide - allows users to book a guide to visit a specific location of their choice. They can do that by seaching for the location they have in mind in the searchbar on the home page (index.html). The searchbar uses Google Places API Autocomplete function for a more seemless search experience. Once they have filled in the place they want to visit and clicked 'Enter' an infoWindow comes up. It's a custom infoWindow, which displays the title or name of the location, as well as it's address all of this information is collected directly through the Places API. Additionally, the infoWindow contains a 'Book a Tour' option. Once a user clicks on it, they are redirected to the Contact page (contact.html). The Javascript code linking to the Google Places API is contained within the mainMap.js file.

 - Contact page to book a tour(contact.html). The contact page can be accesses from the Navbar, or by the user being redirected from the 'Book a Tour' button on the customized InfoWindow in the 'Hire a personal guide' section. On the contact page they can see the guide, who is available to take them on a tour and they have a contact form to fill in in order to reach out to the agency and book a tour. There are 6 different guide options and they are shown in a randomized order (tourGuides.js). The contact form is linked to EmailJS and fully functioning - each time someone fills in the contact form, an email is received to the corresponding email address (sendEmail.js).

- Individual pre-planned tour pages. The home page gives an overview of 3 main pre-planned tour options - each of them is described in more detail to the user on an individual page (barstour.html, cafetour.html, contact.html). Each of those contain a map, which uses the Google Maps API (main.js). Each map has markers, which outlines the main locations visited on the tour as well as a line, which marks the approximate tour path. Each location/marker is clickable and provides the name of the place. In addition, each page contains the additional information on the guide and tour details. Each tour page also contains a 'Book a tour with ..' button, which opens a contact form inside a modal. Each of those is also linked to EmailJS and if filled send an email to the linked email address.


### Features Left to Implement
- Currently the 'Hire a personal guide' section provides the search functionality to search globally and pick any place, regardless of type. A future version of the website would restrict this to Berlin and only a certain types of locations.

- Additionally, a future goal would be to link the information coming in from the Places API on the picked location to the contact section, so that it is automatically passed on as part of their booking request.

## Technologies Used

The main technologies used in this project are:

* HTML
* CSS
* Bootstrap
* Git
* Github
* Javascript
* Google Places API
* Google Maps API


## Testing

The webpage was tested manually to ensure it both works correctly and it's responsive across different screen sizes and devices.

Responsiveness testing was done through the Dev Tools and the screen sizes available there - Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5, 6, 7, 8, 8Plus, X, iPad, iPad Pro, as well as a regular browser screen.

1. Personalized guide search form:
    1. Type in letter, number or character and verify is autocomplete is activated. (As expected, it is activated by all letter and numbers, and some characters.)
    2. Search a specific place and verify there is an output, which is also correct.
    3. Search various types of locations to make sure different icons load.
    4. Verify where is a working and accurate infoWindow on every search.
    5. Close the infoWindow and re-start a new search to make sure the infoWindow closes and that's possible.
    6. Click on the 'Book a Tour' button on the infoWindow multiple times through different searched to verify it redirects to the Contact page.


2. Randomized Guides
    1.Go to the "Contact" page multiple times (reloading and from navbar) to verify there are different suggestions for guides coming up every time.
    2.Login through the Personalized guides infoWindow multiple times to verify the guides are randomized even when a user reaches the page through that channel.

3. Contact form:
    1. Go to the "Contact" page
    2. Submit the empty form and verify that an error message about the required fields appears
    3. Submit the form with an invalid email address and verify that a relevant error message appears
    4. Submit the form with all inputs valid and verify that the button gives a "Thanks for Reaching Us Message"
    5. Submit the form and check the linked email to verify an email is received.

4. Booking forms on Tours
    1. Go to each tour section. 
    2. Click on the 'Book a Tour with ..." button to verify a modal opens.
    3. Submit the empty form and verify that an error message about the required fields appears
    4. Submit the form with an invalid email address and verify that a relevant error message appears.
    4. Submit the form with all inputs valid and verify that the button gives a "Thanks for Reaching Us Message"
    5. Submit the form and check the linked email to verify an email is received.

5. Overall Testing
    1. Click on all Navbar links to verify they all work and link to the correct pages.
    2. Go through all buttons to verify they all work as intended.
    3. Verify all content displayed on the pages as intended.
    4. Verify dynamic elements on the page work as intended: carousel for Review section on Home page, Navbar, Collapse button.


## Deployment

The project was developed and locally ran through VS Code and Chrome. In order to make the code publically accessible for review it was published on Github and deployed through Github Pages.



## Credits

### Content
- Most of the content was created by me custom for this page.
- The street art tour's main locations were inspired to a large extend by the following article: https://awesomeberlin.net/activities/street-art-berlin-guide-top-11/

### Media
- The photos used in to represent guides were taken from Facebook. They belong to people I know, who are all aware and have given explicit consent. Names have been changed.
- The photos for the tour options cards on the home page, as well as the photo on the contact page were all taken from a gallery of free to use images (https://unsplash.com/) and each photo is titled after the photographer behind it.


### Acknowledgements

- The Maps API code (main.js) used to build the maps in the individual tour pages  is based on the code and examples provided in the documentation (https://developers.google.com/maps/documentation/javascript/tutorial) , as well as the following tutorial: https://www.youtube.com/watch?v=Zxf1mnP5zcw

- The Places API functionality, including an autocomplete Search Bar (mainMap.js) was largely built using the following example, provided in the documentation: https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/places-searchbox

- Colour scheme was inspired by the one suggested in Colorhunt: https://colorhunt.co/palette/159070

- The button design was inspired by Federico Dossena 'Button 1' Example: https://fdossena.com/?p=html5cool/buttons/i.frag