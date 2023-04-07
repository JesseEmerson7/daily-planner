// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let currentTime = $("#currentDay");
let todaysTime = dayjs().hour();

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
    //if the id saved in local storage matches the id of text area the info is put on the page if not it is left empty
    let localInput = localStorage.getItem(hourNumber2);

    if (localInput !== undefined) {
      $(this).prev("textarea").val(localInput);
    }
  });

  //time at top of page
  setInterval(function () {
    $("#currentDay").text(dayjs().format("MMMM DD, YYYY, hh: mm: ss a"));
  }, 1000);

  //setting color classes to days past present and future

  function colors() {
    hourNine = dayjs().hour(9);
    hourTen = dayjs().hour(10);
    hourEleven = dayjs().hour(11);
    hourTwelve = dayjs().hour(12);
    hourOne = dayjs().hour(13);
    hourTwo = dayjs().hour(14);
    hourThree = dayjs().hour(15);
    hourFour = dayjs().hour(16);
    hourFive = dayjs().hour(17);
    console.log(hourNine);
    //9
    if (hourNine.isAfter(todaysTime, "hour")) {
      console.log("its working");
      $("#hour-9").addClass("future");
    } else if (hourNine.isSame(todaysTime, "hour")) {
      $("#hour-9").addClass("present");
    } else {
      $("#hour-9").addClass("past");
    }
    //10
    if (hourTen.isAfter(todaysTime, "hour")) {
      $("#hour-10").addClass("future");
    } else if (hourTen.isSame(todaysTime, "hour")) {
      $("#hour-10").addClass("present");
    } else {
      $("#hour-10").addClass("past");
    }
    //11
    if (hourEleven.isAfter(todaysTime, "hour")) {
      $("#hour-11").addClass("future");
    } else if (hourEleven.isSame(todaysTime, "hour")) {
      $("#hour-11").addClass("present");
    } else {
      $("#hour-11").addClass("past");
    }
    //12
    if (hourTwelve.isAfter(todaysTime, "hour")) {
      $("#hour-12").addClass("future");
    } else if (hourTwelve.isSame(todaysTime, "hour")) {
      $("#hour-12").addClass("present");
    } else {
      $("#hour-12").addClass("past");
    }
    //1
    if (hourOne.isAfter(todaysTime, "hour")) {
      $("#hour-1").addClass("future");
    } else if (hourOne.isSame(todaysTime, "hour")) {
      $("#hour-1").addClass("present");
    } else {
      $("#hour-1").addClass("past");
    }
    //2
    if (hourTwo.isAfter(todaysTime, "hour")) {
      $("#hour-2").addClass("future");
    } else if (hourTwo.isSame(todaysTime, "hour")) {
      $("#hour-2").addClass("present");
    } else {
      $("#hour-2").addClass("past");
    }
    //3
    if (hourThree.isAfter(todaysTime, "hour")) {
      $("#hour-3").addClass("future");
    } else if (hourThree.isSame(todaysTime, "hour")) {
      $("#hour-3").addClass("present");
    } else {
      $("#hour-3").addClass("past");
    }
    //4
    if (hourFour.isAfter(todaysTime, "hour")) {
      $("#hour-4").addClass("future");
    } else if (hourFour.isSame(todaysTime, "hour")) {
      $("#hour-4").addClass("present");
    } else {
      $("#hour-4").addClass("past");
    }
    //5
    if (hourFive.isAfter(todaysTime, "hour")) {
      $("#hour-5").addClass("future");
    } else if (hourFive.isSame(todaysTime, "hour")) {
      $("#hour-5").addClass("present");
    } else {
      $("#hour-5").addClass("past");
    }

    //long way to do it. Not sure how to otherwise.
  }
  colors();
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
