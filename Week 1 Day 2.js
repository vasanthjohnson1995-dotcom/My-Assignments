function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let testNumber1 = 7;
console.log("The number", testNumber1, "is:", isOddOrEven(testNumber1));

let testNumber2 = 12;
console.log("The number", testNumber2, "is:", isOddOrEven(testNumber2));

//-------------------Number Type------------------------//

function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

let testNumber3 = 10;
console.log("The number", testNumber3, "is:", checkNumberType(testNumber3));

let testNumber4 = -5;
console.log("The number", testNumber4, "is:", checkNumberType(testNumber4));

let testNumber5 = 0;
console.log("The number", testNumber5, "is:", checkNumberType(testNumber5));


//-------------------var vs let vs const Learning------------------------//

const browserName = "Chrome";

function getBrowserName() {
    if (browserName == "Chrome") 
        
    {
        var browserName = "Firefox"; 
        console.log("Inside function (using var):", browserName);
    }
}
getBrowserName();

function getBrowserNameWithLet() {
    if (browserName === "Chrome")
        
        {
        let browserName = "Edge"; 
        console.log("Inside function (using let):", browserName);
    }

    console.log("Outside if-block (using let):", browserName);
}

getBrowserNameWithLet();


//-------------------Conditional Statements------------------------//

function launchBrowser(browserName) {
    if (browserName.toLowerCase() === "chrome") 
        {
        console.log("Launching Chrome browser...");
    } else {
        console.log("Launching other browser:", browserName);
    }
}

function runTests(testType) {
    switch (testType.toLowerCase()) 
    {
        case "smoke":
            console.log("Running Smoke Tests...");
            break;
        case "sanity":
            console.log("Running Sanity Tests...");
            break;
        case "regression":
            console.log("Running Regression Tests...");
            break;
        default:
            console.log("Running Default Smoke Tests...");
            break;
    }
}

launchBrowser("Chrome");
runTests("sanity");

//-------------------Grade Calculation------------------------//

function getGrade(score) {
    switch (true) 
    {
        case (score >= 90 && score <= 100):
            return "Grade A";
        case (score >= 75 && score < 90):
            return "Grade B";
        case (score >= 50 && score < 75):
            return "Grade C";
        case (score >= 35 && score < 50):
            return "Grade D";
        case (score >= 0 && score < 35):
            return "Grade F";
        default:
            return "Invalid Score";
    }
}

let studentScore1 = 92;
console.log("Score:", studentScore1, "→", getGrade(studentScore1));

let studentScore2 = 68;
console.log("Score:", studentScore2, "→", getGrade(studentScore2));

let studentScore3 = 20;
console.log("Score:", studentScore3, "→", getGrade(studentScore3));

let studentScore4 = -5;
console.log("Score:", studentScore4, "→", getGrade(studentScore4));
