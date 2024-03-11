// on utilise import pour récupérer les données du fichier json
// cette ligne doit être utilisée à l'extérieur des évènements
import slides from '/data/slides.json' assert { type: 'json' };

// au chargement de la page
window.addEventListener("load", (event) => {
	// on initialise les constantes
	const arrowLeft = document.querySelector(".arrow_left")
	const arrowRight = document.querySelector(".arrow_right")
	const dots = document.querySelector(".dots")
	const img = document.querySelector(".banner-img")
	const p = document.querySelector(".p")
	let etape = 0;


	// on appelle les fonctions. on passe en paramètre les éléments que l'on va manipuler à l'intérieur des fonctions
	// permet d'afficher les points dans la galerie
	displayDots(slides, etape, dots);
	// permet de gérer le clique du bouton next
	next(arrowRight, slides,  p, "next", img, etape);
	// permet de gérer le clique du bouton prev
	prev(arrowLeft, slides, p,  "prev", img, etape);
});

