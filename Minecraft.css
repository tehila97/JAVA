const gridContainer = document.getElementById('grid-container');
let axeMode = false;
let shovelMode = false;
let pickaxeMode = false;
let score = 0;
let greenCount = 0;
let grayCount = 0; 

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

function createTree(x, y) {
    gridContainer.children[y * 29 + x].classList.add('brown');
    gridContainer.children[(y - 1) * 29 + x].classList.add('brown');
    gridContainer.children[(y - 1) * 29 + (x - 1)].classList.add('green');
    gridContainer.children[(y - 1) * 29 + (x + 1)].classList.add('green');
    gridContainer.children[(y - 1) * 29 + x].classList.add('green');
    gridContainer.children[(y - 2) * 29 + x].classList.add('green');
}

function removeTree(x, y) {
    gridContainer.children[y * 29 + x].classList.remove('brown');
    gridContainer.children[(y - 1) * 29 + x].classList.remove('brown');
    gridContainer.children[(y - 1) * 29 + (x - 1)].classList.remove('green');
    gridContainer.children[(y - 1) * 29 + (x + 1)].classList.remove('green');
    gridContainer.children[8i(y - 1) * 29 + x].classList.remove('green');
    gridContainer.children[(y - 2) * 29 + x].classList.remove('green');

    gridContainer.children[y * 29 + x].classList.add('sky');
    gridContainer.children[(y - 1) * 29 + x].classList.add('sky');
    gridContainer.children[(y - 1) * 29 + (x - 1)].classList.add('sky');
    gridContainer.children[(y - 1) * 29 + (x + 1)].classList.add('sky');
    gridContainer.children[(y - 2) * 29 + x].classList.add('sky');
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

    if (pickaxeMode) {
        if (target.classList.contains('green')) {
            target.classList.remove('green');
            target.classList.add('dark-gray');
            // score++;
            // grayCount++;
            // document.getElementById('score').innerText = `Total score: ${score}, Gray squares: ${grayCount}, Green squares: ${greenCount}`;
        }
    } else if (axeMode) {
        if (target.classList.contains('brown') || target.classList.contains('green')) {
            const index = Array.from(gridContainer.children).indexOf(target);
            const x = index % 29;
            const y = Math.floor(index / 29);
            removeTree(x, y);
            greenCount--; 
        }
    } else if (shovelMode) {
        if (target.classList.contains('green')) {
            target.classList.remove('green');
            target.classList.add('gray');
            greenCount--;
            grayCount++;
            document.getElementById('score').innerText = `Total score: ${score}, Gray squares: ${grayCount}, Green squares: ${greenCount}`;
        }
    }
});

createGrid();
createTree(15, 8);

document.getElementById('reset').addEventListener('click', () => {
    axeMode = false;
    shovelMode = false;
    pickaxeMode = false;
    score = 0;
    greenCount = 0;
    grayCount = 0;

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGrid();
    createTree(15, 8);
    
    document.getElementById('score').innerText = `Total score: ${score}, Gray squares: ${grayCount}, Green squares: ${greenCount}`;
});
