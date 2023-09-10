import Calculator from "../components/CalculatorComponent"
import Information from "../components/InformationComponent"
import "../css/CalculatorPage.css"

export default function CalculatorPage() {

    return (
        <div className="page">
            <Information informationHeader="Body Mass Index (BMI)" 
            informationText="Body mass index (BMI) is a measure of body fat based on height and weight.
            It's used as a general indicator to determine if a person has a healthy body weight for their height.
            BMI is not a perfect measure of body fat for children, adolescents, athletes."></Information>
            <Calculator bmiHeader="BMI calculator"/>
        </div>
    )
}
