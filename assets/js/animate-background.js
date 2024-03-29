// TODO: https://css-tricks.com/getting-javascript-to-talk-to-css-and-sass/ 
const body = document.querySelector('body')
const solarGreenDark = [0, 43, 54];
const solarMono3 = "#fdf6e3";
const solarMono2 = "#93a1a1";
const solarMono1 = "#93a1a1";
const darkBlue = [0, 32, 44];
const solarMix1 = "#c8ccc2";
const solarMix2 = "#4683ab";
const solarMix3 = "#04313c";
let scale;

console.log(scale);
let colorA, colorB;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // console.log("dark mode")
  colorA = solarGreenDark;
  colorB = darkBlue;
  // dark mode
} else {
  // console.log("light mode")
  colorA = solarMono3;
  colorB = solarMix1;

}
// minima does not swap themes automatically, only on page load
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//   const newColorScheme = event.matches ? "dark" : "light";
//   console.log("dark")
// });

window.addEventListener('load', (event) => {
  // const height = Math.max(document.body.getBoundingClientRect().height, document.documentElement.getBoundingClientRect().height)
  scale = document.body.scrollHeight - window.innerHeight;
  if (window.scrollY || window.pageYOffset){
    // console.log("scrolled");
    setColor();
  }
  
});


window.addEventListener('scroll', () => {
  setColor();

})

function setColor(sy){
  // y should scale from 0 to scale
  const y = (window.scrollY || window.pageYOffset) / scale;
  // console.log('setColor', y, body.style.background)
  const color = chroma.mix(colorA, colorB, y).css();
  // console.log(y, color);
  body.style.backgroundColor = color;
}