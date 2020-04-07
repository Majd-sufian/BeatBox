// this Beat class has an audio
// i can play the audio by calling the function play() with the audio that selected



class Beat {
  constructor(audioSrc){
    this.audio = new Audio(audioSrc)
  }
  // I CALLED IT IN triggerBeat FUNCUTION SCRIPT.JS
  play = () => {
    this.audio.currentTime = 0
    this.audio.play()
  }
}


// it's a good proctioce to call the element only once like this.element
// we have a new  event here called transitionend , what does it do
// it simply wait untill the is finished then it can do whatever you want with it


class Button {
    constructor(color, keyCode){
      this.color = color
      this.keyCode = keyCode
      this.element = document.getElementById(keyCode)
      this.setButtonColorInHTML()
      this.createTransitionEndListener()
    }

    createTransitionEndListener = () => {
        this.element.addEventListener("transitionend", () =>{
            this.deselect();
        })
    }

    setButtonColorInHTML = () => {
      this.element.style.borderColor = this.color
    }

    // I called this functionin the triggerBeat in script.js so after the user press the keyboard
    // It palys the audio and change the button
    select = () => {
      this.element.style.backgroundColor = this.color
      this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`
    }

    // i called the deselect function in the createTransitionEndListener function
    // so what does it do ? it wait untill the event is done then it emplemnts this function
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = `none`;
    }
}

