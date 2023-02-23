const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
	console.log("vioce is activated, you can come close to mic");
};

recognition.onresult = function (event) {
	console.log(event);

	// const current = event.resultIndex;
	// const transcript = event.results[current][0].transcript;
	// content.textContent = transcript;

	// readOutLoud(transcript)
};

btn.addEventListener("click", () => {
	// recognition.start();
	readOutLoud("Hey user. Do you mind to use me in different cool apps. Urakoze.");
});

// btn.onkeypress = (e) =>{
//   if (e.key) {
//     btn.key = e.key;
//     console.log(e.key);
//   } else {
//     btn.key = e.char;
//   }
// }

function readOutLoud(message) {
	const speech = new SpeechSynthesisUtterance();
	speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}

// var synth = window.speechSynthesis;
// var voices = synth.getVoices();

// var inputForm = document.querySelector('form');
// var inputTxt = document.querySelector('input');
// var voiceSelect = document.querySelector('select');

// for(var i = 0; i < voices.length; i++) {
//   var option = document.createElement('option');
//   option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
//   option.value = i;
//   voiceSelect.appendChild(option);
// }

// inputForm.onsubmit = function(event) {
//   event.preventDefault();

//   var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
//   utterThis.voice = voices[voiceSelect.value];
//   synth.speak(utterThis);
//   inputTxt.blur();
// }
