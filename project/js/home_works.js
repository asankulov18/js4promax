// Gmail checker
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@+[0-9a-z.]+\.com$/

function validateGmail() {
	if (regExp.test(gmailInput.value)) {
		gmailResult.innerHTML = 'OK'
		gmailResult.style.color = 'green'
		gmailInput.value = ''
	} else {
		gmailResult.innerHTML = 'NOT OK'
		gmailResult.style.color = 'red'
	}
}

gmailButton.onclick = validateGmail

gmailInput.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		validateGmail()
	}
})

////move_block
const child_block = document.querySelector('.child_block')

let posX = 0
let posY = 0
let direction = 'right' 

const getRandomColor = () => {
	const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
	return randomColor
}

const moveBlock = () => {
	
	if (direction === 'right') {
		posX++
		if (posX >= 450) direction = 'down'
	} else if (direction === 'down') {
		posY++
		if (posY >= 450) direction = 'left'
	} else if (direction === 'left') {
		posX--
		if (posX <= 0) direction = 'up'
	} else if (direction === 'up') {
		posY--
		if (posY <= 0) direction = 'right'
	}

	child_block.style.left = `${posX}px`
	child_block.style.top = `${posY}px`
	child_block.style.backgroundColor = getRandomColor()

	requestAnimationFrame(moveBlock)
}

moveBlock()
//time_block

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const secondsDisplay = document.querySelector('#seconds')

let seconds = 0

let timerId = null

startButton.onclick = () => {
	if (timerId === null) {
		timerId = setInterval(() => {
			seconds++
			secondsDisplay.innerHTML = seconds
		}, 1000)
	}
}

stopButton.onclick = () => {
	if (timerId !== null) {
		clearInterval(timerId)
		timerId = null
	}
}

resetButton.onclick = () => {
	if (timerId !== null) {
		clearInterval(timerId)
		timerId = null
	}
	seconds = 0
	secondsDisplay.innerHTML = seconds
}

///Character 

const request = new XMLHttpRequest();
request.open("GET", "../data/persons.json");
request.setRequestHeader("Content-type", "application/json");
request.responseType = "json";
request.send()

const renderCharacterList = (data) =>{
    data.forEach((character) => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");

        const characterImage = document.createElement("img");
        characterImage.setAttribute("src",character.image)

        const characterName = document.createElement("p");
        characterName.innerText = character.name;
        const characterAge = document.createElement("span");
        characterAge.innerText = character.age

        characterCard.append(characterImage);
        characterCard.append(characterName);
        characterCard.append(characterAge);

        characterList.append(characterCard);
    })
}

request.onload = () =>{
    const data = request.response;
    console.log(data)
    renderCharacterList(data)
}


const xhr = new XMLHttpRequest();
xhr.open("GET","../data/any.json");

xhr.onload = function () {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
};

xhr.onerror = function () {
    console.error("Request failed");
};

xhr.send();