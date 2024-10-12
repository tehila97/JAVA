const gridContainer = document.getElementById('grid-container');
let axeMode = false; 
let shovelMode = false; 
let pickaxeMode = false; 

let grassMode = false; 
let groundMode = false; 
let dirtMode = false; 
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

function updateInventory(gameStatus) {

    if(gameStatus === 'newGame'){
        document.getElementById('grassCount').axeMode = false; 
        document.getElementById('grassCount').shovelMode = false; 
        document.getElementById('grassCount').pickaxeMode = false; 

        document.getElementById('grassCount').grassMode = false; 
        document.getElementById('grassCount').groundMode = false; 
        document.getElementById('grassCount').dirtMode = false; 
        document.getElementById('grassCount').innerText = 0; 
        document.getElementById('groundCount').innerText = 0; 
        document.getElementById('dirtCount').innerText = 0; 
    }
    else{

        if (gameStatus === 'grass') {
            document.getElementById('grassCount').innerText = grassCount; 
        } else if (gameStatus === 'ground') {
            document.getElementById('groundCount').innerText = groundCount; 
        } else if (gameStatus === 'dirt') {
            document.getElementById('dirtCount').innerText = dirtCount;  
        }
    }
}

// Tools:
document.getElementById('axe').addEventListener('click', () => {
    axeMode = true; 
    shovelMode = false; 
    pickaxeMode = false; 
});

document.getElementById('shovel').addEventListener('click', () => {
    debugger
    shovelMode = true; 
    axeMode = false; 
    pickaxeMode = false; 
});

document.getElementById('pickaxe').addEventListener('click', () => {
    pickaxeMode = true; 
    axeMode = false; 
    shovelMode = false; 
});

document.getElementById('grass_id').addEventListener('click', () => {
    debugger
    grassMode = true; 
    groundMode = false; 
    dirtMode = false; 
});

document.getElementById('ground_id').addEventListener('click', () => {
    debugger
    grassMode = false; 
    groundMode = true; 
    dirtMode = false; 
});

document.getElementById('dirt_id').addEventListener('click', () => {
    grassMode = false; 
    groundMode = false; 
    dirtMode = true; 
});






// בחירת סוג בלוק מהאינבנטורי
document.getElementById('inventory').addEventListener('click', (event) => {
    debugger
    const target = event.target;
    if (target.classList.contains('grass')) {
        selectedBlock = 'grass'; 
    } else if (target.classList.contains('ground')) {
        selectedBlock = 'ground'; 
    } else if (target.classList.contains('dirt')) {
        selectedBlock = 'dirt'; 
    }
});

// Selecting a block from the grid:
gridContainer.addEventListener('click', (event) => {
    debugger
    const target = event.target;

    // if (target.classList.contains('grass')) {
    //     selectedBlock = 'grass'; 
    // } else if (target.classList.contains('ground')) {
    //     selectedBlock = 'ground'; 
    // } else if (target.classList.contains('dirt')) {
    //     selectedBlock = 'dirt'; 
    // }


    //1. Decide if the block should be removed or not:
    if (!axeMode && !shovelMode && !pickaxeMode) {

        //do nothing
        // Code to execute if all variables are false
        //console.log('elas shamen')
    }
    else{
        removeAndAddBlock(target)
    }

    
    //updateInventory(selectedBlock)
    //removeBlock()
});

function removeAndAddBlock(target){

    debugger
    if (target.classList.contains('sky')) {

        if (grassMode && grassCount > 0) {
            target.classList.remove('sky');
            target.classList.add(selectedBlock); 
            grassCount--; 
        } else if (groundMode && groundCount > 0) {
            target.classList.remove('sky');
            target.classList.add(selectedBlock); 
            groundCount--; 
        } else if (dirtMode && dirtCount > 0) {
            target.classList.remove('sky');
            target.classList.add(selectedBlock); 
            dirtCount--; 
        }
    }
    else{
        if (pickaxeMode && (target.classList.contains('ground') || target.classList.contains('grass'))) {
            if (target.classList.contains('ground')) {
                groundCount++; 
                selectedBlock = 'ground'
            } else if (target.classList.contains('grass')) {
                grassCount++; 
                selectedBlock = 'grass'
            }
            target.classList.remove('ground', 'grass'); 
            target.classList.add('sky'); 
            //updateInventory(); 
        } else if (shovelMode && target.classList.contains('dirt')) {
            target.classList.remove('dirt'); 
            target.classList.add('sky'); 
            dirtCount++; 
            selectedBlock = 'dirt'
            //updateInventory(); 
        }
    }

   

    updateInventory(selectedBlock)
}

function resetGame(){
    axeMode = false; 
    shovelMode = false; 
    pickaxeMode = false; 
    grassCount = 0; 
    groundCount = 0; 
    dirtCount = 0; 

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild); 
    }
}

document.getElementById('reset').addEventListener('click', () => {
 
    //1. Reset all the variables to their initial state:
    resetGame();

    //2.  Reset the variables to zero:
    updateInventory("newGame"); 

    //3. Reset the grid to start a new game:
    createGrid(); 
});

