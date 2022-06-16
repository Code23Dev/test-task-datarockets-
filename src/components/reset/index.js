import React, { useContext } from "react";
// styles
import { Container } from "./Reset.styles";
// context
import { MainContext } from "../context/MainContext";

function Reset() {
	const context = useContext(MainContext);
	const { setBill, setPeople, setTip, setCustomTip } = context;

	const allReset = (e) => {
		setBill("");
		setPeople("");
		setTip(0);
		setCustomTip(0);
	};

	return (
		<Container>
			<button type='reset' onClick={(e) => allReset(e)}>
				Reset
			</button>
		</Container>
	);
}

export default Reset;
