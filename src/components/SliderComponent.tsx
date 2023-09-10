import { Dispatch, SetStateAction } from "react"
import "../css/SliderComponent.css"

interface sliderProps {
    label: string, 
    minValue: number,
    maxValue: number,
    startingValue: number, 
    sliderID: string,
    setState: Dispatch<SetStateAction<number>>
}

export default function Slider(props: sliderProps) {

    function onChangeHandle(event: React.ChangeEvent<HTMLInputElement>) {
        props.setState(parseInt(event.target.value));
    }

    return (
        <div className="slider">
            <label className="slider__label" htmlFor={props.sliderID}>{props.label}</label>
            <input className="slider__slide" type="range" min={props.minValue} max={props.maxValue} id={props.sliderID} onChange={onChangeHandle} value={props.startingValue}></input>
        </div>
    )
}