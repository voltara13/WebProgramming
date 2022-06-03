const carousel = document.querySelector('.carousel_list');
const cells = carousel.querySelectorAll('.carousel_cell');

const cellCount = cells.length;

const radius = Math.round((carousel.offsetWidth / 2) / Math.tan(Math.PI / cellCount));
const theta = 360 / cellCount;

let selectedIndex = 0;
let isInsideCarousel = false;

function rotateCarousel() {
    const angle = theta * selectedIndex;
    if (isInsideCarousel)
        carousel.style.transform = 'translateZ(' + radius + 'px)' + 'rotateY(' + angle + 'deg)';
    else
        carousel.style.transform = 'translateZ(' + -radius + 'px)' + 'rotateY(' + -angle + 'deg)';

    let cellIndex;
    if (selectedIndex < 0) {
        let tempIndex = selectedIndex * -1 % cellCount;

        if (tempIndex === 0)
            cellIndex = 0
        else
            cellIndex = cellCount - (selectedIndex * -1 % cellCount);
    } else
        cellIndex = selectedIndex % cellCount;

    const cells = document.querySelectorAll('.carousel_cell');
    cells.forEach((cell, index) => {
        if(cellIndex === index) {
            if(!cell.classList.contains('selected'))
                cell.classList.add('selected');
        }
        else {
            if(cell.classList.contains('selected')) {
                cell.classList.remove('selected');
            }
        }
    });
}

function selectPrev() {
    selectedIndex--;
    rotateCarousel();
}

function selectNext() {
    selectedIndex++;
    rotateCarousel();
}

function changeCarouselType(isChecked)
{
    isInsideCarousel = isChecked;

    initCarousel();
}

function initCarousel() {
    selectedIndex = 0;

    for(let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const cellAngle = theta * i;

        if (isInsideCarousel) {
            cell.style.transform = 'rotateY(' + -cellAngle + 'deg)' + 'translateZ(' + -radius + 'px)';
        }
        else {
            cell.style.transform = 'rotateY(' + cellAngle + 'deg)' + 'translateZ(' + radius + 'px)';
        }
    }

    rotateCarousel();
}

const prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', selectPrev);

const nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', selectNext);

const checkBox = document.querySelector('input[name=carousel_type_checkbox]');
checkBox.addEventListener('change', () => changeCarouselType(checkBox.checked))

initCarousel();
