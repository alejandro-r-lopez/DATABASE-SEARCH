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

window.addEventListener('load', async () => {
    const beanies = await getBeanieBabies();

    beanieBabies = beanies;

    renderBeanieBabies();

    const zodiac = await getBeanieZodiac();
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
