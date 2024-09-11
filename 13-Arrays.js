// // ex.1

// const movieTitels = ["Incepation", "The matrix", "Interstellar"];
// let movieToCheck = "Incepation";
//     console.log (movieTitels.includes (movieToCheck))

// // ex.2

// const releaseDates = ["1999", "2010", "2014"];
// let reversOrder = [];
//     console.log (releaseDates.reverse (reversOrder))


// // ex.3

// const releaseDates = ["Sci-Fi", "Action", "Adventure"];
//     console.log (releaseDates.join ());

    
// // ex.4

// const releaseDates = ["Sci-Fi", "Action", "Adventure"];
// let genreToCheck = "Action";
// console.log (releaseDates.includes (genreToCheck));

// // ex.5 -- תרגיל חלקי
// const movieTitels = ["Incepation", "The matrix", "Interstellar"];
// let spcificMovie = "Interstellar";
// console.log (`Interstellar found at index ${movieTitels.indexOf (spcificMovie)}`);

// // ex.5 - תרגיל מלא
// const movieTitels = ["Incepation", "The matrix", "Interstellar"];
// let spcificMovie = "Interstellar";
// let movieIndex = movieTitels.indexOf(spcificMovie);

// if (movieIndex !== -1) {
// console.log (`Interstellar found at index ${movieIndex}`);
// }
// else {
//     console.log(`Interstellar not found at index`);
// }


// // ex.6

// const upComingReleases = ["Avatar", "Dune", "Tenet"]
// upComingReleases.splice (2);
// console.log (upComingReleases);

// ex.7

// const classicMovie = ["The Godfather", "citizen kane"];
// let newMovie = "Casablanca";
// classicMovie.unshift (newMovie);
// console.log (classicMovie);

// ex.8

// const filmNoir = ["The Maltese Falcon", "Touch of evil", "Double Indemnity"];
// const update_filmNoir = filmNoir.shift ();
// console.log (update_filmNoir);


// ex.9

// const actionMovies = ["die hard", "John Wick"];
// const comedyMovies = ["Superbad", "The Hangover"];
// const mergempviese = actionMovies.concat (comedyMovies);
// console.log (mergempviese);

// // ex.10
// const movieTitels = ["Incepation", "The matrix", "Interstellar"];
// const alp_movieTitels =  movieTitels.sort ();
// console.log (alp_movieTitels);

// // ex.11
// const quote = ["i'll be back, may the force be with you, to infinity and beyond"];
// const correct_quote = ["i'll be back","may the force be with you","to infinity and beyond"].join('","');
// console.log (`"${correct_quote}"`);

// ex.12
// const topMovie = ["The Shawshank Redumption", "The Godfather", "the dark night"]
// const n = 2;
// console.log(topMovie.slice (0,n));


// // ex.13
// const movieWishlist = ["the matrix 4", "Avatar 2", "Dune"]
// console.log(movieWishlist.splice ());

// // ex.14
// const movies = ["Inception", "Intresteller"];
// const newMovie = "tenet";
// movies.push (newMovie);
// console.log(movies);


// // ex.15
// const movies = ["Inception", "Intresteller", "Tanet"];
// movies.shift ();
// console.log(movies);


// // ex.16
// const movies = ["Inception", "Intresteller", "Tanet"];
// const moviesWithCommas = movies.join(", ");
// console.log (moviesWithCommas);


// // // ex.17
// const movies = ["Inception", "Intresteller", "Tanet"];
// const movieToFind = "Intresteller";
// console.log (movies.indexOf (movieToFind));


// // ex.18
// const movies = ["Inception", "Intresteller", "Tanet"];
// console.log (movies.reverse ());

// // ex.19
// const releaseYears = ["2001", "2023", "1998", "2014"];
// releaseYears.sort().reverse();
// console.log (releaseYears);




