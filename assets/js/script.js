// TODO
    // (a) current date at top of page
    // (b) page styled to mock-up
    // (c) buttons are clickable and saves text to local storage
    // (d) colors change when time is past,present,future



// Global
var today = document.getElementById("currentDay")
var saveButton = document.querySelector(".saveBtn")
var userEventSpan = document.querySelector(".textarea")


today.textContent = moment().format('dddd, MMMM Do')




// Function that adds eventListener on each button, saves to LS
btns = document.getElementsByClassName("saveBtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
        event.preventDefault()
        var textarea = document.querySelector("textarea").value;
        localStorage.setItem("textarea", textarea)
        
    });

}

textarea = document.getElementsByClassName("textarea");
for (var i = 0; i < textarea.length; i++) {
    console.log("working")
    textarea


    btns[i].addEventListener("click", function (event) {
        event.preventDefault()
        var textarea = document.querySelector("textarea").value;
        localStorage.setItem("textarea", textarea)
        
    });

}



function renderUserEvent(){
    var userEvent = localStorage.getItem("textarea");
    userEventSpan.textContent = userEvent;
    
}


renderUserEvent()





