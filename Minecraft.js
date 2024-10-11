const gridContainer = document.getElementById('grid-container');
let axeMode = false; 
let shovelMode = false; 
let pickaxeMode = false; 
let grassCount = 0; 
let groundCount = 0; 
let dirtCount = 0; 
let selectedBlock = null; // משתנה לבחירת בלוק

function createGrid() {
    for (let row = 0; row < 12; row++) {
        for (let col = 0; col < 29; col++) {
            const div = document.createElement('div');
            if (row < 7) {
                div.classList.add('sky'); 
            } else if (row === 7) {
                div.classList.add('grass'); 
            } else if (row < 11) {
                div.classList.add('ground'); 
            } else {
                div.classList.add('dirt'); 
            }
            gridContainer.appendChild(div);
        }
    }
}

function updateInventory() {
    document.getElementById('grassCount').innerText = grassCount; 
    document.getElementById('groundCount').innerText = groundCount; 
    document.getElementById('dirtCount').innerText = dirtCount; 
}

// כלי
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

// בחירת סוג בלוק מהאינבנטורי
document.getElementById('inventory').addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('grass') && grassCount > 0) {
        selectedBlock = 'grass'; 
    } else if (target.classList.contains('ground') && groundCount > 0) {
        selectedBlock = 'ground'; 
    } else if (target.classList.contains('dirt') && dirtCount > 0) {
        selectedBlock = 'dirt'; 
    }
});

// הנחת בלוק על הגריד
gridContainer.addEventListener('click', (event) => {
    const target = event.target;

    // הנחת הבלוק אם נבחרה משבצת תכלת
    if (target.classList.contains('sky') && selectedBlock) {
        target.classList.remove('sky');
        target.classList.add(selectedBlock); // הוספת הבלוק שנבחר
        if (selectedBlock === 'grass') {
            grassCount--; 
        } else if (selectedBlock === 'ground') {
            groundCount--; 
        } else if (selectedBlock === 'dirt') {
            dirtCount--; 
        }
        updateInventory(); 
    }






    

    // הסרת משבצות קודמות
    if (pickaxeMode && (target.classList.contains('ground') || target.classList.contains('grass'))) {
        if (target.classList.contains('ground')) {
            groundCount++; 
        } else if (target.classList.contains('grass')) {
            grassCount++; 
        }
        target.classList.remove('ground', 'grass'); 
        target.classList.add('sky'); 
        updateInventory(); 
    } else if (shovelMode && target.classList.contains('dirt')) {
        target.classList.remove('dirt'); 
        target.classList.add('sky'); 
        dirtCount++; 
        updateInventory(); 
    }
});







document.getElementById('reset').addEventListener('click', () => {
    axeMode = false; 
    shovelMode = false; 
    pickaxeMode = false; 
    grassCount = 0; 
    groundCount = 0; 
    dirtCount = 0; 

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild); 
    }

    createGrid(); 
    updateInventory(); 
});

// יצירת הגריד והעדכון הראשוני
createGrid(); 
updateInventory(); 
