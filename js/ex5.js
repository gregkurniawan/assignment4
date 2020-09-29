const word = prompt("Please Enter A Word:");
let vowel = 0;
let palindrome = "";
[...word].forEach(letter => {
    const lowercase = letter.toLowerCase();
    if (
        lowercase === "a" ||
        lowercase === "e" ||
        lowercase === "i" ||
        lowercase === "o" ||
        lowercase === "u" ||
        lowercase === "y"
    ) {
        vowel++;
    }
    palindrome = letter + palindrome;
});

if (word.toLowerCase() === palindrome.toLowerCase()){
    console.log(`${word} has ${vowel} vowels and is a palindrome.`)
}
else {
    console.log(`${word} has ${vowel} vowels and is not a palindrome.`)
}
