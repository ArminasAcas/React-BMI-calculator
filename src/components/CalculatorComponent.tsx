import Slider from "./SliderComponent"
import CalculatorResult from "./CalculatorResultComponent"
import "../css/CalculatorComponent.css"
import { useState } from "react"

export default function Calculator() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    let weightLabel = "Weight: " + weight + " kg";
    let heightLabel = "Height: " + height + " cm";

    function calculateBMI() {
        return Number((weight / Math.pow(height/100,2)).toFixed(2));    
    }
   
    return (
        <div className="calculator">
            <span className="calculator__header">BMI Calculator</span>
             <Slider label={weightLabel} minValue={1} maxValue={300} sliderID="weight" setState={setWeight} />
             <Slider label={heightLabel} minValue={1} maxValue={250} sliderID="height" setState={setHeight}/>
            <CalculatorResult bmiValue={calculateBMI()}/>
        </div>
    )
}