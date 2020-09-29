var count = 0;
var random = Math.floor(Math.random() * 100);

while (attempt != random) {
    var attempt = prompt(`Guess The Number Between 1 and 100:`);
    count +=1;

    if (attempt == random) {
        console.log("Correct! It Took You "+count+" Attempt(s) To Guess The Correct Number")
    }
    if (attempt > random) {
        console.log("Too High, Guess Again");
    }
    if (attempt < random) {
        console.log("Too Low, Guess Again");
    }
    
    
}