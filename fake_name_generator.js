var gender = "Both";
var monthofbirth;
var dayofbirth;
var alertRepeatCheckM = true; // alerts are available

function showalert(message, alerttype) {

    $('#alert_placeholder').append('<div id="alertdiv" class="alert ' +
        alerttype + ' show fade">' + message +
    '</span><button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>')

    setTimeout(function () { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs
        if (alertRepeatCheckM == true) {
            $("#alertdiv").remove();
        }

    }, 3000);
}

function genderBoth() {
    if(gender === "Both") {
        return;
    }
    gender = "Both";
    console.log("Gender: " + gender);
    showalert("Nameset was changed to" + "<strong> All <strong>", "alert-info");
}

function genderMale() {
    if(gender === "Male") {
        return;
    }
    gender = "Male";
    console.log("Gender: " + gender);
    showalert("Nameset was changed to" + "<strong> Male <strong>", "alert-info");
    alertRepeatCheckM = true
}

function genderFemale() {
    if(gender === "Female") {
        return;
    }
    gender = "Female";
    console.log("Gender: " + gender);
    showalert("Nameset was changed to" + "<strong> Female <strong>", "alert-info");


}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


function generate() {
    if (gender === "Both") {
        var randomiser = Math.random();
        console.log(randomiser);
        if (randomiser <= 0.5) {
            var rand1 = Math.floor(Math.random() * nameM.length);
            console.log(rand1);

            var rand2 = Math.floor(Math.random() * lastname.length);
            console.log(rand2);
            var fullName = nameM[rand1] + ' ' + lastname[rand2];
        }
        else {
            var rand1 = Math.floor(Math.random() * nameF.length);
            console.log(rand1);

            var rand2 = Math.floor(Math.random() * lastname.length);
            console.log(rand2);
            var fullName = nameF[rand1] + ' ' + lastname[rand2];
        }
    }
    else if (gender === "Male") {

        //rand1 - это число
        var rand1 = Math.floor(Math.random() * nameM.length);
        console.log(rand1);

        var rand2 = Math.floor(Math.random() * lastname.length);
        console.log(rand2);

        var fullName = nameM[rand1] + ' ' + lastname[rand2];
    }
    else if (gender === "Female") {
        //rand1 - это число
        var rand1 = Math.floor(Math.random() * nameF.length);
        console.log(rand1);

        var rand2 = Math.floor(Math.random() * lastname.length);
        console.log(rand2);

        var fullName = nameF[rand1] + ' ' + lastname[rand2];
    }

    $('#name-info').html(fullName);

    var formattedDate = randomDate(new Date(1950, 0, 1), new Date(2004, 0, 1))

    var d = getMyDate(formattedDate);
    var m = formattedDate.getMonth();
 // JavaScript months are 0-11
    var y = formattedDate.getFullYear();

    $('#date-info').text("Date of birth: " + d + "." + m + "." + y);


    function getMyDate(date) {
        return date.getDate();
    }

}
