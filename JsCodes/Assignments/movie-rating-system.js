const prompt = require('prompt-sync')();
const movieStorage = {};
    const getHeader = function() {
    return "======== MOVIE RATING SYSTEM ========";
};
const getMenu = ()=> {
    return "1. Add a movie \n2. Rate a movie \n3. View ratings \n4. View average ratings \n5. Exit";
};
const getDate = function () {
    return new Date().toLocaleDateString();
};
const getMovieName = (name)=> {
    if (!name || !name.trim()) {
        console.log("Invalid movie name... kindly enter again")
        return false;
    } return name.trim();
};
const rateMovie = (movieStorage) => {
    const validName = prompt("Enter movie rate: ").trim().toUpperCase()
    if (!movieStorage[validName]) {
        console.log("Movie not found! Add movie first.");
        return;
    } const rating = parseFloat(prompt("Enter rating: "))
    if (rating < 1 || rating > 5) {
        console.log("Invalid rating");
        return;
    } movieStorage[validName].rating.push(rating);
    console.log(`Rating added successfully for ${validName}`);
};
const viewRating = (movieStorage) => {
    if (Object.keys(movieStorage).length === 0) {
        console.log("No movies added yet");
        return;
    } console.log("Movie List")
    for (let movie in movieStorage) {
        const ratings = movieStorage[movie].rating;
        console.log(`${movie} ${ratings}`)
    }}
const viewAverageRating = (movieStorage)=> {
    if (Object.keys(movieStorage).length === 0) {
        console.log("No movies added yet");
        return;
    } for (let movie in movieStorage) {
        let ratings = movieStorage[movie].rating;
        let average = ratings.reduce((add, ratings) => add + ratings, 0);
        console.log(average)
    }}

const main = ()=> {
    console.log(getHeader());
    let choice
    do {
        console.log(getMenu());
        choice = parseInt(prompt("Enter an option: "));
        switch(choice) {
            case 1:
                let movieName = prompt("Enter movie name: ").toUpperCase()
                let validName = getMovieName(movieName);
                if (validName === false) continue
                if (validName !== movieStorage[validName]) {
                    const movieDetails = {
                        date: getDate(),
                        name: validName,
                        rating: []
                    };
                    movieStorage[validName] = movieDetails;
                    console.log(`${movieDetails.date}: ${validName} added successfully`);
                } else {
                    console.log("Movie already exists");
                } break;
            case 2:
                rateMovie(movieStorage); break;
            case 3:
                viewRating(movieStorage); break;
            case 4:
                viewAverageRating(movieStorage); break;
            case 5:
                console.log("Exiting Application...")
                return;
            default:
                console.log("Invalid input... Enter between 1-5");
    }}while(true)
}
main();
module.exports = {getHeader, getMenu, getDate, getMovieName, rateMovie, viewRating, viewAverageRating};