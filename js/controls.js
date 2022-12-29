
/**
 * Keyboard, mobile Funktionsschalttasten
 */

window.addEventListener('keydown', (event) => {
    keyboard.lastEvent = new Date().getTime();
    if (event.key == 'ArrowUp') {
        keyboard.UP = true;
    }
    if (event.key == 'ArrowDown') {
        keyboard.DOWN = true;
    }
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (event.key == ' ') {
        keyboard.SPACE = true;
    }
    if (event.key == 'v') {
        keyboard.V = true;
    }
    if (event.key == 'b') {
        keyboard.B = true;
    }
});

window.addEventListener('keyup', (event) => {
    keyboard.lastEvent = new Date().getTime();
    if (event.key == 'ArrowUp') {
        keyboard.UP = false;
    }
    if (event.key == 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (event.key == ' ') {
        keyboard.SPACE = false;
    }
    if (event.key == 'v') {
        keyboard.V = false;
    }
    if (event.key == 'b') {
        keyboard.B = false;
    }
});

function bindKeyEventsToMobileButtons() {
    // Arrow Up
    document.getElementById('mobile-btn-up').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.UP = true;
        keyboard.lastEvent = new Date().getTime();
    });
    document.getElementById('mobile-btn-up').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.UP = false;
        keyboard.lastEvent = new Date().getTime();
    });

    // Arrow Down
    document.getElementById('mobile-btn-down').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.DOWN = true;
        keyboard.lastEvent = new Date().getTime();
    });
    document.getElementById('mobile-btn-down').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.DOWN = false;
        keyboard.lastEvent = new Date().getTime();
    });

    // Arrow Left
    document.getElementById('mobile-btn-left').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.LEFT = true;
        keyboard.lastEvent = new Date().getTime();
    });
    document.getElementById('mobile-btn-left').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.LEFT = false;
        keyboard.lastEvent = new Date().getTime();
    });

    // Arrow right
    document.getElementById('mobile-btn-right').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.RIGHT = true;
        keyboard.lastEvent = new Date().getTime();
    });
    document.getElementById('mobile-btn-right').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.RIGHT = false;
        keyboard.lastEvent = new Date().getTime();
    });

    // Space (slap attack button)
    document.getElementById('mobile-btn-slapmove').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.SPACE = true;
        keyboard.lastEvent = new Date().getTime();
    });
    document.getElementById('mobile-btn-slapmove').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.SPACE = false;
        keyboard.lastEvent = new Date().getTime();
    });

    // B (bubble attack button)
    document.getElementById('mobile-btn-bubble').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.B = true;
        keyboard.lastEvent = new Date().getTime();
    });
    document.getElementById('mobile-btn-bubble').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.B = false;
        keyboard.lastEvent = new Date().getTime();
    });

    // V (poisoned bubble attack button)
    document.getElementById('mobile-btn-poisoned-bubble').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.V = true;
        keyboard.lastEvent = new Date().getTime();
    });
    document.getElementById('mobile-btn-poisoned-bubble').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.V = false;
        keyboard.lastEvent = new Date().getTime();
    });
}