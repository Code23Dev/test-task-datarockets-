import React, { useEffect } from "react";
// styles
import { Container, Grid, CustomTip } from "./TipBill.styles";
// component
import TipAmount from "../tip-amount";

function TipBill({ tip, customTip, setTip, setCustomTip }) {
	useEffect(() => {
		if (!tip && document.querySelector(".active"))
			document.querySelector(".active").classList.remove("active");
	}, [tip]);

	const selectTip = (e) => {
		const children = [...e.target.parentElement.children];
		children.map((elem) => elem.classList.remove("active"));
		e.target.classList.add("active");
	};

	const handleCustomTip = (e) => {
		if (!isNaN(e.target.value)) {
			setTip(e.target.value);
			setCustomTip(e.target.value);
			e.target.style.borderColor = "var(--input-focus-border)";
		}
	};

	const handleChange = (e) => {
		if (!isNaN(Number(e.target.value))) {
			setTip(Number(e.target.value));
			setCustomTip(Number(e.target.value));
		}
	};

	return (
		<Container>
			<label htmlFor='tip-amount'>Select Tip %</label>
			<Grid onClick={(e) => selectTip(e)}>
				<TipAmount amount={5} setTip={setTip} setCustomTip={setCustomTip} />
				<TipAmount amount={10} setTip={setTip} setCustomTip={setCustomTip} />
				<TipAmount amount={15} setTip={setTip} setCustomTip={setCustomTip} />
				<TipAmount amount={25} setTip={setTip} setCustomTip={setCustomTip} />
				<TipAmount amount={50} setTip={setTip} setCustomTip={setCustomTip} />
				<CustomTip
					type='text'
					name='custom-tip'
					placeholder='Custom'
					value={customTip === 0 ? "" : customTip}
					onChange={(e) => handleChange(e)}
					onBlur={(e) => handleCustomTip(e)}></CustomTip>
			</Grid>
		</Container>
	);
}

export default TipBill;
