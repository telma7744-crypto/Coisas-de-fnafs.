/* =================================================
FNAF 1 - CODEPEN REMAKE (Versão Corrigida)
================================================== */

/* ---------- IMAGENS ---------- */
const SPRITES = {
  freddy: "https://static.wikia.nocookie.net/fivenightsatfreddys/images/6/66/Freddy_Fazbear.png/revision/latest?cb=20260327053955",
  bonnie: "https://static.wikia.nocookie.net/fivenightsatfreddys/images/9/92/Bonnie_Rabbit.png/revision/latest?cb=20201117232303",
  chica: "https://static.wikia.nocookie.net/liga-da-zueira-oficial/images/d/d7/Chica_Render.png/revision/latest?cb=20230823003838&path-prefix=pt-br",
  foxy: "https://static.wikia.nocookie.net/fivenightsatfreddys/images/b/bc/Foxy_Fnaf_1.png/revision/latest?cb=20210825032345",
  goldenFreddy: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/PC%20_%20Computer%20-%20Five%20Nights%20at%20Freddy's%202%20-%20Animatronics%20-%20Withered%20Golden%20Freddy.png",
  leftDoorSprite: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/door%20left%2016.png",
  rightDoorSprite: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/door%20right%2016.png",
};

const CAMERA_IMAGES = {
  none: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/12.png",
  stage: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/484.png",
  dining: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/48.png",
  backstage: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/83.png",
  pirate: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/66.png",
  restroom: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/41.png",
  kitchen: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/12.png",
  westHall: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/44.png",
  westCorner: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/0.png",
  eastHall: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/67.png",
  eastCorner: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/49.png",
  supply: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/62.png",
  entrance: "https://static.wikia.nocookie.net/the-fnaf-fan-game/images/1/11/FiveNightsatFreddysInRealTime_Entrance.png/revision/latest?cb=20241223181622",
  safeRoom: "https://static.wikia.nocookie.net/the-fnaf-fan-game/images/7/72/FiveNightsatFreddysInRealTime_SafeRoom.png/revision/latest?cb=20241223181623"
};

// Puppet
const PUPPET_SPRITES = {
  normal: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/185.png",
  boxClosed: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/1786124478678.png",
  boxOpen: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/1786124747618.png",
  radar: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/1786124927978.png",
  jumpscare: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/324.png"
};

const puppetMusic = new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/Music_Box_Melody_Playful.wav");
puppetMusic.loop = true;

const puppetFastMusic = new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/jackinthebox.wav");
puppetFastMusic.loop = true;

const puppetJumpscareSound = new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/Xscream2.wav");

let puppetActive = false;
let puppetMusicChanged = false;
let puppetMusicFast = false;
let puppetTimer = null;
let puppetWarningTimer = null;

const CAMERA_ANIMATRONIC_SPRITES = {
  stage: {
    bonnie: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bonnie%20in%20stage.png",
    chica: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/chica%20in%20stage.png",
    freddy: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/freddy%20in%20stage.png"
  },
  dining: {
    bonnie: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bonnie%20in%20dining%20area.png",
    chica: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/chica%20in%20dining%20area.png",
    freddy: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/freddy%20in%20dining%20area.png"
  },
  backstage: {
    bonnie: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bonnie%20no%20backstage%20update.png"
  },
  supply: {
    bonnie: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bonnie%20no%20closset.png"
  },
  westHall: {
    bonnie: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bonnie%20no%20corredor%20update.png",
    foxy: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/foxy%20no%20corredor.png"
  },
  westCorner: {
    bonnie: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bonnie%20no%20canto.png"
  },
  restroom: {
    chica: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/chica%20no%20banheiro.png",
    freddy: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/freddy%20no%20banheiro.png"
  },
  eastHall: {
    chica: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/chica%20no%20corredor.png",
    freddy: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/freddy%20no%20corredor%20update.png"
  },
  eastCorner: {
    chica: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/chica%20no%20canto.png",
    freddy: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/freddy%20no%20canto%20do%20corredor%20update.png"
  },
  pirate: {
    // Estágios do Foxy
    stage2: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/pirate%20cove%202.png",
    stage3: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/pirate%20cove%203.png",
    stage4: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/pirate%20cove%204.png"
  }
};

const DOOR_LIGHTS = {
  leftEmpty: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/luz%20da%20esquerda.png",
  leftBonnie: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/luz%20da%20esquerda%20bonnie.png",
  leftFoxy: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/12%20Sem%20T%C3%ADtulo_20261019235429.png",
  rightEmpty: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/luz%20da%20direita.png",
  rightChica: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/luz%20da%20direita%20chica.png"
};

const westHallBlinkImage = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/west%20hall%201.png";

const FREDDY_POWER_OUT_FRAMES = [
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%201.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/2jumpscare%20freddy%20power%20out%202.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%203.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%204.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%205.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%206.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%207.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%208.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%209.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2010.png",
"https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2011.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2012.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2013.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2014.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2015.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2016.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2017.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2018.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2019.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2020.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy%20power%20out%2021.png"
];

const CUSTOM_NIGHT = {
  background: "https://i.scdn.co/image/ab6765630000ba8a726205d32864972063d09cc3",
  freddy: "https://static.wikia.nocookie.net/pizzaria-freddy-fazbear/images/4/4e/FreddyFZB.png/revision/latest?cb=20150110134042&path-prefix=pt-br",
  bonnie: "https://static.wikia.nocookie.net/fnafultimatecustomnight/images/5/55/Bonnue.jpg/revision/latest?cb=20180415071631",
  chica: "https://static.wikia.nocookie.net/pizzaria-freddy-fazbear/images/c/c3/200px-Chica.png/revision/latest?cb=20150110134015&path-prefix=pt-br",
  foxy: "https://static.wikia.nocookie.net/pizzaria-freddy-fazbear/images/1/1d/FoxyPirata.png/revision/latest?cb=20150110180603&path-prefix=pt-br",
  golden: "https://static.wikia.nocookie.net/pizzaria-freddy-fazbear/images/b/b7/GF_Icon.png/revision/latest?cb=20150121204808&path-prefix=pt-br"
};

const RADAR_SPRITES = {
  freddy: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/Freddy%20Radar.png",
  bonnie: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/Bonnie%20Radar.png",
  chica: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/Chica%20Radar.png",
  foxy: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/Foxy%20Radar.png"
};

const fanSound = new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/fansound.wav");
fanSound.loop = true;

const FAN_FRAMES = [
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/fan%201.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/fan%202.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/fan%203.png"
];

let fanFrame = 0;
let fanTimer = null;

const BONNIE_JUMPSCARE_FRAMES = [
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%201.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%202.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%203.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%204.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%205.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%206.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%207.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%208.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%209.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%2010.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20bonnie%2011.png"
];

const CHICA_JUMPSCARE_FRAMES = [
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%201.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%202.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%203.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%204.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%205.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%206.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%207.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%208.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%209.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%2010.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%2011.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%2012.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%2013.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%2014.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%2015.png",
  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20chica%2016.png"
];

const CN_BTN = {
  leftGray: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/557.png",
  rightGray: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/556.png",
  leftOrange: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/602.png",
  rightOrange: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/595.png"
};

const OFFICE_BTNS = {
  leftDoorOff:  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20porta%20esquerdo.png",
  leftDoorOn:   "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20porta%20esquerdo%20ligado.png",
  rightDoorOff: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20porta%20direito.png",
  rightDoorOn:  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20porta%20direito%20ligado.png",
  leftLightOff: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20luz%20esquerdo.png",
  leftLightOn:  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20luz%20esquerdo%20ligado.png",
  rightLightOff:"https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20luz%20direito.png",
  rightLightOn: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20luz%20direito%20ligado.png",

  camLeftDoorOff:  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20porta%20esquerda%20camera.png",
  camLeftDoorOn:   "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20porta%20esquerda%20ligado%2Ccamera.png",
  camRightDoorOff: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20porta%20direita%20camera.png",
  camRightDoorOn:  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20porta%20direita%20ligado%2Ccamera.png",
  camLeftLightOff: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20luz%20esquerda%20camera.png",
  camLeftLightOn:  "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20luz%20esquerda%20ligado%2Ccamera.png",
  camRightLightOff:"https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20luz%20direita%20camera.png",
  camRightLightOn: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/bot%C3%A3o%20de%20luz%20direita%20ligado%2Ccamera.png"
};

/* ---------- ÁUDIOS ---------- */
const powerOutJumpscare = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/XSCREAM.wav");
const powerDownSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/ccc4396169ad28f2a9f3f958c473cce6ac60d2dd/powerdown.wav");
const musicBox = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/f62f6f7c0fc5d62d6403dc772ae1ed1bcfd4e88d/music%20box.wav");
musicBox.loop = false;
const screamSound = new Audio("XSCREAM.wav");
const menuMusic = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/darkness%20music.wav");
const officeMusic = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/EerieAmbienceLargeSca_MV005.wav");
const officeMusic2 = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/circus.wav");
const tocSound = new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/%5B21%5D%20blockc.wav");
const doorSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/SFXBible_12478.wav");
const lightSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/BallastHumMedium2.wav");
const gameOverSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/static2.wav");
const sixAMSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/chimes%202.wav");
const bonnieChicaStepSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/deep%20steps.wav");
const freddyStepSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/running%20fast3.wav");
const foxyPirateSong = new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/pirate%20song2.wav");
const foxyRunSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/run.wav");
const foxyKnockSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/knock2.wav");
const kitchenSounds = [
  new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/OVEN-DRA_1_GEN-HDF18119.wav"),
  new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/OVEN-DRA_7_GEN-HDF18121.wav"),
  new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/OVEN-DRA_2_GEN-HDF18120.wav"),
  new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/OVEN-DRAWE_GEN-HDF18122.wav")
];
let currentKitchenSound = null;
let kitchenSoundTimer = null;
kitchenSounds.loop = true;
const goldenLaugh = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/Laugh_Giggle_Girl_1.wav");
const doorScareSound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/windowscare.wav");
const endingMusic = new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/musicbox2.wav");
endingMusic.loop = true;

menuMusic.loop = true;
officeMusic.loop = true;
officeMusic2.loop = false;

const endoSteps = [
  new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/metalwalk1.wav"),
  new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/metalwalk2.wav"),
  new Audio("https://github.com/telma7744-crypto/Coisas-de-fnafs./raw/refs/heads/main/metalwalk3.wav")
];

const freddyLaughs = [
  new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/Laugh_Giggle_Girl_1d.wav"),
  new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/Laugh_Giggle_Girl_2d.wav"),
  new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/Laugh_Giggle_Girl_8d.wav")
];

/* ---------- VARIÁVEIS ---------- */
let currentCam = "stage";
let night = 1;
let hour = 0;
let power = 99;
let gameRunning = false;
let gameOver = false;
let language = "pt";
let camerasOpen = false;
let powerOut = false;
let blackout = false;
let blackoutTimer = null;
let freddyBlinkTimer = null;
let selectedCamera = null;
let lastNight = 1;
let circusTimer = null;
let circusPlayed = false;
let foxyStage = 3;
let goldenFreddyActive = false;
let goldenFreddyTimer = null;
let powerOutFreddyJumpscare = false;
let phoneCallPlaying = false;
let freddyStageStare = false;
let energyResetUsed = false;
let freddyAnim = {
  from: null,
  to: null,
  phase: "idle", // idle | leaving | entering
  progress: 0
};
let freddyAnimTimer = null;
let endoAttackCount = 0;
let endoAI = 0; // começa desativado
// Sprites do Endo-01
const ENDO_SPRITES = {
  normal: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12e9aefc-b502-422f-99ce-580ba78a7f7b/ddn3n71-ac586966-aae7-427d-bddb-d3dbafa1b459.png/v1/fit/w_409,h_968/fnaf_1_endo_01_full_body_by_enderziom2004_ddn3n71-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY4IiwicGF0aCI6Ii9mLzEyZTlhZWZjLWI1MDItNDIyZi05OWNlLTU4MGJhNzhhN2Y3Yi9kZG4zbjcxLWFjNTg2OTY2LWFhZTctNDI3ZC1iZGRiLWQzZGJhZmExYjQ1OS5wbmciLCJ3aWR0aCI6Ijw9NDA5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.E_gf8crbl1UeUwt-oECpgsYvFF8YWgzaRGO1d6avtZQ",
  jumpscare: "https://static.wikia.nocookie.net/ultra-custom-night/images/3/30/Endo01ShrkiJumpscare.png/revision/latest?cb=20221008050625",
  radar: "https://static.wikia.nocookie.net/ultra-custom-night/images/9/97/Endo01ShrkiIcon.png/revision/latest?cb=20220818174944"
};

let posEndo = "backstage"; // posição inicial
let endoLightCount = 0;    // quantas vezes piscou a luz na porta
let endoDoorTimer = null;
let stageChecked = false;
let foxySongPlayed = 0; // quantas vezes já tocou na noite
let foxySongMax = 0;    // máximo de vezes que pode tocar (1 ou 2)
let foxyRunPlayed = false;
let foxyCooldown = false;
let currentChallenge = null;
let currentPhoneCall = null;
let gameLoopTimer = null;
let hardcoreMode = false;
let hardcoreUnlocked = localStorage.getItem("hardcoreUnlocked") === "true";
let westHallBlinking = false;
let westHallBlinkTimer = null;
let leftLightOn = false;
let rightLightOn = false;
let hardcoreCustomAI = {
  bonnie: 0,
  chica: 0,
  freddy: 0,
  foxy: 0,
  endo: 0,
  puppet: 0,
  golden: 0,
};

let hcBehaviors = {
  freddySwitchHall: false,
  bonnieSkip: false,
  chicaSkip: false,
  freddyNoLaugh: false,
  foxyFast: false,
  puppetLessTime: false,
  endoDouble: false
};

let hardcoreCustomNight = false;
let infinitePower = localStorage.getItem("infinitePower") === "true";
let fastNight = localStorage.getItem("fastNight") === "true";
let masterVolume = 1.0; // 1.0 = 100%
let radarOwned = localStorage.getItem("radarUnlocked") === "true";
let radarUnlocked = radarOwned;
let radarEquipped = localStorage.getItem("radarEquipped") === "true";
let stars = JSON.parse(localStorage.getItem("stars")) || { night5: false, night6: false, golden: false };

const PLUSH_CHALLENGES = {
  freddy: { name: "Freddy up", freddy: 100, bonnie: 25, chica: 30, foxy: 40, golden: 21, battery: "low", reward: "freddy" },
  bonnie: { name: "Bonnie up", freddy: 20, bonnie: 100, chica: 65, foxy: 30, golden: 11, battery: "normal", reward: "bonnie" },
  chica: { name: "Chica up", freddy: 30, bonnie: 70, chica: 100, foxy: 20, golden: 41, battery: "normal", reward: "chica" },
  foxy: { name: "Foxy The Pirate up", freddy: 25, bonnie: 45, chica: 35, foxy: 100, golden: 11, battery: "normal", reward: "foxy" },
  golden: { name: "Golden Freddy True", freddy: 100, bonnie: 100, chica: 100, foxy: 100, golden: 100, battery: "low", reward: "golden" }
};

const PLUSHES = {
  freddy: {
    normal: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651309977.png",
    blackout: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651505481.png",
    menu: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651459334.png"
  },
  bonnie: {
    normal: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651561658.png",
    blackout: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651668722.png",
    menu: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651586159.png"
  },
  chica: {
    normal: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651743246.png",
    blackout: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651782779.png",
    menu: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651629263.png"
  },
  foxy: {
    normal: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651877644.png",
    blackout: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651921333.png",
    menu: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783651825092.png"
  },
  golden: {
    normal: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/plush_fredbear_by_alebatman_de31dds.png",
    blackout: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/plush_fredbear_by_alebatman_de31dds.png",
    menu: "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/plush_fredbear_by_alebatman_de31dds.png"
  }
};

let equippedPlushes = [];
let unlockedPlushes = { freddy: false, bonnie: false, chica: false, foxy: false, golden: false };

let customAI = { bonnie: 0, chica: 0, freddy: 0, foxy: 0, golden: 1 };
let customMoveTime = { bonnie: 4000, chica: 4000, freddy: 3000, foxy: 5000, golden: 3000 };
let energyMode = "normal";

let highestNight = 1;
let night6Unlocked = false;
let customNightUnlocked = false;

const HOUR_AI = {
  // Noite 1
  1: {
    0: { bonnie: 0.00, chica: 0.00, freddy: 0, foxy: 0.00 }, // 12 AM
    1: { bonnie: 0.00, chica: 0.00, freddy: 0, foxy: 0.00 }, // 1 AM
    2: { bonnie: 0.02, chica: 0.00, freddy: 0, foxy: 0.00 }, // 2 AM
    3: { bonnie: 0.04, chica: 0.02, freddy: 0, foxy: 0.02 }, // 3 AM
    4: { bonnie: 0.06, chica: 0.04, freddy: 0, foxy: 0.04 }, // 4 AM
    5: { bonnie: 0.08, chica: 0.06, freddy: 0, foxy: 0.06 }  // 5 AM
  },

  // Noite 2
  2: {
    0: { bonnie: 0.04, chica: 0.03, freddy: 0, foxy: 0.05 },
    1: { bonnie: 0.06, chica: 0.05, freddy: 0, foxy: 0.06 },
    2: { bonnie: 0.08, chica: 0.07, freddy: 0, foxy: 0.07 },
    3: { bonnie: 0.10, chica: 0.09, freddy: 0, foxy: 0.12 },
    4: { bonnie: 0.12, chica: 0.10, freddy: 0, foxy: 0.15 },
    5: { bonnie: 0.13, chica: 0.12, freddy: 0, foxy: 0.18 }
  },

  // Noite 3
  3: {
    0: { bonnie: 0.12, chica: 0.11, freddy: 0.04, foxy: 0.12 },
    1: { bonnie: 0.14, chica: 0.13, freddy: 0.05, foxy: 0.15 },
    2: { bonnie: 0.16, chica: 0.15, freddy: 0.08, foxy: 0.18 },
    3: { bonnie: 0.20, chica: 0.18, freddy: 0.12, foxy: 0.22 },
    4: { bonnie: 0.22, chica: 0.20, freddy: 0.15, foxy: 0.26 },
    5: { bonnie: 0.24, chica: 0.22, freddy: 0.18, foxy: 0.30 }
  },

  // Noite 4
  4: {
    0: { bonnie: 0.25, chica: 0.20, freddy: 0.10, foxy: 0.20 },
    1: { bonnie: 0.30, chica: 0.25, freddy: 0.13, foxy: 0.25 },
    2: { bonnie: 0.35, chica: 0.30, freddy: 0.16, foxy: 0.30 },
    3: { bonnie: 0.40, chica: 0.35, freddy: 0.20, foxy: 0.35 },
    4: { bonnie: 0.45, chica: 0.40, freddy: 0.24, foxy: 0.40 },
    5: { bonnie: 0.50, chica: 0.45, freddy: 0.28, foxy: 0.45 }
  },

  // Noite 5
  5: {
    0: { bonnie: 0.35, chica: 0.30, freddy: 0.18, foxy: 0.30 },
    1: { bonnie: 0.40, chica: 0.35, freddy: 0.22, foxy: 0.35 },
    2: { bonnie: 0.45, chica: 0.40, freddy: 0.26, foxy: 0.40 },
    3: { bonnie: 0.50, chica: 0.45, freddy: 0.30, foxy: 0.45 },
    4: { bonnie: 0.55, chica: 0.50, freddy: 0.35, foxy: 0.50 },
    5: { bonnie: 0.60, chica: 0.55, freddy: 0.40, foxy: 0.55 }
  },

  // Noite 6
  6: {
    0: { bonnie: 0.50, chica: 0.40, freddy: 0.25, foxy: 0.40 },
    1: { bonnie: 0.55, chica: 0.45, freddy: 0.30, foxy: 0.45 },
    2: { bonnie: 0.60, chica: 0.50, freddy: 0.35, foxy: 0.50 },
    3: { bonnie: 0.65, chica: 0.55, freddy: 0.40, foxy: 0.55 },
    4: { bonnie: 0.70, chica: 0.60, freddy: 0.45, foxy: 0.60 },
    5: { bonnie: 0.75, chica: 0.65, freddy: 0.50, foxy: 0.65 }
  }
};

