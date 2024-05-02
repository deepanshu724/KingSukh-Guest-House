let ul = document.querySelector('.hide-menu')
let i = document.querySelector(".i")
let menuopen = document.querySelector('.menu-open')
let menuclose= document.querySelector('.menu-close')

menuopen.addEventListener('click',()=>{
    menuopen.classList.add('hide')
    ul.classList.remove('hide')
    console.log('hello')
})
menuclose.addEventListener('click',()=>{
    ul.classList.add('hide')
    menuopen.classList.remove('hide')
})

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize index for tracking current slide
let currentIndex = 0;

// Array of image URLs
const images = [
  'service.jpg',
  'room1.jpg',
  'small.jpg',
  '1.jpg',
  'ayodhya.webp',
  'flower.jpg',
  'out.jpg',
  'mithonDam.webp',

  // Add more image URLs as needed
];

// Function to display current slide
function showSlide() {
  carousel.querySelector('.carousel-inner').innerHTML = `<img src="${images[currentIndex]}" class="w-full h-72  object-contain" alt="Slide">`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide();
});


showSlide();


//animation 
var tl=gsap.timeline()
tl.from('.animation',{
    y:-50,
    opacity:0,
    duration:0.6,
    delay:0.2,
    stagger:0.2,
})
tl.from('.anima',{
    y:50,
    delay:0.1,
    opacity:0,
    duration:1,
    ease: "back(5)",
    stagger:0.2,
})


const card = document.querySelectorAll('.card');
card.forEach((event)=>{
    event.addEventListener('mouseenter', () => {
        // Animate the card on hover 
        gsap.to(event, { scale: 1.1, duration: 0.3 });
      });
    
      // Add event listener for mouseleave (hover out)
      event.addEventListener('mouseleave', () => {
        // Animate the card when the mouse leaves
        gsap.to(event, { scale: 1, duration: 0.3 });
      });
    
})

