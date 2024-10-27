// ex 1

// const activityDurations = [2,3,1];
// let total = 0;

// for (let i = 0; i< activityDurations.length; i++) {
//     sum  = total +=  activityDurations [i];
// }
// console.log(sum);


// ex 2
// const activityDurations = [2,3,1];
// let max = activityDurations [0];

// for (let i=1; i< activityDurations.length; i++) {
//     if (activityDurations [i] > max){
//         max = activityDurations [i];
//     }
// }
// console.log(max);


// ex 3 

// const activityNames =  ["Sightseeing", "Hiking", "Sightseeing"];
// const count = {};

// for (let i=0;i<activityNames.length; i++ ) {
// const activity = activityNames [i];
// if (count [activity] !== undefined) {
//     count [activity] ++;
// }
// else {
//     count [activity] = 1;
// }
// }


// ex 4 

// const activityDurations = [2,3,1];
//  let min = activityDurations [0];

// for (let i=1; i< activityDurations.length; i++) {
//     if (activityDurations [i] < min){
//         min = activityDurations [i];
//     }
// }
// console.log(min);


// ex 5

// const transportationTypes =  ["car","Train","car","Flight"];
// const Counts = {};

// for (let i=0; i< transportationTypes.length ; i++) {
//     const car = transportationTypes [i];
//     if (Counts [car] !== undefined) {
//         Counts [car] ++;
//     }
//     else {
//         Counts [car] = 1;
//     }
// }
// console.log(Counts);


// ex 6 

// const trevelExpenses = [50,100,75,125,200]; 
// let total = 0;

// for (let i=0; i < trevelExpenses.length ;i++) {
    
//         sum  = total +=  trevelExpenses [i];
//     }
//     let avarage1 = sum/trevelExpenses.length;
//     console.log(avarage1);

// ex 7 

// const trevelExpenses = [50,100,75,125,200]; 
// let max =  trevelExpenses [0];

// for (let i = 1; i < trevelExpenses.length ;i ++) {
//     if (trevelExpenses [i] > max) {
//         max = trevelExpenses [i];
//     }
// }
// console.log(max);


// ex 8 

// const trevelExpenses = [50,100,75,125,200]; 
// const Counts = {};

// for (let i=0; i< trevelExpenses.length ; i++) {
//     const exspense = trevelExpenses [i];
//     if (exspense < 150){
//         if (Counts [exspense] !== undefined) {
//                 Counts [exspense] ++;
//             }
//             else {
//                 Counts [exspense] = 1;
//             } 
//         }
//     }
//     console.log(Counts);


const trevelExpenses = [50,100,75,125,200]; 
let totalCount = 0;

for (let i=0; i< trevelExpenses.length ; i++) {
    const exspense = trevelExpenses [i];
    if (exspense < 150){
        totalCount ++;
    }
}
console.log(totalCount);





