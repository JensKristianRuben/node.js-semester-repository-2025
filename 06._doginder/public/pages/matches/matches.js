console.log("test");

const container = document.getElementById("dog-matches-image-container");


function getMatches() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => console.log(data.message));
    const dog = {
        imageUrl: data.message
    }
    createMatchesProfile(dog)
}


function createMatchesProfile(dog) {
    const dogMatchesImageImg = document.createElement("img");
    dogMatchesImageImg.src = dog.imageUrl;
    dogMatchesImageImg.alt = "Dog match profile picture"
    dogMatchesImageImg.id = "dog-matches-image"
} 