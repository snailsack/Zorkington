


console.log("182 Main St. \nYou are standing on Main Street between Church and South Winooski. \nThere is a door here. A keypad sits on the handle. \nOn the door is a handwritten sign.")



    
    process.stdin.on('data', (chunk) => {
        let input = chunk.toString().trim()
        if (input.toLowerCase() == "read the sign") {
            console.log("The sign says Welcome to Burlington Code Academy! \nCome on up to the second floor. \nIf the door is locked, use the code 12345.")
        } else {
            console.log("Please enter a valid command.")
        }
})


