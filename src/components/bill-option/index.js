import React, { useContext } from "react";
// styles
import { Container } from "./BillOption.styles";
// components
import InputBill from "../input-bill";
import TipBill from "../tip-bill";
// icons
import dollar from "../../images/icon-dollar.svg";
import user from "../../images/icon-person.svg";
// context
import { MainContext, UpdateContext } from "../context/MainContext";

function BillOption() {
	const mainContext = useContext(MainContext);
	const updateContext = useContext(UpdateContext);
	const { setBill, setPeople, setTip, setCustomTip } = mainContext;
	const { bill, people, customTip, tip } = updateContext;

	return (
		<Container>
			<InputBill
				label='Bill'
				icon={dollar}
				name='bill'
				min={0}
				setState={setBill}
				value={bill}
			/>

			<TipBill
				customTip={customTip}
				setTip={setTip}
				setCustomTip={setCustomTip}
				tip={tip}
			/>

			<InputBill
				label='Number of People'
				icon={user}
				name='people'
				min={1}
				setState={setPeople}
				value={people}
			/>
		</Container>
	);
}

export default BillOption;
