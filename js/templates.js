function startScreenTemplate() {
  return `
    <div class="startscreen">
    <img class="bg-start" src="img/3_background/dark/1.png">
      <div class="h1-container">
        <img class="sharkie-h1" src="img/1_sharkie/1_IDLE/1.png">
        <h1 id="h1" class="">Sharkie</h1>
      </div>
      <button class="start-btn" onclick="startGame()">START GAME</button>
      <button class="btn" onclick="showIntroductions()">Introductions</button>
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

function introductionsTemplate() {
  return `
    <div class="introductions">
     <h2>Introductions</h2>
     
     <button class="btn" onclick="showStartScreen()">close</button>
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