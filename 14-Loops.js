// ex.1 -- עובד

// const movieTitels = ["Incepation", "The dark knight", "Interstellar"]
// let LongestTitle = "";
// for (let i = 0; i < movieTitels.length; i++) 
// {
//     let title = movieTitels[i];

// if (title.length > LongestTitle.length) {
// LongestTitle = title;
// }
// }
// console.log (`The longest movie title is: ${LongestTitle}`);

// ex.2 -- עובד

// const numbers = [10,20,30,40,50];
// let sum1 = 0;
// for (let i =0; i< numbers.length; i++) {
//     sum1 += numbers [i];
// }
// let average = sum1 / numbers.length; 
// console.log (`the average is: ${average}`);


// ex.3 -- עובד

// const movieTitles = ["Inception", "The Dark Knight", "Interstellar"];
// let reversedTitles = "";  
// for (let i = 0; i < movieTitles.length; i++) {
//     let reversedTitle = "";  
//     for (let j = movieTitles[i].length - 1; j >= 0; j--) {
//         reversedTitle += movieTitles[i][j];}
//     reversedTitles += reversedTitle + " ";}
// console.log(reversedTitles.trim());  

// ex.4 --  עובד

// const movieRating = [8.3,7.5,9.0,8.7];
// let sum = 0 ;
// for (let i =0; i < movieRating.length; i++) {
//     sum += movieRating[i];
// }
// let adding = movieRating.map(rating => rating + 0.5); 
// console.log (`${adding}`);


// ex.5 -- -- עובד -- לתקן

// const movieRating = [8.3,7.5,9.0,8.7];
// let filterRatings = movieRating.filter(rating => rating > 8.0);
// console.log (`${filterRatings}`);


// ex.6 -- -- עובד -- לתקן

// const movieRating = [8.3, 8.7, 9.0, 8.7, 8.3];
// const specificRating = 8.7;
// const countSpecificRating = movieRating.filter(rating => rating === specificRating).length;
// console.log(`Number of ratings equal to ${specificRating}: ${countSpecificRating}`);


// ex.7-- עובד -- לתקן

// const WatchedList = ["Incepation", "The dark knight"]
// const wishList = ["Interstellar", "Incepation"]
// let filteredList = wishList.filter (movie => WatchedList.includes(movie));
// console.log(`${filteredList}`)


// // ex.8 -- עובד -- לתקן
// const movieRating = [8.3, 8.7, 9.0, 8.3];
// const minRating =  { threshold: 8.0 };
// let above = movieRating.every(rating => rating > minRating.threshold);
// console.log(`${above}`)


// ex.9 -- עובד
// const movieRating = [8.3,7.5,9.0,8.7];
// let max = movieRating [0];
// for (let i=1; i < movieRating.length; i++)
//      {if (movieRating[i] > max) {
//     max = movieRating[i];
// }
// }
// console.log (`${max}`);


// ex.9 -- adding
// const movieRating = [8.3,7.5,9.0,8.7];
// let higestRating = Math.max(...movieRating);
// console.log(`${higestRating}`)


// ex.10 -- לא הבנתי מה ההבדל משאלה 9
//  את שאלות הבונוס לא עשיתי
