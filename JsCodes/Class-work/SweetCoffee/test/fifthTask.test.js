const filterUnrepeatedWords = require("../fifthTask.js");

test ("test if function can return unrepeated words", ()=> {
    
    let words = "Gazar loves to eat eggs with bread but Suliha loves to eat eggs with yam"
    let expected = ["Gazar", "bread", "but", "Suliha", "yam"];
    let result = filterUnrepeatedWords(words);
    expect(result).toEqual(expected);
})