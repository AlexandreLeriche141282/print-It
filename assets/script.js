const slides = [
	{
		"image":"/assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"/assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"/assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"/assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]




const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const dots = document.querySelector(".dots")
const img = document.querySelector(".banner-img")
const p = document.querySelector(".p")
let etape = 0;





function displayDots() {
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == etape) {
			dot.classList.add("dot_selected");
		}
	}
}
displayDots();

function next() {
	arrowRight.addEventListener('click', () => {
		const arrayDot = document.querySelectorAll('.dots .dot')
		arrayDot[etape].classList.remove("dot_selected")
		etape++;
		if (etape >= slides.length) {
			etape = 0;
		}
		arrayDot[etape].classList.add("dot_selected")
		p.innerHTML = slides[etape].tagLine;	
		img.src = slides[etape].image;
	})
	
}
next()



function prev() {
	arrowLeft.addEventListener('click', () => {
		const arrayDot = document.querySelectorAll('.dots .dot')
		arrayDot[etape].classList.remove("dot_selected")
		etape--;
		if (etape < 0) {
			etape = slides.length - 1;
		}
		arrayDot[etape].classList.add("dot_selected")
		p.innerHTML = slides[etape].tagLine;	
		img.src = slides[etape].image;
	})
	
}
prev()

