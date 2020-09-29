const random = [];
let word = "";
while (word.toLowerCase() !== "stop") {
    word = prompt("Please Enter Words Or Type 'stop' To Quit:");
    if (word.toLowerCase() !== "stop") {
        random.push(word);
    }
}

console.log("You entered the following words:");
random.forEach(w => {
    console.log(w);
});

if (word.toLowerCase() == "stop") {
    console.log(`No words to display, stop was the first word entered`)
};

