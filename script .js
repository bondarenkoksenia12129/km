function convert() {
    // Get input value
    var kmInput = document.getElementById("kmInput").value;

    // Convert to miles (1 km = 0.621371 miles)
    var miles = kmInput * 0.621371;

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Result: " + miles.toFixed(2) + " miles";
}

function reset() {
    // Clear input and result
    document.getElementById("kmInput").value = "";
    document.getElementById("result").innerHTML = "Result: ";
}