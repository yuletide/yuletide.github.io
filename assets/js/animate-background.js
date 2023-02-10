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
// none of these seem to work in 2023
// total page height is about 1200px
// smaller viewport = more scroll distance = smaller increment on scroll to end up at the same color at max scroll
let scale = 1600 - document.body.offsetHeight; //document.documentElement.scrollHeight;
// const height = Math.max(document.body.getBoundingClientRect().height, document.documentElement.getBoundingClientRect().height)

// console.log(scale);
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
  if (window.scrollY || window.pageYOffset){
    console.log("scrolled");
    setColor();
  }
  
});


window.addEventListener('scroll', () => {
  setColor();
})

function setColor(sy){
  const y = (window.scrollY || window.pageYOffset) / scale;
  console.log('setColor', y, body.style.background)
  const color = chroma.mix(colorA, colorB, y).css();
  console.log(y, color);
  body.style.backgroundColor = color;
  // const y = 1 + (window.scrollY || window.pageYOffset) / scale;
  // const yb = y*0.9;
  // console.log("scroll", window.scrollY, y)
  // const [r, g, b] = [red, green/y, blue/yb].map(Math.round);
  // body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // console.log(`rgb(${r}, ${g}, ${b})`);
}