/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

import { getBeanieBabies } from './fetch-utils.js';

const choiceInput = document.querySelector('.choice-input');
const submitButton = document.querySelector('.submit-button');
const beanieBabiesSection = document.querySelector('.beanie-babies-section');
console.log(beanieBabiesSection);
let beanieBabies = [];

window.addEventListener('load', async () => {
    const beanies = await getBeanieBabies();

    beanieBabies = beanies;

    for (let beanie of beanieBabies) {
        const beanieBabyEl = document.createElement('div');
        const beanieBabyInfo = document.createElement('p');
        beanieBabyInfo.textContent = `My name is ${beanie.title}`;

        beanieBabyEl.append(beanieBabyInfo);

        beanieBabiesSection.append(beanieBabyEl);

        return beanieBabiesSection;
    }
});
