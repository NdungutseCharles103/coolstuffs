const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () =>{
    console.log('vioce is activated, you can come close to mic');
};

recognition.onresult = (event)=>{
    console.log(event);

    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;

    readOutLoud(transcript)
};

btn.addEventListener('click', () =>{
    recognition.start();

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

    window.speechSynthesis.speak()
}

// readOutLoud('Hey user.');
