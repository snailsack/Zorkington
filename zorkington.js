

console.log("182 Main St. \nYou are standing on Main Street between Church and South Winooski. \nThere is a door here. A keypad sits on the handle. \nOn the door is a handwritten sign.")




process.stdin.on('data', (chunk) => {
    let input = chunk.toString().trim()
    processUserInput(input);
})


function processUserInput(input) {
    let password = function (input) {
        if (input == "12345") {
            return true;
        }
    }
    if (input.toLowerCase() == "read the sign") {
        console.log("The sign says Welcome to Burlington Code Academy! \nCome on up to the second floor. \nIf the door is locked, use the code 12345.");
    } else if (input == "") {
        console.log("Please enter a command.")
    } else if (input.toLowerCase() == "take sign") {
        console.log("That would be selfish. How will other students find their way?")
    } else if (input.toLowerCase() == "open door") {
        console.log("The door is locked. There is a keypad on the door handle.")
    } else if (input.toLowerCase() == "enter code 12345" || input.toLowerCase() == "key in 12345") {
        console.log("Success! The door opens. You enter the foyer and the door shuts behind you.")
    } else if (input.toLowerCase() == ("enter code " + input) || input.toLowerCase() == "key in " + !"12345") {
        console.log("Bzzzzt! The door is still locked.")
    }
    else if (input.toLowerCase() !== "read the sign") {
        console.log("Sorry, I don't know how to " + input + ".")
    }




}

