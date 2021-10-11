
const data =  {
    author: "By Lorem Himself",
    title: "Lorem is just a dumb text",
    image: "/assets/img/lorem.png",
    content:
        `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.

        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
        'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        `,
    date: 'August 5,2021'
}

// creating the article elements
const container = document.querySelector('.article')
let author = document.createElement('h4')
let title = document.createElement('h2')
let img = document.createElement('img')
let article = document.createElement('p')
let datePublished = document.createElement('h4')
let authorInfo = document.createElement('div')
let socialContainer = document.createElement('div')
let shareContainer = document.createElement('div')
let shareIcon = document.createElement('img')
let shareText = document.createElement('p')
let shareTwitter = document.createElement('img')
let shareWhatsapp = document.createElement('img')
let shareLinkedin = document.createElement('img')
let aTwitter = document.createElement('a')
let aWhatsapp = document.createElement('a')
let aLinkedin = document.createElement('a')

// Adding a class name for styling created elements
author.classList.add('article-author')
title.classList.add('article-title')
img.classList.add('article-img')
article.classList.add('article-content')
datePublished.classList.add('article-date')
authorInfo.classList.add('author-info')
shareContainer.classList.add('share-container')
socialContainer.classList.add('social-container')
shareText.classList.add('share-text')


//appending the article elements to their corresponding data property
author.innerHTML = data.author;
title.innerHTML = data.title;
img.src = data.image;
article.innerHTML = data.content;
datePublished.innerHTML = data.date;


//adding sharing contents
shareIcon.src = '/assets/img/share.svg'
shareText.innerHTML = 'share'
shareTwitter.src = '/assets/img/twitter_logo.svg'
shareWhatsapp.src = '/assets/img/whatsapp_logo.svg'
shareLinkedin.src = '/assets/img/linkedin_logo.svg'
//Twitter share
aTwitter.appendChild(shareTwitter)
aTwitter.href = `https://twitter.com/share?url=pageUrl&text=Check this out!`
//Whatsapp share
aWhatsapp.appendChild(shareWhatsapp)
aWhatsapp.href = `whatsapp://send?text=pageUrl Check this out!`
aLinkedin.appendChild(shareLinkedin)

//enabling the linkedin share with a dummy link
let postUrl = `www.google.com`
aLinkedin.href = `http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}`


// const appendChild = (...item) => {
//     return container.appendChild(item)
// }

// appending each element to the article container as they would appear in the DOM.
authorInfo.appendChild(author)
authorInfo.appendChild(datePublished)
shareContainer.appendChild(shareIcon)
shareContainer.appendChild(shareText)
socialContainer.appendChild(shareContainer)
socialContainer.appendChild(aTwitter)
socialContainer.appendChild(aWhatsapp)
socialContainer.appendChild(aLinkedin)
container.appendChild(title)
container.appendChild(authorInfo)
container.appendChild(socialContainer)
container.appendChild(img)
container.appendChild(article)
// appendChild(title,author,datePublished,img,article)


// code for enabling the share button
const shareData = {
    title: data.title,
    text: 'lorem',
    url: 'postUrl',
  } 

shareContainer.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      console.log('Post Shared successfully')
    } catch(err) {
      console.log('Error: ' + err)
    }
  })