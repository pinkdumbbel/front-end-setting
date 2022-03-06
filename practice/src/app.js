import './app.css';
import nyancat from './nyancat.png';

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `
        <img src= ${nyancat} />
    `;
});
