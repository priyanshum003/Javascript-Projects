
console.log("Working")
var displayText = document.querySelector(".display-text");
// console.log(displayText)

var PasswordLength = document.querySelector("#charLen");


function copyText() {
    // Get the text field
    var copyText = document.getElementById("copy");
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
}


function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function changeCharLength() {
    var charLen = displayText.value.length;
    document.getElementById("charLen").innerText = charLen;
}

// Change the value of character length
var slider = document.getElementById("myRange");
console.log(slider);
slider.addEventListener("change", function () {
    console.log("working !!");
    console.log(slider.value);
    document.querySelector("#charLen").innerText = slider.value;
})


/* Function to generate combination of password */
function generatePassword(checkList) {
    var genratedPassword = "";
    var string = "";
    var combination = [
        "abcdefghijklmnopqrstuvwxyz",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "0123456789",
        "!@#$%^&*()_+"
    ]
    for (let i = 0; i < 4; i++) {
        if (checkList[i]) {
            string += combination[i];
        }
    }


    for (let i = 1; i <= 50; i++) {
        var char = Math.floor(Math.random()
            * string.length + 1);

        genratedPassword += string.charAt(char)
    }


    var password = genratedPassword.slice(0, PasswordLength.innerText);
    checkpassword(password)
    return password;

}

function runApp() {
    var checkList = [
        hasLower = document.querySelector("#lowercase").checked,
        hasUpper = document.querySelector("#uppercase").checked,
        hasNumber = document.querySelector("#number").checked,
        hasSymbols = document.querySelector("#symbols").checked
    ]
    console.log(checkList)
    displayText.value = generatePassword(checkList)
    // console.log(generatePassword())
}



// Password Check 

function checkpassword(password) {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
        strength += 1;
    }
    if (password.length >= 20) {
        strength += 1;
    }

    var changeStrength = document.querySelectorAll(".strength-box");
    for (i = 0; i < 4; i++) {
        changeStrength[i].style.backgroundColor = "transparent";
        changeStrength[i].style.border = 1;
    }
    switch (strength) {
        case 0:
            console.log("0")
            // changeStrength.style.backgroundColor = "transparent";
            changeStrength[0].style.backgroundColor = "transparent";

            break;

        case 1:
            //   strengthbar.value = 25;
            console.log(25)
            document.getElementById("strength-text").innerText = "Weak";
            changeStrength[0].style.backgroundColor = "#facb64";
            break;

        case 2:
            console.log(50)
            document.getElementById("strength-text").innerText = "Medium";

            changeStrength[0].style.backgroundColor = "#facb64";
            changeStrength[1].style.backgroundColor = "#facb64";
            break;

        case 3:
            console.log(75)
            document.getElementById("strength-text").innerText = "Strong";

            changeStrength[0].style.backgroundColor = "#facb64";
            changeStrength[1].style.backgroundColor = "#facb64";
            changeStrength[2].style.backgroundColor = "#facb64";

            break;

        case 4:
            console.log(100)
            document.getElementById("strength-text").innerText = "Very Strong";

            changeStrength[0].style.backgroundColor = "#facb64";
            changeStrength[1].style.backgroundColor = "#facb64";
            changeStrength[2].style.backgroundColor = "#facb64";
            changeStrength[3].style.backgroundColor = "#facb64";


            break;

        case 5:
            document.getElementById("strength-text").innerText = "Unbreakable";

            changeStrength[0].style.backgroundColor = "#facb64";
            changeStrength[1].style.backgroundColor = "#facb64";
            changeStrength[2].style.backgroundColor = "#facb64";
            changeStrength[3].style.backgroundColor = "#facb64";

            break;
    }

    showStrength(strength);
}

function showStrength(strength) {

}

// SLider

