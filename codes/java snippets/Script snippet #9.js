function bmiCalculator (weight, height) {
    // Calculate BMI: weight (kg) / (height (m) * height (m))
    // Assuming weight is in kg and height is in meters
   var bmi = weight / (height * height);
    bmi= Math.floor(bmi);
    let interpretation;

    if (bmi < 18.5) {
        interpretation = `Your BMI is ${bmi.toFixed(1)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = `Your BMI is ${bmi.toFixed(1)}, so you have a normal weight.`;
    } else { // bmi > 24.9
        interpretation = `Your BMI is ${bmi.toFixed(1)}, so you are overweight.`;
    }

    return interpretation;
}
