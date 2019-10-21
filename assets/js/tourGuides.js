function TourGuide(photo, name, overview) {
    this.photo = photo;
    this.name = name;
    this.overview = overview;
}


let tourGuides = [];

tourGuides[0] = new TourGuide("assets/images/Nels.jpg", "Nels", `Nels has been a tour guide for 5 years and knows all the good spots and all the good stories.`)

tourGuides[1] = new TourGuide("assets/images/tevy.jpg", "Sara", `Sara studied tourism. She has travelled the world and is enthusiastic about exploring through human connection.`)

tourGuides[2] = new TourGuide("assets/images/dessi.jpg", "Dessi", `Dessi is personable, enthusiastic and loves sharing good stories.`)

tourGuides[3] = new TourGuide("assets/images/lilly.jpg", "Lilly", `Lilly is storyteller that loves food by day, dancer that enjoys cocktails by night.`)

tourGuides[4] = new TourGuide("assets/images/sue.jpg", "Sue", `Sue has a PhD in history and can tell you all about the stories of the city.`)

tourGuides[5] = new TourGuide("assets/images/pearl.jpg", "Pearl", `Pearl likes to live life on the edge and seeks out adventures. She aims to make each tour unique`)



var randomGuideID = Math.floor(Math.random() * 5);
let tourGuide = tourGuides[randomGuideID];



document.getElementById("tour-guide-photo").innerHTML = `<img src="${tourGuide.photo}"></img>`;
document.getElementById("tour-guide-overview").innerHTML = tourGuide.overview;
document.getElementById("customized-guide-welcome-message").innerHTML = "Book a tour with " + tourGuide.name + "!";