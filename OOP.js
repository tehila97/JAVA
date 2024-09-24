// class Media {
//     #title;
//     #duration;
//     #ratings;

//    constructor(title,duration) {
//     // this.#title = "Inception";
//     // this.#duration = 180;
// //     // ratings = [];
// //     this.#title = title;
// //     this.#duration = duration;
// //     this.#ratings = [];
// //    } 

// //     newMedia () {
// //     return this.#title;
// //     }
// // };

// // const media = new Media ("Inception",180);
// // console.log (media.newMedia());  

// //  1.3
// class Media {
//     #title;
//     #duration;
//     #ratings;

//    constructor(title,duration) {
//     this.#title = title;
//     this.#duration = duration;
//     this.#ratings = [];
//    } 
    

//    get title (){
//     return this.#title;
//    }
//    get duration () {
//     return this.#duration;
//    }
// }

// const media = new Media ("Inception",180);

// console.log (media.title);
// console.log (media.duration);

// // // 1.4
// class Media {
//     #title;
//     #duration;
//     #ratings;
// }
//         constructor (title, duration) {
//             this.#title = title;
//             this.#duration = duration;
//             this.#ratings = [];
//         }  
        
//         addRating (rating) {
//             this.#rating.push(rating);
//         }
        
//         getRatings(){
//             return this.#ratings;
//         }
        
//         const media = new Media("Inception", 180);
//         media.addRating(9.0);
//         media.addRating (8.5);
//         console.log(media.getRatings());  

// 1.5
// class Media {
//     #title;
//     #duration;
//     #ratings;

//     constructor (title, duration) {
//     this.#title = title;
//     this.#duration = duration;
//     this.#ratings = [];
//     }  

//     addRating (rating) {
//         this.#ratings.push(rating);
//     }

//     getRatings () {
//         return this.#ratings;
//     }

//     #calculateAverageRatings () {
//         if (this.#ratings.length === 0) {
//             return "no ratings yet";
//         }
//         let sum = 0;
//         for (let i = 0; i < this.#ratings.length; i ++) {
//             sum += this.#ratings [i];
//         }
//         return sum / this.#ratings.length;
//     }
//     get averageRating () {
//         return this.#calculateAverageRatings();
//     }
//     }

// const media = new Media("Inception", 180);
// media.addRating(9.0);
// media.addRating (8.5);
// console.log(media.getRatings()); 
// console.log(media.averageRating); 


// 1.6 

// class Media {
//     #title;
//     #duration;
//     #ratings;

//     constructor (title, duration) {
//     this.#title = title;
//     this.#duration = duration;
//     this.#ratings = [];
//     }  

//     addRating (rating) {
//         this.#ratings.push(rating);
//     }

//     getRatings () {
//         return this.#ratings;
//     }

//     #calculateAverageRatings () {
//         if (this.#ratings.length === 0) {
//             return "no ratings yet";
//         }
//         let sum = 0;
//         for (let i = 0; i < this.#ratings.length; i ++) {
//             sum += this.#ratings [i];
//         }
//         return sum / this.#ratings.length;
//     }

//     #displayDetails (){
//         return `Title: ${this.#title},  Duration: ${this.#duration}, Avarage Rating: ${this.#calculateAverageRatings()}`;
//     }

//     get displayDetails () {
//         return this.#displayDetails();
//     }
// }

// const media = new Media("Inception", 180);
// media.addRating(9.0);
// media.addRating (8.5);
// console.log(media.displayDetails); 


// ex 2

// 2.1
