
// //  ex 3 --  עובד

// const movies = [
// {
// movieTitle: "Inception",
// rating: 8.0
// },
// {
// movieTitle: "the matrix",
// rating: 9.0
// },
// ];

// function findRating (movieTitle) {
//     const movie = movies.find(m => m.movieTitle === movieTitle);

// if (movie) {
//     return movie.rating;
// } else {
//     return "movie was not found";
// }
// }
// console.log (findRating("Inception"));


//  ex 5 -- עובד

// const movies = [
//     {
//     movieTitl:"Inception",
//     newRating: 9.0
//     },
//     {
//         movieTitl:"The Matrix",
//         newRating: 6.0
//         },
//     ];
    
//     function removeRating (movieTitl) {
//         const newmovie = movies.filter(m => m.movieTitl !== movieTitl);
    
//         if (newmovie.length < movies.length) {
//             const removedMovie = movies.find (m => m.movieTitl === movieTitl);
//             return removedMovie.newRating;
//         }
//         else {
//             return "movie not found";
//         }
//     }
    
//     console.log (removeRating("Inception"));
//     console.log (removeRating("Avatar"));

  

//  ex 6 -- עובד 

// const movies = [
//     {
//     movieTitle:"Inception",
//     newRating: 9.0
//     },
//     {
//         movieTitle:"The Matrix",
//         newRating: 6.0
//         },
//     ];
    
    
//     function listMovies () {
    
//         for (let i = 0; i<movies.length; i++) {
//             console.log(movies[i].movieTitle + " - " + movies[i].newRating);
//         }
//     }
    
//     listMovies ();



// //  ex 7  -- עובד
// const movies = [
//     {
//     movieTitle:"Inception",
//     newRating: 9.0
//     },
//     {
//         movieTitle:"The Matrix",
//         newRating: 6.0
//         },
//     ];
    
    
//     function highestRatedMovies () {
//     let highestRated = movies[0];
//         for (let i = 1; i<movies.length; i++) {
//             if (movies[i].newRating > highestRated.newRating) {
//             highestRated = movies[i];
//             }
//         }
//     console.log ("the higest rated movie: " + highestRated.movieTitle + " - " + highestRated.newRating);}

//     highestRatedMovies ();

// ////////////PURE FUNCTIONS////////////

// ex 1 -- עובד

// const array1 = [3, 4, 5, 3, 5];
// function calculateAverageRating (array1) {
//     let sum = 0;
//     for (let i = 0; i < array1.length; i++) {
//         sum+= array1[i];
//     }
//     return sum/array1.length;}

// console.log (calculateAverageRating(array1));


// ex 2 --- עובד
// const Rating = [3, 4, 5, 2, 1, 5];
// function filterByRating (Rating) {
//     let filteredRatings = [];
//     for (let i = 0; i < Rating.length; i++) {
//         if (Rating [i] >= 4) {
//             filteredRatings.push (Rating [i]);
//         }
//     }
//     return filteredRatings;
// }

// console.log (filterByRating (Rating));


// // ex 4 -- עובד
// const values = [3, 4, 5, 2, 1, 5];
// const Treshold = 3;

//  function ratingsAboveTreshold(values, Treshold){
//     let result = [];
//     for (let i = 0; i < values.length; i++) {
//         if (values [i] > Treshold) {
//             result.push (values[i]);
//         }
//     }
//         return result;
// }

// console.log (ratingsAboveTreshold (values, Treshold));


// //  ex 5 -- עובד

// const values = [3, 4, 5, 2, 1, 5];

// function countInRatingRange (values) {
//     let countValues = 0;
//     for (let i = 0; i < values.length; i++) {
//         if (values[i]>=4 && values[i]<=5 ) {
//             countValues++;
//     }
// }
//         return countValues;
// }
//     console.log (countInRatingRange (values));





