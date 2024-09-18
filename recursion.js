// // ex 1

// function countMovies (arr, i = 0) {
// if (i === arr.length) {
//     return 0;
// }
//     return 1 + countMovies (arr, i + 1)
// }

// const movies = ["Inception", "The Matrix", "Interstellar"];
// console.log (countMovies(movies));


// ex 2 

// function searchMovie (nestedArr, title) {
//  for (let i = 0; i < nestedArr.length; i++) {
//     if (Array.isArray(nestedArr[i])) {
//       if (searchMovie(nestedArr[i], title))  {
//         return true;
//       }
//     } else {
//         if (nestedArr [i] === title) {
//             return true;
//         }
//     }
//  } return false;
//  }
// const movies = [['Inception', 'The Matrix'], ['Interstellar',
//     'Dunkirk']];   
//     const searchFor = 'Inception' ;
//         console.log (searchMovie(movies, searchFor));


// ex 3

// function SumMovies (arr, i = 0) {
// if (i === arr.length) {
//     return 0;
// }
//     return arr [i] + SumMovies (arr, i+1);
// }

// const movieDuration = [120, 180, 150];
// console.log (SumMovies(movieDuration));


// ex 4

// function higestDurationMovie (arr, i = 0, maxDuration = arr [0]) {
    // if (i === arr.length) {
        //     return maxDuration;
        // }
        //     if (arr [i] > maxDuration) {
            //         maxDuration = arr [i];
            //     }
            //     return higestDurationMovie (arr, i + 1, maxDuration) ; 
            // }
            
            // const movieDuration = [120, 180, 150];
            // console.log (higestDurationMovie(movieDuration));



// ex 5 

// function AvarageMovieRating (arr, i = 0, sum = 0) {
// if (i === arr.length) {
//     return arr.length === 0 ? 0 : sum / arr.length;
// }
//     return AvarageMovieRating (arr, i + 1, sum + arr [i]); 
// }

// const movieRating = [4.0, 4.5, 5.0];
// console.log (AvarageMovieRating(movieRating));


// ex 6
  
// function uniqeGenre (arr, i = 0, uniqueArr = []) {
//     if (i === arr.length) {
//         return uniqueArr; 
//     }

//     arr[i].forEach(genre => {
//         if (!uniqueArr.includes(genre)) {
//             uniqueArr.push(genre);
//         }
//     });
//     return uniqeGenre (arr, i + 1, uniqueArr)}

//         const movieGenre = [['Action', 'Thriller'], ['Drama', 'Action'], ['Sci-Fi']];
//         console.log (uniqeGenre(movieGenre));




        
  