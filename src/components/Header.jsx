import headerImage from '../assets/investment-calculator-logo.png'
<assets />

export default function Header(){
	return(
		<header id="header">
			<img src={headerImage} alt="header image $ money bag" />
			<h1>Investment Calculator</h1>
		</header>
	)
}