import Slider from "./SliderComponent"
import CalculatorResult from "./CalculatorResultComponent"
import "../css/CalculatorComponent.css"
import { useState } from "react"
interface Props {
    bmiHeader: string
}

export default function Calculator(props:Props) {
    const [weight, setWeight] = useState(75);
    const [height, setHeight] = useState(179);
    let weightLabel = "Weight: " + weight + " kg";
    let heightLabel = "Height: " + height + " cm";

    function calculateBMI() {
        return Number((weight / Math.pow(height/100,2)).toFixed(2));    
    }
   
    return (
        <div className="calculator">
            <span className="calculator__header">{props.bmiHeader}</span>
             <Slider label={weightLabel} minValue={1} maxValue={300} startingValue={weight} sliderID="weight" setState={setWeight}/>
             <Slider label={heightLabel} minValue={1} maxValue={250} startingValue={height} sliderID="height" setState={setHeight}/>
            <CalculatorResult bmiValue={calculateBMI()}/>
        </div>
    )
}