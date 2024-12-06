
export function Button({onClick , value}){

	return(
		<button
		onClick={onClick}
		value={value}	
		>{value}</button>
	)
}