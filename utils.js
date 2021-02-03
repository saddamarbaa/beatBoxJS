/**
 * a Beat class to respresent the beat object
 * @param {audioSource} audio source
 */

class Beat {
  constructor(audioSource) {
    //  initialized audio object with given soure
    // utils.js:5 <audio preload=​"auto" src=​"./​assets/​Cymbal Suspended 2.mp3">​</audio>​

    this.audio = new Audio(audioSource);
    // console.log(this.audio);
  }

  play = () => {
    // allow us to rest the audio and play again any time we click the key
    this.currentTime = 0;
    this.audio.play();
  };
}
