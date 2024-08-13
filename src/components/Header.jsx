export default function Header({headerImage}){
	return(
		<header id="header">
			<img src={headerImage} alt="header image money bag" />
			<h2>Investment Calculator</h2>
		</header>
	)
}