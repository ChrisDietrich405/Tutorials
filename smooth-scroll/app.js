const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
//Date object is a JS class. this is instantiating a new object 

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {   //this is for the hamburger menu
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {  
    //if the dropdown menu is closed
    linksContainer.style.height = `${linksHeight}px`;  //collapsing the navbar when the user clicks on the hamburger
    //opening the navbar  // ADDING PX DOES WHAT?
  } else {
    linksContainer.style.height = 0;
    //closing the navbar in the responsive state
  }
  console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.querySelector(".nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () { //window is a global property of the DOM
  const scrollHeight = window.pageYOffset;  
  const navHeight = navbar.getBoundingClientRect().height;
  //the navHeight is the break point 
  if (scrollHeight > navHeight) {   //if the user scrolled more than the height of the navHeight
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link


  if (scrollHeight > 500) { //DEFAULT IS PIXELS  /the break point is 500 pixels 
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");  //querySelectorAll captures an array 
scrollLinks.forEach((link) => {   //scrollLinks is an array 
  link.addEventListener("click", (e) => {
    e.preventDefault();
    //the default behavior is to navigate to the href attribute. we want to scroll not navigate 
    // navigate to specific spot
    const sectionName = e.currentTarget.getAttribute("href").slice(1);  //removing the hashtag 
    //id a the link 
    const sectionElement = document.getElementById(sectionName);  //referring to the sections
    //referring to the variable above. id is considered a string (the attribute is a string)
    //element is the section
    //we use the id name to find the section 


    const navHeight = navbar.getBoundingClientRect().height;
    // console.log(navHeight)
    //the navHeight is 90 in the expanded view and 342 in the hamburger collapsed view
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight)
    //the containerHeight is 252 which is 90 less than the hamburger collapsed navHeight 
    const isNavFixed = navbar.classList.contains("fixed-nav");
    //DIFFERENCE BETWEEN CONTAINS AND ADD
    //add concatanates something 
    //contains returns a boolean value 
    console.log(sectionElement.offsetTop)
    let position = sectionElement.offsetTop - navHeight; //the distance of the element(section) from the top - navHeight
    console.log(position)
    //offsetTop is the difference between the top of the viewport and the top of the element
    //for example the line above about us to the top of the viewport 
    if (!isNavFixed) {  //when the navbar is fixed it's not considered part of the page (it doesn't have the navHeight)  
      position = position - navHeight   
      console.log(position) 
    }

    const isNavBarOpen = navHeight > 90 
    if (isNavBarOpen) {  //90 is the navHeight height in the expanded version
      position = position + container; 
      console.log(position)    // we have to add back on the containerHeight to scroll to the exact right position
      //in the hamburger collapsed   
    }
    //the second if statement is saying when the navbar is collapsed 

    window.scrollTo({  // scrollTo is a method
      left: 0,   //ignoring a horizontal scroll
      top: position,  
    });
    // close
    linksContainer.style.height = 0; //this makes the linksContainer div disappear while in the mobile view (responsivity)
                                     //when a user clicks a link 
  
  });
});