const HARDCORE_HOUR_AI = {
  1: {
    0: { bonnie: 0.04, chica: 0.02, freddy: 0.00, foxy: 0.00, endo: 0, puppet: 0.00 },
    1: { bonnie: 0.06, chica: 0.03, freddy: 0.00, foxy: 0.03, endo: 0, puppet: 0.00 },
    2: { bonnie: 0.07, chica: 0.06, freddy: 0.00, foxy: 0.06, endo: 0, puppet: 0.00 },
    3: { bonnie: 0.09, chica: 0.08, freddy: 0.00, foxy: 0.09, endo: 0, puppet: 0.00 },
    4: { bonnie: 0.12, chica: 0.11, freddy: 0.00, foxy: 0.13, endo: 0, puppet: 0.00 },
    5: { bonnie: 0.15, chica: 0.14, freddy: 0.00, foxy: 0.15, endo: 0, puppet: 0.00 }
  },
  2: {
    0: { bonnie: 0.10, chica: 0.08, freddy: 0.00, foxy: 0.09, endo: 0, puppet: 0.09 },
    1: { bonnie: 0.14, chica: 0.12, freddy: 0.00, foxy: 0.13, endo: 0, puppet: 0.12 },
    2: { bonnie: 0.18, chica: 0.16, freddy: 0.00, foxy: 0.17, endo: 0, puppet: 0.17 },
    3: { bonnie: 0.21, chica: 0.19, freddy: 0.00, foxy: 0.20, endo: 0, puppet: 0.22 },
    4: { bonnie: 0.26, chica: 0.24, freddy: 0.00, foxy: 0.25, endo: 0, puppet: 0.26 },
    5: { bonnie: 0.30, chica: 0.28, freddy: 0.00, foxy: 0.29, endo: 0, puppet: 0.29 }
  },
  3: {
    0: { bonnie: 0.20, chica: 0.18, freddy: 0.30, foxy: 0.24, endo: 0, puppet: 0.21 },
    1: { bonnie: 0.26, chica: 0.24, freddy: 0.33, foxy: 0.28, endo: 0, puppet: 0.25 },
    2: { bonnie: 0.34, chica: 0.32, freddy: 0.36, foxy: 0.32, endo: 0, puppet: 0.27 },
    3: { bonnie: 0.38, chica: 0.36, freddy: 0.40, foxy: 0.36, endo: 0, puppet: 0.29 },
    4: { bonnie: 0.45, chica: 0.43, freddy: 0.44, foxy: 0.40, endo: 0, puppet: 0.32 },
    5: { bonnie: 0.48, chica: 0.46, freddy: 0.48, foxy: 0.45, endo: 0, puppet: 0.34 }
  },
  4: {
    0: { bonnie: 0.35, chica: 0.32, freddy: 0.45, foxy: 0.30, endo: 0.20, puppet: 0.25 },
    1: { bonnie: 0.40, chica: 0.37, freddy: 0.48, foxy: 0.35, endo: 0.25, puppet: 0.29 },
    2: { bonnie: 0.45, chica: 0.42, freddy: 0.52, foxy: 0.40, endo: 0.30, puppet: 0.33 },
    3: { bonnie: 0.50, chica: 0.47, freddy: 0.56, foxy: 0.55, endo: 0.35, puppet: 0.36 },
    4: { bonnie: 0.58, chica: 0.52, freddy: 0.60, foxy: 0.60, endo: 0.40, puppet: 0.39 },
    5: { bonnie: 0.68, chica: 0.67, freddy: 0.65, foxy: 0.75, endo: 0.45, puppet: 0.42 }
  },
  5: {
    0: { bonnie: 0.45, chica: 0.42, freddy: 0.52, foxy: 0.40, endo: 0.40, puppet: 0.36 },
    1: { bonnie: 0.56, chica: 0.47, freddy: 0.66, foxy: 0.55, endo: 0.45, puppet: 0.38 },
    2: { bonnie: 0.65, chica: 0.52, freddy: 0.70, foxy: 0.60, endo: 0.50, puppet: 0.40 },
    3: { bonnie: 0.70, chica: 0.67, freddy: 0.75, foxy: 0.65, endo: 0.55, puppet: 0.43 },
    4: { bonnie: 0.75, chica: 0.72, freddy: 0.80, foxy: 0.70, endo: 0.60, puppet: 0.45 },
    5: { bonnie: 0.80, chica: 0.77, freddy: 0.85, foxy: 0.75, endo: 0.65, puppet: 0.47 }
  },
  6: {
    0: { bonnie: 0.55, chica: 0.52, freddy: 0.60, foxy: 0.50, endo: 0.60, puppet: 0.57 },
    1: { bonnie: 0.60, chica: 0.57, freddy: 0.65, foxy: 0.60, endo: 0.65, puppet: 0.59 },
    2: { bonnie: 0.75, chica: 0.62, freddy: 0.70, foxy: 0.65, endo: 0.70, puppet: 0.64 },
    3: { bonnie: 0.80, chica: 0.77, freddy: 0.85, foxy: 0.70, endo: 0.75, puppet: 0.70 },
    4: { bonnie: 0.95, chica: 0.82, freddy: 0.90, foxy: 0.80, endo: 0.80, puppet: 0.74 },
    5: { bonnie: 0.97, chica: 0.91, freddy: 0.95, foxy: 0.95, endo: 0.90, puppet: 0.85 }
  }
};

function getAI(animatronic) {
  // Custom Night normal (já existia)
  if (night === 7 && !hardcoreMode) {
    return customAI[animatronic] / 100;
  }

  // Custom Night Hardcore
  if (hardcoreMode && hardcoreCustomNight) {
    return (hardcoreCustomAI[animatronic] || 0) / 100;
  }

  let currentHour = Math.floor(hour);
  if (currentHour > 5) currentHour = 5;

  if (hardcoreMode) {
    let nightData = HARDCORE_HOUR_AI[night];
    if (!nightData) return 0;
    let hourData = nightData[currentHour];
    if (!hourData) return 0;
    return hourData[animatronic] || 0;
  }

  let nightData = HOUR_AI[night];
  if (!nightData) return 0;
  let hourData = nightData[currentHour];
  if (!hourData) return 0;
  return hourData[animatronic] || 0;
}

let pos = { bonnie: "stage", chica: "stage", freddy: "stage", foxy: "cove" };
let leftDoorClosed = false;
let rightDoorClosed = false;

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const office = document.getElementById("office");
const cameraPanel = document.getElementById("cameraPanel");
const clock = document.getElementById("clock");
const nightLabel = document.getElementById("nightLabel");
const leftDoor = document.getElementById("leftDoor");
const rightDoor = document.getElementById("rightDoor");
const leftAnim = document.getElementById("leftAnim");
const rightAnim = document.getElementById("rightAnim");

/* ---------- FUNÇÕES PRINCIPAIS ---------- */

function startGame() {
  menuMusic.pause();
  menuMusic.currentTime = 0;
  highestNight = 1;
  localStorage.setItem("highestNight", "1");
  night = 1;

  officeMusic.play();
  startCircusChance();

  startNightWithIntro()
  gameOver = false;
  blackout = false;
  powerOut = false;
  if (menu) menu.style.display = "none";
  if (game) game.style.display = "block";
  lastNight = night;
  setTimeout(gameLoop, 1000);
}

function resetNight() {
  let plushReward = document.getElementById("newPlushReward");
if (plushReward) plushReward.style.display = "none";
  startFan();
  updatePowerUI();
  preloadImages(BONNIE_JUMPSCARE_FRAMES, function () {
  window.bonnieJumpscareReady = true;
});
  preloadImages(CHICA_JUMPSCARE_FRAMES, function () {
  window.chicaJumpscareReady = true;
});
  lastFoxySongTime = 0;
  
  endoAttackCount = 0;
hardcoreCustomNight = hardcoreCustomNight; // mantém se já estiver em custom
  
  phoneGuySystem();
  
  let cameraButton = document.getElementById("cameraButton");
if (cameraButton) {
  cameraButton.style.display = "block";   // ou "inline-block" se preferir
}

  let over = document.getElementById("gameOverScreen");
  if (over) over.style.display = "none";

  let win = document.getElementById("winScreen");
  if (win) win.style.display = "none";
  
  leftLightOn = false;
rightLightOn = false;
if (leftAnim) {
  leftAnim.style.display = "none";
  leftAnim.innerHTML = "";
}
if (rightAnim) {
  rightAnim.style.display = "none";
  rightAnim.innerHTML = "";
}

  foxyStage = 3;
  foxyCooldown = false;
  foxyRunPlayed = false;
  foxySongPlayed = 0;
foxySongMax = Math.random() < 0.5 ? 1 : 2; // 1 ou 2 vezes por noite

  if (office) {
    office.style.backgroundImage = "url('https://images.steamusercontent.com/ugc/1764820095379054399/E05280395A261A2FEF1864E6878E87DA7B69E60B/')";
  }

  energyResetUsed = false;
let resetBtn = document.getElementById("resetEnergyBtn");
if (resetBtn) {
  resetBtn.disabled = false;
  // só mostra se estiver no hardcore
  resetBtn.style.display = hardcoreMode ? "inline-block" : "none";
}
  
  powerOut = false;
  circusPlayed = false;
  hour = 0;
  power = 99;
  let batteryEl = document.getElementById("battery");
if (batteryEl) batteryEl.innerHTML = "🔋99%";
  gameOver = false;

  if (clock) clock.innerHTML = "12 AM";
  if (batteryEl) batteryEl.innerHTML = "🔋99%";
  if (nightLabel) nightLabel.innerHTML = "Night " + night;

  pos.bonnie = "stage";
  pos.chica = "stage";
  pos.freddy = "stage";
  pos.foxy = "cove";
  posEndo = "backstage";
endoLightCount = 0;
if (endoDoorTimer) {
  clearTimeout(endoDoorTimer);
  endoDoorTimer = null;
}

  leftDoorClosed = false;
  rightDoorClosed = false;

  if (leftDoor) leftDoor.style.display = "none";
  if (rightDoor) rightDoor.style.display = "none";
  camerasOpen = false;
  selectedCamera = null;
  if (cameraPanel) cameraPanel.style.setProperty("display", "none", "important");
  let camView = document.getElementById("cameraView");
  if (camView) camView.style.setProperty("display", "none", "important");

  updateOfficePlush();
  updateOfficeButtons();
  updateDoorLightVisuals();
}

function toggleDoor(side) {
  if (powerOut) return;
  updateUsageMeter();
  doorSound.currentTime = 0;
  doorSound.play();

  if (side === "left" && leftDoor) {
    leftDoorClosed = !leftDoorClosed;
    leftDoor.style.display = leftDoorClosed ? "block" : "none";
    leftDoor.innerHTML = leftDoorClosed ? "<img src='" + SPRITES.leftDoorSprite + "' style='width:100%;height:100%;'>" : "";
  }
  
  if (hardcoreMode) {
  if (side === "left" && posEndo === "left" && leftDoorClosed) {
    endoDoorTimer = setTimeout(() => {
      if (posEndo === "left" && leftDoorClosed) {
        if (hardcoreCustomNight && hcBehaviors.endoDouble && endoAttackCount < 1) {
          // primeiro ataque: só “tenta de novo”, não mata
          endoAttackCount++;
          endoLightCount = 0;
        } else {
          jumpscare("Endo");
        }
      }
    }, 6000);
  }
  }
  
  if (side === "right" && rightDoor) {
    rightDoorClosed = !rightDoorClosed;
    rightDoor.style.display = rightDoorClosed ? "block" : "none";
    rightDoor.innerHTML = rightDoorClosed ? "<img src='" + SPRITES.rightDoorSprite + "' style='width:100%;height:100%;'>" : "";
  }
  
  if (hardcoreMode) {
  if (side === "right" && posEndo === "right" && leftDoorClosed) {
    endoDoorTimer = setTimeout(() => {
      if (posEndo === "right" && leftDoorClosed) {
        if (hardcoreCustomNight && hcBehaviors.endoDouble && endoAttackCount < 1) {
          // primeiro ataque: só “tenta de novo”, não mata
          endoAttackCount++;
          endoLightCount = 0;
        } else {
          jumpscare("Endo");
        }
      }
    }, 6000);
  }
}
updateOfficeButtons();
}

function toggleCamera() {
  camerasOpen = !camerasOpen;

  updateFan();
  updateUsageMeter();

  if (puppetActive) {
    let vol = (camerasOpen && selectedCamera === "safeRoom") ? 0.6 : 0.15;
    puppetMusic.volume = vol;
    puppetFastMusic.volume = vol;
  }

  let camView = document.getElementById("cameraView");
  if (camerasOpen) {
    if (cameraPanel) cameraPanel.style.setProperty("display", "block", "important");
    if (camView) camView.style.setProperty("display", "block", "important");

    renderCamera();
    updateCameraImage();
    renderCameraAnimatronics();
    let gf = document.getElementById("goldenFreddyOffice");
    if (gf) gf.remove();
    clearTimeout(goldenFreddyTimer);
    goldenFreddyActive = false;
  } else {
    if (cameraPanel) cameraPanel.style.setProperty("display", "none", "important");
    if (camView) camView.style.setProperty("display", "none", "important");
    goldenFreddyChance();
  }

  updateOfficeButtons();
  updateDoorLightVisuals();
}

document.getElementById("cameraPanel").addEventListener("click", function(e) {
  let cam = e.target.closest(".cam");
  if (!cam) return;

  let name = cam.id.replace("Cam", "");
  openCam(name);
});

function openCam(name) {
  updateDoorLightVisuals();
  if (selectedCamera === name) {
    selectedCamera = null;
    document.querySelectorAll(".cam").forEach(c => c.classList.remove("selectedCam"));
    renderCamera();
    updateCameraImage();
    return;
  }

  currentCam = name;
  selectedCamera = name;

  document.querySelectorAll(".cam").forEach(c => c.classList.remove("selectedCam"));
  let el = document.getElementById(name + "Cam");
  if (el) el.classList.add("selectedCam");

  renderCamera();
  updateCameraImage();
  renderCameraAnimatronics();
}

function renderCamera() {
  clearCameraAnimatronics();
  const cams = ["stageCam", "diningCam", "backstageCam", "pirateCam", "restroomCam", "kitchenCam", "supplyCam", "westHallCam", "eastHallCam", "westCornerCam", "eastCornerCam"];
  cams.forEach(id => {
    let el = document.getElementById(id);
    if (el) el.innerHTML = el.innerText.split("<br>")[0];
  });

  function put(id, img) {
    let el = document.getElementById(id);
    if (el) el.innerHTML += "<br><img src='" + img + "' style='width:40px'>";
  }

  if (radarOwned && radarEquipped) {
  if (pos.bonnie === "stage") put("stageCam", RADAR_SPRITES.bonnie);
  if (pos.bonnie === "dining") put("diningCam", RADAR_SPRITES.bonnie);
  if (pos.bonnie === "backstage") put("backstageCam", RADAR_SPRITES.bonnie);
  if (pos.bonnie === "supply") put("supplyCam", RADAR_SPRITES.bonnie);
  if (pos.bonnie === "westHall") put("westHallCam", RADAR_SPRITES.bonnie);
  if (pos.bonnie === "westCorner") put("westCornerCam", RADAR_SPRITES.bonnie);

  if (pos.chica === "stage") put("stageCam", RADAR_SPRITES.chica);
  if (pos.chica === "dining") put("diningCam", RADAR_SPRITES.chica);
  if (pos.chica === "kitchen") put("kitchenCam", RADAR_SPRITES.chica);
  if (pos.chica === "eastHall") put("eastHallCam", RADAR_SPRITES.chica);
  if (pos.chica === "eastCorner") put("eastCornerCam", RADAR_SPRITES.chica);
  if (pos.chica === "restroom") put("restroomCam", RADAR_SPRITES.chica);

  if (pos.freddy === "stage") put("stageCam", RADAR_SPRITES.freddy);
  if (pos.freddy === "dining") put("diningCam", RADAR_SPRITES.freddy);
  if (pos.freddy === "restroom") put("restroomCam", RADAR_SPRITES.freddy);
  if (pos.freddy === "kitchen") put("kitchenCam", RADAR_SPRITES.freddy);
  if (pos.freddy === "eastHall") put("eastHallCam", RADAR_SPRITES.freddy);
  if (pos.freddy === "eastCorner") put("eastCornerCam", RADAR_SPRITES.freddy);

  // Foxy
  let pirate = document.getElementById("pirateCam");
  if (pirate) {
    pirate.innerHTML = "Pirate Cove";
    if (selectedCamera === "pirate") pirate.innerHTML += "<br>" + "🔴".repeat(foxyStage);
    if (pos.foxy === "cove") pirate.innerHTML += "<br><img src='" + RADAR_SPRITES.foxy + "' style='width:40%'>";
  }

  if (pos.foxy === "westHall" && document.getElementById("westHallCam")) {
    document.getElementById("westHallCam").innerHTML += "<br><img src='" + RADAR_SPRITES.foxy + "' style='width:40%'>";
  }
  }
  }

