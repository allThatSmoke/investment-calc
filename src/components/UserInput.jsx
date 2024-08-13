import { useState } from 'react';

const INITIAL_PARAMS = {
	initialInvestment: 10000,
	annualInvestment: 1200,
	expectedReturn: 6,
	duration: 10
}

export default function UserInput(){
	const [investmentParams, setInvestmentParams] = useState(INITIAL_PARAMS)

	function handleChange(inputIdentifier, newValue){
		setInvestmentParams((prevParams) => {
			return {
				...prevParams,
				[inputIdentifier]: newValue
			}
		})
	}

	return (
		<>
		<section id="user-input" >
			<div className="input-group">
			    <p>
					<label>Initial Investment</label>
					<input 
					  type="number" 
					  required
					  value={investmentParams.initialInvestment}
					  onChange={(event)=>handleChange("initialInvestment", event.target.value)}>
					</input>
				</p>
				<p>
					<label>Annual Investment</label>
					<input 
					  type="number" 
					  required
					  value={investmentParams.annualInvestment}
					  onChange={(event)=>handleChange("annualInvestment", event.target.value)}>
					</input>
				</p>
			</div>
			<p></p>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input 
					  type="number"
					  required
					  value={investmentParams.expectedReturn}
					  onChange={(event)=>handleChange("expectedReturn", event.target.value)}></input>
				</p>
				<p>
					<label>Duration</label>
					<input 
					  type="number" 
					  required
					  value={investmentParams.duration}
					  onChange={(event)=>handleChange("duration", event.target.value)}></input>
				</p>
			</div>
		</section>
		<section>
			<p>Initial Investment Value: {investmentParams.initialInvestment}</p>
			<p>Annual Investment Value: {investmentParams.annualInvestment}</p>
			<p>Expected Return: {investmentParams.expectedReturn}</p>
			<p>Duration: {investmentParams.duration}</p>
		</section>
		</>
	)
}