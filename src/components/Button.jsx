
export function Button({onClick , value , style}){

	return(
		<button
		style={style}
		onClick={onClick}
		value={value}	
		>{value}</button>
	)
}