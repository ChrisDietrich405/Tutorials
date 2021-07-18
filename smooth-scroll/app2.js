const date = document.querySelector(".date")
date.innerHTML = new Date().getFullYear

const navToggle = document.querySelector("nav-toggle")
const linksContainer = document.querySelector("links-container")
const links = document.querySelector("links")

navToggle.addEventListener("click", function() {
    const linksHeight = links.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 50
    }
})
const navbar = document.querySelector(".navbar")
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if(scrollHeight > navHeight) {
        navbar.classList.add("fixed-navbar") 
    } else {
        navbar.classList.remove("fixed-navbar")
    }

    if(scrollHeight > 500) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }
})

const scrollLinks = document.querySelectorAll(".scroll-links")
scrollLinks.forEach(link => {
    link.addEventListener("click", (e) {
        e.preventDefault()

        const sectionName = e.currentTarget.getAttribute("href").slice(1)
        const sectionElement = getElementById(sectionName)
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const isNavFixed = navbar.classList.contains("fixed-nav")

        let position = sectionElement.offset - navHeight
    
        if(!isNavFixed) {
            position = position - navHeight
        } 
        if(navHeight > 90) {
            position = position + containerHeight
        }

        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0
    })
})



















