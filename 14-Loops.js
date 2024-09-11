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



// // ex.5 -- עובד
// const movieRating = [8.3,7.5,9.0,8.7];
// let filterRatings = [];
// for (let i = 0; i < movieRating.length; i++) {
//     if (movieRating [i] > 8.0) {
//         filterRatings.push (movieRating[i]);
//     }
// }
//     console.log (filterRatings);


// // ex.6 -- עובד
// const movieRating = [8.3, 8.7, 9.0, 8.7, 8.3];
// let specificRating = 8.7;
//  let specificRatingMovie = [];
//  for (let i=0; i<movieRating.length; i++) {
//     if (movieRating [i] === specificRating) 
//         {specificRatingMovie.push (movieRating);}
//  }
//      console.log (specificRatingMovie.length);


// // ex.7-- עובד

// const watchedList = ["Inception", "the dark knight"];
// const wishlist = ["intersteller", "Inception"];
// let filteredList = [];
//     for (let i=0; i<watchedList.length; i++)
//     {if (wishlist.includes(watchedList [i]))
//         {
//         filteredList.push(watchedList [i]);
//     }}
//     console.log (filteredList);


// ex.8-- עובד
//  const movieRating = [8.3, 9.0, 7.5, 8.7];
//  const minRating = {threshold: 8.0};
// let above = true;
// for (let i=0; i<movieRating.length ; i++) {
// if (movieRating[i] <= minRating.threshold) {
//     above = false;
//     break;
// }
// }
//         console.log (above);


// // ex.9 -- עובד
// const movieRating = [8.3, 9.0, 7.5, 8.7];
// let max = movieRating [0];
// for (let i=1; i < movieRating.length; i++)
// {if (movieRating [i] > max){
// max = movieRating[i];}}
// console.log (max);


// // ex.10 
// const movieRating = [8.3, 9.0, 7.5, 8.7];
// let highestRatings = movieRating [0];

// for (let i=1; i < movieRating.length; i++) {
//     if (movieRating [i] > highestRatings) {
//         highestRatings = movieRating[i];
//     }
// }   
//     console.log (highestRatings);
