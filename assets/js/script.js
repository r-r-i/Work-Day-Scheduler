//  TODO
    // (a) current date at top of page
    // (b) page styled to mock-up
    // (c) buttons are clickable and saves text to local storage
    // (d) colors change when time is past,present,future

//  Gathers current time to call on later and area of text to show current date.
var today = document.getElementById("currentDay")
var timeNow = moment().hour();


//  Variables that handle each of the buttons.
var save0ne = document.getElementById("saveone")
var saveTwo = document.getElementById("savetwo")
var saveThree = document.getElementById("savethree")
var saveFour = document.getElementById("savefour")
var saveFive = document.getElementById("savefive")
var saveSix = document.getElementById("savesix")
var saveSeven = document.getElementById("saveseven")
var saveEight = document.getElementById("saveight")
var saveNine = document.getElementById("savenine")
//  Variables that handle each of the text elements.
var text0ne = document.getElementById("textone")
var textTwo = document.getElementById("textwo")
var textThree = document.getElementById("texthree")
var textFour = document.getElementById("textfour")
var textFive = document.getElementById("textfive")
var textSix = document.getElementById("textsix")
var textSeven = document.getElementById("textseven")
var textEight = document.getElementById("texteight")
var textNine = document.getElementById("textnine")

//  Arrays that are used to change the color of each text block per hour. Used in sync with timeNow variable above.
timeBlockArr = ["9 AM", "10 AM" , "11 AM" , "12 PM" , "1 PM" , "2 PM", "3PM", "4 PM" , "5 PM"]
textBlockArr = [text0ne, textTwo , textThree , textFour , textFive , textSix, textSeven, textEight , textNine]

//  Displays current date at top of page.
today.textContent = moment().format('dddd, MMMM Do')

//  Functions that make the buttons clickable. On click, user text input is saved to local storage.
save0ne.addEventListener("click", function(event) {
    event.preventDefault();
    var textarea = document.querySelector("#textone").value;
    localStorage.setItem("event-1", textarea)
})
saveTwo.addEventListener("click", function(event){
    event.preventDefault()
    var textarea = document.querySelector("#textwo").value;
    localStorage.setItem("event-2", textarea)
})
saveThree.addEventListener("click", function(event){
    event.preventDefault()
    var textarea = document.querySelector("#texthree").value;
    localStorage.setItem("event-3", textarea)
})
saveFour.addEventListener("click", function(event){
    event.preventDefault()
    var textarea = document.querySelector("#textfour").value;
    localStorage.setItem("event-4", textarea)
})
saveFive.addEventListener("click", function(event){
    event.preventDefault()
    var textarea = document.querySelector("#textfive").value;
    localStorage.setItem("event-5", textarea)
})
saveSix.addEventListener("click", function(event){
    event.preventDefault()
    var textarea = document.querySelector("#textsix").value;
    localStorage.setItem("event-6", textarea)
})
saveSeven.addEventListener("click", function(event){
    event.preventDefault()
    var textarea = document.querySelector("#textseven").value;
    localStorage.setItem("event-7", textarea)
})
saveEight.addEventListener("click", function(event){
    event.preventDefault()
    var textarea = document.querySelector("#texteight").value;
    localStorage.setItem("event-8", textarea)
})
saveNine.addEventListener("click", function(event){
    event.preventDefault()
    var textarea = document.querySelector("#textnine").value;
    localStorage.setItem("event-9", textarea)
})

//  Functions that take each events key from local storage, and display them in their relative text area.
function renderEventOne(){
    var userEvent = localStorage.getItem("event-1");
    text0ne.textContent = userEvent
    
}
function renderEventTwo(){
    var userEvent = localStorage.getItem("event-2");
    textTwo.textContent = userEvent
    
}
function renderEventThree(){
    var userEvent = localStorage.getItem("event-3");
    textThree.textContent = userEvent
    
}
function renderEventFour(){
    var userEvent = localStorage.getItem("event-4");
    textFour.textContent = userEvent
    
}
function renderEventFive(){
    var userEvent = localStorage.getItem("event-5");
    textFive.textContent = userEvent
    
}
function renderEventSix(){
    var userEvent = localStorage.getItem("event-6");
    textSix.textContent = userEvent
    
}
function renderEventSeven(){
    var userEvent = localStorage.getItem("event-7");
    textSeven.textContent = userEvent
    
}
function renderEventEight(){
    var userEvent = localStorage.getItem("event-8");
    textEight.textContent = userEvent
    
}
function renderEventNine(){
    var userEvent = localStorage.getItem("event-9");
    textNine.textContent = userEvent
    
}

//  A for loop that changes the background color of text area when time passes. It does this by adding a new class that is predefined in style.css.
for (i = 0; i < timeBlockArr.length; i++) {
    var timeBlock = timeBlockArr[i];
    var textBlock = textBlockArr[i];
    if (moment(timeNow, 'h A').isAfter(moment(timeBlock, 'h A'))) {
        textBlock.classList.add("past");
    } else if (moment(timeNow, 'h A').isBefore(moment(timeBlock, 'h A'))) {
        textBlock.classList.add("future");
    } else if (moment(timeNow, 'h A').isSame(moment(timeBlock, 'h A'))) {
        textBlock.classList.add("present");
    }
}


// Calls the functions made above to display the user's event on page reload.
renderEventOne()
renderEventTwo()
renderEventThree()
renderEventFour()
renderEventFive()
renderEventSix()
renderEventSeven()
renderEventEight()
renderEventNine()




