const btn = document.querySelectorAll('.btn');
const logo = document.querySelector('.logo');
const cart = document.querySelector('.cart');


cart.addEventListener('click', () => {
    menu_shop.classList.toggle('active')
    console.log('yes');
});

/*----------------------------------*/
// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) { //----> si on scroll la navbar apparait en fixed.
   navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content h3", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".nav-list", { opacity: 0, duration: 1, delay: 2.7, y: 50 });
gsap.from(".category", { opacity: 0, duration: 1, delay: 3, x: -50 });
gsap.from("footer", { opacity: 0, duration: 1, delay: 3.2, y: 50 });
//---------------------------------------------------------------------------------------//
const product = document.querySelector('.product')

const teddies = fetch('http://localhost:3000/api/teddies')
  .then((res) => {
   // if (!res.ok){ --- renvoie un message d'erreur dans la console 
      // throw Error("ERROR")
    }
    console.log(res)
    return res.json()
  //})

   .then((data) => {
    console.log(data)
  
    })

   
  .catch((error) => {
      alert("Error")
    })

//----------------------------------------------------------------------------//
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);