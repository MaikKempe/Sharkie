function startScreenTemplate() {
    return `
    <div class="startscreen">
      <h1>Sharkie</h1>
      <button class="btn-xl" onclick="startGame()">START GAME</button>
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

function gameScreenTemplate() {
    return `
    <div class="gamescreen-headline-container">
      <h2 id="gamescreen-headline">Sharkie</h2>
    </div>
    <canvas id="canvas" width="720" height="480"></canvas>
    <div id="gamescreen-description">Tastatur Beschreibung</div>`;
}