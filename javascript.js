$(document).ready(function () {

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

    //onclick to handle text area submission

    $(".submit-btn").on("click", function () {

        var textValue = $(this).siblings('.form-control').val();
        var hour = $(this).parent().attr("id");
        console.log("hour: ", hour);
        console.log("text: ", textValue)
        //save item in local storage
        localStorage.setItem(hour, textValue);
    })

    //function to update the background color based off of time 

    function updateBackground() {
        //get time with moment.js
        var time = moment().hours();

        $(".hourblock").each(function () {
            var value = parseInt($(this).attr("value"))
            if (time > value) {
                $(this).children().addClass("past")

            }
            else if (time < value) {
                $(this).children().addClass("future")
            }
            else {
                $(this).children().addClass("present")   
            }
        })
        //if statements determining if hour is current past or present



        //if current add class of current 


        // if past add class of past 



        //if future add class of future

    }
    updateBackground()



    //pull values from local storage display to screen
    $("#text-9").val(localStorage.getItem("h-9"));
    $("#text-10").val(localStorage.getItem("h-10"));
    $("#text-11").val(localStorage.getItem("h-11"));
    $("#text-12").val(localStorage.getItem("h-12"));
    $("#text-1").val(localStorage.getItem("h-1"));
    $("#text-2").val(localStorage.getItem("h-2"));
    $("#text-3").val(localStorage.getItem("h-3"));
    $("#text-4").val(localStorage.getItem("h-4"));
    $("#text-5").val(localStorage.getItem("h-5"));



});