const gridContainer = document.getElementById('grid-container');
let axeMode = false;
let shovelMode = false;
let pickaxeMode = false;
let grassCount = 0; // ספירת דשא
let groundCount = 0; // ספירת קרקע
let dirtCount = 0; // ספירת Dirt

function createGrid() {
    for (let row = 0; row < 12; row++) {
        for (let col = 0; col < 29; col++) {
            const div = document.createElement('div');
            if (row < 7) {
                div.classList.add('sky'); // צבע השמים
            } else if (row === 7) {
                div.classList.add('grass'); // צבע דשא
                grassCount++; // ספירה לדשא
            } else if (row < 11) {
                div.classList.add('ground'); // צבע קרקע
                groundCount++; // ספירה לקרקע
            } else {
                div.classList.add('dirt'); // צבע Dirt (אפור)
                dirtCount++; // ספירה ל-Dirt
            }
            gridContainer.appendChild(div);
        }
    }
}

function updateInventory() {
    document.getElementById('grassCount').innerText = grassCount; // עדכון ספירת דשא
    document.getElementById('groundCount').innerText = groundCount; // עדכון ספירת קרקע
    document.getElementById('dirtCount').innerText = dirtCount; // עדכון ספירת Dirt
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

    if (pickaxeMode && (target.classList.contains('ground') || target.classList.contains('grass'))) {
        // הפוך Ground או Grass ל-Sky
        if (target.classList.contains('ground')) {
            groundCount--; // הפחתה מהספירה
        } else if (target.classList.contains('grass')) {
            grassCount--; // הפחתה מהספירה
        }
        target.classList.remove('ground', 'grass');
        target.classList.add('sky'); // שינוי לצבע שמיים
        dirtCount++; // הוספה לספירת Dirt
        updateInventory();
    } else if (shovelMode && target.classList.contains('dirt')) {
        target.classList.remove('dirt');
        target.classList.add('sky'); // שינוי Dirt לשמיים
        dirtCount--; // הפחתה מהספירה
        updateInventory();
    }
});

document.getElementById('reset').addEventListener('click', () => {
    axeMode = false;
    shovelMode = false;
    pickaxeMode = false;
    grassCount = 0;
    groundCount = 0;
    dirtCount = 0; // איפוס ספירת Dirt

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGrid();
    updateInventory();
});

createGrid();
updateInventory();
