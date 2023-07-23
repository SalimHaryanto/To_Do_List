const message = 'Hello world' // Try edit me

// Update header text
const header = document.querySelector('#header');
header.innerHTML = message;
const objectTextInput = document.querySelector('#textInput');
const objectListOfItem = document.querySelector('#listOfItem');

objectTextInput.addEventListener("keypress", (e) => {
    // If the user presses the "Enter" key on the keyboard
    if (e.key === "Enter") {
        // Cancel the default action, if needed
        e.preventDefault();
        // Trigger the button element with a click
        addItem();
    }
});

function handleEnterKeyPress(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        addItem();
    }
}

let idx = 0;
let listOfContent = []

function renderingTheListFromArray(editedIdx) {

    let listOfContentView = "";
    let panjangArr = listOfContent.length;

    for (let i = 0; i < panjangArr; i++) {

        var normalListItem = "<div>" + listOfContent[i] + "<button id='edit' onclick='editItem(" + i + ")'>Edit</button><button id='delete' onclick='deleteItem(" + i + ")'>Delete</button></div>";
        var editListItem = "<div><input id='editedText' type='text' value='" + listOfContent[i] + "'><button id='save' onclick='saveItem(" + i + ")'>Save</button></div>";

        if (editedIdx != null) {
            console.log("editedIdx is :", editedIdx);
            if (editedIdx == i) {
                listOfContentView = listOfContentView + editListItem
            } else {//draw the remaining list in the case of edit
                listOfContentView = listOfContentView + normalListItem
            }
        } else {
            console.log("ignored editedIdx is :", editedIdx);
            listOfContentView = listOfContentView + normalListItem
        }
    }

    return listOfContentView;
}

function addItem() {
    listOfContent.push(textInput.value);

    let newList = renderingTheListFromArray();
    objectListOfItem.innerHTML = newList;
    idx += 1;
    objectTextInput.value = "";
}

function deleteItem(idx) {
    listOfContent.splice(idx, 1);
    console.log("deleteItem");
    let newList = renderingTheListFromArray();
    objectListOfItem.innerHTML = newList;
    idx -= 1;
}

function editItem(editedIdx) {
    let newList = renderingTheListFromArray(editedIdx);
    objectListOfItem.innerHTML = newList;
}


// Log to console
console.log(message);