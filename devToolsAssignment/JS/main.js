function countToTen() {
    var digit = ""; // Initialize with an empty string
    var X = 1;
    while (X < 11) {
        digit += X + "<br>"; // Add the number and line break
        X++;
    }
    document.getElementById("countingToTen").innerHTML = digit;
}
