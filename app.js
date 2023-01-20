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

let beanieBabies = [];
let zodiacSigns = [];

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
        const beanieBabyInfo = document.createElement('p');
        const beanieBabyImage = document.createElement('img');
        beanieBabyInfo.textContent = `${beanie.title}`;
        beanieBabyImage.src = beanie.image;

        beanieBabyEl.classList.add('beanie-style');
        beanieBabyImage.classList.add('beanie-image');

        beanieBabyEl.append(beanieBabyInfo, beanieBabyImage);

        beanieBabiesSection.append(beanieBabyEl);
    }
}

submitButton.addEventListener('click', async () => {
    const beaniesZodiac = await getBeanieBabies(choiceInput.value);

    beanieBabies = beaniesZodiac;

    renderBeanieBabies();
});
