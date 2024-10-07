const gridContainer = document.getElementById('grid-container');
let axeMode = false;
let shovelMode = false;
let pickaxeMode = false;
let greenCount = 0;
let grayCount = 0;
let darkGrayCount = 0;

function createGrid() {
    for (let row = 0; row < 12; row++) {
        for (let col = 0; col < 29; col++) {
            const div = document.createElement('div');
            if (row < 7) {
                div.classList.add('sky');
            } else if (row < 9) {
                div.classList.add('gray');
            } else {
                div.classList.add('green');
                greenCount++;
            }
            gridContainer.appendChild(div);
        }
    }
}

function updateInventory() {
    document.getElementById('greenCount').innerText = greenCount;
    document.getElementById('grayCount').innerText = grayCount;
    document.getElementById('darkGrayCount').innerText = darkGrayCount;
}

document.getElementById('axe').addEventListener('click', () => {
    axeMode = true;
    shovelMode = false;
    pickaxeMode = false;
});

document.getElementById('shovel').addEventListener('click', () => {
    shovelMode = true;
    axeMode = false;
    pickaxeMode = false;
});

document.getElementById('pickaxe').addEventListener('click', () => {
    pickaxeMode = true;
    axeMode = false;
    shovelMode = false;
});

gridContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (pickaxeMode && target.classList.contains('green')) {
        target.classList.remove('green');
        target.classList.add('dark-gray');
        greenCount--;
        darkGrayCount++;
        updateInventory();
    } else if (shovelMode && target.classList.contains('green')) {
        target.classList.remove('green');
        target.classList.add('gray');
        greenCount--;
        grayCount++;
        updateInventory();
    }
});

document.getElementById('reset').addEventListener('click', () => {
    axeMode = false;
    shovelMode = false;
    pickaxeMode = false;
    greenCount = 0;
    grayCount = 0;
    darkGrayCount = 0;

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGrid();
    updateInventory();
});

createGrid();
updateInventory();
