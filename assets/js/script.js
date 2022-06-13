// Global
var today = document.getElementById("currentDay")
var saveButton = document.querySelector(".saveBtn")


today.textContent = moment().format('dddd, MMMM Do')


saveButton.addEventListener("click", function(event){
    event.preventDefault();
    var textarea = document.querySelector("textarea").value;
    localStorage.setItem("textarea", textarea)

} )



// function addToLocal(){
//     localStorage.setItem("events")
// }


// function renderUserScore(){
//     var userInitials = localStorage.getItem("initials");
//     userInitialsSpan.textContent = userInitials;
//     var userScore = localStorage.getItem("recentScore");
//     userInitialsSpan.textContent = userInitials + " scored " + userScore + " points";
// }


btns = document.getElementsByClassName("saveBtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
        event.preventDefault()
        var textarea = document.querySelector("textarea").value;
        localStorage.setItem("textarea", textarea)
        //Add function here
    });
}

// btns = document.getElementsByClassName("");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function (event) {
//         event.preventDefault()
//         var textarea = document.querySelector("textarea").value;
//         localStorage.setItem("textarea", textarea)
//         //Add function here
//     });
// }










// submitButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     var initials = document.querySelector("#initials").value;
    
//     if (initials === "") {
//       alert("Initials cannot be left blank.");
//       return
//     } 
//       localStorage.setItem("initials", initials);
//       hideEnd();
//       showHigh();
      
//     renderUserScore();
//     }
//   );
