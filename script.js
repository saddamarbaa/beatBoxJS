// beats object

let beats = {
  76: {
    beat: new Beat("./assets/Piano Chord 331.mp3"),
    button: new Button("#00fffe", 76),
  },
  79: {
    beat: new Beat("./assets/Piano Chord 209.mp3"),
    button: new Button("#00fffe", 79),
  },
  86: {
    beat: new Beat("./assets/Piano Chord 208.mp3"),
    button: new Button("#00fffe", 86),
  },
  69: {
    beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
    button: new Button("#00fffe", 69),
  },
  83: {
    beat: new Beat("./assets/Drum Snare Roll.mp3"),
    button: new Button("#00fffe", 83),
  },
  85: {
    beat: new Beat("./assets/Drum Snare Roll.mp3"),
    button: new Button("#00fffe", 85),
  },
  68: {
    beat: new Beat("./assets/PREL Musical 57.mp3"),
    button: new Button("#00fffe", 68),
  },
  65: {
    beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
    button: new Button("#00fffe", 65),
  },
  78: {
    beat: new Beat("./assets/Musical Compos 33.mp3"),
    button: new Button("#00fffe", 78),
  },
};

/**
 * Function to play the beat upon a press of key
 * @param {event} event
 */

const triggerBeat = (event) => {
  // console.log(event);
  // console.log(event.keyCode);

  const keyCode = event.keyCode;

  if (keyCode in beats) {
    // console.log(keyCode);
    let pressedKey = beats[keyCode];
    pressedKey.beat.play();
    pressedKey.button.select();
  }
};

// Keydown addEventListener to fire triggerBeat function

window.addEventListener("keydown", triggerBeat);