function toggleLeftLight() {
  if (powerOut) return;
  updateUsageMeter();

  leftLightOn = !leftLightOn;
  lightSound.currentTime = 0;
  lightSound.play();
  lightSound.loop = true;
  
  if (!leftLightOn) {
    // Desliga a luz
    if (leftAnim) {
      leftAnim.style.display = "none";
      lightSound.pause();
      lightSound.currentTime = 0;
      lightSound.loop = false;
      leftAnim.innerHTML = "";
    }
    updateOfficeButtons();
    updateDoorLightVisuals();
    return;
  }

  // Liga a luz
  let imgSrc = DOOR_LIGHTS.leftEmpty;

  if (pos.bonnie === "left") {
    imgSrc = DOOR_LIGHTS.leftBonnie;
    doorScareSound.currentTime = 0;
    doorScareSound.play();
  } else if (pos.foxy === "left" || pos.foxy === "westHall") {
    imgSrc = DOOR_LIGHTS.leftFoxy;
    doorScareSound.currentTime = 0;
    doorScareSound.play();
  }
  if (isEndoActive() && posEndo === "left") {
  imgSrc = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/endo%2001%20na%20porta%20esquerda.png";
  doorScareSound.currentTime = 0;
  doorScareSound.play();
}

  if (leftAnim) {
    leftAnim.innerHTML = `<img src="${imgSrc}" style="width:100%; height:100%; object-fit:cover;">`;
    leftAnim.style.display = "block";
  }
  // No toggleLeftLight, depois de ligar a luz:
if (hardcoreMode && posEndo === "left" && leftLightOn) {
  endoLightCount++;
  if (endoLightCount >= 3) {
    posEndo = "dining";
    endoLightCount = 0;
    endoAttackCount = 0;
  }
}
updateOfficeButtons();
updateDoorLightVisuals();
}

function toggleRightLight() {
  if (powerOut) return;
  updateUsageMeter();

  rightLightOn = !rightLightOn;
  lightSound.currentTime = 0;
  lightSound.play();
  lightSound.loop = true;

  if (!rightLightOn) {
    // Desliga a luz
    if (rightAnim) {
      rightAnim.style.display = "none";
        lightSound.pause();
        lightSound.currentTime = 0;
        lightSound.loop = false;
      rightAnim.innerHTML = "";
    }
    updateDoorLightVisuals();
    updateOfficeButtons();
    return;
  }

  // Liga a luz
  let imgSrc = DOOR_LIGHTS.rightEmpty;

  if (pos.chica === "right") {
    imgSrc = DOOR_LIGHTS.rightChica;
    doorScareSound.currentTime = 0;
    doorScareSound.play();
  }
  if (isEndoActive() && posEndo === "right") {
  imgSrc = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/endo%2001%20na%20porta%20direita.png";
  doorScareSound.currentTime = 0;
  doorScareSound.play();
}

  if (rightAnim) {
    rightAnim.innerHTML = `<img src="${imgSrc}" style="width:100%; height:100%; object-fit:cover;">`;
    rightAnim.style.display = "block";
  }
  // No toggleRightLight:
if (hardcoreMode && posEndo === "right" && rightLightOn) {
  endoLightCount++;
  if (endoLightCount >= 3) {
    posEndo = "dining";
    endoLightCount = 0;
    endoAttackCount = 0;
  }
}
updateOfficeButtons();
updateDoorLightVisuals();
}

function gameLoop() {
  if (!gameRunning || gameOver) return;

  if (infinitePower) {
    power = 100;
  } else if (!powerOut) {
    // valores por SEGUNDO (antes era a cada 3s)
    let drain = hardcoreMode ? 0.10 : 0.03; // base
    if (energyMode === "low") drain = 0.01;
    if (energyMode === "high") drain = 0.07;

    if (camerasOpen) drain += 0.10;
    if (leftLightOn) drain += 0.04;
    if (rightLightOn) drain += 0.04;
    if (leftDoorClosed) drain += 0.15;
    if (rightDoorClosed) drain += 0.15;

    power -= drain;
    if (power < 0) power = 0;
  }

  updatePowerUI();

  hour += fastNight ? 0.025 : 0.015; // também /3 (antes 0.16 / 0.08)
  let currentHour = Math.floor(hour);

  if (currentHour >= 6) {
    hour = 6;
    winNight();
    return;
  }
  if (clock) clock.innerHTML = (currentHour === 0 ? 12 : currentHour) + " AM";

  if (selectedCamera === "westHall" && Math.random() < 0.80) {
    startWestHallBlink();
  }

  if (power <= 0 && !powerOut) powerFailure();

  gameLoopTimer = setTimeout(gameLoop, 1000); // 1 segundo
}

let moveTimers = {};

function startMovementSystem() {
  stopMovementSystem();

  let bonnieTime = night === 7 ? customMoveTime.bonnie : 4250;
  let chicaTime = night === 7 ? customMoveTime.chica : 4765;
  let freddyTime = night === 7 ? customMoveTime.freddy : 3120;
  let foxyTime = night === 7 ? customMoveTime.foxy : 5370;

  moveTimers.bonnie = setInterval(() => {
    if (!gameRunning || gameOver) return;
    moveBonnie();
    renderCamera();
    renderCameraAnimatronics();
  }, bonnieTime);

  moveTimers.chica = setInterval(() => {
    if (!gameRunning || gameOver) return;
    moveChica();
    renderCamera();
    renderCameraAnimatronics();
  }, chicaTime);

  moveTimers.freddy = setInterval(() => {
    if (!gameRunning || gameOver) return;
    moveFreddy();
    renderCamera();
    renderCameraAnimatronics();
  }, freddyTime);

  moveTimers.foxy = setInterval(() => {
    if (!gameRunning || gameOver) return;
    moveFoxy();
    renderCamera();
    renderCameraAnimatronics();
  }, foxyTime);

  if (hardcoreMode) {
    moveTimers.endo = setInterval(() => {
      if (!gameRunning || gameOver) return;
      moveEndo();
    }, 3000);
  }
}

function stopMovementSystem() {
  Object.values(moveTimers).forEach(timer => clearInterval(timer));
  moveTimers = {};
}

function moveBonnie() {
  if (powerOut) return;

  if (Math.random() < getAI("bonnie")) {
    
    let skip = hardcoreCustomNight && hcBehaviors.bonnieSkip && Math.random() < 0.45;
    
    setSoundVolume(bonnieChicaStepSound, getStepVolumeByRoom(pos.bonnie));
bonnieChicaStepSound.currentTime = 0;
bonnieChicaStepSound.play();

    switch (pos.bonnie) {

      case "stage":
        if (skip) {
    pos.bonnie = Math.random() < 0.5 ? "backstage" : "supply";  
  } else {
        pos.bonnie = Math.random() < 0.5 ? "dining" : "backstage";
    }
        break;

      case "dining":
  if (skip) {
    pos.bonnie = Math.random() < 0.5 ? "westHall" : "supply"; // pula o backstage
  } else {
    let destinos = ["backstage", "westHall", "supply"];
    if (hardcoreMode) destinos.push("safeRoom");
    pos.bonnie = destinos[Math.floor(Math.random() * destinos.length)];
  }
  break;
        
        case "safeRoom":
        if (skip) {
    pos.bonnie = Math.random() < 0.6 ? "westHall" : "dining";  
  } else {
  pos.bonnie = "dining";
    }
  onAnimatronicLeftSafeRoom();
  break;

      case "backstage":
        if (skip) {
    pos.bonnie = Math.random() < 0.5 ? "westHall" : "supply";  
  } else {
        pos.bonnie = Math.random() < 0.5 ? "dining" : "supply";
    }
        break;

      case "supply":
        if (skip) {
    pos.bonnie = Math.random() < 0.5 ? "left" : "westCorner";  
  } else {
        pos.bonnie = Math.random() < 0.5 ? "westHall" : "left";
    }
        // Desliga a luz automaticamente
    if (leftLightOn) {
        leftLightOn = false;

        if (leftAnim) {
            leftAnim.style.display = "none";
            leftAnim.innerHTML = "";
        }

        lightSound.pause();
        lightSound.currentTime = 0;
        lightSound.loop = false;
    }
        break;

      case "westHall":
  if (skip) {
    pos.bonnie = "left"; // pula o canto
  } else {
    let destinos = ["westCorner", "supply", "dining"];
    pos.bonnie = destinos[Math.floor(Math.random() * destinos.length)];
  }
  break;

      case "westCorner":
        if (skip) {
    pos.bonnie = "left";  
  } else {
        pos.bonnie = Math.random() < 0.5 ? "left" : "westHall";
    }
        // Desliga a luz automaticamente
    if (leftLightOn) {
        leftLightOn = false;

        if (leftAnim) {
            leftAnim.style.display = "none";
            leftAnim.innerHTML = "";
        }

        lightSound.pause();
        lightSound.currentTime = 0;
        lightSound.loop = false;
    }
        break;

      case "left":
  if (leftDoorClosed) {
    pos.bonnie = "dining";
    tocSound.currentTime = 0;
    tocSound.play();
  } else {
    jumpscare("Bonnie");
  }
  break;
    }
  }
}

function moveChica() {
  if (powerOut) return;

  if (Math.random() < getAI("chica")) {
    
    let skip = hardcoreCustomNight && hcBehaviors.chicaSkip && Math.random() < 0.45;
    
    setSoundVolume(bonnieChicaStepSound, getStepVolumeByRoom(pos.chica));
bonnieChicaStepSound.currentTime = 0;
bonnieChicaStepSound.play();

    switch (pos.chica) {

      case "stage":
        if (skip) {
    pos.chica = Math.random() < 0.5 ? "eastHall" : "safeRoom";
  } else {
        pos.chica = "dining";
    }
        break;

  case "dining":
  if (skip) {
    pos.chica = Math.random() < 0.5 ? "eastHall" : "kitchen";
  } else {
    let destinos = ["eastHall", "restroom", "kitchen"];
    if (hardcoreMode) destinos.push("safeRoom");
    pos.chica = destinos[Math.floor(Math.random() * destinos.length)];
}
  break;
        
     case "safeRoom":
      if (skip) {
    pos.chica = Math.random() < 0.5 ? "eastHall" : "kitchen";
  } else {
  pos.chica = "restroom";
    }
   onAnimatronicLeftSafeRoom();
  break;

      case "restroom":
        if (skip) {
    pos.chica = Math.random() < 0.5 ? "eastHall" : "kitchen";
  } else {
        pos.chica = Math.random() < 0.5 ? "dining" : "kitchen";
    }
        break;

      case "kitchen":
        if (skip) {
    pos.chica = Math.random() < 0.5 ? "eastHall" : "eastCorner";
  } else {
        {
          let destinos = ["restroom", "eastHall", "dining"];
          pos.chica = destinos[Math.floor(Math.random() * destinos.length)];
        }
    }
        break;

      case "eastHall":
  if (skip) {
    pos.chica = Math.random() < 0.8 ? "right" : "restroom";
  } else {
    pos.chica = Math.random() < 0.2 ? "kitchen" : "eastCorner";
  }
  break;

      case "eastCorner":
        if (skip) {
    pos.chica = "right"; // pula o canto
  } else {
        pos.chica = Math.random() < 0.5 ? "eastHall" : "right";
    }
           // Desliga a luz automaticamente
    if (rightLightOn) {
        rightLightOn = false;

        if (rightAnim) {
            rightAnim.style.display = "none";
            rightAnim.innerHTML = "";
        }

        lightSound.pause();
        lightSound.currentTime = 0;
        lightSound.loop = false;
    }
        break;

      case "right":
  if (rightDoorClosed) {
    pos.chica = "dining";
    tocSound.currentTime = 0;
    tocSound.play();
  } else {
    jumpscare("Chica");
  }
  break;
    }
  }
  if (pos.chica === "kitchen") {
  if (!currentKitchenSound || currentKitchenSound.paused) {
    playRandomKitchenSound();
  }
} else {
  stopKitchenSound();
}
}

function moveFreddy() {
  if (hardcoreMode && powerOut) return;
  if (freddyAnim.phase !== "idle") return; // não se mexe no meio da animação
  if (pos.freddy === "office" || getAI("freddy") <= 0) return;
  if (camerasOpen && selectedCamera && pos.freddy === selectedCamera) return;

  if (Math.random() < getAI("freddy")) {
    let oldPosition = pos.freddy;
    let next = oldPosition;

    switch (pos.freddy) {
      case "stage": next = "dining"; break;
      case "dining":
        if (hardcoreMode && Math.random() < 0.7) next = "safeRoom";
        else next = "restroom";
        break;
        case "safeRoom":
        next = "restroom";
        onAnimatronicLeftSafeRoom();
        break;
      case "restroom":
        next = "kitchen";
        musicBox.currentTime = 0;
        musicBox.loop = true;
        musicBox.play();
        break;
      case "kitchen":
        musicBox.pause();
        musicBox.currentTime = 0;
        musicBox.loop = false;
        next = "eastHall";
        break;
      case "eastHall": next = "eastCorner"; break;
      case "eastCorner": next = "right"; break;
      case "right":
        if (rightDoorClosed) {
          if (hardcoreMode && (hcBehaviors.freddySwitchHall || !hardcoreCustomNight) && Math.random() < 0.50) {
            next = "westHall";
          } else {
            next = "eastHall";
          }
          tocSound.currentTime = 0;
          tocSound.play();
        } else {
          next = "office";
          pos.freddy = "office";
          setTimeout(() => {
            if (pos.freddy === "office" && !gameOver) jumpscare("Freddy");
          }, 5000);
          return;
        }
        break;
      case "westHall": next = "westCorner"; break;
      case "westCorner": next = "left"; break;
      case "left":
        if (leftDoorClosed) {
          if (hardcoreMode &&
              (hcBehaviors.freddySwitchHall || !hardcoreCustomNight) && Math.random() < 0.50) {
            next = "eastHall";
          } else {
            next = "westHall";
          }
          tocSound.currentTime = 0;
          tocSound.play();
        } else {
          next = "office";
          pos.freddy = "office";
          setTimeout(() => {
            if (pos.freddy === "office" && !gameOver) jumpscare("Freddy");
          }, 5000);
          return;
        }
        break;
    }

    pos.freddy = next;

    if (oldPosition !== next) {
      animateFreddyMove(oldPosition, next);
      if (!(hardcoreCustomNight && hcBehaviors.freddyNoLaugh)) {
        playFreddyLaugh();
      }
    }

    updateCameraImage();
  }
}

function moveFoxy() {
  tryPlayFoxyPirateSong();
  if (powerOut || gameOver || !gameRunning ||
  foxyCooldown) return;
  if (Math.random() >= getAI("foxy")) return;

  if (foxyStage > 0) {
    if (!camerasOpen) foxyStage--;
    renderCamera();
    renderCameraAnimatronics();
    return;
  }

  if (pos.foxy === "cove") {
  pos.foxy = "westHall";
  foxyRunPlayed = true;
  foxyRunSound.currentTime = 0;
  foxyRunSound.play();
  renderCamera();
  renderCameraAnimatronics();

  // Tempo da corrida (caixa ativada = mais rápido)
  let runDelay = (hardcoreCustomNight && hcBehaviors.foxyFast) ? 1400 : 2800;
  let attackDelay = (hardcoreCustomNight && hcBehaviors.foxyFast) ? 400 : 800;

  setTimeout(() => {
    if (gameOver || powerOut) return;

    if (leftLightOn) {
      leftLightOn = false;
      if (leftAnim) {
        leftAnim.style.display = "none";
        leftAnim.innerHTML = "";
      }
      lightSound.pause();
      lightSound.currentTime = 0;
      lightSound.loop = false;
    }
  
  pos.foxy = "left";
    renderCamera();
    renderCameraAnimatronics();

    setTimeout(() => {
      if (gameOver || powerOut) return;

      if (leftDoorClosed) {
  foxyKnockSound.currentTime = 0;
  foxyKnockSound.play();

  // Drena de 3% a 5% de energia
  let drain = 3 + Math.floor(Math.random() * 3); // 3, 4 ou 5
  power -= drain;
  if (power < 0) power = 0;
  updatePowerUI();

  foxyCooldown = true;
  pos.foxy = "cove";
  foxyStage = 3;
  foxyRunPlayed = false;
  setTimeout(() => foxyCooldown = false, 12000);
  renderCamera();
  renderCameraAnimatronics();
      } else {
        jumpscare("Foxy");
      }
    }, attackDelay);

  }, runDelay);

  if (pos.bonnie === "westHall" || pos.foxy === "westHall") {
  if (Math.random() < 0.3) startWestHallBlink();
}
}
}

function moveEndo() {
  if (!hardcoreMode || powerOut || gameOver || !gameRunning) return;
  if (night < 4) return; // só a partir da noite 4

  if (Math.random() >= getAI("endo")) return;
  
  switch (posEndo) {
    case "backstage":
      posEndo = Math.random() < 0.5 ? "dining" : "supply";
      break;

    case "dining":
      {
        let destinos = ["westHall", "supply", "eastHall"];
        posEndo = destinos[Math.floor(Math.random() * destinos.length)];
      }
      break;

    case "supply":
      posEndo = Math.random() < 0.5 ? "dining" : "westHall";
      break;

    case "westHall":
      {
        let destinos = ["westCorner", "supply", "eastHall"];
        posEndo = destinos[Math.floor(Math.random() * destinos.length)];
      }
      break;

    case "westCorner":
      posEndo = Math.random() < 0.5 ? "left" : "westHall";
      endoLightCount = 0;
      break;

    case "eastHall":
      {
        let destinos = ["eastCorner", "dining", "westHall"];
        posEndo = destinos[Math.floor(Math.random() * destinos.length)];
      }
      break;

    case "eastCorner":
      posEndo = Math.random() < 0.5 ? "right" : "eastHall";
      endoLightCount = 0;
      break;

    case "left":
    case "right":
      // Fica na porta até o jogador piscar a luz 3 vezes ou fechar a porta
      break;
  }

  playEndoStep();
  renderCamera();
  renderCameraAnimatronics();
}

