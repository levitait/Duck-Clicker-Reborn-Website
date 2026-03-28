var clicks = 0;
const quackSound = new Audio('./assets/audio/quack.mp3');
const bgm = new Audio('./assets/audio/pizza-delivery.mp3');

bgm.loop = true;
bgm.volume = 0.5;
bgm.play();

// Actual code here...
function givepoints(addition) {
    clicks = clicks + addition;
    document.getElementById('currentclicks').innerText = clicks;
    const soundClone = quackSound.cloneNode();
    soundClone.play();
};



