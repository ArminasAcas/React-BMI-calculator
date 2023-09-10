import "../css/InformationComponent.css"

interface Props {
    informationHeader: string,
    informationText: string
}

export default function Information(props:Props) {

    return (
        <div className="information-container">
            <h2 className="information-container__header">{props.informationHeader}</h2>
            <p className="information-container__text">{props.informationText}</p>
        </div>
    )
}