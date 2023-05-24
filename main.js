function calculateBMI() {
    // Get the height and weight from the input fields.
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    // Check to make sure that the user has entered valid values for height and weight.
    if (!height || !weight) {
        alert("Please enter valid values for height and weight.");
        return;
    }

    // Calculate the BMI.
    var bmi = weight / (height * height / 10000);

    // Display the BMI.
    document.getElementById("bmiValue").innerHTML = bmi;

    // Determine the BMI category.
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal";
    } else if (bmi < 30) {
        category = "Overweight";
    } else if (bmi < 35) {
        category = "Obese";
    } else {
        category = "Extremely obese";
    }

    // Display the BMI category.
    document.getElementById("bmiCategory").innerHTML = category;

    // Display the result in the result div.
    document.getElementById("result").innerHTML = `
        <h1>Your BMI Result</h1>
        <p><strong>BMI Value:</strong> ${bmi}</p>
        <p><strong>BMI Category:</strong> ${category}</p>
    `;

}