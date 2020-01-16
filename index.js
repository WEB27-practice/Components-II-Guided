// Step Four: Build out a basic DogCard component, we should only concern ourselves with displaying the image at this point.
const entryPoint = document.querySelector('.entry');
console.log(entryPoint);

function dogCard(imgUrl) {
    const newCard = document.createElement('div'),
        newImage = document.createElement('img'),
        breed = document.createElement('h3');

    breed.textContent = "Breed: Corgi";
    newImage.src = imgUrl;

    newImage.classList.add('dog-image');
    newCard.classList.add('dog-card');

    newCard.append(newImage, breed);
    // newCard.append(breed);

    return newCard;
}



// Step Three: talk about HTTP, requesting data from a server, and axios
// with get(), we send a GET request

axios.get('https://dog.ceo/api/breed/weimaraner/images/random/12')
    .then(res => {
        console.log(res);
        res.data.message.forEach(data => entryPoint.append(dogCard(data)));
    })
    .catch( error => {
        console.log("the data was not returned", error)
    })

axios.get('https://dog.ceo/api/breed/pembroke/images/random/12')
    .then(res => {
        console.log(res);
        res.data.message.forEach(data => entryPoint.append(dogCard(data)));
    })
    .catch( error => {
        console.log("the data was not returned", error)
    })

    axios.get('https://dog.ceo/api/breed/hound/blood/images/random/12')
    .then(res => {
        console.log(res);
        res.data.message.forEach(data => entryPoint.append(dogCard(data)));
    })
    .catch( error => {
        console.log("the data was not returned", error)
    })
