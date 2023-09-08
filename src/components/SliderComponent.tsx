import "../css/SliderComponent.css"

interface sliderProps {
    label: string, 
    minValue: number,
    maxValue: number, 
    sliderID: string
}

export default function Slider(props: sliderProps) {
    return (
        <div className="slider">
            <label className="slider__label">{props.label}</label>
            <input type="range" min={props.minValue} max={props.maxValue} id={props.sliderID}></input>
        </div>
    )
}