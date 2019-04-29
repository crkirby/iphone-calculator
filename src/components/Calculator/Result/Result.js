import React from 'react';
import './Result.css'

let shrink = output => {
	const arr = [...output]
	const commas = arr.filter( (x) => x === ",");

	if(commas.length === 3){
		return { fontSize: "30px", top: "40%" }
	}
	if(commas.length === 4){
		return { fontSize: "23px", top: "50%" }
	}
	if(commas.length > 4){
		return { fontSize: "18px", top: "60%" }
	}
	
}

export default props => {
	return (
		<span className="result" style={shrink(props.output.toLocaleString())}>
			{ props.output.toLocaleString() } 
		</span>
	);
};
