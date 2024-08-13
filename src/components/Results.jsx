import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({userData}){
	let investmentArray = calculateInvestmentResults(userData); 

	return(
		<table id="result">
			<thead>
				<tr >
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{investmentArray.map((yearData) => {
					const totalInterest = 
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						userData.initialInvestment

					const investedCapital =
						userData.initialInvestment +
						yearData.annualInvestment * yearData.year

					return(
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(investedCapital)}</td>
						</tr>)})
				}
			</tbody>
		</table>
	)
}