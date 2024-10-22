    // Ex 1

    const movies = [{
        title: "The Shawshank Redemption",
        rating: 9,
        genre: "action",
        releaseYear: 1990,
        }, 
        {title: "The Godfather",
        rating: 4,
        genre: "comedy",
        releaseYear: 1997,
        }, 
        {title: "The Godfather: part 2",
        rating: 10,
        genre: "drama",
        releaseYear: 2000,
        },  
        {title: "The Dark Knight",
        rating: 6,
        genre: "drama",
        releaseYear: 2010,
        },
        {title: "12 Angry men",
        rating: 2,
        genre: "comedy",
        releaseYear: 2008,
         }];



    // const result = movies.map (movies => movies.title);

    // console.log (result);


// Ex 2

// const result = movies.filter ((movies) => movies.rating > 8);

// console.log (result);

// Ex 3

// function sumRating (movies) {
//     const sum = movies.reduce ((total,movie) =>  total + movie.rating, 0);
//     console.log(sum);
//     return sum;
// }

// sumRating (movies);

// Ex 4

// const result = movies.map (movies => `${movies.title} - ${movies.rating}`);
// console.log(result);

// // Ex 5

// function updateRating (movies, newRating, title) {
//     return movies.map (movie => {
//             if (movie.title === title) {
//                 return { ...movie, rating: newRating};
//     }
//     return movie;
//     });
// }

// const result = updateRating (movies, 10, "The dark Knight")
// console.log(result);


// Ex 6


// option1 *********

// const result = movies.filter ((movies) => movies.genre === "drama");

// console.log (result);

// option2 *********

// function genre1 (movies, genre) {
//     return movies.filter (movie => movie.genre === "drama") }

//     const result = genre1 (movies, "drama");
//     console.log(result);


// Ex 7


// option1 *********

// const result = movies.filter ((movies) => movies.releaseYear > 2000);

// console.log (result);

// option2 *********

// function releaseYear1 (movies, releaseYear) {
//     return movies.filter (movie => movie.releaseYear > 2000) }

//     const result = releaseYear1 (movies, 2000);
//     console.log(result);


// Ex 8

// function avarageRating (movies) {
//     const totalRating = movies.reduce ((sum,movie) =>  sum + movie.rating, 0);
//     const avarage =   totalRating/movies.length;
//     console.log(avarage);
// }

// avarageRating (movies);
    
// Ex 9 

movies.sort ((a,b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1; 
    return 0;
});
console.log(movies);