// Start a new game:
createGrid(); 
updateInventory("newGame"); 
const gridContainer = document.getElementById('grid-container');
let axeMode = false; 
let shovelMode = false; 
let pickaxeMode = false; 

let grassMode = false; 
let groundMode = false; 
let dirtMode = false; 
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

function updateInventory(gameStatus) {

    if(gameStatus === 'newGame'){
        document.getElementById('grassCount').axeMode = false; 
        document.getElementById('grassCount').shovelMode = false; 
        document.getElementById('grassCount').pickaxeMode = false; 

        document.getElementById('grassCount').grassMode = false; 
        document.getElementById('grassCount').groundMode = false; 
        document.getElementById('grassCount').dirtMode = false; 
        document.getElementById('grassCount').innerText = 0; 
        document.getElementById('groundCount').innerText = 0; 
        document.getElementById('dirtCount').innerText = 0; 
    }
    else{

        if (gameStatus === 'grass') {
            document.getElementById('grassCount').innerText = grassCount; 
        } else if (gameStatus === 'ground') {
            document.getElementById('groundCount').innerText = groundCount; 
        } else if (gameStatus === 'dirt') {
            document.getElementById('dirtCount').innerText = dirtCount;  
        }
    }
}

// Tools:
document.getElementById('axe').addEventListener('click', () => {
    axeMode = true; 
    shovelMode = false; 
    pickaxeMode = false; 
});

document.getElementById('shovel').addEventListener('click', () => {
    debugger
    shovelMode = true; 
    axeMode = false; 
    pickaxeMode = false; 
});

document.getElementById('pickaxe').addEventListener('click', () => {
    pickaxeMode = true; 
    axeMode = false; 
    shovelMode = false; 
});

document.getElementById('grass_id').addEventListener('click', () => {
    debugger
    grassMode = true; 
    groundMode = false; 
    dirtMode = false; 
});

document.getElementById('ground_id').addEventListener('click', () => {
    debugger
    grassMode = false; 
    groundMode = true; 
    dirtMode = false; 
});

document.getElementById('dirt_id').addEventListener('click', () => {
    grassMode = false; 
    groundMode = false; 
    dirtMode = true; 
});






// בחירת סוג בלוק מהאינבנטורי
document.getElementById('inventory').addEventListener('click', (event) => {
    debugger
    const target = event.target;
    if (target.classList.contains('grass')) {
        selectedBlock = 'grass'; 
    } else if (target.classList.contains('ground')) {
        selectedBlock = 'ground'; 
    } else if (target.classList.contains('dirt')) {
        selectedBlock = 'dirt'; 
    }
});

// Selecting a block from the grid:
gridContainer.addEventListener('click', (event) => {
    debugger
    const target = event.target;

    // if (target.classList.contains('grass')) {
    //     selectedBlock = 'grass'; 
    // } else if (target.classList.contains('ground')) {
    //     selectedBlock = 'ground'; 
    // } else if (target.classList.contains('dirt')) {
    //     selectedBlock = 'dirt'; 
    // }


    //1. Decide if the block should be removed or not:
    if (!axeMode && !shovelMode && !pickaxeMode) {

        //do nothing
        // Code to execute if all variables are false
        //console.log('elas shamen')
    }
    else{
        removeAndAddBlock(target)
    }

    
    //updateInventory(selectedBlock)
    //removeBlock()
});

function removeAndAddBlock(target){

    debugger
    if (target.classList.contains('sky')) {

        if (grassMode && grassCount > 0) {
            target.classList.remove('sky');
            target.classList.add(selectedBlock); 
            grassCount--; 
        } else if (groundMode && groundCount > 0) {
            target.classList.remove('sky');
            target.classList.add(selectedBlock); 
            groundCount--; 
        } else if (dirtMode && dirtCount > 0) {
            target.classList.remove('sky');
            target.classList.add(selectedBlock); 
            dirtCount--; 
        }
    }
    else{
        if (pickaxeMode && (target.classList.contains('ground') || target.classList.contains('grass'))) {
            if (target.classList.contains('ground')) {
                groundCount++; 
                selectedBlock = 'ground'
            } else if (target.classList.contains('grass')) {
                grassCount++; 
                selectedBlock = 'grass'
            }
            target.classList.remove('ground', 'grass'); 
            target.classList.add('sky'); 
            //updateInventory(); 
        } else if (shovelMode && target.classList.contains('dirt')) {
            target.classList.remove('dirt'); 
            target.classList.add('sky'); 
            dirtCount++; 
            selectedBlock = 'dirt'
            //updateInventory(); 
        }
    }

   

    updateInventory(selectedBlock)
}

function resetGame(){
    axeMode = false; 
    shovelMode = false; 
    pickaxeMode = false; 
    grassCount = 0; 
    groundCount = 0; 
    dirtCount = 0; 

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild); 
    }
}

document.getElementById('reset').addEventListener('click', () => {
 
    //1. Reset all the variables to their initial state:
    resetGame();

    //2.  Reset the variables to zero:
    updateInventory("newGame"); 

    //3. Reset the grid to start a new game:
    createGrid(); 
});

// Start a new game:
createGrid(); 
updateInventory("newGame"); 
