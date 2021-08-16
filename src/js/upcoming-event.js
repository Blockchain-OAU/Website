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
})