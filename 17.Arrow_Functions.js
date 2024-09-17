//   ex 1  

// const movies = [
// {
//     movieTitle: "Inception",
// },
// {
//     movieTitle: "The Matrix",
// }
// ];

// function getMovies () {
//     let array1 = [];
//     for (let i = 0; i < movies.length; i++) {
//     array1.push(movies [i].movieTitle);
// // }
// //     return array1;
// // }
// // console.log (getMovies());


// // arrow function

// const movies = [
// {
//     movieTitle: "Inception",
// },
// {
//     movieTitle: "The Matrix",
// }
// ];
// const getMovies = () => movies.map (movie => movie.movieTitle);
// console.log (getMovies());


//   ex 2

// const movies = [
//     {
//     movieTitle:"Inception",
//     AvarageRating: 9.0
//     },
//     {
//     movieTitle:"The Matrix",
//     AvarageRating: 7.0
//     },
//     ];
    
    // function averageMovieRating(AvarageRating) {
    //     if (AvarageRating > 7) {
    //     return "Good";
    //     } else if (AvarageRating > 5) {
    //     return "Average";
    //     } else {
    //     return "Bad";
    //     }
    //    }
    
    // const movieTitle = "The Matrix";
    // const movie = movies.find(movie => movie.movieTitle === movieTitle);
    // if (movie) { 
    //     console.log (averageMovieRating(movie.AvarageRating));
    // }
    // else {
    //    console.log("Movie Not Found");
    // }


// // arrow function
// const movies = [
//     {
//     movieTitle:"Inception",
//     AvarageRating: 9.0
//     },
//     {
//     movieTitle:"The Matrix",
//     AvarageRating: 7.0
//     },
//     ]; 


// const rateMovie = (AvarageRating) =>
//     AvarageRating > 7 ? 'Good' : AvarageRating > 5 ? 'Avarage' : 'Bad';
// const movieTitle = "Avatar";
// const movie = movies.find(movie => movie.movieTitle === movieTitle);
// if (movie) {
//     console.log (rateMovie (movie.AvarageRating));
// }
// else {
//     console.log  ("movie not found") ; 
// }
  

//  ex 3 
  
// const movies = [
//     {
//       title: "Inception",
//       length: 148
//     },
//     {
//       title: "The Matrix",
//       length: 136
//     },
//     {
//       title: "Interstellar",
//       length: 169
//     }
//   ];
  
//   function getTotalMovieLength(movies) {
//     let totalLength = 0;
//     for (let i = 0; i < movies.length; i++) {
//       totalLength += movies[i].length;
//     }
//     return 'Total movie length is ' + totalLength + ' minutes';
//   }
  
//   console.log(getTotalMovieLength(movies)); 
  
// // Arrow Function 
// const movies = [
//     {
//       title: "Inception",
//       length: 148
//     },
//     {
//       title: "The Matrix",
//       length: 136
//     },
//     {
//       title: "Interstellar",
//       length: 169
//     }
//   ];

//   const getTotalMovieLength = (movies) => {
//     let totalLength = 0;
//     for (let i = 0; i < movies.length; i++) {
//       totalLength += movies [i].length;
//     }
    
//     return 'Total movie length ' + totalLength + ' minutes';
//   }
//   console.log(getTotalMovieLength (movies));
  

