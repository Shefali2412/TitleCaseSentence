// Wednesday : Title Case a Sentence
// algorithm : 
// I/O: string
// O/P: string with first letter capitalised 
// make a function 
// inside function ,
// Split the input sentence into an array of words using the space character as the delimiter.
// Create an empty array to store the title-cased words.
// For each word in the array of words:
//  Capitalize the first letter of the word.
//  rest of word should be lowercase.
//  Add the title-cased word to the array.
//  Join the array of title-cased words back into a string using a space as the separator.
//  Return the resulting title-cased string.





function titleCase(string) {
    const words = string.split(" ");

    for(let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return words.join(" ");

}

const sentence = "I'm a little tea pot";
console.log(titleCase(sentence)); 
