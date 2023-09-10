import "../css/CalculatorResult.css"

interface Props {
    bmiValue: number
}

export default function CalculatorResult(props: Props) {

    let bmiStatus = "";

    if (props.bmiValue <= 16.5) bmiStatus = "Severely Underweight";
    else if (props.bmiValue > 16.5 &&props.bmiValue <= 18.5) bmiStatus = "Underweight";
    else if (props.bmiValue > 18.5 &&props.bmiValue <= 25) bmiStatus = "Normal";
    else if (props.bmiValue > 25 &&props.bmiValue <= 30) bmiStatus = "Overweight";
    else bmiStatus = "Obese";

    if (props.bmiValue > 0 && props.bmiValue != Infinity) 
    return (
            <span className="bmi-result">{"Your BMI is " + props.bmiValue + " (" + bmiStatus + ")"}</span>
    )
}