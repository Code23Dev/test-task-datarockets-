import React from "react";
// styles
import { Container, Left, Right } from "./BillPerPerson.styles";

function BillPerPerson({ leftPara, leftSecondary, amount }) {
	return (
		<Container>
			<Left>
				<p>{leftPara}</p>
				<span>/ {leftSecondary}</span>
			</Left>
			<Right>
				<p>
					$<span>{amount}</span>
				</p>
			</Right>
		</Container>
	);
}

export default BillPerPerson;
