const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "<p>Impressions tous formats</p><span>en boutique et en ligne</span>"

    },
    {
        "image": "slide2.jpg",
        "tagLine": "<p>Tirages haute définition grand format</p><span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "<p>Grand choix de couleurs</p><span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "<p>Autocollants</p><span>avec découpe laser sur mesure</span>"
    }
]

//slide en cours
let currentSlide = 0;

//on recup les flèches
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById('arrow_right');

//nombre de slides
const nbSlides = slides.length;

//on ajoute les bullet point
const divDots = document.getElementById("dots");
for (let i = 0; i < nbSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i == 0) {
        dot.classList.add('dot_selected');
    }
    divDots.appendChild(dot);
}

//on recup tous les dots
const dots = document.getElementsByClassName('dot');
//on recup le p et span du banner
const bannerP = document.getElementById('banner p');
const bannerSpan = document.getElementById("banner span");



// Ajout des événements de clic fleche gauche
arrowLeft.addEventListener("click", function () {

    //on supprime la class du dot selectionné précédent
    dots[currentSlide].classList.remove('dot_selected');

    //on met a jour le slide en cours
    if (currentSlide == 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }

    //on ajoute la class du dot selectionné
    dots[currentSlide].classList.add('dot_selected');

    //on modifie la source de l'image
    document.getElementById('banner-img').src = "assets/IMAGES/Diaporama/" + slides[currentSlide].image;


    //on créer un div temporaire qui sera égale au tagLine du tableau selon le slide en cours
    const divTemp = document.createElement('div');
    divTemp.innerHTML = slides[currentSlide].tagLine;

    //on peut maintenant associer le contenu du p et span du div temporaire aux notres
    bannerP.innerHTML = divTemp.querySelector('p').textContent;
    bannerSpan.innerHTML = divTemp.querySelector('span').textContent;

});

// Ajout des événements de clic fleche droite
arrowRight.addEventListener("click", function () {

    //on supprime la class du dot selectionné précédent
    dots[currentSlide].classList.remove('dot_selected');

    //on met a jour le slide en cours
    if (currentSlide == slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    //on ajoute la class du dot selectionné
    dots[currentSlide].classList.add('dot_selected');

    //on modifie la source de l'image
    document.getElementById('banner-img').src = "assets/IMAGES/Diaporama/" + slides[currentSlide].image;



    //on créer un div temporaire qui sera égale au tagLine du tableau selon le slide en cours
    const divTemp = document.createElement('div');
    divTemp.innerHTML = slides[currentSlide].tagLine;

    //on peut maintenant associer le contenu du p et span du div temporaire aux notres
    bannerP.innerHTML = divTemp.querySelector('p').textContent;
    bannerSpan.innerHTML = divTemp.querySelector('span').textContent;
});




