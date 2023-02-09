
//console.log(this);
window.addEventListener('keydown',function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    //console.log(key);
    //console.log(audio);
    if (!audio){return;}
    audio.currentTime=0
    audio.play();
    key.classList.add('playing');
    console.log(this);
});

const removeTransition = function(e){
    //console.log(e.propertyName);
    if (e.propertyName !== "transform"){return;}
    console.log(this);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
 keys.forEach(key=> key.addEventListener('transitionend',removeTransition))