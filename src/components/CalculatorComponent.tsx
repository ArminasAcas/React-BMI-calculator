import Slider from "./SliderComponent"
import CalculatorResult from "./CalculatorResultComponent"
import "../css/CalculatorComponent.css"
import { useState } from "react"

export default function Calculator() {
    const [weight, setWeight] = useState(1);
    const [height, setHeight] = useState(1);
    let weightLabel = "Weight: " + weight + " kg";
    let heightLabel = "Height: " + height + " cm";
   
    return (
        <div className="calculator">
             <Slider label={weightLabel} minValue={1} maxValue={300} sliderID="weight"/>
             <Slider label={heightLabel} minValue={1} maxValue={250} sliderID="height"/>
            <CalculatorResult/>
        </div>
    )
}