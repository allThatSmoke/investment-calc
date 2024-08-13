import { useState } from 'react';

import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

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

  const inputIsValid = (investmentParams.duration >= 1);
  

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
      <Header />
      <UserInput onChange={handleChange} investmentParams={investmentParams} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results userData={investmentParams}/>}
    </>
  )
}

export default App
