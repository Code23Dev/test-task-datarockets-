import React from "react";
// styles
import { Container, Error } from "./InputBill.styles";

function InputBill({ label, name, icon, min, setState, value }) {
	const validation = (parent) => {
		if (isNaN(Number(parent.value))) {
			parent.style.borderColor = "#CD7861";
			setState(0);
			return;
		} else if (parent.value === "") {
			parent.style.borderColor = "transparent";
			setState(0);
			return;
		}

		if (Number(parent.value) < min) {
			parent.style.borderColor = "#CD7861";
			setState(0);
		} else {
			parent.style.borderColor = "#70b7ae";
			setState(Number(parent.value));
		}
	};

	return (
		<Container>
			<label htmlFor={name}>{label}</label>
			<div>
				<input
					type='text'
					name={name}
					id={name}
					onFocus={(e) => (e.target.style.borderColor = "#70b7ae")}
					onBlur={(e) => validation(e.target)}
					onChange={(e) => setState(e.target.value)}
					value={value || ""}
				/>
				<span>
					<img src={icon} alt='icon' />
				</span>
				<Error value={value}>Isn't valid input</Error>
			</div>
		</Container>
	);
}

export default InputBill;
