const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
        document.body.style.background= randomBg();
    });

function randomBg() {
    const randomColor = `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
    // btn.style.background = randomColor;
    return randomColor
}
// function random() {
//     document.body.style.background= randomBg();
// }
// setInterval(random,300)
