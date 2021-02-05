/**
 * Beat class to respresent the beat object
 * @param {audioSource} audio source
 */

class Beat {
  constructor(audioSource) {
    //  initialized audio object with given soure
    // utils.js:5 <audio preload=​"auto" src=​"./​assets/​Cymbal Suspended 2.mp3">​</audio>​

    this.audio = new Audio(audioSource);
    // console.log(this.audio);
    // this.audio.play();
  }

  play = () => {
    // allow us to rest the audio and play again any time we click the key
    this.currentTime = 0;
    this.audio.play();
  };
}

/**
 * Button class that keeps track of the button color based on a pressed key
 */
class Button {
  constructor(color, keyCode) {
    // Intialize color and element values
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    // console.log(this.element);

    //call setButtonColorInHTML() function
    this.setButtonColorInHTML();
    this.setTransitionEndEventListener();
  }

  // Solution 1: remvoe style on keyup
  // Solution 2: Wait a certain amount of time then remvoe the style
  // Solution 3: React On Transitioned EventListener(this is the best one)

  setTransitionEndEventListener = () => {
    this.element.addEventListener("transitionend", () => {
      // console.log("Transition ended");
      this.deselect();
    });
  };

  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  /**
   * Select function to set the background color and boxShadow
   */
  select = () => {
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
  };

  /**
   * Deselect function to reset background color and boxShadow to default value
   */
  deselect = () => {
    this.element.style.backgroundColor = `transparent`;
    this.element.style.boxShadow = `none`;
  };
}
