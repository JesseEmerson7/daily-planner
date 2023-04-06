// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let hourNine = $("#hour-9");
let hourTen = $("#hour-10");
let hourEleven = $("#hour-11");
let hourTwelve = $("#hour-12");
let hourOne = $("#hour-1");
let hourTwo = $("#hour-2");
let hourThree = $("#hour-3");
let hourFour = $("#hour-4");
let hourFive = $("#hour-5");

let currentTime = $("#currentDay");

$(document).ready(function () {
  currentTime.text("Todays Date and Time Here");

  //once save button is clicked the parent element and attribute are saved as a var and the input set in the text area is set as another var. those two values are saved into local storage with hourNumber as their key to the saved data.
  $(".saveBtn").click(function () {
    let hourNumber = $(this).parent("div").attr("id");

    let hourInput = $(this).prev("textarea").val();

    console.log(hourNumber);
    console.log(hourInput);

    localStorage.setItem(hourNumber, hourInput);
  });

  //putting saved data back onto the page if it has been saved using a .each method to loop through all "textarea" and find their id.
  $(".saveBtn").each(function () {
    let hourNumber2 = $(this).parent("div").attr("id");
    // console.log(hourNumber2);
    //if the id saved in local storage matches the id of text area the info is put on the page if not it is left empty
    let localInput = localStorage.getItem(hourNumber2);

    if (localInput !== undefined) {
      $(this).prev("textarea").val(localInput);
    }
  });

  //time at top of current time
  setInterval(function () {
    $("#currentDay").text(dayjs().format("MMMM DD, YYYY, hh: mm: ss a"));
  }, 1000);

  //setting color classes to days past present and future

  function colors() {}
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
