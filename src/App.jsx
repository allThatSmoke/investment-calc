import { useState } from 'react';

import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result'

import { calculateInvestmentResults } from './util/investment';

const INITIAL_PARAMS = {
	initialInvestment: 10000,
	annualInvestment: 1200,
	expectedReturn: 6,
	duration: 10
}

function App() {
  const [investmentParams, setInvestmentParams] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

	function handleChange(inputIdentifier, newValue){
		setInvestmentParams((prevParams) => {
			return {
				...prevParams,
				[inputIdentifier]: newValue
			}
		})
	}

  const investmentResultsArray = calculateInvestmentResults(investmentParams);  
  console.log(investmentParams);
  console.log(investmentResultsArray);

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} investmentParams={investmentParams} />
      <Result tableDataArray={investmentResultsArray}/>
    </>
  )
}

export default App
