let beats = {
  83: {
    beat: new Beat("./assets/Piano Chord 331.mp3"),
  },
  85: {
    beat: new Beat("./assets/Piano Chord 209.mp3"),
  },
  68: {
    beat: new Beat("./assets/Piano Chord 208.mp3"),
  },
  65: {
    beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
  },
  78: {
    beat: new Beat("./assets/Drum Snare Roll.mp3"),
  },
  73: {
    beat: new Beat("./assets/PREL Musical 57.mp3"),
  },
  83: {
    beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
  },
  79: {
    beat: new Beat("./assets/Musical Compos 33.mp3"),
  },
  75: {
    beat: new Beat("./assets/Musical Orches 4.mp3"),
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
  }
};

// Keydown addEventListener to fire triggerBeat function

window.addEventListener("keydown", triggerBeat);
