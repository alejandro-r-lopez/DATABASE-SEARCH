/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

import { getBeanieBabies, getBeanieZodiac } from './fetch-utils.js';

const choiceInput = document.querySelector('.choice-input');
const submitButton = document.querySelector('.submit-button');
const beanieBabiesSection = document.querySelector('.beanie-babies-section');
const form = document.querySelector('form');

let beanieBabies = [];

window.addEventListener('load', async () => {
    const beanies = await getBeanieBabies();

    beanieBabies = beanies;

    renderBeanieBabies();

    const zodiacs = await getBeanieZodiac();

    for (let zodiac of zodiacs) {
        const choice = document.createElement('option');

        choice.value = zodiac.name;
        choice.textContent = zodiac.name;

        choiceInput.append(choice);
    }
});

function renderBeanieBabies() {
    beanieBabiesSection.textContent = '';

    for (let beanie of beanieBabies) {
        const beanieBabyEl = document.createElement('div');
        const beanieBabyTitle = document.createElement('h3');
        const beanieBabyInfo = document.createElement('p');
        const beanieBabyImage = document.createElement('img');
        beanieBabyTitle.textContent = `${beanie.title}`;
        beanieBabyInfo.textContent = `My name is ${beanie.title} and my  birthday is ${beanie.birthday} which makes me a ${beanie.astroSign}!`;

        beanieBabyImage.src = beanie.image;

        beanieBabyEl.classList.add('beanie-style');
        beanieBabyImage.classList.add('beanie-image');

        beanieBabyEl.append(beanieBabyTitle, beanieBabyInfo, beanieBabyImage);

        beanieBabiesSection.append(beanieBabyEl);
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const beaniesZodiac = await getBeanieBabies(choiceInput.value);

    beanieBabies = beaniesZodiac;

    renderBeanieBabies();
});
