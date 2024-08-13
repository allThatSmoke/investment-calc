export default function UserInput({onChange, investmentParams}){
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
					  onChange={(event)=>onChange("initialInvestment", event.target.valueAsNumber)}>
					</input>
				</p>
				<p>
					<label>Annual Investment</label>
					<input 
					  type="number" 
					  required	
					  value={investmentParams.annualInvestment}
					  onChange={(event)=>onChange("annualInvestment", event.target.valueAsNumber)}>
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
					  onChange={(event)=>onChange("expectedReturn", event.target.valueAsNumber)}></input>
				</p>
				<p>
					<label>Duration</label>
					<input 
					  type="number"
					  required
					  value={investmentParams.duration}
					  onChange={(event)=>onChange("duration", event.target.valueAsNumber)}></input>
				</p>
			</div>
		</section>
		</>
	)
}