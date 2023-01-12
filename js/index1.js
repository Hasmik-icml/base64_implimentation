function base64Encode(input) {
    // Create a base64 character map
    var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    // Initialize variables for the encoded output and padding count
    var encodedOutput = "";
    var paddingCount = 0;

    // Iterate through the input, converting each character to its binary representation
    for (var i = 0; i < input.length; i++) {
        var charCode = input.charCodeAt(i);
        var binary = charCode.toString(2);
        console.log("charCode", charCode);
        console.log("binary", binary);
        // Pad the binary representation to 8 bits if necessary
        while (binary.length < 8) {
            binary = "0" + binary;
        }

        // Append the binary representation to the encoded output
        encodedOutput += binary;
    }

    // Calculate the number of padding characters needed
    paddingCount = encodedOutput.length % 6;

    // Add the padding characters to the encoded output
    for (var i = 0; i < paddingCount; i++) {
        encodedOutput += "0";
    }

    // Iterate through the encoded output, converting each 6-bit group to a base64 character
    var base64Output = "";
    for (var i = 0; i < encodedOutput.length; i += 6) {
        var index = parseInt(encodedOutput.substring(i, i + 6), 2);
        base64Output += base64Chars[index];
    }

    // Add the padding characters to the base64 output
    for (var i = 0; i < paddingCount; i++) {
        base64Output += "=";
    }

    return base64Output;
}
console.log(111, base64Encode("137"));