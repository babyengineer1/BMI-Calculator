function bmiCalculator (weight, height) {
    let bmi = weight / (height**2);
    bmi = Math.round (bmi)
    console.log (bmi)
}

bmiCalculator(65, 1.8);