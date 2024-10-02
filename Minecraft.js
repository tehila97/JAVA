const gridContainer = document.getElementById('grid-container');
let axeMode = false; // מצב כפתור Axe
let pickaxeMode = false; // מצב כפתור Pickaxe

// יצירת הגריד
for (let row = 0; row < 12; row++) {
    for (let col = 0; col < 29; col++) {
        const div = document.createElement('div');

        // קביעת צבעים לפי השורות
        if (row < 7) {
            div.classList.add('sky'); // 7 שורות עליונות כחולות
        } else if (row < 9) {
            div.classList.add('gray'); // 2 שורות אפור
        } else {
            div.classList.add('green'); // שאר השורות ירוקות
        }

        gridContainer.appendChild(div);
    }
}

// פונקציה ליצירת עץ במיקום x, y
function createTree(x, y) {
    gridContainer.children[y * 29 + x].classList.add('brown'); // גזע
    gridContainer.children[(y - 1) * 29 + x].classList.add('brown'); // גזע
    gridContainer.children[(y - 1) * 29 + (x - 1)].classList.add('green'); // עלה שמאל
    gridContainer.children[(y - 1) * 29 + (x + 1)].classList.add('green'); // עלה ימין
    gridContainer.children[(y - 1) * 29 + x].classList.add('green'); // עלה מרכז
    gridContainer.children[(y - 2) * 29 + x].classList.add('green'); // עלה עליון
}

// פונקציה להסרת העץ במיקום x, y
function removeTree(x, y) {
    gridContainer.children[y * 29 + x].classList.remove('brown');
    gridContainer.children[(y - 1) * 29 + x].classList.remove('brown');
    gridContainer.children[(y - 1) * 29 + (x - 1)].classList.remove('green');
    gridContainer.children[(y - 1) * 29 + (x + 1)].classList.remove('green');
    gridContainer.children[(y - 1) * 29 + x].classList.remove('green');
    gridContainer.children[(y - 2) * 29 + x].classList.remove('green');

    // שינוי צבע למשבצות הסרות
    gridContainer.children[y * 29 + x].classList.add('sky');
    gridContainer.children[(y - 1) * 29 + x].classList.add('sky');
    gridContainer.children[(y - 1) * 29 + (x - 1)].classList.add('sky');
    gridContainer.children[(y - 1) * 29 + (x + 1)].classList.add('sky');
    gridContainer.children[(y - 2) * 29 + x].classList.add('sky');
}

// הוספת אירוע לכפתור "Axe"
document.getElementById('axe').addEventListener('click', () => {
    axeMode = true; // הפוך את המצב ל-Axe
});

// הוספת אירוע לכפתור "Pickaxe"
document.getElementById('pickaxe').addEventListener('click', () => {
    pickaxeMode = true; // הפוך את המצב ל-Pickaxe
});

// הוספת אירועים ללחיצה על משבצות
gridContainer.addEventListener('click', (event) => {
    const target = event.target;
    const index = Array.from(gridContainer.children).indexOf(target);

    if (axeMode) {
        if (index >= 0 && (target.classList.contains('brown') || target.classList.contains('green'))) {
            const x = index % 29;
            const y = Math.floor(index / 29);
            removeTree(x, y); // הסרת העץ
        }
    } else if (pickaxeMode) {
        if (index >= 0 && target.classList.contains('green')) {
            target.classList.remove('green'); // הסרת צבע ירוק
            target.classList.add('gray'); // הוספת צבע אפור
        }
    }
});

// יצירת עץ במיקום (15, 8)
createTree(15, 8);