function powerFailure() {
  stopFan();
  updatePowerUI();
  updateOfficePlush();
  stopKitchenSound();
  lightSound.pause();
  lightSound.currentTime = 0;
  lightSound.loop = false;
  musicBox.pause();
  musicBox.currentTime = 0;
  musicBox.loop = false;
  officeMusic.pause();
  officeMusic.currentTime = 0;
  officeMusic2.pause();
  officeMusic2.currentTime = 0;

  powerOut = true;

  preloadImages(FREDDY_POWER_OUT_FRAMES, function () {
    window.freddyPowerOutReady = true;
  });

  leftLightOn = false;
  rightLightOn = false;
  if (leftAnim) {
    leftAnim.style.display = "none";
    leftAnim.innerHTML = "";
  }
  if (rightAnim) {
    rightAnim.style.display = "none";
    rightAnim.innerHTML = "";
  }

  camerasOpen = false;
  if (cameraPanel) cameraPanel.style.display = "none";

  leftDoorClosed = false;
  rightDoorClosed = false;
  if (leftDoor) leftDoor.style.display = "none";
  if (rightDoor) rightDoor.style.display = "none";
  updateOfficeButtons();

  powerDownSound.currentTime = 0;
  powerDownSound.play();

  freddyStepSound.currentTime = 0;
  freddyStepSound.play();

  // some a animação antiga (ela cobria o Freddy)
  let powerAnim = document.getElementById("powerOutAnimation");
  if (powerAnim) powerAnim.style.display = "none";

  let officeEl = document.getElementById("office");
  if (officeEl) officeEl.style.position = "relative";

  // base sem Freddy
  if (officeEl) {
    officeEl.style.backgroundImage = 'url("https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/304.png")';
  }

  // limpa overlay velho
  let oldBlink =
      document.getElementById("freddyPowerBlink");
  if (oldBlink) oldBlink.remove();

  setTimeout(function () {
    if (gameOver) return;

    musicBox.currentTime = 0;
    musicBox.play();

    // overlay COM Freddy (pisca com opacidade)
    let freddyOverlay = document.createElement("img");
    freddyOverlay.id = "freddyPowerBlink";
    freddyOverlay.src = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/305.png";
    freddyOverlay.style.cssText =
      "position:absolute;top:0;left:0;width:100%;height:100%;object-fit:relative;opacity:0;transition:opacity 0.3s ease;z-index:5;pointer-events:none;";

    if (officeEl) officeEl.appendChild(freddyOverlay);

    let blinkOn = false;
    if (freddyBlinkTimer) clearInterval(freddyBlinkTimer);

    freddyBlinkTimer = setInterval(function () {
      if (gameOver || !powerOut) {
        clearInterval(freddyBlinkTimer);
        freddyBlinkTimer = null;
        return;
      }
      blinkOn = !blinkOn;
      freddyOverlay.style.opacity = blinkOn ? "1" : "0";
    }, 300);

    // \~36s piscando → escuro total
    setTimeout(function () {
      if (freddyBlinkTimer) {
        clearInterval(freddyBlinkTimer);
        freddyBlinkTimer = null;
      }

      musicBox.pause();
      musicBox.currentTime = 0;

      let fo = document.getElementById("freddyPowerBlink");
      if (fo) {
        fo.style.opacity = "0";
        setTimeout(function () {
          fo.remove();
        }, 300);
      }
      if (officeEl) {
        officeEl.style.backgroundImage =
          "url('https://static.wikia.nocookie.net/pizzaria-freddy-fazbear/images/9/93/Darkened_Office.png/revision/latest?cb=20150121172042&path-prefix=pt-br')";
      }

      bonnieChicaStepSound.play();

      setTimeout(function () {
        if (!powerOut || !gameRunning) return;
        powerOutFreddyJumpscare = true;
        jumpscare("Freddy");
      }, 7000);
    }, 36528);
  }, 5000);
}

function continueGame() {
  menuMusic.pause();
  menuMusic.currentTime = 0;
  startNightWithIntro()
  updateStars();
  night = highestNight;
  if (menu) menu.style.display = "none";
  if (game) game.style.display = "block";
  setTimeout(gameLoop, 1000);
}

function setLanguage(lang) {
  language = lang;
  let newGameEl = document.getElementById("newGame");
  let optionsBtn = document.getElementById("optionsButton");
  let officeTitle = document.getElementById("officeTitle");

  if (lang === "pt") {
    if (newGameEl) newGameEl.innerHTML = "Novo Jogo";
    if (optionsBtn) optionsBtn.innerHTML = "Opções";
    if (officeTitle) officeTitle.innerHTML = "Escritório";
  } else {
    if (newGameEl) newGameEl.innerHTML = "New Game";
    if (optionsBtn) optionsBtn.innerHTML = "Options";
    if (officeTitle) officeTitle.innerHTML = "Office";
  }
}

function openOptions() {
  let opt = document.getElementById("optionsMenu");
  if (opt) opt.style.display = "block";
}

function closeOptions() {
  menuMusic.currentTime = 0;
  menuMusic.play();
  let opt = document.getElementById("optionsMenu");
  if (opt) opt.style.display = "none";
}

function winNight() {
  if (freddyBlinkTimer) {
  clearInterval(freddyBlinkTimer);
  freddyBlinkTimer = null;
}
let freddyOverlay = document.getElementById("freddyPowerBlink");
if (freddyOverlay) freddyOverlay.remove();
  updateStars();
  sixAMSound.currentTime = 0;
  sixAMSound.play();
  powerOut = false;
  powerOutFreddyJumpscare = false;

  if (freddyBlinkTimer) {
    clearInterval(freddyBlinkTimer);
    freddyBlinkTimer = null;
  }
  if (blackoutTimer) {
    clearTimeout(blackoutTimer);
    blackoutTimer = null;
  }

  musicBox.pause();
  musicBox.currentTime = 0;

  let powerAnim = document.getElementById("powerOutAnimation");
  if (powerAnim) powerAnim.style.display = "none";

  gameRunning = false;
  leftLightOn = false;
rightLightOn = false;
if (leftAnim) {
  leftAnim.style.display = "none";
  leftAnim.innerHTML = "";
}
if (rightAnim) {
  rightAnim.style.display = "none";
  rightAnim.innerHTML = "";
}
  let cameraButton = document.getElementById("cameraButton");
if (cameraButton) cameraButton.style.display = "none";
  
  leftDoorClosed = false;
  rightDoorClosed = false;
  if (leftDoor) leftDoor.style.display = "none";
  if (rightDoor) rightDoor.style.display = "none";

  if (night < 5) {
    highestNight = night + 1;
  }

  if (night === 5) {
    stars.night5 = true;
    localStorage.setItem("stars", JSON.stringify(stars));
    updateStars();
    highestNight = 5;
    night6Unlocked = true;
    localStorage.setItem("night6Unlocked", "true");
    let n6 = document.getElementById("night6Button");
    if (n6) n6.style.display = "inline-block";
  }

  if (night === 6) {
    stars.night6 = true;
    localStorage.setItem("stars", JSON.stringify(stars));
    updateStars();
    customNightUnlocked = true;
    localStorage.setItem("customNightUnlocked", "true");

    let cn = document.getElementById("customNightButton");
    if (cn) cn.style.display = "inline-block";

    let extras = document.getElementById("extrasButton");
    if (extras) extras.style.display = "inline-block";

    let radarBtn = document.getElementById("radarShopButton");
    if (radarBtn) radarBtn.style.display = "inline-block";
  }

  localStorage.setItem("highestNight", highestNight);
  localStorage.setItem("night6Unlocked", night6Unlocked);
  localStorage.setItem("customNightUnlocked", customNightUnlocked);

  if (currentChallenge) {
    unlockPlush(currentChallenge.reward);
    if (currentChallenge.reward === "golden") {
      stars.golden = true;
      localStorage.setItem("stars", JSON.stringify(stars));
      updateStars();
    }
    currentChallenge = null;
  }

  // Decide qual ending mostrar depois
let pendingEnding = 0;

if (night === 5) {
  pendingEnding = 1;
}
if (night === 6) {
  pendingEnding = 2;
}
if (currentChallenge && currentChallenge.reward === "golden") {
  pendingEnding = 3;
}

// Guarda o ending pra mostrar quando o jogador clicar em Next Night ou Menu
window.pendingEnding = pendingEnding;
  
  // Mostra a tela de 6 AM
  let win = document.getElementById("winScreen");
  if (win) {
  win.style.display = "flex";
  win.style.zIndex = "99999";
  }
  if (hardcoreMode) {
  if (night < 5) {
    localStorage.setItem("hardcoreHighestNight", night + 1);
  }
  if (night === 5) {
    localStorage.setItem("hardcoreHighestNight", "5");
    localStorage.setItem("hardcoreNight6Unlocked", "true");
    localStorage.setItem("hardcoreCustomUnlocked", "true"); // ← novo
  }
  if (night === 6) {
    localStorage.setItem("hardcoreHighestNight", "6");
  }
}
}

function nextNight() {
  // Se tem ending pendente, mostra ela primeiro
  if (window.pendingEnding && window.pendingEnding > 0) {
    showEnding(window.pendingEnding);
    window.pendingEnding = 0;

    // Quando clicar na ending, aí sim continua a próxima noite
    let endingScreen = document.getElementById("endingScreen");
    endingScreen.onclick = function() {
      endingScreen.style.display = "none";
      endingMusic.pause();
      endingMusic.currentTime = 0;

      // Agora sim começa a próxima noite
      updateStars();
      if (night < 5) {
        night++;
        highestNight = night;
      }
      setTimeout(gameLoop, 1000);
      startNightWithIntro()
    };
    return;
  }

  // Se não tem ending, continua normal
  updateStars();
  if (night < 5) {
    night++;
    highestNight = night;
  }
  setTimeout(gameLoop, 1000);
  startNightWithIntro()
}

function goMenu() {
  // Se tem ending pendente, mostra ela primeiro
  if (window.pendingEnding && window.pendingEnding > 0) {
    showEnding(window.pendingEnding);
    window.pendingEnding = 0;

    // Quando clicar na ending, aí sim vai pro menu
    let endingScreen = document.getElementById("endingScreen");
    endingScreen.onclick = function() {
      endingScreen.style.display = "none";
      endingMusic.pause();
      endingMusic.currentTime = 0;

      // Agora sim executa o goMenu normal
      reallyGoMenu();
    };
    return;
  }

  // Se não tem ending, vai pro menu normal
  reallyGoMenu();
}

function reallyGoMenu() {
  if (freddyBlinkTimer) {
  clearInterval(freddyBlinkTimer);
  freddyBlinkTimer = null;
}
let freddyOverlay = document.getElementById("freddyPowerBlink");
if (freddyOverlay) freddyOverlay.remove();
  let plushReward = document.getElementById("newPlushReward");
if (plushReward) plushReward.style.display = "none";
  stopFan();
  sixAMSound.currentTime = 0;
  sixAMSound.pause();
  let win = document.getElementById("winScreen");
  if (win) win.style.display = "none";

  let over = document.getElementById("gameOverScreen");
  if (over) over.style.display = "none";

  posEndo = "backstage";
endoLightCount = 0;
if (endoDoorTimer) {
  clearTimeout(endoDoorTimer);
  endoDoorTimer = null;
}
  // no reallyGoMenu
hardcoreCustomNight = false;
  
  gameRunning = false;
  if (gameLoopTimer) {
    clearTimeout(gameLoopTimer);
    gameLoopTimer = null;
  }

  if (currentPhoneCall) {
    currentPhoneCall.pause();
    currentPhoneCall.currentTime = 0;
    currentPhoneCall = null;
  }
  phoneCallPlaying = false;
  stopPuppet();
  hardcoreMode = false;
updateHardcoreUI();
updateHardcoreCameras();

  let muteBtn = document.getElementById("mutePhoneButton");
  if (muteBtn) muteBtn.style.display = "none";
  
  foxyPirateSong.currentTime = 0;
  foxyPirateSong.pause();
  
  lightSound.loop = false;
  lightSound.pause();
  lightSound.currentTime = 0;

  powerOut = false;
  if (office) {
    office.style.backgroundImage = "url('https://images.steamusercontent.com/ugc/1764820095379054399/E05280395A261A2FEF1864E6878E87DA7B69E60B/')";
  }

  officeMusic.pause();
  officeMusic.currentTime = 0;
  stopKitchenSound();
  musicBox.pause();
  musicBox.currentTime = 0;
  musicBox.loop = false;
  officeMusic2.pause();
  officeMusic2.currentTime = 0;
  menuMusic.play();

  stopMovementSystem();
  gameOver = false;
  camerasOpen = false;
  if (circusTimer) {
    clearInterval(circusTimer);
    circusTimer = null;
  }
  circusPlayed = false;

  if (cameraPanel) cameraPanel.style.display = "none";
  document.querySelectorAll(".cam").forEach(c => c.classList.remove("selectedCam"));

  if (menu) menu.style.display = "block";
  if (game) game.style.display = "none";
  hardcoreMode = false;
updateHardcoreCameras();
}


function jumpscare(anim) {
  if (freddyBlinkTimer) {
  clearInterval(freddyBlinkTimer);
  freddyBlinkTimer = null;
}
let freddyOverlay = document.getElementById("freddyPowerBlink");
if (freddyOverlay) freddyOverlay.remove();
  stopFan();
  stopKitchenSound();
  musicBox.pause();
  musicBox.currentTime = 0;
  musicBox.loop = false;
  powerOut = false;

  let cameraButton = document.getElementById("cameraButton");
  if (cameraButton) cameraButton.style.display = "none";
  
  leftLightOn = false;
rightLightOn = false;
if (leftAnim) {
  leftAnim.style.display = "none";
  leftAnim.innerHTML = "";
}
if (rightAnim) {
  rightAnim.style.display = "none";
  rightAnim.innerHTML = "";
}
  camerasOpen = false;
  if (cameraButton) cameraButton.style.display = "none";
  
  leftDoorClosed = false;
  rightDoorClosed = false;
  if (leftDoor) leftDoor.style.display = "none";
  if (rightDoor) rightDoor.style.display = "none";
  document.querySelectorAll(".officePlushItem").forEach(plush => plush.style.display = "none");

  officeMusic.pause();
  officeMusic.currentTime = 0;
  officeMusic2.pause();
  officeMusic2.currentTime = 0;

  let gf = document.getElementById("goldenFreddyJumpscare");
  if (gf) gf.remove();

  stopMovementSystem();
  stopPuppet();
  gameOver = true;

  let id = "";
  switch (anim) {
      
      case "Freddy": {
  id = "freddyJumpscare";

  if (powerOutFreddyJumpscare) {
    powerOutJumpscare.currentTime = 0;
    powerOutJumpscare.play();

    let officeEl = document.getElementById("office") || document.body;

    let overlay =
        document.createElement("div");
    overlay.id = "freddyPowerOutJS";
    overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;z-index:9999;overflow:hidden;background:#000;";

    let img = document.createElement("img");
    img.style.cssText = "position:absolute;top:50%;left:50%;width:100%;height:auto;transform:translate(-50%,-50%);object-fit:contain;";
    img.src = FREDDY_POWER_OUT_FRAMES[0];
    overlay.appendChild(img);
    officeEl.appendChild(overlay);

    function startAnim() {
      let i = 0;
      let timer = setInterval(function () {
        i++;
        if (i >= FREDDY_POWER_OUT_FRAMES.length) {
          clearInterval(timer);
          overlay.remove();
          powerOutFreddyJumpscare = false;

          let over = document.getElementById("gameOverScreen");
          if (over) {
            over.style.display = "block";
            let title = over.querySelector("h1");
            if (title) title.innerHTML = "GAME OVER<br>Freddy";
          }
          powerOutJumpscare.pause();
          powerOutJumpscare.currentTime = 0;
          gameOverSound.currentTime = 0;
          gameOverSound.play();
          return;
        }
        img.src = FREDDY_POWER_OUT_FRAMES[i];
      }, 40);
    }

    if (window.freddyPowerOutReady) {
      startAnim();
    } else {
      preloadImages(FREDDY_POWER_OUT_FRAMES, function () {
        window.freddyPowerOutReady = true;
        startAnim();
      });
      setTimeout(function () {
        if (!window.freddyPowerOutReady) startAnim();
      }, 2000);
    }
    return;
  }

  {
    let normalImg = document.querySelector("#freddyJumpscare img");
    if (normalImg) {
      normalImg.src = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/jumpscare%20freddy11.png";
    }
  }

  break;
}

    case "Bonnie":
  id = "bonnieJumpscare";

  powerOutJumpscare.currentTime = 0;
  powerOutJumpscare.play();

  {
    let officeEl = document.getElementById("office") || document.body;

    let overlay = document.createElement("div");
    overlay.id = "bonnieJS";
    overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;z-index:9999;overflow:hidden;background:#000;";

    let img = document.createElement("img");
    img.style.cssText = "position:absolute;top:50%;left:50%;width:100%;height:auto;transform:translate(-50%,-50%);object-fit:contain;";
    img.src = BONNIE_JUMPSCARE_FRAMES[0];
    overlay.appendChild(img);
    officeEl.appendChild(overlay);
    let i = 0;
    let animTimer = setInterval(function () {
      i = (i + 1) % BONNIE_JUMPSCARE_FRAMES.length; // REPETE em loop
      img.src = BONNIE_JUMPSCARE_FRAMES[i];
    }, 40);

    setTimeout(function () {
      clearInterval(animTimer);
      overlay.remove();

      let over = document.getElementById("gameOverScreen");
      if (over) {
        over.style.display = "block";
        let title = over.querySelector("h1");
        if (title) title.innerHTML = "GAME OVER<br>Bonnie";
      }
      powerOutJumpscare.pause();
      powerOutJumpscare.currentTime = 0;
      gameOverSound.currentTime = 0;
      gameOverSound.play();
    }, 2000);
  }

  return; // não usa o setTimeout antigo de 2s do final
    case "Chica":
  id = "chicaJumpscare";

  powerOutJumpscare.currentTime = 0;
  powerOutJumpscare.play();

  {
    let officeEl = document.getElementById("office") || document.body;

    let overlay = document.createElement("div");
    overlay.id = "chicaJS";
    overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;z-index:9999;overflow:hidden;background:#000;";

    let img = document.createElement("img");
    img.style.cssText = "position:absolute;top:50%;left:50%;width:100%;height:auto;transform:translate(-50%,-50%);object-fit:contain;";
    img.src = CHICA_JUMPSCARE_FRAMES[0];
    overlay.appendChild(img);
    officeEl.appendChild(overlay);
    
    let i = 0;
    let animTimer = setInterval(function () {
      i = (i + 1) % CHICA_JUMPSCARE_FRAMES.length; // loop
      img.src = CHICA_JUMPSCARE_FRAMES[i];
    }, 40);

    setTimeout(function () {
      clearInterval(animTimer);
      overlay.remove();

      let over = document.getElementById("gameOverScreen");
      if (over) {
        over.style.display = "block";
        let title = over.querySelector("h1");
        if (title) title.innerHTML = "GAME OVER<br>Chica";
      }
      powerOutJumpscare.pause();
      powerOutJumpscare.currentTime = 0;
      gameOverSound.currentTime = 0;
      gameOverSound.play();
    }, 2000);
  }

  return;
    case "Foxy": id = "foxyJumpscare"; break;
    case "Endo": id = "endoJumpscare"; break;
      case "Puppet": id = "puppetJumpscare"; break;
  }

  let js = document.getElementById(id);
if (js) {
  js.style.display = "block";
}

  if (anim === "Puppet") {
  // só o som da Puppet
  puppetJumpscareSound.currentTime = 0;
  puppetJumpscareSound.play();
} else {
  powerOutJumpscare.currentTime = 0;
  powerOutJumpscare.play();
}

  setTimeout(() => {
    if (js) js.style.display = "none";
    let over = document.getElementById("gameOverScreen");
    if (over) {
      over.style.display = "block";
      let title = over.querySelector("h1");
      if (title) title.innerHTML = "GAME OVER<br>" + anim;
      powerOutJumpscare.currentTime = 0;
      powerOutJumpscare.pause();
      puppetJumpscareSound.currentTime = 0;
      puppetJumpscareSound.pause();
      gameOverSound.currentTime = 0;
      gameOverSound.play();
    }
  }, 2000);
}

