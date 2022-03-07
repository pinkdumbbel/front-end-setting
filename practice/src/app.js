import './app.css';
import nyancat from './nyancat.png';

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `
        <img src= ${nyancat} />
    `;
});

console.log(process.env.NODE_ENV);
console.log(TWO);
console.log(api.domain);
