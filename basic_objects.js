// // // // ex 1 

// // const movie =   
// // {
// //     title: "Inception",
// //     director: "calvin" ,
// //     releaseYear: 1998,
// //     genres: ["comedy","action"], 
// //     ratings: [7,8,9],
// // }

// //     function getAvarageRating (ratings) {
// //         let total = 0;
// //     for (let i=0; i<ratings.length; i++) {
// //         total +=ratings[i];
// //     }
// //     return total/ratings.length;
// // }

// // console.log (getAvarageRating(movie.ratings));

// // // ex 2 

// // const cast = [
// //   {
// //     name: "danny",
// //     role: "head actor" 
// // }, 

// // {
// //     name: "Tomer",
// //     role: "simple actor"
// // },  
// // ] 

// // movie.actors = cast;
// // // console.log (movie)

// // console.log (movie.genres);
// // console.log (movie["genres"][1]);


// // console.log (movie.actors[1].name);
// // console.log (movie["actors"][1]["name"]);

// // ex3

// // // movie.ratings ['qb'] = 6;
// // // console.log(movie.ratings)

// // movie.ratings.push (6);
// // console.log(movie.ratings)

// // movie.releaseYear = 2000;
// // console.log(movie.releaseYear)

// // delete movie.director;
// // console.log(movie)

// // movie.actors[0].role = "cashier";
// // console.log(movie.actors)

// // movie["actors"][0]["role"] = "waiter";
// // console.log(movie.actors)


// // console.log(movie.hasOwnProperty('ratings'));

// // ex4

// // const movies = [
// //     {
// //         title: "Inception", 
// //         details: {
// //             duration: 148,
// //             rating: "PG-13" 
// //         }},

// //         {
// //         title: "Intersteller",
// //         details: {
// //             duration: 169,
// //             rating: "PG-13" 
// //         }},
// // ];

// // console.log (movies[0].details.duration);

// // function avgMovies (movies) {
// //     let total = 0;

// // for (let i=0; i<movies.length; i++){
// //     total += movies[i].details.duration;
// // }
// // return total/movies.length;  
// // }

// // console.log (avgMovies(movies));

// // ex5 

// const movie1 = {
//     title: "Inception",
//     duration: 148,
// };

// const movie2 = {
//     title: "Interstellar",
//     duration: 163,
// };


// // const mergObject1 = Object.assign ({},movie1,movie2);

// // console.log (mergObject1);


// const mergObject ={
//     movie1: movie1,
//     movie2: movie2,
// };

// console.log (mergObject);

// Object.freeze (mergObject)

// mergObject.duration = 200;

// Object.seal (mergObject);

// const cast = [
//   {
//     name: "danny",
//     role: "head actor" 
// }, 

// {
//     name: "Tomer",
//     role: "simple actor"
// },  
// ] 

// mergObject.cast = cast;
// console.log (mergObject)

// console.log(Object.isSealed (mergObject));

// console.log(Object.isFrozen (mergObject));


// // ex6


const movieDetails =   
{
    title: "Inception",
    director: "christopher nolan" ,
    releaseYear: 2010,
    genres: ["comedy","action"], 
    ratings: [8,9,9.5,8.5],
}


function objectValuesAndkeys1 () {
    console.log("keys: ", Object.keys (movieDetails));
    console.log("values: ", Object.values (movieDetails));
}

objectValuesAndkeys1();

// function objectValuesAndkeys (){
//     const keys = Object.keys(movieDetails);
//     const values = Object.values(movieDetails);
//     return {keys,values};
// }

// const result = objectValuesAndkeys (movieDetails);

// console.log("keys:", result.keys);
// console.log("values:", result.values);

// // ex7