powerOutFreddyJumpscare = false;

function startCircusChance() {
  if (circusTimer) return; // evita criar vários intervals

  circusTimer = setInterval(() => {
    if (circusPlayed || powerOut || gameOver || !gameRunning) return;

    if (Math.random() < 0.10) {
      circusPlayed = true;

      // para a música normal e toca a circus
      officeMusic.pause();
      officeMusic2.currentTime = 0;
      setSoundVolume(officeMusic2, 0.05);
      officeMusic2.play();

      officeMusic2.onended = function () {
        if (gameRunning && !powerOut && !gameOver) {
          officeMusic.currentTime = 0;
          officeMusic.play();
        }
      };

      // para o interval depois de tocar 1 vez
      clearInterval(circusTimer);
      circusTimer = null;
    }
  }, 10000);
}

function playFreddyLaugh() {
  let random = Math.floor(Math.random() * freddyLaughs.length);
  let laugh = freddyLaughs[random];

  // Aplica o volume dinâmico
  setSoundVolume(laugh, getFreddyVolume());
  setSoundVolume(freddyStepSound, getFreddyVolume());

  laugh.currentTime = 0;
  laugh.play();

  freddyStepSound.currentTime = 0;
  freddyStepSound.play();
}

function goldenFreddyChance() {
  if (goldenFreddyActive) return;
  let goldenChance = 0.01;
if (night === 7 && !hardcoreMode) goldenChance = customAI.golden / 100;
if (hardcoreMode && hardcoreCustomNight) goldenChance = hardcoreCustomAI.golden / 100;
  if (Math.random() < goldenChance) {
    goldenFreddyActive = true;
    goldenLaugh.currentTime = 0;
    goldenLaugh.play();

    let officeEl = document.getElementById("office");
    if (!officeEl) return;

    let gf = document.createElement("img");
    gf.id = "goldenFreddyOffice";
    gf.src = SPRITES.goldenFreddy;
    gf.style.position = "absolute";
    gf.style.bottom = "-5%";
    gf.style.left = "34%";
    gf.style.transform = "translateX(-50%)";
    gf.style.width = "30%";
    gf.style.zIndex = "60";
    officeEl.appendChild(gf);

    goldenFreddyTimer = setTimeout(() => goldenFreddyJumpscare(), 3000);
  }
}

function goldenFreddyJumpscare() {
  let gf = document.getElementById("goldenFreddyOffice");
  if (gf) gf.remove();

  let scare = document.createElement("img");
  scare.id = "goldenFreddyJumpscare";
  scare.src = "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/PC%20_%20Computer%20-%20Five%20Nights%20at%20Freddy's%202%20-%20Animatronics%20-%20Withered%20Golden%20Freddy%20(1).png";
  scare.style.position = "absolute";
  scare.style.top = "0";
  scare.style.left = "0";
  scare.style.width = "100%";
  scare.style.height = "100%";
  scare.style.zIndex = "99999";
  document.body.appendChild(scare);

  let sound = new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/XSCREAM2.wav");
  sound.play();

  setTimeout(() => {
    let scareImg = document.getElementById("goldenFreddyJumpscare");
    if (scareImg) scareImg.remove();
    let over = document.getElementById("gameOverScreen");
    if (over) {
      over.style.display = "block";
      let title = over.querySelector("h1");
      if (title) title.innerHTML = "GAME OVER<br>It's Me";
    }
  }, 3000);
}

function startNight6() {
  menuMusic.pause();
  menuMusic.currentTime = 0;
  if (!night6Unlocked) return;
  night = 6;
  if (menu) menu.style.display = "none";
  if (game) game.style.display = "block";
  setTimeout(gameLoop, 1000);
  startNightWithIntro()
}

function openCustomNight() {
  updateCustomText();
setupCNButtons();
  if (menu) menu.style.display = "none";
  let cnMenu = document.getElementById("customNightMenu");
  if (cnMenu) cnMenu.style.display = "block";

  let cnFreddy = document.getElementById("cnFreddy");
  let cnBonnie = document.getElementById("cnBonnie");
  let cnChica = document.getElementById("cnChica");
  let cnFoxy = document.getElementById("cnFoxy");
  let cnGolden = document.getElementById("cnGolden");

  if (cnFreddy) cnFreddy.src = CUSTOM_NIGHT.freddy;
  if (cnBonnie) cnBonnie.src = CUSTOM_NIGHT.bonnie;
  if (cnChica) cnChica.src = CUSTOM_NIGHT.chica;
  if (cnFoxy) cnFoxy.src = CUSTOM_NIGHT.foxy;
  if (cnGolden) cnGolden.src = CUSTOM_NIGHT.golden;

  updateCustomText();
}

function changeAI(anim, value) {
  customAI[anim] += value;
  if (customAI[anim] < 0) customAI[anim] = 0;
  if (customAI[anim] > 100) customAI[anim] = 100;
  updateCustomText();
}

function updateCustomText() {
  let bonnieAI = document.getElementById("bonnieAI");
  let chicaAI = document.getElementById("chicaAI");
  let freddyAI = document.getElementById("freddyAI");
  let foxyAI = document.getElementById("foxyAI");
  let goldenAI = document.getElementById("goldenAI");

  if (bonnieAI) bonnieAI.innerHTML = customAI.bonnie + "%";
  if (chicaAI) chicaAI.innerHTML = customAI.chica + "%";
  if (freddyAI) freddyAI.innerHTML = customAI.freddy + "%";
  if (foxyAI) foxyAI.innerHTML = customAI.foxy + "%";
  if (goldenAI) goldenAI.innerHTML = customAI.golden + "%";
}

function startCustomNight() {
  menuMusic.pause();
  menuMusic.currentTime = 0;
  let energySelect = document.getElementById("energySelect");
  if (energySelect) energyMode = energySelect.value;

  loadMoveTimes();
  night = 7;

  let cnMenu = document.getElementById("customNightMenu");
  if (cnMenu) cnMenu.style.display = "none";
  if (game) game.style.display = "block";

  officeMusic.currentTime = 0;
  officeMusic.play();
  startCircusChance();

  setTimeout(() => {
    officeMusic.pause();
    officeMusic2.currentTime = 0;
    officeMusic2.play();
  }, 60000);

  setTimeout(gameLoop, 1000);
  startNightWithIntro()
}

function loadMoveTimes() {
  let bTime = document.getElementById("bonnieTime");
  let cTime = document.getElementById("chicaTime");
  let frTime = document.getElementById("freddyTime");
  let foTime = document.getElementById("foxyTime");
  let gTime = document.getElementById("goldenTime");

  if (bTime) customMoveTime.bonnie = Number(bTime.value);
  if (cTime) customMoveTime.chica = Number(cTime.value);
  if (frTime) customMoveTime.freddy = Number(frTime.value);
  if (foTime) customMoveTime.foxy = Number(foTime.value);
  if (gTime) customMoveTime.golden = Number(gTime.value);
}

function closeCustomNight() {
  menuMusic.currentTime = 0;
  menuMusic.play();
  let cnMenu = document.getElementById("customNightMenu");
  if (cnMenu) cnMenu.style.display = "none";
  if (menu) menu.style.display = "block";
}

function preset420() {
  customAI.bonnie = 100;
  customAI.chica = 100;
  customAI.freddy = 100;
  customAI.foxy = 100;
  customAI.golden = 0;
  updateCustomText();
}

function goldenMode() {
  customAI.bonnie = 0;
  customAI.chica = 0;
  customAI.freddy = 0;
  customAI.foxy = 0;
  customAI.golden = 100;
  updateCustomText();
}

function randomCustomNight() {
  customAI.bonnie = Math.floor(Math.random() * 101);
  customAI.chica = Math.floor(Math.random() * 101);
  customAI.freddy = Math.floor(Math.random() * 101);
  customAI.foxy = Math.floor(Math.random() * 101);
  customAI.golden = Math.floor(Math.random() * 101);
  updateCustomText();
}

function phoneGuySystem() {
  if (phoneCallPlaying || night >= 6) return;
  phoneCallPlaying = true;

  const calls = {
    1: new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/voiceover1c.wav"),
    2: new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/voiceover2a.wav"),
    3: new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/voiceover3.wav"),
    4: new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/voiceover4.wav"),
    5: new Audio("https://github.com/alcantaranderson7-glitch/Music-box-fnaf-1/raw/refs/heads/main/voiceover5.wav")
  };

  const call = calls[night];
  currentPhoneCall = call;
  if (!call) return;

  let muteBtn = document.getElementById("mutePhoneButton");
  if (!muteBtn) {
    muteBtn = document.createElement("img");
    muteBtn.id = "mutePhoneButton";
    muteBtn.src = "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783563214156.png";
    muteBtn.style.position = "absolute";
muteBtn.style.top = "2%";
muteBtn.style.left = "2%";
muteBtn.style.right = "auto";
muteBtn.style.width = "10%";
muteBtn.style.cursor = "pointer";
muteBtn.style.zIndex = "90";
    let officeEl = document.getElementById("office");
if (officeEl) {
  officeEl.appendChild(muteBtn);
} else {
  document.body.appendChild(muteBtn);
}
  }

  muteBtn.style.display = "block";
  call.currentTime = 0;
  call.play();

  muteBtn.onclick = function () {
    if (currentPhoneCall) {
      currentPhoneCall.pause();
      currentPhoneCall.currentTime = 0;
      currentPhoneCall = null;
    }
    muteBtn.style.display = "none";
    phoneCallPlaying = false;
    if (gameRunning && !powerOut && !gameOver) officeMusic.play();
  };

  call.onended = function () {
    currentPhoneCall = null;
    muteBtn.style.display = "none";
    phoneCallPlaying = false;
    if (gameRunning && !powerOut && !gameOver) officeMusic.play();
  };
}

function openExtras() {
  if (menu) menu.style.display = "none";
  document.getElementById("extrasMenu").style.display = "block";
  loadPlushes();
}

function closeExtras() {
  menuMusic.currentTime = 0;
  menuMusic.play();
  document.getElementById("extrasMenu").style.display = "none";
  if (menu) menu.style.display = "block";
}

function loadPlushes() {
  let area = document.getElementById("plushCollection");
  if (!area) return;
  area.innerHTML = "";

  Object.keys(PLUSHES).forEach(name => {
    let card = document.createElement("div");
    card.className = "plushCard";
    if (unlockedPlushes[name]) {
      card.innerHTML = "<img src='" + PLUSHES[name].menu + "'><br><b>" + name.toUpperCase() + "</b><br><button onclick='equipPlush(\"" + name + "\")'>Equipar</button>";
    } else {
      card.innerHTML = "<h2>???</h2><p>Bloqueado</p>";
    }
    area.appendChild(card);
  });
}

function equipPlush(name) {
  if (!unlockedPlushes[name]) return;
  if (equippedPlushes.includes(name)) {
    equippedPlushes = equippedPlushes.filter(p => p !== name);
  } else {
    equippedPlushes.push(name);
  }
  localStorage.setItem("equippedPlushes", JSON.stringify(equippedPlushes));
  updateOfficePlush();
  showEquipMessage(name, true);
}

function updateOfficePlush() {
  let officeEl = document.getElementById("office");
  if (!officeEl) return;

  // Remove os plushs antigos
  document.querySelectorAll(".officePlushItem").forEach(p => p.remove());

  equippedPlushes.forEach((name, index) => {
    let plush = document.createElement("img");
    plush.className = "officePlushItem";

    // Usa sprite de blackout só se estiver em power out de verdade
    if (powerOut || power <= 0) {
      plush.src = PLUSHES[name].blackout;
    } else {
      plush.src = PLUSHES[name].normal;
    }

    plush.style.position = "absolute";
plush.style.bottom = "30%";      // altura na mesa (↑ sobe / ↓ desce)
plush.style.width = "12%";       // tamanho do plush
plush.style.zIndex = "6";

let positions = ["34%", "42%", "50%", "62%", "72%"]; // esquerda → direita
plush.style.left = positions[index] || "50%";
plush.style.transform = "translateX(-50%)";

    officeEl.appendChild(plush);
  });
}

function showEquipMessage(name, isPlushEquip = false) {
  let msg = document.getElementById("equipMessage");
  if (!msg) return;

  let extrasOpen = false;
  let extras = document.getElementById("extrasMenu");
  if (extras && extras.style.display !== "none" && extras.style.display !== "") {
    extrasOpen = true;
  }

  if (isPlushEquip && extrasOpen) {
    msg.innerText = "Plush " + name + " equipado";
  } else if (isPlushEquip) {
    msg.innerText = name; // só o nome
  } else {
    msg.innerText = name; // mensagens normais (radar, hack, etc.)
  }

  msg.style.display = "block";

  clearTimeout(window.equipMsgTimer);
  window.equipMsgTimer = setTimeout(() => {
    msg.style.display = "none";
  }, 2000);
}

function unlockPlush(name) {
  if (unlockedPlushes[name]) return;
  unlockedPlushes[name] = true;
  localStorage.setItem("unlockedPlushes", JSON.stringify(unlockedPlushes));
  showNewPlush(name);
}

function showNewPlush(name) {
  let box = document.getElementById("newPlushReward");
  if (!box) return;
  document.getElementById("rewardPlush").src = PLUSHES[name].menu;
  box.style.display = "block";
}

function startPlushChallenge(name) {
  let c = PLUSH_CHALLENGES[name];
  currentChallenge = c;
  customAI.bonnie = c.bonnie;
  customAI.chica = c.chica;
  customAI.freddy = c.freddy;
  customAI.foxy = c.foxy;
  customAI.golden = c.golden;
  updateCustomText();
  document.getElementById("energySelect").value = c.battery;
  startCustomNight();
}

function updateStars() {
  stars = JSON.parse(localStorage.getItem("stars")) || { night5: false, night6: false, golden: false };
  const c = document.getElementById("starContainer");
  if (!c) return;
  c.innerHTML = "";
  const img = "https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/1783789220152.png";
  if (stars.night5) c.innerHTML += `<img class="star" src="${img}">`;
  if (stars.night6) c.innerHTML += `<img class="star" src="${img}">`;
  if (stars.golden) c.innerHTML += `<img class="star" src="${img}">`;
}

function updateCameraImage() {
  if (selectedCamera === "stage" && pos.freddy === "stage") {
    if (!stageChecked) {
        freddyStageStare = Math.random() < 0.20;
        stageChecked = true;
    }
} else {
    stageChecked = false;
    freddyStageStare = false;
}
  let cam = document.getElementById("cameraView");
  if (!cam) return;
  if (!camerasOpen) {
    cam.style.display = "none";
    return;
  }
  cam.style.display = "block";
  
  if (selectedCamera === "eastCorner" && pos.freddy === "eastCorner") {
    cam.style.backgroundImage = "url('https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/Screenshot_20260806_232151_FlipaClip.jpg')";
    return;
}
  
  if (!selectedCamera) {
  cam.style.backgroundImage = "url('" + CAMERA_IMAGES.none + "')";
  return;
}

// Cozinha sempre mostra estática (fora de serviço)
if (selectedCamera === "kitchen") {
  cam.style.backgroundImage = "url('https://raw.githubusercontent.com/alcantaranderson7-glitch/Music-box-fnaf-1/refs/heads/main/12.png')";
  return;
}

if (CAMERA_IMAGES[selectedCamera]) {
  cam.style.backgroundImage = "url('" + CAMERA_IMAGES[selectedCamera] + "')";
}
  
  let btn = document.getElementById("resetPuppetMusicBtn");
if (btn) {
  btn.style.display = (hardcoreMode && puppetActive && selectedCamera === "safeRoom") ? "inline-block" : "none";
}
  let changeBtn = document.getElementById("changePuppetMusicBtn");
if (changeBtn) {
  changeBtn.style.display = (hardcoreMode && puppetActive && selectedCamera === "safeRoom") ? "inline-block" : "none";
}
}

function clearCameraAnimatronics() {
  document.querySelectorAll(".cameraAnim").forEach(img => img.remove());
}

