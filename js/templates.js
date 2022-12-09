function startScreenTemplate() {
  return `
    <div class="startscreen">
    <img class="bg-start" src="img/3_background/dark/1.png">
      <div class="h1-container">
        <img class="sharkie-h1" src="img/1_sharkie/1_IDLE/1.png">
        <h1 id="h1" class="">Sharkie</h1>
      </div>
      <button class="start-btn" onclick="startGame()">START GAME</button>
      <button class="btn" onclick="showIntroduction()">HELP</button>
      <div id="startscreen-animation">
          <div class="bubble bubble-1"></div>
          <div class="bubble bubble-2"></div>
          <div class="bubble bubble-3"></div>
          <div class="bubble bubble-4"></div>
          <div class="bubble bubble-5"></div>
          <div class="bubble bubble-6"></div>
          <div class="bubble bubble-7"></div>
          <div class="bubble bubble-8"></div>
          <div class="bubble bubble-9"></div>
          <div class="bubble bubble-10"></div>
          <div class="bubble bubble-11"></div>
          <div class="bubble bubble-12"></div>
          <div class="bubble bubble-13"></div>
          <div class="bubble bubble-14"></div>
          <div class="bubble bubble-15"></div>
      </div>
    </div>`;
}

function helpSectionTemplate() {
  return `
  <div class="help-section">
    <div class="help-headline">
       <h3>Introduction</h3>
     </div>
     <div class="help-description">
       <span>
         Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltext Beispieltex
       </span>
     </div>
     <div class="help-headline">
       <h3>Keys</h3>
     </div>
     <div class="help-container">
       <div class="help-row">
        <div class="help-child">
          <div class="key">
            <img src="img/8_icons/arrows.png" class="key-img">
          </div>
          <h4>Move</h4>
          <img class="sharkie-preview" src="img/7_introduction/sharkie.png">
        </div>
       </div>
     </div>
     <div class="help-row">
        <div class="help-child">
          <div class="space">
            <div class="key-letter">Space</div>
          </div>
          <h4>Slap Attack</h4>
          <img class="sharkie-attack-preview" src="img/7_introduction/sharkie_slap.png">
        </div>
        <div class="help-child">
          <img class="enemy-preview" src="img/7_introduction/pufferfishes.png">
        </div>
     </div>
     <div class="help-row">
        <div class="help-child">
          <div class="key">
            <div class="key-letter">B</div>
          </div>
          <h4>Bubble Attack</h4>
          <img class="sharkie-attack-preview" src="img/7_introduction/sharkie_bubble.png">
        </div>
        <div class="help-child">
          <img class="enemy-preview" src="img/7_introduction/pufferfishes.png">
        </div>
       </div>
     <div class="help-row">
        <div class="help-child">
          <div class="key">
            <div class="key-letter">V</div>
          </div>
          <h4>Poisoned Bubble Attack</h4>
          <img class="sharkie-attack-preview" src="img/7_introduction/sharkie_poisoned_bubble.png">
        </div>
        <div class="help-child">
          <img class="enemy-preview" src="img/7_introduction/endboss.png">
        </div>
       </div>
     <div class="help-headline">
       <h3>Collectible Elements</h3>
     </div>
     <div class="collectible-element-row">
        <div class="collectible-element">
          <img class="coin" src="img/7_introduction/coin.png">
          <span>Coin</span>
        </div>
        <div class="collectible-element">
          <img class="poison" src="img/7_introduction/poison.png">
          <span>Poison (to use Poisoned Bubble Attack)</span>
        </div>
     </div>
     <div class="introduction-menu">
       <button class="btn" onclick="showStartScreen()">close</button>
     </div>    
 </div>`;
}

function gameScreenTemplate() {
  return `
    <img class="bg-ingame" src="img/3_background/dark/1.png">
    <div class="gamescreen-container">
      <h2 id="gamescreen-headline">Sharkie</h2>
    </div>
    <canvas id="canvas" width="720" height="480"></canvas>
    <div class="gamescreen-container">
       <div id="gamescreen-description">
         <span>Arrows: Move</span>
         <span>Space: Slap-Attack</span>
         <span>V: Poisoned Bubble Attack</span>
         <span>B: Bubble Attack</span>
       </div>
    </div>`;
}