// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

mimicServerCall()
.then(function(){

  addLikeListeners()

  function toggleHeart(e){
    if (e.target.innerHTML == EMPTY_HEART){
      e.target.innerHTML = FULL_HEART
      e.target.className = "activated-heart"
    } else{
      e.target.innerHTML = EMPTY_HEART
      e.target.className = ""
    }
  }

  function addLikeListeners(){
    let hearts = document.getElementsByClassName('like-glyph')
    Array.from(hearts).forEach(item => item.addEventListener('click', e => toggleHeart(e)))
  }
})
.catch(function(error){
  console.log(error.message)
  document.getElementById('modal').className = ""
  function hide(){
    (document.getElementById('modal').className = "hidden")
  }
  window.setTimeout(hide, 5000)
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
