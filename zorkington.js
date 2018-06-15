let currentRoom = null;
function moveToRoom(newRoom) {
  if (canMoveToRoom(newRoom)) {
    currentRoom = newRoom;
  }
}

console.log("182 Main St. \nYou are standing on Main Street between Church and South Winooski. \nThere is a door here. A keypad sits on the handle. \nOn the door is a handwritten sign.")

process.stdin.on('data', (chunk) => {
    let input = chunk.toString().trim()
    mainSt(input);
    foyer(input);
})

function mainSt(input) {
    
    var passwordInt = ("12345")
    var password1 = ("enter code ")
    var password2 = ("key in ")
    if (input.toLowerCase() == "read the sign") {
        console.log("The sign says Welcome to Burlington Code Academy! \nCome on up to the second floor. \nIf the door is locked, use the code 12345.");
    } else if (input == "") {
        console.log("Please enter a command.")
    } else if (input.toLowerCase() == "take sign") {
        console.log("That would be selfish. How will other students find their way?")
    } else if (input.toLowerCase() == "open door") {
        console.log("The door is locked. There is a keypad on the door handle.")
    } else if (input.toLowerCase() == (password1 + passwordInt) || input.toLowerCase() == (password2 + passwordInt)) {
        console.log("Success! The door opens. You enter the foyer and the door shuts behind you. \n")
        console.log ("You are in a foyer. Or maybe it's an antechamber. Or a \nvestibule. Or an entryway. Or an atrium. Or a narthex.\nBut let's forget all that fancy flatlander vocabulary,\nand just call it a foyer. In Vermont, this is pronounced\n'FO-ee-yurr'.\nA copy of Seven Days lies in a corner.")
        foyer()
    } else
        if (input.toLowerCase() == input.match(password1) || input.toLowerCase() == input.match(password2)) {
            console.log("Bzzzzt! The door is still locked.")

        } else if (input.toLowerCase() !== "read the sign") {
            console.log("Sorry, I don't know how to " + input + ".")
        }
}

function foyer(input1) {
    
    if (input1.toLowerCase() == "take paper" || input1.toLowerCase() == "take seven days") {
        console.log("You pick up the paper and leaf through it looking for comics \nand ignoring the articles, just like everybody else does.")
    }

}
