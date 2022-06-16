import React from "react";
// styles
import { Button } from "./TipAmount.styles";

function TipAmount({ amount, setTip, setCustomTip }) {
	return (
		<Button
			onClick={() => {
				setTip(amount);
				setCustomTip(0);
			}}>
			{amount}%
		</Button>
	);
}

export default TipAmount;
