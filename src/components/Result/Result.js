import React from 'react';

let occurence = (str, pattern) => {
	let myStyle = {
		fontSize:"40px",
		textAlign: "right",
		maxHeight: "48px",
		fontWeight:"300",
		position:"absolute",
		top:"25%",
		right:"2%",
		display:"block"
	};
	let arr = [...str]
	let commas = arr.filter( (x) => x === ",");

	if(commas.length <= 2){ return myStyle; }

	if(commas.length === 3){
		myStyle.fontSize = "30px";
		myStyle.top = "40%";
		return myStyle;
	}
	if(commas.length === 4){
		myStyle.fontSize = "23px";
		myStyle.top = "50%";
		return myStyle;
	}
	if(commas.length > 4){
		myStyle.fontSize = "18px";
		myStyle.top = "60%";
		return myStyle;
	}
	
}

const result = (props) => {
	return (
		<span style={occurence(props.output.toLocaleString(), ",")}> 
			{ 
				props.output.toLocaleString().length < 26 ? 
				props.output.toLocaleString() : <code>"Big number error"</code> 
			} 
		</span>
	);
};

export default result;