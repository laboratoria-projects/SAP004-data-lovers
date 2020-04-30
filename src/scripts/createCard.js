import { cardsBox } from './selectors.js';

const createCharacter = (character) => `
<li class="cards__list__character">
  <figure class="front-card">
    <img src="${character.image}" class="cards__list__image"/>
    <figcaption>${character.name}</figcaption>
  </figure>
  <section class="back-card">
    <p>${character.species}</p>
    <p>${character.status}</p>
    <p>${character.gender}</p>
    <p>${character.type}</p>
    <p>${character.origin.name}</p>
    <p>${character.location.name}</p>
    <p>${character.episode.length}</p>
  <section>
</li>
`;

function buildHTML(dataCharacter) {
  let html = '';
  for (let i of dataCharacter) {
    html += createCharacter(i);
  }
  cardsBox.innerHTML = html;
}

export default buildHTML;
