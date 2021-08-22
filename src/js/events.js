window.addEventListener("load", () => {
  document.querySelectorAll(".show-btn").forEach(
    (btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.currentTarget.closest("section").classList.add("show");
      })
    }
  )

  document.querySelectorAll(".hide-btn").forEach(
    (btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.currentTarget.closest("section").classList.remove("show");
      })
    }
  )

  const events = document.querySelectorAll(".events");
  events.forEach(event => {
    event.querySelectorAll(".team1").length <=  0 ? event.classList.add("no-show") : null;
  })

  const shareBtns = document.querySelectorAll("#upcoming-events .share-btn");
  shareBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
      event.preventDefault()
      query = {title: event.currentTarget.dataset.title, url: window.location.origin+event.currentTarget.dataset.url}
      
      if (navigator.share){
        navigator.share({...query})
      }
    })
  })
})