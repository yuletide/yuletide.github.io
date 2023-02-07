const solarGreen = [0, 43, 54];
const [red, green, blue] = solarGreen;
const darkBlue = [0, 32, 44]
const body = document.querySelector('body')
const scale = 800;

window.addEventListener('scroll', () => {
  const y = (window.scrollY || window.pageYOffset) / scale;
  const color = chroma.mix(solarGreen, darkBlue, y).css();
  console.log(y, color);
  body.style.backgroundColor = color;
  // const y = 1 + (window.scrollY || window.pageYOffset) / scale;
  // const yb = y*0.9;
  // console.log("scroll", window.scrollY, y)
  // const [r, g, b] = [red, green/y, blue/yb].map(Math.round);
  // body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // console.log(`rgb(${r}, ${g}, ${b})`);
})