function drawFreddyOnCam(camera, baseX, baseY, baseW, baseZ) {
  if (!selectedCamera || selectedCamera !== camera) return;

  // Durante a animação: só desenha na sala certa
  if (freddyAnim.phase === "leaving" && camera !== freddyAnim.from) return;
  if (freddyAnim.phase === "entering" && camera !== freddyAnim.to) return;
  if (freddyAnim.phase === "idle" && pos.freddy !== camera) return;

  let sprite = null;
  if (CAMERA_ANIMATRONIC_SPRITES[camera] && CAMERA_ANIMATRONIC_SPRITES[camera].freddy) {
    sprite = CAMERA_ANIMATRONIC_SPRITES[camera].freddy;
  } else if (camera === "safeRoom") {
    sprite = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/Freddy%20in%20saferoom.png";
  } else if (camera === "westHall") {
    sprite = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/Fred_Hall2.png";
  } else if (camera === "westCorner") {
    sprite = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/freddy%20no%20canto.png";
  } else {
    sprite = SPRITES.freddy;
  }

  if (camera === "stage" && freddyStageStare) {
    sprite = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/freddy%20t%C3%A9%20encarando%20in%20stage.png";
  }

  let x = baseX;
  let y = baseY;
  let opacity = 1;
  let scale = 1;
  let p = freddyAnim.progress;

  // ===== SAINDO =====
  if (freddyAnim.phase === "leaving") {
    if (camera === "stage") {
      // anda pra direita + sobe/desce (passo) + cresce um pouco + some no final
      let bob = Math.sin(p * Math.PI * 4) * 4; // sobe e desce
      x = baseX + p * 55;           // vai pra direita
      y = baseY + bob + p * 8;      // desce um pouco no fim
      scale = 1 + p * 0.35;         // chega mais perto
      opacity = p < 0.7 ? 1 : 1 - ((p - 0.7) / 0.3); // some só no final
    } else if (camera === "eastCorner") {
      x = baseX - p * 50;
      opacity = 1 - p;
    } else if (camera === "westCorner") {
      x = baseX + p * 50;
      opacity = 1 - p;
    } else {
      // dining, restroom, halls, etc → some suave
      opacity = 1 - p;
    }
  }

  // ===== ENTRANDO =====
  else if (freddyAnim.phase === "entering") {
    if (camera === "eastCorner") {
      // já começa fora, vindo da esquerda
      x = baseX - (1 - p) * 50;
      opacity = p;
    } else if (camera === "westCorner") {
      x = baseX + (1 - p) * 50;
      opacity = p;
    } else if (camera === "westHall") {
      y = baseY + (1 - p) * 35;
      opacity = p;
    } else if (camera === "dining" || camera === "restroom" || camera === "eastHall" || camera === "safeRoom") {
      opacity = p; // começa 0, sobe até 1
    } else {
      opacity = p;
    }
  }

  // ===== IDLE =====
  else {
    opacity = 1;
  }

  if (opacity <= 0.02) return;

  let img = document.createElement("img");
  img.src = sprite;
  img.className = "cameraAnim";
  img.style.position = "absolute";
  img.style.left = x + "%";
  img.style.top = y + "%";
  img.style.width = baseW;
  img.style.zIndex = baseZ;
  img.style.opacity = opacity;
  img.style.transform = "scale(" + scale + ")";
  img.style.transition = "none";
  document.getElementById("cameraView").appendChild(img);
}

  function renderCameraAnimatronics() {
  let camera = document.getElementById("cameraView");
  if (!camera) return;

  document.querySelectorAll(".cameraAnim").forEach(e => e.remove());

  function addAnim(sprite, x, y, width = "120%", zIndex = 10) {
    if (!sprite) return;
    let img = document.createElement("img");
    img.src = sprite;
    img.className = "cameraAnim";
    img.style.position = "absolute";
    img.style.left = x;
    img.style.top = y;
    img.style.width = width;
    img.style.zIndex = zIndex;
    camera.appendChild(img);
  }

  function getSprite(cam, animatronic) {
    if (CAMERA_ANIMATRONIC_SPRITES[cam] && CAMERA_ANIMATRONIC_SPRITES[cam][animatronic]) {
      return CAMERA_ANIMATRONIC_SPRITES[cam][animatronic];
    }
    return SPRITES[animatronic];
  }

  // STAGE
  if (selectedCamera === "stage") {
    if (pos.bonnie === "stage") addAnim(getSprite("stage", "bonnie"), "4%", "0%", "50%", 11);
    if (pos.chica === "stage") addAnim(getSprite("stage", "chica"), "28%", "0%", "50%", 10);
    drawFreddyOnCam("stage", 50, 0, "50%", 11);
  }

  // DINING
  if (selectedCamera === "dining") {
    if (pos.bonnie === "dining") addAnim(getSprite("dining", "bonnie"), "54%", "8%", "27%");
    if (pos.chica === "dining") addAnim(getSprite("dining", "chica"), "22%", "4%", "25%");
    drawFreddyOnCam("dining", 33, -7, "30%", 12);
  }
  
 // BACKSTAGE
  if (selectedCamera === "backstage") {
    if (pos.bonnie === "backstage") addAnim(getSprite("backstage", "bonnie"), "44%", "-1%", "50%");
  }

  // SUPPLY
  if (selectedCamera === "supply") {
    if (pos.bonnie === "supply") addAnim(getSprite("supply", "bonnie"), "0%", "0%", "50%");
  }

  // RESTROOM
  if (selectedCamera === "restroom") {
    if (pos.chica === "restroom") addAnim(getSprite("restroom", "chica"), "25%", "0%", "50%");
    drawFreddyOnCam("restroom", -1, 0, "50%", 12);
  }
    
    // WEST HALL
  if (selectedCamera === "westHall") {
    if (pos.bonnie === "westHall") addAnim(getSprite("westHall", "bonnie"), "55%", "8%", "20%", 10);
    if (pos.foxy === "westHall") addAnim(getSprite("westHall", "foxy"), "35%", "10%", "50%", 11);
    drawFreddyOnCam("westHall", 25, 10, "50%", 12);
  }

  // WEST CORNER
  if (selectedCamera === "westCorner") {
    if (pos.bonnie === "westCorner") addAnim(getSprite("westCorner", "bonnie"), "4%", "0%", "50%");
    drawFreddyOnCam("westCorner", 5, -5, "280%", 12);
  }

  // EAST HALL
  if (selectedCamera === "eastHall") {
    if (pos.chica === "eastHall") addAnim(getSprite("eastHall", "chica"), "33.8%", "0%", "50%", 11);
    drawFreddyOnCam("eastHall", 15, -5, "50%", 10);
  }

  // EAST CORNER
  if (selectedCamera === "eastCorner") {
    if (pos.chica === "eastCorner") addAnim(getSprite("eastCorner", "chica"), "32%", "0%", "50%", 10);
    drawFreddyOnCam("eastCorner", 15, 0, "75%", 11);
  }

  // PIRATE COVE
  if (selectedCamera === "pirate") {
    if (pos.foxy === "cove") {
      if (foxyStage === 2) addAnim(CAMERA_ANIMATRONIC_SPRITES.pirate.stage2, "0%", "0%", "100%");
      if (foxyStage === 1) addAnim(CAMERA_ANIMATRONIC_SPRITES.pirate.stage3, "0%", "0%", "100%");
      if (foxyStage === 0) addAnim(CAMERA_ANIMATRONIC_SPRITES.pirate.stage4, "0%", "0%", "100%");
    }
  }
  
  // ENDO-01
  if (isEndoActive()) {
    if (selectedCamera === "backstage" && posEndo === "backstage") addAnim(ENDO_SPRITES.normal, "40%", "20%", "140%");
    if (selectedCamera === "dining" && posEndo === "dining") addAnim(ENDO_SPRITES.normal, "45%", "25%", "130%");
    if (selectedCamera === "supply" && posEndo === "supply") addAnim(ENDO_SPRITES.normal, "30%", "15%", "140%");
    if (selectedCamera === "westHall" && posEndo === "westHall") addAnim(ENDO_SPRITES.normal, "40%", "20%", "140%");
    if (selectedCamera === "westCorner" && posEndo === "westCorner") addAnim(ENDO_SPRITES.normal, "35%", "15%", "150%");
    if (selectedCamera === "eastHall" && posEndo === "eastHall") addAnim(ENDO_SPRITES.normal, "40%", "20%", "140%");
    if (selectedCamera === "eastCorner" && posEndo === "eastCorner") addAnim(ENDO_SPRITES.normal, "30%", "10%", "160%");
  }
  
  // SAFE ROOM
  if (selectedCamera === "safeRoom") {
    if (pos.bonnie === "safeRoom") addAnim(SPRITES.bonnie, "30%", "25%", "140%", 11);
    if (pos.chica === "safeRoom") addAnim(SPRITES.chica, "50%", "25%", "140%", 10);
    drawFreddyOnCam("safeRoom", 35, -20, "50%", 12);

    if (hardcoreMode && puppetActive) {
      if (puppetMusicChanged || puppetMusicFast) {
        addAnim(PUPPET_SPRITES.boxOpen, "60%", "30%", "120%", 13);
      } else {
        addAnim(PUPPET_SPRITES.boxClosed, "60%", "30%", "120%", 13);
      }
    }
  }
}
    
function openRadarShop() {
  if (menu) menu.style.display = "none";
  document.getElementById("controls").style.display = "none";
  document.getElementById("radarShop").style.display = "block";
}

function closeRadarShop() {
  document.getElementById("radarShop").style.display = "none";
  document.getElementById("controls").style.display = "block";
  if (menu) menu.style.display = "block";
}

function buyRadar() {
  // Se já tem o radar, só equipa/desequipa
  if (radarOwned || radarUnlocked) {
    radarAction();
    return;
  }

  // Só pede o Plush se ainda NÃO tiver comprado o radar
  if (!unlockedPlushes.freddy) {
    showEquipMessage("Você precisa do Plush Freddy!");
    return;
  }

  // Compra o radar
  unlockedPlushes.freddy = false;
  equippedPlushes = equippedPlushes.filter(p => p !== "freddy");

  localStorage.setItem("unlockedPlushes", JSON.stringify(unlockedPlushes));
  localStorage.setItem("equippedPlushes", JSON.stringify(equippedPlushes));

  radarOwned = true;
  radarUnlocked = true;
  radarEquipped = true;

  localStorage.setItem("radarUnlocked", "true");
  localStorage.setItem("radarEquipped", "true");

  updateOfficePlush();
  loadPlushes();
  renderCamera();
  updateRadarButton();

  showEquipMessage("Radar comprado e equipado!");
}

function radarAction() {
  if (!radarOwned) {
    buyRadar();
    return;
  }
  radarEquipped = !radarEquipped;
  localStorage.setItem("radarEquipped", radarEquipped ? "true" : "false");
  renderCamera();
  updateRadarButton();
  showEquipMessage(radarEquipped ? "Radar equipado!" : "Radar desequipado!");
}

function updateRadarButton() {
  let button = document.getElementById("radarButton");
  if (!button) return;
  if (!radarOwned) {
    button.innerHTML = "Comprar Radar";
    return;
  }
  button.innerHTML = radarEquipped ? "Desequipar Radar" : "Equipar Radar";
}

function resetProgress() {
  localStorage.removeItem("highestNight");
  localStorage.removeItem("night6Unlocked");
  localStorage.removeItem("customNightUnlocked");
  localStorage.removeItem("stars");
  localStorage.removeItem("unlockedPlushes");
  localStorage.removeItem("equippedPlushes");
  localStorage.removeItem("radarUnlocked");
  localStorage.removeItem("customNight");
  localStorage.removeItem("hardcoreHighestNight");
localStorage.removeItem("hardcoreNight6Unlocked");
localStorage.removeItem("hardcoreCustomUnlocked");
localStorage.removeItem("hardcoreUnlocked");
localStorage.removeItem("infinitePower");
localStorage.removeItem("infinitePowerUnlocked");
localStorage.removeItem("fastNight");
localStorage.removeItem("fastNightUnlocked");
localStorage.removeItem("radarUnlocked");
localStorage.removeItem("radarEquipped");

infinitePower = false;
fastNight = false;
radarOwned = false;
radarUnlocked = false;
radarEquipped = false;

hardcoreUnlocked = false;

let hardcoreBtn = document.getElementById("hardcoreButton");
if (hardcoreBtn) hardcoreBtn.style.display = "none";

  highestNight = 1;
  night6Unlocked = false;
  customNightUnlocked = false;
  stars = { night5: false, night6: false, golden: false };
  unlockedPlushes = { freddy: false, bonnie: false, chica: false, foxy: false, golden: false };
  equippedPlushes = [];
  radarUnlocked = false;
  radarOwned = false;
  radarEquipped = false;

  let radarBtn = document.getElementById("radarShopButton");
  if (radarBtn) radarBtn.style.display = "none";

  updateStars();
  showEquipMessage("Progresso apagado!");
}

function newGameIntro() {
  document.getElementById("newspaperScreen").style.display = "flex";
}

function closeNewspaper() {
  document.getElementById("newspaperScreen").style.display = "none";
  startGame();
}

/* ---------- CARREGAR SAVE ---------- */
highestNight = Number(localStorage.getItem("highestNight")) || 1;
night6Unlocked = localStorage.getItem("night6Unlocked") === "true";
customNightUnlocked = localStorage.getItem("customNightUnlocked") === "true";
/* Proteção permanente: nunca deixa highestNight ser 6 */
if (Number(localStorage.getItem("highestNight")) === 6) {
  localStorage.setItem("highestNight", "5");
  highestNight = 5;
}
radarUnlocked = localStorage.getItem("radarUnlocked") === "true";
radarOwned = radarUnlocked;
infinitePower = localStorage.getItem("infinitePower") === "true";
fastNight = localStorage.getItem("fastNight") === "true";

hardcoreUnlocked = localStorage.getItem("hardcoreUnlocked") === "true";

let hardcoreBtn = document.getElementById("hardcoreButton");
if (hardcoreBtn) {
  hardcoreBtn.style.display = hardcoreUnlocked ? "inline-block" : "none";
}

// Controle de volume das Opções
let volumeSlider = document.getElementById("volume");
if (volumeSlider) {
  // Carrega o volume salvo
  let savedVolume = localStorage.getItem("masterVolume");
  if (savedVolume !== null) {
    masterVolume = Number(savedVolume);
    volumeSlider.value = masterVolume * 100;
  }

  // Quando a pessoa arrasta o slider
  volumeSlider.addEventListener("input", function() {
    masterVolume = this.value / 100;
    localStorage.setItem("masterVolume", masterVolume);
    applyMasterVolume();
  });

  // Aplica o volume inicial
  applyMasterVolume();
}

// Carregar plushs desbloqueados
let savedUnlock = localStorage.getItem("unlockedPlushes");
if (savedUnlock) {
  unlockedPlushes = JSON.parse(savedUnlock);
}

// Carregar plushs equipados
let savedEquipped = localStorage.getItem("equippedPlushes");
if (savedEquipped) {
  equippedPlushes = JSON.parse(savedEquipped);
}

let radarBtn = document.getElementById("radarShopButton");
if (radarBtn) radarBtn.style.display = night6Unlocked ? "inline-block" : "none";

let n6Btn = document.getElementById("night6Button");
if (n6Btn) n6Btn.style.display = night6Unlocked ? "inline-block" : "none";

let cnBtn = document.getElementById("customNightButton");
if (cnBtn) cnBtn.style.display = customNightUnlocked ? "inline-block" : "none";

let extrasBtn = document.getElementById("extrasButton");
if (extrasBtn) extrasBtn.style.display = customNightUnlocked ? "inline-block" : "none";

updateStars();
updateOfficePlush();

document.addEventListener("DOMContentLoaded", () => {
  let win = document.getElementById("winScreen");
  let over = document.getElementById("gameOverScreen");
  let newspaper = document.getElementById("newspaperScreen");
  if (win) win.style.display = "none";
  if (over) over.style.display = "none";
  if (newspaper) newspaper.style.display = "none";
});

let lastFoxySongTime = 0; // controla o cooldown

function tryPlayFoxyPirateSong() {
  // Só toca se o Foxy estiver no cove e ainda não tiver atingido o limite
  if (pos.foxy !== "cove" || foxySongPlayed >= foxySongMax || powerOut || gameOver || !gameRunning) return;

  // Cooldown de 17 segundos
  let now = Date.now();
  if (now - lastFoxySongTime < 17000) return;

  // Chance aleatória de tocar
  if (Math.random() < 0.10) {
    foxyPirateSong.currentTime = 0;
    foxyPirateSong.play();
    foxySongPlayed++;
    lastFoxySongTime = now;
  }
}

function showEnding(type) {
  let endingScreen = document.getElementById("endingScreen");
  let endingImage = document.getElementById("endingImage");

  if (!endingScreen || !endingImage) return;

  let src = "";
  if (type === 1) src = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/ending%201.png";
  if (type === 2) src = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/ending%202.png";
  if (type === 3) src = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/ending%203.png";

  endingImage.src = src;
  endingScreen.style.display = "block";

  endingMusic.currentTime = 0;
  endingMusic.play();

  // Clicar na tela fecha e para a música
  endingScreen.onclick = function() {
    endingScreen.style.display = "none";
    endingMusic.pause();
    endingMusic.currentTime = 0;
  };
}

function hideEnding() {
  let endingScreen = document.getElementById("endingScreen");
  if (endingScreen) endingScreen.style.display = "none";
  endingMusic.pause();
  endingMusic.currentTime = 0;
}

function setSoundVolume(audio, volume) {
  if (audio) {
    audio.volume = Math.max(0, Math.min(1, volume * masterVolume));
  }
}

// Volume baseado na posição do Freddy
function getFreddyVolume() {
  switch (pos.freddy) {
    case "stage":
      return 0.25;      // bem longe
    case "dining":
      return 0.35;
    case "safe Room":
      return 0.55;
    case "restroom":
      return 0.45;
    case "kitchen":
      return 0.55;
    case "eastHall":
      return 0.70;
    case "eastCorner":
      return 0.85;
    case "right":
      return 1.00;
    case "westHall":
      return 0.70;
    case "westCorner":
      return 0.85;
    case "left":
      return 1.00;
    case "office":
      return 1.00;       // bem perto
    default:
      return 0.04;
  }
}

function getBonnieChicaVolume() {
  // Você pode ajustar esses valores depois
  return 0.6;
}

function applyMasterVolume() {
  // Lista de todos os sons do jogo
  const allSounds = [
    powerOutJumpscare, powerDownSound, musicBox, menuMusic,
    officeMusic, officeMusic2, doorSound, lightSound,
    gameOverSound, sixAMSound, bonnieChicaStepSound,
    freddyStepSound, foxyPirateSong, foxyRunSound,
    foxyKnockSound, kitchenSounds, goldenLaugh, doorScareSound,
    endingMusic
  ];

  // Aplica o volume mestre em todos
  allSounds.forEach(sound => {
    if (sound) {
      sound.volume = masterVolume;
    }
  });

  // Também nos risos do Freddy
  freddyLaughs.forEach(laugh => {
    if (laugh) laugh.volume = masterVolume;
  });
}

function startWestHallBlink() {
  if (westHallBlinking || selectedCamera !== "westHall") return;

  westHallBlinking = true;

  // Mostra a imagem de piscar por 0.5 segundos
  let camera = document.getElementById("cameraView");
  if (camera) {
    // Salva a imagem atual
    let originalBg = camera.style.backgroundImage;

    // Coloca a imagem de piscar
    camera.style.backgroundImage = `url('${westHallBlinkImage}')`;

    // Esconde os animatrônicos (z-index baixo)
    document.querySelectorAll(".cameraAnim").forEach(img => {
      img.style.zIndex = "5"; // fica atrás / some visualmente
      img.style.opacity = "0";
    });

    // Depois de 0.5s volta ao normal
    setTimeout(() => {
      camera.style.backgroundImage = originalBg;

      // Volta os animatrônicos
      document.querySelectorAll(".cameraAnim").forEach(img => {
        img.style.zIndex = "20";
        img.style.opacity = "1";
      });

      westHallBlinking = false;
    }, 500); // 0.5 segundos
  }
}

function buyInfinitePower() {
  // Já desbloqueou antes? Só liga/desliga
  if (localStorage.getItem("infinitePowerUnlocked") === "true") {
    infinitePower = !infinitePower;
    localStorage.setItem("infinitePower", infinitePower ? "true" : "false");
    showEquipMessage(infinitePower ? "Energia Infinita ativada!" : "Energia Infinita desativada!");
    return;
  }

  // Ainda não desbloqueou → precisa do plush
  if (!unlockedPlushes.golden) {
    showEquipMessage("Você precisa do Plush Golden Freddy!");
    return;
  }

  // Consome o plush e desbloqueia
  unlockedPlushes.golden = false;
  equippedPlushes = equippedPlushes.filter(p => p !== "golden");
  localStorage.setItem("unlockedPlushes", JSON.stringify(unlockedPlushes));
  localStorage.setItem("equippedPlushes", JSON.stringify(equippedPlushes));

  infinitePower = true;
  localStorage.setItem("infinitePower", "true");
  localStorage.setItem("infinitePowerUnlocked", "true");

  updateOfficePlush();
  loadPlushes();
  showEquipMessage("Energia Infinita ativada!");
}

