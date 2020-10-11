function generatePassword () {

    const debug = true;

    // Local variables in from form - all noted as strings

    var passwordLengthString = document.forms["passwordGenerateForm"]["passwordLength"].value;
    var varPasswordLength;
    var includeLowercaseLettersString = document.forms["passwordGenerateForm"]["includeLowercaseLetters"].value;
    var includeUppercaseLettersString = document.forms["passwordGenerateForm"]["includeUppercaseLetters"].value;
    var includeSpecialCharactersString = document.forms["passwordGenerateForm"]["includeSpecialCharacters"].value;
    var includeNumbersString = document.forms["passwordGenerateForm"]["includeNumbers"].value;
    var potentialPasswordArray = "";
    var randomPassword = "";

    // Log page input for debugging
    logDebug (debug, "Password Length String:  " + passwordLengthString);
    logDebug (debug, "Lowercase:  " + includeLowercaseLettersString);
    logDebug (debug, "Uppercase:  " + includeUppercaseLettersString);
    logDebug (debug, "Special Characters:  " + includeSpecialCharactersString);
    logDebug (debug, "Numbers:  " + includeNumbersString);

    varPasswordLength = parseInt (passwordLengthString);
    var varIncludeLowercaseLetters = setBoolean (includeLowercaseLettersString);
    var varIncludeUppercaseLetters = setBoolean (includeUppercaseLettersString);
    var varIncludeSpecialCharacters = setBoolean (includeSpecialCharactersString);
    var varIncludeNumbers = setBoolean (includeNumbersString);

    // Validate Password Length
    if (isNaN (passwordLengthString)) {
        alert ("For password length, please enter a number between 8 and 128");
    }

    else if (passwordLengthString === "") {
        alert ("Password length is required, please enter a number between 8 and 128");

    }

    else if ((varPasswordLength < 8) || (varPasswordLength > 128)) {
        alert ("Password length must be between 8 and 128");
    }

    else if ((!varIncludeLowercaseLetters) && (!varIncludeUppercaseLetters) && (!varIncludeSpecialCharacters) && (!varIncludeNumbers)) {
        alert ("You must select at least one of the include items to continue.");
    }

    else {
        // Form validation complete, let's proceed with password generation and create the potential password array

        if (varIncludeLowercaseLetters) {
            potentialPasswordArray = potentialPasswordArray + "abcdefghijklmnopqrstuvwxyz";
        }

        if (varIncludeUppercaseLetters) {
            potentialPasswordArray = potentialPasswordArray + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (varIncludeSpecialCharacters) {
            potentialPasswordArray = potentialPasswordArray +  "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        }

        if (varIncludeNumbers) {
            potentialPasswordArray = potentialPasswordArray + "0123456789";
        }

        logDebug (debug, "Potential password array: " + potentialPasswordArray);

        // Now that potential password array is built, let's walk through and build the random password

        var lengthPasswordArray = potentialPasswordArray.length;
        var randomNumber;
        for (var counter = 0; counter < varPasswordLength; counter ++) {
            randomNumber = Math.floor (Math.random () * lengthPasswordArray);
            logDebug (debug, "Random #" + counter + " : " + randomNumber);
            randomPassword = randomPassword + potentialPasswordArray [randomNumber];
        }

        logDebug (debug, "Random Password = " + randomPassword);

        document.getElementById("generatedPassword").value=randomPassword;
    }

    return false;
}

function logDebug (debugStatus, message) {
    if (debugStatus) {
        console.log (message);
    }
}

function setBoolean (stringVariable) {
    if (stringVariable === "true") {
        return true;
    }

    else if (stringVariable === "false") {
        return false;
    }

    else{
        return null;
    }
}