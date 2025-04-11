const bserver = new IntersectionObserver ((entries) => { 
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
             } else {
                 entry.target.classList.remove("show");
              }
        });
    });

const maxElements = document.querySelectorAll(".max");
maxElements.forEach((el) => bserver.observe(el));

const max1Elements = document.querySelectorAll(".max1");
max1Elements.forEach((el) => bserver.observe(el));

const observer = new IntersectionObserver ((entries) => { 
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
         } else {
             entry.target.classList.remove("show");
          }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hidden1Elements = document.querySelectorAll(".hidden1");
hidden1Elements.forEach((el) => observer.observe(el));



const nav = document.querySelector(".topnav");
const navPos = nav.offsetTop;

// Add the "sticky" class to the navigation element
nav.classList.add("sticky");

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= navPos) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
  const trigger = content.getBoundingClientRect().top + window.pageYOffset;
  const windowHeight = window.innerHeight;
  if (trigger < windowHeight) {
    content.classList.add('roll');
  }
});

window.addEventListener('scroll', () => {
    const element = document.querySelector('.bounce');
    const position = element.getBoundingClientRect();
  
    // If the top of the element is within the viewport
    if (position.top >= 0 && position.top <= window.innerHeight) {
      element.classList.add('animated');
    } else {
      element.classList.remove('animated');
    }
  });

  window.addEventListener('scroll', () => {
    const element = document.querySelector('.bounce');
    const position = element.getBoundingClientRect();
  
    // If the top of the element is within the viewport
    if (position.top >= 0 && position.top <= window.innerHeight) {
      element.classList.add('animated');
    } else {
      element.classList.remove('animated');
    }
  });

    const images = document.querySelectorAll('.image-wrapper');

    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        if (!item.classList.contains('active')) {
          galleryItems.forEach(otherItem => {
            if (otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
            }
          });
          item.classList.add('active');
        }
      });
    });
    
    function openNav() {
      var x = document.querySelector(".sidenav");
      if (x.style.width === "200px") {
        x.style.width = "0";
        document.querySelector(".main").style.marginRight = "0";
      } else {
        x.style.width = "200px";
        document.querySelector(".main").style.marginRight = "200px";
      }
    }
    
