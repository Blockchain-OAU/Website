window.addEventListener("load", () => {
  const shareBtn = document.querySelector(".share-btn");
  shareBtn.addEventListener("click", (event) => {
      event.preventDefault()
      query = {title: event.currentTarget.dataset.title, url: window.location.href}
      console.log(window.location.href);
      if (navigator.share){
        navigator.share({...query})
      }
    })

  setInterval(startCountDown, 1000);
  getParticipants();
})

function getParticipants(){
  fetch("http://blockchainclub.herokuapp.com/number/")
    .then(res => res.json())
    .then(json => console.log)
}

function startCountDown(){
  const start = parseInt(Date.now()/1000)
  const finish = 	1630454400;
  const duration = finish - start;
  const [dayInSec, hourInSec, minInSec] = [60 * 60 * 24, 60 * 60, 60]
  const days = parseInt(duration/dayInSec);
  let remTime = duration - days * dayInSec;
  const hours = parseInt(remTime/hourInSec);
  remTime = remTime - hours * hourInSec;
  const mins = parseInt(remTime/minInSec);
  const secs = remTime - mins * minInSec;

  document.querySelector("#days").textContent = zeroPad(days);
  document.querySelector("#hours").textContent = zeroPad(hours);
  document.querySelector("#mins").textContent = zeroPad(mins);
  document.querySelector("#secs").textContent = zeroPad(secs);
}

function zeroPad(num) {
  var zero = 2 - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}