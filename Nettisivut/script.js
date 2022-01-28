const preloader = document.querySelector('.preloader');
const main = document.querySelector('.main');

function discord(){window.open("https://discord.gg/jWFFZudvpW");}
function fivejoin(){window.open("fivem://connect/cfx.re/join/vmbyze");}

window.onload = () => {
    console.log("Ladattu!")
    main.style.display = "block";
    preloader.style.display = "none";
}