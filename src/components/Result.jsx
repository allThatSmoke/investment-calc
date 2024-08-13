import { formatter } from "../util/investment"

export default function Result({tableDataArray}){
	// make new copy of tableDataArray
	let updatedDataArray = [...tableDataArray];
	console.log(tableDataArray);
	console.log(updatedDataArray);

	//console.log(updatedDataArray);
	// update first year of updatedDataArray
	updatedDataArray[0] = {
		...updatedDataArray[0],
		totalInterest: updatedDataArray[0].interest,
		investedCapital: updatedDataArray[0].valueEndOfYear - updatedDataArray[0].interest
	}

	// add total interest calcs
	for (let i = 1; i < updatedDataArray.length; i++ ){
		updatedDataArray[i] = {
			...updatedDataArray[i],
			totalInterest: updatedDataArray[i].interest + updatedDataArray[i-1].totalInterest
		}

		// add investedValued calcs
		updatedDataArray[i] = {
			...updatedDataArray[i],
			investedCapital: updatedDataArray[i].valueEndOfYear - updatedDataArray[i].totalInterest
		}
	}

	return(
		<section id="result">
			<table className="center">
				<thead>
					<tr >
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{updatedDataArray.map((row) => 
						<tr key={row.year}>
							<td>{row.year}</td>
							<td>{formatter.format(row.valueEndOfYear)}</td>
							<td>{formatter.format(row.interest)}</td>
							<td>{formatter.format(row.totalInterest)}</td>
							<td>{formatter.format(row.investedCapital)}</td>
						</tr>)
					}
				</tbody>
			</table>
		</section>
	)
}