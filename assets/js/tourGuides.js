function TourGuide(photo, name, overview) {
    this.photo = photo;
    this.name = name;
    this.overview = overview;
}

let tourGuideOne = new TourGuide("assets/images/Nels.jpg", "Nels", `Your guide on this tour is Nels. She has been a tour guide for 5 years and knows all the good spots and all the good stories.`)
console.log(tourGuideOne);

let tourGuideTwo = new TourGuide("assets/images/tevy.jpg", "Tevy", `Tevy studied tourism. She has travelled the world and is enthusiastic about exploring through human connection.`)

let tourGuideThree = new TourGuide("assets/images/dessi.jpg", "Dessi", `Dessi is personable, enthusiastic and loves sharing good stories.`)

document.getElementById("tour-guide-photo").innerHTML = tourGuideOne.photo;
document.getElementById("tour-guide-overview").innerHTML = tourGuideOne.overview;
document.getElementById("customized-guide-welcome-message").innerHTML = "Book this tour with: " + tourGuideOne.name + "!";

const tourGuides = [];
tourGuides.push(TourGuide)

/*
function Car(year, owner, manufacturer) {
	this.year = year;
	this.owner = owner;
	this.manufacturer = manufacturer;
	this.speak = function () {
		console.log(`vrooooooom!`);
	};
}

let myCar = new Car("1965", "Ann", "Ford");
myCar.speak();
console.log(myCar.year, myCar.owner);
*/