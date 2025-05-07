const {getHeader, getMenu, getDate, getMovieName, rateMovie, viewRating, viewAverageRating} = require("./movie-rating-system.js");
test("test display header function", ()=>{
    let header = "======== MOVIE RATING SYSTEM ========";
    let result = getHeader();
    expect(header).toBe(result);
})
test("test display header function", ()=> {
    let header = "====== MOVIE SYSTEM ======";
    let result = getHeader();
    expect(header).not.toBe(result);
})
test("test display menu function", ()=> {
    let menu = "1. Add a movie \n2. Rate a movie \n3. View ratings \n4. View average ratings \n5. Exit";
    let result = getMenu();
    expect(menu).toBe(result);
})
test("test date function", ()=> {
    let date
    let result = getDate();
})