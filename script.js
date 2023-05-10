const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "<p>Impressions tous formats <span>en boutique et en ligne</span></p>"

    },
    {
        "image": "slide2.jpg",
        "tagLine": "<p>Tirages haute définition grand format<span>pour vos bureaux et events</span></p >"
    },
    {
        " image ": " slide3.jpg ",
        " tagLine ": "<p>Grand choix de couleurs<span>de CMJN aux pantones</span></p > "
    },
    {
        " image ": " slide4.jpg ",
        " tagLine ": "<p>Autocollants<span>avec découpe laser sur mesure</span></p > "
    }
]

const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')

btnPrev.addEventListener('click', () => {
    console.log('click btn précédent')
})

btnNext.addEventListener('click', () => {
    console.log('click btn suivant')
})
const dots = document.querySelector('.dots')
const dot = document.createElement('span')
dot.setAttribute('class', 'dot')
dots.appendChild(dot)

let slide = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < slides.length; i++) {
    console.log(slides[i]);
}

