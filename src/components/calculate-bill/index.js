import React, { useContext } from "react";
// styles
import { Flex, Container } from "./CalculateBill.styles";
// components
import BillPerPerson from "../bill-per-person";
import Reset from "../reset";
// context
import { UpdateContext } from "../context/MainContext";

function CalculateBill() {
	const context = useContext(UpdateContext);
	const { bill, people, tip } = context;

	let billByOne, tipAmount, total;

	if (bill > 0 && people > 0) {
		billByOne = (bill / people).toFixed(2);
		tipAmount = ((billByOne * tip) / 100).toFixed(2);
		total = (Number(billByOne) + Number(tipAmount)).toFixed(2);
	}

	return (
		<Flex>
			<Container>
				<BillPerPerson
					leftPara='Tip Amount'
					leftSecondary='Person'
					amount={tipAmount || "00.00"}
				/>
				<BillPerPerson
					leftPara='Total'
					leftSecondary='Person'
					amount={total || "00.00"}
				/>
			</Container>
			<Reset />
		</Flex>
	);
}

export default CalculateBill;
