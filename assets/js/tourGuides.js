function TourGuide(photo, name, overview) {
    this.photo = photo;
    this.name = name;
    this.overview = overview;
}

let tourGuides = [];

tourGuides[0] = new TourGuide("assets/images/Nels.jpg", "Nels", `Your guide on this tour is Nels. She has been a tour guide for 5 years and knows all the good spots and all the good stories.`)

tourGuides[1] = new TourGuide("assets/images/tevy.jpg", "Tevy", `Tevy studied tourism. She has travelled the world and is enthusiastic about exploring through human connection.`)

tourGuides[2] = new TourGuide("assets/images/dessi.jpg", "Dessi", `Dessi is personable, enthusiastic and loves sharing good stories.`)

tourGuides[3] = new TourGuide("assets/images/dessi.jpg", "Lilly", `Dessi is personable, enthusiastic and loves sharing good stories.`)

tourGuides[4] = new TourGuide("assets/images/dessi.jpg", "Chris", `Dessi is personable, enthusiastic and loves sharing good stories.`)

tourGuides[5] = new TourGuide("assets/images/dessi.jpg", "Elly", `Dessi is personable, enthusiastic and loves sharing good stories.`)



var randomGuideID = Math.floor(Math.random() * 5);
let tourGuide = tourGuides[randomGuideID];

//randomGuideID == 1? tourGuideOne: randomGuideID == 2? tourGuideTwo: tourGuideThree;
let markerTitle = window.location.search;
markerTitle = markerTitle.replace("?location=", "");
markerTitle = decodeURIComponent(markerTitle);
let welcomeMessage = "";
if (markerTitle) {
    welcomeMessage = "Book a tour to " + markerTitle + " with " + tourGuide.name + "!"
} else {
    welcomeMessage = "Book a tour with " + tourGuide.name + "!"
}



document.getElementById("tour-guide-photo").innerHTML = `<img src="${tourGuide.photo}"></img>`;
document.getElementById("tour-guide-overview").innerHTML = tourGuide.overview;
document.getElementById("customized-guide-welcome-message").innerHTML = welcomeMessage;