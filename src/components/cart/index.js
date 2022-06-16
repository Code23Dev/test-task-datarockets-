import React from "react";
// styles
import { Container } from "./Cart.styles";
// components
import BillOption from "../bill-option";
import CalculateBill from "../calculate-bill";

function Cart() {
	return (
		<Container>
			<BillOption />
			<CalculateBill />
		</Container>
	);
}

export default Cart;
