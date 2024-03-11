

function displayDots(slides, etape, dots) {

    for (let i = 0; i < slides.length; i++){
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        if (i == etape) {
            dot.classList.add("dot_selected");
        }
    }
}
function next(arrowRight, slides, p, action, img, etape) {
   
    prevNext(arrowRight, slides, p, action, img, etape);

}

function prev(arrowLeft, slides, p, action, img, etape) {

    prevNext(arrowLeft, slides, p, action, img, etape);

}
// permet de revenir ou d'avancer dans le parcours des slides
function prevNext(element, slides, p, action, img, etape) {

    element.addEventListener('click', () => {
        const arrayDot = document.querySelectorAll('.dots .dot');
        arrayDot[etape].classList.remove("dot_selected");
        if(action == "prev") {
            etape--;
            if (etape < 0) {
                etape = slides.length - 1;
            }
        }
        else {
            etape++;
            if (etape >= slides.length) {
                etape = 0;
            }
        }

        arrayDot[etape].classList.add("dot_selected")
        p.innerHTML = slides[etape].tagLine;
        img.src = slides[etape].image;


    })
}