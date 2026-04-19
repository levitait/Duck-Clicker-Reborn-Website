var clicks = 0;
const quackSound = new Audio('./assets/audio/quack.mp3');
const bgm = new Audio('./assets/audio/pizza-delivery.mp3');
var cps = 0;
var cpc = 1;
var cpc_upg_1_cost = 10;
var cps_upg_1_cost = 50;

bgm.loop = true;
bgm.volume = 0.5;
bgm.play();

// Actual code here...
function givepoints(addition) {
    clicks = clicks + addition;
    document.getElementById('currentclicks').innerText = clicks;
};

setInterval(() => {
    if (cps > 0) {
        givepoints(cps);
        const soundClone = quackSound.cloneNode();
        soundClone.play();
    }
}, 2000);

function updatepricesonbuy() {
    cpc_upg_1_cost = cpc_upg_1_cost * 2;
    cps_upg_1_cost = cps_upg_1_cost * 2;
    document.getElementById('cps_upg_1').innerText = 'Bread (CPS +1) - Cost: ' + cps_upg_1_cost + ' Clicks';
};