function buyFastNight() {
  // Já desbloqueou antes? Só liga/desliga
  if (localStorage.getItem("fastNightUnlocked") === "true") {
    fastNight = !fastNight;
    localStorage.setItem("fastNight", fastNight ? "true" : "false");
    showEquipMessage(fastNight ? "Noite 2x mais rápida ativada!" : "Noite 2x mais rápida desativada!");
    return;
  }

  // Ainda não desbloqueou → precisa do plush
  if (!unlockedPlushes.foxy) {
    showEquipMessage("Você precisa do Plush Foxy!");
    return;
  }

  // Consome o plush e desbloqueia
  unlockedPlushes.foxy = false;
  equippedPlushes = equippedPlushes.filter(p => p !== "foxy");
  localStorage.setItem("unlockedPlushes", JSON.stringify(unlockedPlushes));
  localStorage.setItem("equippedPlushes", JSON.stringify(equippedPlushes));

  fastNight = true;
  localStorage.setItem("fastNight", "true");
  localStorage.setItem("fastNightUnlocked", "true");

  updateOfficePlush();
  loadPlushes();
  showEquipMessage("Noite 2x mais rápida ativada!");
}

function openHardcoreMenu() {
  infinitePower = false;
  fastNight = false;
  radarEquipped = false;

  if (menu) menu.style.display = "none";
  document.getElementById("hardcoreMenu").style.display = "block";

  updateHardcoreMenuButtons();
}

function closeHardcoreMenu() {
  document.getElementById("hardcoreMenu").style.display = "none";
  if (menu) menu.style.display = "block";
}

function unlockHardcore() {
  // Só aparece depois de passar o Golden Freddy True
  if (!stars.golden) {
    showEquipMessage("Você precisa passar o Golden Freddy True!");
    return;
  }

  // Consome todos os plushs
  unlockedPlushes = {
    freddy: false,
    bonnie: false,
    chica: false,
    foxy: false,
    golden: false
  };
  equippedPlushes = [];
  localStorage.setItem("unlockedPlushes", JSON.stringify(unlockedPlushes));
  localStorage.setItem("equippedPlushes", JSON.stringify(equippedPlushes));

  hardcoreUnlocked = true;
  localStorage.setItem("hardcoreUnlocked", "true");

  let btn = document.getElementById("hardcoreButton");
  if (btn) btn.style.display = "inline-block";

  updateOfficePlush();
  loadPlushes();
  showEquipMessage("Modo Hardcore desbloqueado!");
}

function startHardcoreNewGame() {
  menuMusic.pause();
  menuMusic.currentTime = 0;
  hardcoreMode = true;
  night = 1;
  highestNight = 1;
  localStorage.setItem("hardcoreHighestNight", "1");
  energyResetUsed = false;

  document.getElementById("hardcoreMenu").style.display = "none";
  if (game) game.style.display = "block";

  setTimeout(gameLoop, 1000);
  startNightWithIntro()
  updateHardcoreCameras();
  updateHardcoreUI();

  // Noite 1 → Puppet ainda não
  puppetActive = false;
  stopPuppet();
}

function startHardcoreContinue() {
  menuMusic.pause();
  menuMusic.currentTime = 0;
  night = Number(localStorage.getItem("hardcoreHighestNight")) || 1;
if (night > 5 && localStorage.getItem("hardcoreNight6Unlocked") !== "true") {
  night = 5;
}
  hardcoreMode = true;
  night = Number(localStorage.getItem("hardcoreHighestNight")) || 1;
  energyResetUsed = false;

  document.getElementById("hardcoreMenu").style.display = "none";
  if (game) game.style.display = "block";

  setTimeout(gameLoop, 1000);
  startNightWithIntro()
  updateHardcoreCameras();
  updateHardcoreUI();

  // Só a partir da noite 2
  if (night >= 2) {
    startPuppet();
  } else {
    stopPuppet();
  }
}

function updateHardcoreCameras() {
  let entrance = document.getElementById("entranceCam");
  let safeRoom = document.getElementById("safeRoomCam");

  if (hardcoreMode) {
    if (entrance) entrance.style.display = "block";
    if (safeRoom) safeRoom.style.display = "block";
  } else {
    if (entrance) entrance.style.display = "none";
    if (safeRoom) safeRoom.style.display = "none";
  }
}

function isEndoActive() {
  return hardcoreMode && night >= 4 && getAI("endo") > 0;
}

function startPuppet() {
  if (!hardcoreMode) return;

  puppetActive = true;
  puppetMusicChanged = false;
  puppetMusicFast = false;
  puppetMusicType = "normal";

  puppetMusic.playbackRate = 1.0;
  puppetMusic.volume = 0.15;
  puppetMusic.currentTime = 0;
  puppetMusic.play();

  if (puppetWarningTimer) clearInterval(puppetWarningTimer);

  // A cada 5 segundos: chance da música ficar rápida
  puppetWarningTimer = setInterval(() => {
  if (!puppetActive || gameOver || powerOut) return;
  if (puppetMusicChanged || puppetMusicFast) return;

  // Chance vem da IA da hora
  if (Math.random() < getAI("puppet")) {
    makePuppetMusicFast();
  }
}, 20000);
}

let puppetMusicType = "normal"; // "normal" | "ending" | "power"

function changePuppetMusic() {
  if (!puppetActive) return;

  // Para tudo
  puppetMusic.pause();
  endingMusic.pause();
  musicBox.pause();
  // Cicla: normal → ending → power → normal
  if (puppetMusicType === "normal") {
    puppetMusicType = "ending";
    endingMusic.currentTime = 0;
    endingMusic.loop = true;
    endingMusic.volume = camerasOpen && selectedCamera === "safeRoom" ? 0.6 : 0.15;
    endingMusic.play();
  }
  else if (puppetMusicType === "ending") {
    puppetMusicType = "power";
    musicBox.currentTime = 0;
    musicBox.loop = true;
    musicBox.volume = camerasOpen && selectedCamera === "safeRoom" ? 0.6 : 0.15;
    musicBox.play();
  }
  else {
    puppetMusicType = "normal";
    puppetMusic.currentTime = 0;
    puppetMusic.loop = true;
    puppetMusic.volume = camerasOpen && selectedCamera === "safeRoom" ? 0.6 : 0.15;
    puppetMusic.play();
  }

  // Se não for a normal, começa o timer de 35s
  if (puppetMusicType !== "normal") {
    puppetMusicChanged = true;

    if (puppetTimer) clearTimeout(puppetTimer);
    puppetTimer = setTimeout(() => {
      if (puppetMusicType !== "normal") {
        puppetLeaveBox();
      }
    }, 15000);
  } else {
    puppetMusicChanged = false;
    if (puppetTimer) clearTimeout(puppetTimer);
  }
  let puppetTime = (hardcoreCustomNight && hcBehaviors.puppetLessTime) ? 10000 : 15000;
// ou 35000 → 20000 no changePuppetMusic

if (puppetTimer) {
  clearTimeout(puppetTimer);
  puppetTimer = null;
}
puppetTimer = setTimeout(() => {
  if (puppetMusicFast || puppetMusicChanged) {
    puppetLeaveBox();
  }
}, puppetTime);
}

function makePuppetMusicFast() {
  puppetMusicFast = true;
  puppetMusic.playbackRate = 1.8;

  if (puppetTimer) clearTimeout(puppetTimer);
  puppetTimer = setTimeout(() => {
    if (puppetMusicFast) {
      puppetLeaveBox();
    }
  }, 20000);
  let puppetTime = (hardcoreCustomNight && hcBehaviors.puppetLessTime) ? 10000 : 20000;
// ou 35000 → 20000 no changePuppetMusic

if (puppetTimer) {
  clearTimeout(puppetTimer);
  puppetTimer = null;
}
puppetTimer = setTimeout(() => {
  if (puppetMusicFast || puppetMusicChanged) {
    puppetLeaveBox();
  }
}, puppetTime);
}

function resetPuppetMusic() {
  puppetMusicType = "normal";
  puppetMusicChanged = false;
  puppetMusicFast = false;
  puppetMusic.playbackRate = 1.0;

  // LIMPA O TIMER (importante)
  if (puppetTimer) {
    clearTimeout(puppetTimer);
    puppetTimer = null;
  }

  endingMusic.pause();
  musicBox.pause();
  puppetFastMusic.pause();

  puppetMusic.currentTime = 0;
  puppetMusic.volume = camerasOpen && selectedCamera === "safeRoom" ? 0.6 : 0.15;
  puppetMusic.play();
}

function puppetLeaveBox() {
  // Sai da caixa → jumpscare em 7 segundos
  puppetMusic.pause();
  endingMusic.pause();
  musicBox.pause();
  puppetFastMusic.pause();

  puppetFastMusic.currentTime = 0;
  puppetFastMusic.play();

  setTimeout(() => {
    if (gameOver || !puppetActive) return;
    jumpscare("Puppet");
  }, 7000);
}

function stopPuppet() {
  puppetActive = false;
  puppetMusic.pause();
  puppetFastMusic.pause();
  if (puppetTimer) clearTimeout(puppetTimer);
  if (puppetWarningTimer) clearInterval(puppetWarningTimer);
}

function onAnimatronicLeftSafeRoom() {
  if (!hardcoreMode || !puppetActive) return;
  if (puppetMusicChanged || puppetMusicFast) return; // já está em alerta

  if (Math.random() < 0.50) {
    changePuppetMusic();
  }
}

function resetEnergy() {
  if (!hardcoreMode || energyResetUsed || powerOut || gameOver) return;

  // A partir da noite 4: só antes das 3:30 AM
  // Antes da noite 4: só antes das 5 AM
  if (night >= 4) {
    if (hour >= 3.5) {
      showEquipMessage("Só pode resetar antes das 3:30 AM!");
      return;
    }
  } else {
    if (Math.floor(hour) >= 5) {
      showEquipMessage("Só pode resetar antes das 5 AM!");
      return;
    }
  }

  energyResetUsed = true;

  // Noite 4+ → +47% | Antes → +25%
  let extra = night >= 4 ? 47 : 25;
  power += extra;
  if (power > 100) power = 100;
  updatePowerUI();

  // ===== FORÇA PORTAS ABERTAS =====
  leftDoorClosed = false;
  rightDoorClosed = false;
  if (leftDoor) {
    leftDoor.style.display = "none";
    leftDoor.innerHTML = "";
  }
  if (rightDoor) {
    rightDoor.style.display = "none";
    rightDoor.innerHTML = "";
  }

  // ===== FORÇA LUZES APAGADAS =====
  leftLightOn = false;
  rightLightOn = false;
  if (leftAnim) {
    leftAnim.style.display = "none";
    leftAnim.innerHTML = "";
  }
  if (rightAnim) {
    rightAnim.style.display = "none";
    rightAnim.innerHTML = "";
  }
  lightSound.pause();
  lightSound.currentTime = 0;
  lightSound.loop = false;

  // Atualiza visual dos botões
  if (typeof updateOfficeButtons === "function") updateOfficeButtons();
  if (typeof updateDoorLightVisuals === "function") updateDoorLightVisuals();

  // ===== DESLIGA VENTILADOR (se existir) =====
  let fan = document.getElementById("fan");
  if (fan) fan.style.display = "none";
  // Se o ventilador for um <img> ou vídeo com id diferente, me fala o id que eu ajusto

  // ===== ATUALIZA PLUSHS (volta pro sprite normal) =====
  if (typeof updateOfficePlush === "function") updateOfficePlush();

  // Escritório fica escuro
  if (office) {
    office.style.backgroundImage = "url('https://static.wikia.nocookie.net/pizzaria-freddy-fazbear/images/9/93/Darkened_Office.png/revision/latest?cb=20150121172042&path-prefix=pt-br')";
  }

  powerDownSound.currentTime = 0;
  powerDownSound.play();
  
  stopFan();

// força plush blackout
let oldPowerOut = powerOut;
powerOut = true;
updateOfficePlush();
powerOut = oldPowerOut;

  if (currentPhoneCall) {
    currentPhoneCall.pause();
    currentPhoneCall.currentTime = 0;
    currentPhoneCall = null;
  }

  // Desabilita botões (menos Menu)
  document.querySelectorAll("#controls button").forEach(btn => {
    if (btn.innerText !== "Menu") btn.disabled = true;
  });

  let camBtn = document.getElementById("cameraButton");
  if (camBtn) camBtn.style.pointerEvents = "none";

  // Também bloqueia os botões de porta e luz
  let doorLightBtns = document.querySelectorAll(".officeBtn, #btnLeftDoor, #btnRightDoor, #btnLeftLight, #btnRightLight");
  doorLightBtns.forEach(btn => {
    if (btn) btn.style.pointerEvents = "none";
  });

  // Tempo do apagão temporário
  let delay;
  if (night >= 4) {
    delay = 3000 + Math.random() * 4000; // 3s \~ 7s
  } else {
    delay = 6000 + Math.random() * 3000; // 6s \~ 9s
  }

  setTimeout(() => {
    // Volta a luz do escritório
    if (office) {
      office.style.backgroundImage = "url('https://images.steamusercontent.com/ugc/1764820095379054399/E05280395A261A2FEF1864E6878E87DA7B69E60B/')";
    }
    
    startFan();
updateOfficePlush();

    // Liga o ventilador de novo
    if (fan) fan.style.display = "block";

    // Atualiza plushs de novo (garantia)
    if (typeof updateOfficePlush === "function") updateOfficePlush();

    // Reabilita botões
    document.querySelectorAll("#controls button").forEach(btn => {
      btn.disabled = false;
    });

    doorLightBtns.forEach(btn => {
      if (btn) btn.style.pointerEvents = "auto";
    });

    let resetBtn = document.getElementById("resetEnergyBtn");
    if (resetBtn) resetBtn.disabled = true;

    if (camBtn) camBtn.style.pointerEvents = "auto";

  }, delay);
}

function updateHardcoreUI() {
  let resetBtn = document.getElementById("resetEnergyBtn");
  if (resetBtn) {
    resetBtn.style.display = hardcoreMode ? "inline-block" : "none";
    resetBtn.disabled = false;
  }
}

function startHardcoreNight6() {
  if (localStorage.getItem("hardcoreNight6Unlocked") !== "true") return;

  hardcoreMode = true;
  night = 6;
  energyResetUsed = false;

  document.getElementById("hardcoreMenu").style.display = "none";
  if (game) game.style.display = "block";

  setTimeout(gameLoop, 1000);
  startNightWithIntro()
  updateHardcoreCameras();
  updateHardcoreUI();
  startPuppet(); // noite 6 já tem puppet
}

function updateHardcoreMenuButtons() {
  let n6 = document.getElementById("hardcoreNight6Button");
  if (n6) {
    n6.style.display = localStorage.getItem("hardcoreNight6Unlocked") === "true" ? "inline-block" : "none";
  }

  let cn = document.getElementById("hardcoreCustomNightButton");
  if (cn) {
    cn.style.display = localStorage.getItem("hardcoreCustomUnlocked") === "true" ? "inline-block" : "none";
  }
}

function openHardcoreCustomNight() {
  updateHCAIText();
setupCNButtons();
  document.getElementById("hardcoreMenu").style.display = "none";
  document.getElementById("hardcoreCustomNightMenu").style.display = "block";
  updateHCAIText();
}

function closeHardcoreCustomNight() {
  document.getElementById("hardcoreCustomNightMenu").style.display = "none";
  document.getElementById("hardcoreMenu").style.display = "block";
}

function changeHCAI(anim, value) {
  hardcoreCustomAI[anim] += value;
  if (hardcoreCustomAI[anim] < 0) hardcoreCustomAI[anim] = 0;
  if (hardcoreCustomAI[anim] > 20) hardcoreCustomAI[anim] = 20; // escala 0–20 tipo UCN, ou usa 0–100
  updateHCAIText();
}

function updateHCAIText() {
  document.getElementById("hcBonnieAI").innerHTML = hardcoreCustomAI.bonnie;
  document.getElementById("hcChicaAI").innerHTML = hardcoreCustomAI.chica;
  document.getElementById("hcFreddyAI").innerHTML = hardcoreCustomAI.freddy;
  document.getElementById("hcFoxyAI").innerHTML = hardcoreCustomAI.foxy;
  document.getElementById("hcEndoAI").innerHTML = hardcoreCustomAI.endo;
  document.getElementById("hcPuppetAI").innerHTML = hardcoreCustomAI.puppet;
  let el = document.getElementById("hcGoldenAI");
if (el) el.innerHTML = hardcoreCustomAI.golden + "%";
}

function startHardcoreCustomNight() {
  menuMusic.pause();
  menuMusic.currentTime = 0;
  // Lê as caixas
  hcBehaviors.freddySwitchHall = document.getElementById("hcFreddySwitchHall").checked;
  hcBehaviors.bonnieSkip = document.getElementById("hcBonnieSkip").checked;
  hcBehaviors.chicaSkip = document.getElementById("hcChicaSkip").checked;
  hcBehaviors.freddyNoLaugh = document.getElementById("hcFreddyNoLaugh").checked;
  hcBehaviors.foxyFast = document.getElementById("hcFoxyFast").checked;
  hcBehaviors.puppetLessTime = document.getElementById("hcPuppetLessTime").checked;
  hcBehaviors.endoDouble = document.getElementById("hcEndoDouble").checked;

  hardcoreMode = true;
  hardcoreCustomNight = true;
  night = 7; // marca como custom

  document.getElementById("hardcoreCustomNightMenu").style.display = "none";
  if (game) game.style.display = "block";

  setTimeout(gameLoop, 1000);
  startNightWithIntro()
  updateHardcoreCameras();
  updateHardcoreUI();

  if (hardcoreCustomAI.puppet > 0) startPuppet();
}

function changeHCAI(anim, value) {
  hardcoreCustomAI[anim] += value;
  if (hardcoreCustomAI[anim] < 0) hardcoreCustomAI[anim] = 0;
  if (hardcoreCustomAI[anim] > 100) hardcoreCustomAI[anim] = 100;
  updateHCAIText();
}

function startFan() {
  if (powerOut || gameOver) return;

  let fan = document.getElementById("officeFan");
  if (!fan) return;

  fan.style.display = "block";

  if (fanTimer) clearInterval(fanTimer);
  fanTimer = setInterval(() => {
    if (powerOut || gameOver || camerasOpen) return;
    fanFrame = (fanFrame + 1) % 3;
    fan.src = FAN_FRAMES[fanFrame];
  }, 80); // velocidade da animação

  if (!camerasOpen) {
    fanSound.currentTime = 0;
    setSoundVolume(fanSound, 0.4);
    fanSound.play();
  }
}

function stopFan() {
  if (fanTimer) {
    clearInterval(fanTimer);
    fanTimer = null;
  }
  fanSound.pause();
  fanSound.currentTime = 0;

  let fan = document.getElementById("officeFan");
  if (fan) fan.style.display = "none";
}

function updateFan() {
  if (powerOut || gameOver || !gameRunning) {
    stopFan();
    return;
  }

  let fan = document.getElementById("officeFan");
  if (!fan) return;

  if (camerasOpen) {
    // câmera aberta → para som e some o ventilador (opcional)
    fanSound.pause();
    fan.style.display = "none";
  } else {
    fan.style.display = "block";
    if (fanSound.paused) {
      fanSound.currentTime = 0;
      setSoundVolume(fanSound, 0.4);
      fanSound.play();
    }
    if (!fanTimer) startFan();
  }
}

