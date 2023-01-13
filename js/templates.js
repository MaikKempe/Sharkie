/**
 * HTML template
 * @returns HTML
 */
function startScreenTemplate() {
  return `
    <div class="startscreen">
    <img class="bg" src="img/3_background/dark/1.png">
      <div class="h1-container">
        <img class="sharkie-startscreen" src="img/1_sharkie/1_IDLE/1.png">
        <h1 id="h1">Sharkie</h1>
      </div>
      <button id="start-btn" class="start-btn" onclick="startGame()">START GAME</button>
      <button id="help-btn" class="btn" onclick="showHelpSection()">HELP</button>
      <div id="turn-screen-info">
        <img class="sliding-arrow" src="img/8_icons/move_screen_arrow.png">
        <span class="move-screen-infotext">Please turn your screen</span>
      </div>
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

/**
 * HTML template
 * @returns HTML
 */
function gameScreenDesktopTemplate() {
  return `
  <div class="gamescreen-container">
     <h2 id="gamescreen-headline">Sharkie</h2>
  </div>
  <div id="fullscreen">
    <img class="bg-blurred" src="img/3_background/dark/1.png">
    <div class="game-content-desktop">
       <canvas id="canvas" width="720" height="480"></canvas>
       <div id="gamescreen-paused">
         <h2>Game Paused</h2>
       </div>
       <div id="gamescreen-desktop-menu">
          <div class="setting-btn" onclick="toggleScreen()">
            <img id="fullscreen-on-icon" class="setting-icon" src="img/8_icons/fullscreen_on.png">
            <img id="fullscreen-off-icon" class="setting-icon d-none" src="img/8_icons/fullscreen_off.png">
          </div>
          <div id="sound-btn" class="setting-btn" onclick="toggleSound()">
            <img id="sound-on-icon" class="setting-icon" src="img/8_icons/sound_on.png">
            <img id="sound-off-icon" class="setting-icon d-none" src="img/8_icons/sound_off.png">
          </div>
          <div class="setting-btn" onclick="togglePausedMode()">
            <img id="standby-off-icon" class="setting-icon" src="img/8_icons/standby_off.png">
            <img id="standby-on-icon" class="setting-icon d-none" src="img/8_icons/standby_on.png">
          </div>
          <div id="description-btn" class="setting-btn" onclick="toggleDescription()">
            <img id="info-on-icon" class="setting-icon" src="img/8_icons/info_on.png">
            <img id="info-off-icon" class="setting-icon d-none" src="img/8_icons/info_off.png">
          </div>
        </div>
     </div>
  </div>
  <div class="description-container">
    <div id="gamescreen-description">
        <div class="description-element">
            <div class="key-description">
                <img src="img/8_icons/arrows.png" class="key-description-img">
            </div>
            <span>Move<br>Sharkie</span>
        </div>
        <div class="description-element">
            <div class="space-description">
                <div class="key-description-letter">Space</div>
            </div>
            <span>Slap<br>Attack</span>
        </div>
        <div class="description-element">
            <div class="key-description">
                <div class="key-description-letter">B</div>
            </div>
            <span>Bubble<br>Attack</span>
        </div>
        <div class="description-element">
            <div class="key-description">
                <div class="key-description-letter">V</div>
            </div>
            <span>Poisoned<br>Bubble Attack</span>
        </div>
     </div>
   </div>`;
}

/**
 * HTML template
 * @returns HTML
 */
function gameScreenTouchTemplate() {
  return `
  <div id="fullscreen">
    <img class="bg-blurred" src="img/3_background/dark/1.png">
    <div class="game-content-mobile">
       <canvas id="canvas" width="720" height="480"></canvas>
       <div id="gamescreen-blocked">
         <img class="bg" src="img/3_background/dark/1.png">
         <h2>Please turn your screen</h2>
         <img class="sliding-arrow" src="img/8_icons/move_screen_arrow.png">
       </div>
       <div id="gamescreen-paused">
         <h2>Game Paused</h2>
       </div>
       <div id="gamescreen-mobile-menu">
            <div class="setting-btns">
              <div id="sound-btn" class="setting-btn" onclick="toggleSound()">
                <img id="sound-on-icon" class="setting-icon" src="img/8_icons/sound_on.png">
                <img id="sound-off-icon" class="setting-icon d-none" src="img/8_icons/sound_off.png">
              </div>
              <div class="setting-btn" onclick="togglePausedMode()">
                <img id="standby-off-icon" class="setting-icon" src="img/8_icons/standby_off.png">
                <img id="standby-on-icon" class="setting-icon d-none" src="img/8_icons/standby_on.png">
              </div>
              <div class="setting-btn" onclick="toggleScreen()">
                <img id="fullscreen-on-icon" class="setting-icon d-none" src="img/8_icons/fullscreen_on.png">
                <img id="fullscreen-off-icon" class="setting-icon" src="img/8_icons/fullscreen_off.png">
              </div>
            </div>
            <div class="action-btns">
              <div id="mobile-btn-poisoned-bubble" class="action-btn">
                <img class="action-icon" src="img/8_icons/poisoned_bubble.png">
              </div>
              <div id="mobile-btn-bubble" class="action-btn">
                <img class="action-icon" src="img/8_icons/bubble.png">
              </div>
              <div id="mobile-btn-slapmove" class="action-btn">
                <img class="action-icon" src="img/8_icons/slap_attack_icon.png">
              </div>
            </div>
            <div class="control-pad">
              <div class="control-pad-container">
                 <div id="mobile-btn-up" class="action-btn">
                   <img class="control-pad-icon" src="img/8_icons/arrow_up3.png">
                 </div>
                  <div id="mobile-btn-left" class="action-btn">
                    <img class="control-pad-icon" src="img/8_icons/arrow_left3.png">
                  </div>
                  <div id="mobile-btn-right" class="action-btn">
                    <img class="control-pad-icon" src="img/8_icons/arrow_right3.png">
                  </div>
                  <div id="mobile-btn-down" class="action-btn">
                    <img class="control-pad-icon" src="img/8_icons/arrow_down3.png">
                  </div>
              </div>
            </div>
       </div>
     </div>
  </div>`;
}

/**
 * HTML template
 * @returns HTML
 */
function gameOverScreenTemplate() {
  return `
  <div class="endscreen">
    <img class="bg" src="img/3_background/dark/1.png">
      <div class="headline-container">
        <img class="sharkie-game-over" src="img/1_sharkie/6_dead/1_poisoned/sin_subir/DES 2_00011.png">
        <h2>GAME OVER</h2>
      </div>
      <button class="btn" onclick="reload()">Try again</button>
  </div>`;
}

/**
 * HTML template
 * @returns HTML
 */
function winScreenTemplate() {
  return `
  <div class="endscreen">
    <img class="bg" src="img/3_background/dark/1.png">
      <div class="headline-container">
        <img class="sharkie-win" src="img/6_botones/sharkie_win.png">
        <h2>YOU WIN!</h2>
      </div>
      <div class="coin-info">You have collected ${world.character.coinsCollected} of ${world.level.allCoins} Coins</div>
      <button class="btn" onclick="reload()">Play again</button>
  </div>`;
}

/**
 * HTML template
 * @returns HTML
 */
function helpSectionTemplate() {
  return `
  <div class="help-section">
    <div class="help-headline">
       <h3>Introduction</h3>
     </div>
     <div class="help-description">
       <span>
         Sharkie loves adventures. But on his way through the ocean he encounters many enemies. Try to fight them. 
         Slap-moves and clean bubbles will always work against poisonous pufferfishes. His strongest enemy, 
         the deadly orca, can only be defeated with poisoned bubbles. Be prepaired and collect enough poison before you meet him.
       </span>
     </div>
     <div class="help-headline">
       <h3>Keyboard</h3>
     </div>
     <div class="help-row">
        <div class="help-child">
          <div class="key">
            <img src="img/8_icons/arrows.png" class="key-img">
          </div>
          <h4>Move</h4>
          <img class="sharkie-preview" src="img/7_introduction/sharkie.png">
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
          <span>Poison</span>
        </div>
     </div>
     <div class="help-menu">
       <button class="btn" onclick="backToStart()">close</button>
     </div>    
 </div>`;
}