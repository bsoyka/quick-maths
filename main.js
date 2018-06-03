$(function () {
    var keyCodes = {
        48: 0,
        49: 1,
        50: 2,
        51: 3,
        52: 4,
        53: 5,
        54: 6,
        55: 7,
        56: 8,
        57: 9
    };
    $("#correct").hide();
    $("#incorrect").hide();
    $("#levelUp").hide();
    var pointCount = 0;
    var pointsPerAnswer = 1;
    var numberUntilChange = 5;
    var questionsToLevelUp = 5;
    var randomNumber1 = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
    var randomNumber2 = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
    var answer = randomNumber1 * randomNumber2;
    var userResponse = "";
    var questionString = randomNumber1 + " x " + randomNumber2 + " = ";
    $("#question").html(questionString);
    var body = document.querySelector('body');
    body.onkeydown = function (event) {
        if (event.which === 8) {
            userResponse = userResponse.slice(0, -1);
        }
        if (event.which === 48) {
            userResponse += 0;
        }
        if (event.which === 49) {
            userResponse += 1;
        }
        if (event.which === 50) {
            userResponse += 2;
        }
        if (event.which === 51) {
            userResponse += 3;
        }
        if (event.which === 52) {
            userResponse += 4;
        }
        if (event.which === 53) {
            userResponse += 5;
        }
        if (event.which === 54) {
            userResponse += 6;
        }
        if (event.which === 55) {
            userResponse += 7;
        }
        if (event.which === 56) {
            userResponse += 8;
        }
        if (event.which === 57) {
            userResponse += 9;
        }
        if (event.which === 13) {
            if (userResponse == "") {
                // console.log("Blank.");
                return false;
            }
            if (userResponse == answer) {
                // console.log("Correct.");
                randomNumber1 = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
                randomNumber2 = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
                answer = randomNumber1 * randomNumber2;
                userResponse = "";
                questionString = randomNumber1 + " x " + randomNumber2 + " = ";
                // console.log(questionString);
                $("#question").html(questionString);
                $("#correct").show();
                $("#incorrect").hide();
                setTimeout(function () {
                    $("#correct").hide();
                }, 1000);
                pointCount = pointCount + pointsPerAnswer;
                numberUntilChange = numberUntilChange - 1;
                if (numberUntilChange == 0) {
                    questionsToLevelUp = questionsToLevelUp + 5;
                    numberUntilChange = questionsToLevelUp;
                    pointsPerAnswer = pointsPerAnswer * 2;
                    $("#levelUp").show();
                    setTimeout(function () {
                        $("#levelUp").hide();
                    }, 3000);
                }
            } else {
                // console.log("Incorrect.");
                randomNumber1 = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
                randomNumber2 = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
                answer = randomNumber1 * randomNumber2;
                userResponse = "";
                questionString = randomNumber1 + " x " + randomNumber2 + " = ";
                // console.log(questionString);
                $("#question").html(questionString);
                $("#correct").hide();
                $("#incorrect").show();
                setTimeout(function () {
                    $("#incorrect").hide();
                }, 1000);
                numberUntilChange = 5;
                if (pointCount - 5 > 0) {
                    pointCount = pointCount - 5;
                } else {
                    pointCount = 0;
                }
                pointsPerAnswer = 1;
                return false;
            }
        }
        $("#question").html(questionString + userResponse);
    };
    setInterval(function () {
        $("#pointCount").html(pointCount);
    }, 100);
});