let jumpscareAnimTimer = null;

function playFrameJumpscare(frames, imgElement, onDone, frameTime = 50) {
  if (!imgElement || !frames || frames.length === 0) {
    if (onDone) onDone();
    return;
  }

  let i = 0;
  imgElement.src = frames[0];
  imgElement.style.display = "block";

  if (jumpscareAnimTimer) clearInterval(jumpscareAnimTimer);

  jumpscareAnimTimer = setInterval(() => {
    i++;
    if (i >= frames.length) {
      clearInterval(jumpscareAnimTimer);
      jumpscareAnimTimer = null;
      // não repete → acaba na hora
      if (onDone) onDone();
      return;
    }
    imgElement.src = frames[i];
  }, frameTime);
}

function preloadImages(urls, callback) {
  let loaded = 0;
  let total = urls.length;
  let images = [];

  if (total === 0) {
    callback([]);
    return;
  }

  urls.forEach((url, index) => {
    let img = new Image();
    img.onload = img.onerror = function () {
      loaded++;
      if (loaded >= total) callback(images);
    };
    img.src = url;
    images[index] = img;
  });
}

const USAGE_IMGS = {
  1: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/usage%201.png",
  2: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/usage%202.png",
  3: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/usage%203.png"
};

const DIGIT_IMGS = {
  0: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/0.png",
  1: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/1.png",
  2: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/2.png",
  3: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/3.png",
  4: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/4.png",
  5: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/5.png",
  6: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/6.png",
  7: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/7.png",
  8: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/8.png",
  9: "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/9.png"
};

function getUsageLevel() {
  // base sempre 1
  let u = 1;
  if (camerasOpen) u++;
  if (leftDoorClosed) u++;
  if (rightDoorClosed) u++;
  if (leftLightOn) u++;
  if (rightLightOn) u++;
  return u;
}

function getBarImage(index) {
  // barra 1 e 2 → usage 1
  // barra 3 → usage 2
  // barra 4+ → usage 3
  if (index <= 1) return USAGE_IMGS[1];
  if (index === 2) return USAGE_IMGS[2];
  return USAGE_IMGS[3];
}

function updateUsageMeter() {
  let bars = document.getElementById("usageBars");
  if (!bars) return;

  bars.innerHTML = "";
  if (powerOut || gameOver || !gameRunning) return;

  let level = getUsageLevel();
  for (let i = 0; i < level; i++) {
    let img = document.createElement("img");
    img.src = getBarImage(i);
    bars.appendChild(img);
  }
}

function updatePowerDigits() {
  let box = document.getElementById("powerDigits");
  if (!box) return;

  box.innerHTML = "";
  if (powerOut && Math.floor(power) <= 0) {
    // 0%
    let z = document.createElement("img");
    z.src = DIGIT_IMGS[0];
    box.appendChild(z);
    return;
  }

  let value = Math.max(0, Math.floor(power));
  let str = String(value);

  for (let i = 0; i < str.length; i++) {
    let d = Number(str[i]);
    let img = document.createElement("img");
    img.src = DIGIT_IMGS[d];
    box.appendChild(img);
  }
}

function updatePowerUI() {
  updateUsageMeter();
  updatePowerDigits();
}

function renderCNDigits(containerId, value) {
  let box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = "";

  let str = String(Math.max(0, Math.min(100, value)));
  for (let i = 0; i < str.length; i++) {
    let img = document.createElement("img");
    img.src = DIGIT_IMGS[Number(str[i])];
    box.appendChild(img);
  }
  let pct = document.createElement("img");
  pct.src = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/percent.png";
  box.appendChild(pct);
}

function updateCustomText() {
  renderCNDigits("cnFreddyDigits", customAI.freddy);
  renderCNDigits("cnBonnieDigits", customAI.bonnie);
  renderCNDigits("cnChicaDigits", customAI.chica);
  renderCNDigits("cnFoxyDigits", customAI.foxy);
  renderCNDigits("cnGoldenDigits", customAI.golden);
}

function renderCNDigits(containerId, value) {
  let box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = "";
  let str = String(Math.max(0, Math.min(100, value | 0)));
  for (let i = 0; i < str.length; i++) {
    let img = document.createElement("img");
    img.src = DIGIT_IMGS[Number(str[i])];
    box.appendChild(img);
  }
  let pct = document.createElement("img");
  pct.src = "https://raw.githubusercontent.com/telma7744-crypto/Coisas-de-fnafs./refs/heads/main/percent.png";
  box.appendChild(pct);
}

function updateCustomText() {
  renderCNDigits("cnFreddyDigits", customAI.freddy);
  renderCNDigits("cnBonnieDigits", customAI.bonnie);
  renderCNDigits("cnChicaDigits", customAI.chica);
  renderCNDigits("cnFoxyDigits", customAI.foxy);
  renderCNDigits("cnGoldenDigits", customAI.golden);
}

function updateHCAIText() {
  renderCNDigits("hcFreddyDigits", hardcoreCustomAI.freddy);
  renderCNDigits("hcBonnieDigits", hardcoreCustomAI.bonnie);
  renderCNDigits("hcChicaDigits", hardcoreCustomAI.chica);
  renderCNDigits("hcFoxyDigits", hardcoreCustomAI.foxy);
  renderCNDigits("hcEndoDigits", hardcoreCustomAI.endo);
  renderCNDigits("hcPuppetDigits", hardcoreCustomAI.puppet);
  renderCNDigits("hcGoldenDigits", hardcoreCustomAI.golden);
}

function changeAIValue(mode, anim, delta) {
  if (mode === "hardcore") {
    hardcoreCustomAI[anim] = (hardcoreCustomAI[anim] || 0) + delta;
    if (hardcoreCustomAI[anim] < 0) hardcoreCustomAI[anim] = 0;
    if (hardcoreCustomAI[anim] > 100) hardcoreCustomAI[anim] = 100;
    updateHCAIText();
  } else {
    customAI[anim] = (customAI[anim] || 0) + delta;
    if (customAI[anim] < 0) customAI[anim] = 0;
    if (customAI[anim] > 100) customAI[anim] = 100;
    updateCustomText();
  }
}

let cnButtonsReady = false;
function setupCNButtons() {
  if (cnButtonsReady) return;
  cnButtonsReady = true;

  document.querySelectorAll(".cnBtn").forEach(btn => {
    let holdTimer = null;
    let repeatTimer = null;
    let mode = btn.dataset.mode;
    let anim = btn.dataset.anim;
    let delta = Number(btn.dataset.delta);
    let side = btn.dataset.side;
    let type = btn.dataset.type;

    let normalSrc = type === "gray"
      ? (side === "left" ? CN_BTN.leftGray : CN_BTN.rightGray)
      : (side === "left" ? CN_BTN.leftOrange : CN_BTN.rightOrange);
    let pressedSrc = side === "left" ? CN_BTN.leftOrange : CN_BTN.rightOrange;

    function startHold(e) {
      e.preventDefault();
      btn.src = pressedSrc;
      changeAIValue(mode, anim, delta);
      holdTimer = setTimeout(function () {
        repeatTimer = setInterval(function () {
          changeAIValue(mode, anim, delta);
        }, 1000);
      }, 400);
    }

    function endHold() {
      btn.src = normalSrc;
      clearTimeout(holdTimer);
      clearInterval(repeatTimer);
    }

    btn.addEventListener("pointerdown", startHold);
    btn.addEventListener("pointerup", endHold);
    btn.addEventListener("pointerleave", endHold);
    btn.addEventListener("pointercancel", endHold);
  });
}

function playEndoStep() {
  let s = endoSteps[Math.floor(Math.random() * endoSteps.length)];
  s.currentTime = 0;
  setSoundVolume(s, getStepVolumeByRoom(posEndo)); // sala nova
  s.play();
}

function getStepVolumeByRoom(room) {
  switch (room) {
    case "stage":
      return 0.20;
    case "dining":
      return 0.30;
    case "backstage":
      return 0.35;
    case "supply":
      return 0.40;
    case "restroom":
      return 0.40;
    case "kitchen":
      return 0.45;
    case "safeRoom":
      return 0.40;
    case "westHall":
    case "eastHall":
      return 0.60;
    case "westCorner":
    case "eastCorner":
      return 0.75;
    case "left":
    case "right":
      return 0.95;
    case "office":
      return 1.00;
    default:
      return 0.55;
  }
}

function animateFreddyMove(fromRoom, toRoom) {
  if (freddyAnimTimer) {
    clearInterval(freddyAnimTimer);
    freddyAnimTimer = null;
  }

  if (fromRoom === "stage") {
    freddyStageStare = false;
    stageChecked = false;
  }

  freddyAnim.from = fromRoom;
  freddyAnim.to = toRoom;
  freddyAnim.phase = "leaving";
  freddyAnim.progress = 0;

  if (camerasOpen) renderCameraAnimatronics();

  let leaveSteps = 18; // mais lento
  let leaveI = 0;

  freddyAnimTimer = setInterval(function () {
    leaveI++;
    freddyAnim.progress = leaveI / leaveSteps;
    if (camerasOpen) renderCameraAnimatronics();

    if (leaveI >= leaveSteps) {
      clearInterval(freddyAnimTimer);

      freddyAnim.phase = "entering";
      freddyAnim.progress = 0;

      let enterSteps = 20; // mais lento
      let enterI = 0;

      freddyAnimTimer = setInterval(function () {
        enterI++;
        freddyAnim.progress = enterI / enterSteps;
        if (camerasOpen) renderCameraAnimatronics();

        if (enterI >= enterSteps) {
          clearInterval(freddyAnimTimer);
          freddyAnimTimer = null;
          freddyAnim.phase = "idle";
          freddyAnim.from = null;
          freddyAnim.to = null;
          freddyAnim.progress = 0;
          if (camerasOpen) renderCameraAnimatronics();
        }
      }, 90);
    }
  }, 90);
}

function updateOfficeButtons() {
  let ld = document.getElementById("btnLeftDoor");
  let rd = document.getElementById("btnRightDoor");
  let ll = document.getElementById("btnLeftLight");
  let rl = document.getElementById("btnRightLight");

  if (camerasOpen) {
    if (ld) ld.src = leftDoorClosed ? OFFICE_BTNS.camLeftDoorOn : OFFICE_BTNS.camLeftDoorOff;
    if (rd) rd.src = rightDoorClosed ? OFFICE_BTNS.camRightDoorOn : OFFICE_BTNS.camRightDoorOff;
    if (ll) ll.src = leftLightOn ? OFFICE_BTNS.camLeftLightOn : OFFICE_BTNS.camLeftLightOff;
    if (rl) rl.src = rightLightOn ? OFFICE_BTNS.camRightLightOn : OFFICE_BTNS.camRightLightOff;
  } else {
    if (ld) ld.src = leftDoorClosed ? OFFICE_BTNS.leftDoorOn : OFFICE_BTNS.leftDoorOff;
    if (rd) rd.src = rightDoorClosed ? OFFICE_BTNS.rightDoorOn : OFFICE_BTNS.rightDoorOff;
    if (ll) ll.src = leftLightOn ? OFFICE_BTNS.leftLightOn : OFFICE_BTNS.leftLightOff;
    if (rl) rl.src = rightLightOn ? OFFICE_BTNS.rightLightOn : OFFICE_BTNS.rightLightOff;
  }
}

function updateDoorLightVisuals() {
  let leftRadar = document.getElementById("leftDoorRadar");
  let rightRadar = document.getElementById("rightDoorRadar");

  // ===== ESQUERDA =====
  if (!leftLightOn) {
    if (leftAnim) {
      leftAnim.style.display = "none";
      leftAnim.innerHTML = "";
    }
    if (leftRadar) leftRadar.style.display = "none";
  } else if (camerasOpen) {
    // Câmera aberta: NÃO mostra a imagem longa da luz
    if (leftAnim) {
      leftAnim.style.display = "none";
      leftAnim.innerHTML = "";
    }
    // Só radar se tiver alguém
    let radarSrc = null;
    if (pos.bonnie === "left") radarSrc = RADAR_SPRITES.bonnie;
    else if (pos.foxy === "left" || pos.foxy === "westHall") radarSrc = RADAR_SPRITES.foxy;
    else if (isEndoActive() && posEndo === "left") radarSrc = ENDO_SPRITES.radar;

    if (leftRadar) {
      if (radarSrc) {
        leftRadar.src = radarSrc;
        leftRadar.style.display = "block";
      } else {
        leftRadar.style.display = "none";
      }
    }
  } else {
    // Câmera fechada: comportamento normal (imagem da luz)
    if (leftRadar) leftRadar.style.display = "none";
    // (o toggleLeftLight já monta o leftAnim)
  }

  // ===== DIREITA =====
  if (!rightLightOn) {
    if (rightAnim) {
      rightAnim.style.display = "none";
      rightAnim.innerHTML = "";
    }
    if (rightRadar) rightRadar.style.display = "none";
  } else if (camerasOpen) {
    if (rightAnim) {
      rightAnim.style.display = "none";
      rightAnim.innerHTML = "";
    }
    let radarSrc = null;
    if (pos.chica === "right") radarSrc = RADAR_SPRITES.chica;
    else if (isEndoActive() && posEndo === "right") radarSrc = ENDO_SPRITES.radar;

    if (rightRadar) {
      if (radarSrc) {
        rightRadar.src = radarSrc;
        rightRadar.style.display = "block";
      } else {
        rightRadar.style.display = "none";
      }
    }
  } else {
    if (rightRadar) rightRadar.style.display = "none";
  }
}

function playRandomKitchenSound() {
  // Para o som anterior
  if (currentKitchenSound) {
    currentKitchenSound.pause();
    currentKitchenSound.currentTime = 0;
  }

  // Escolhe um som aleatório
  const randomIndex = Math.floor(Math.random() * kitchenSounds.length);
  currentKitchenSound = kitchenSounds[randomIndex];
  currentKitchenSound.volume = 1;
  currentKitchenSound.play();

  // Quando o som terminar, toca outro (enquanto ela ainda estiver na cozinha)
  currentKitchenSound.onended = function() {
    if (pos.chica === "kitchen") {
      playRandomKitchenSound();
    }
  };
}

function stopKitchenSound() {
  if (currentKitchenSound) {
    currentKitchenSound.pause();
    currentKitchenSound.currentTime = 0;
    currentKitchenSound.onended = null;
    currentKitchenSound = null;
  }
  if (kitchenSoundTimer) {
    clearTimeout(kitchenSoundTimer);
    kitchenSoundTimer = null;
  }
}

function desbloquearTudo() {
  // Progresso normal
  localStorage.setItem("highestNight", "5");
  localStorage.setItem("night6Unlocked", "true");
  localStorage.setItem("customNightUnlocked", "true");
  localStorage.setItem("stars", JSON.stringify({ night5: true, night6: true, golden: true }));

  // Hardcore
  localStorage.setItem("hardcoreUnlocked", "true");
  localStorage.setItem("hardcoreHighestNight", "6");
  localStorage.setItem("hardcoreNight6Unlocked", "true");
  localStorage.setItem("hardcoreCustomUnlocked", "true");

  // Hacks / Loja
  localStorage.setItem("radarUnlocked", "true");
  localStorage.setItem("radarEquipped", "true");
  localStorage.setItem("infinitePower", "true");
  localStorage.setItem("infinitePowerUnlocked", "true");
  localStorage.setItem("fastNight", "true");
  localStorage.setItem("fastNightUnlocked", "true");

  // Plushs
  localStorage.setItem("unlockedPlushes", JSON.stringify({
    freddy: true,
    bonnie: true,
    chica: true,
    foxy: true,
    golden: true
  }));

  showEquipMessage("✅ Tudo desbloqueado! Recarrega a página agora.")
}

// ==================== SISTEMA DE INTRO + LOADING ====================

function showNightIntro(callback) {
  const intro = document.getElementById("nightIntroScreen");
  const hardcoreText = document.getElementById("hardcoreIntroText");
  const nightNumber = document.getElementById("nightIntroNumber");
  const nightTime = document.getElementById("nightIntroTime");

  // Texto da noite
  nightNumber.innerText = "Night " + night;
  nightTime.innerText = "12 AM";

  // Hardcore
  if (hardcoreMode) {
    hardcoreText.style.display = "block";
  } else {
    hardcoreText.style.display = "none";
  }

  intro.style.display = "flex";

  // Fica 2.8 segundos e depois vai pro loading
  setTimeout(() => {
    intro.style.display = "none";
    startLoading(callback);
  }, 2800);
}

function startLoading(callback) {
  const loading = document.getElementById("loadingScreen");
  const bar = document.getElementById("loadingBar");
  loading.style.display = "flex";
  bar.style.width = "0%";

  // Lista de imagens importantes pra pré-carregar
  const imagesToLoad = [
    // Câmeras
    ...Object.values(CAMERA_IMAGES || {}),
    // Sprites principais
    ...Object.values(SPRITES || {}),
    // Radar
    ...Object.values(RADAR_SPRITES || {}),
    // Jumpscares (se existirem)
    ...(typeof BONNIE_JUMPSCARE_FRAMES !== "undefined" ? BONNIE_JUMPSCARE_FRAMES : []),
    ...(typeof CHICA_JUMPSCARE_FRAMES !== "undefined" ? CHICA_JUMPSCARE_FRAMES : []),
    ...(typeof FREDDY_POWER_OUT_FRAMES !== "undefined" ? FREDDY_POWER_OUT_FRAMES : [])
  ];

  // Remove duplicados e links inválidos
  const uniqueImages = [...new Set(imagesToLoad.filter(url => url && typeof url === "string"))];

  let loaded = 0;
  const total = uniqueImages.length || 1;

  function updateBar() {
    const percent = Math.floor((loaded / total) * 100);
    bar.style.width = percent + "%";
  }

  if (uniqueImages.length === 0) {
    // Se não tiver imagem, só espera um pouco
    setTimeout(() => {
      loading.style.display = "none";
      if (callback) callback();
    }, 800);
    return;
  }

  uniqueImages.forEach(url => {
    const img = new Image();
    img.onload = img.onerror = () => {
      loaded++;
      updateBar();
      if (loaded >= total) {
        setTimeout(() => {
          loading.style.display = "none";
          if (callback) callback();
        }, 400);
      }
    };
    img.src = url;
  });
}

// Função principal que começa a noite com intro + loading
function startNightWithIntro() {
  if (menu) menu.style.display = "none";
  if (game) game.style.display = "block";

  showNightIntro(() => {          // ← só roda depois do loading
    resetNight();
    gameRunning = true;           // ← aqui
    setTimeout(gameLoop, 1000);
    startMovementSystem();        // ← aqui
  });
}