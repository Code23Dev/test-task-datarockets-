import React, { useState } from "react";
// styles
import { Container, Img } from "./Main.styles";
// image
import logo from "../../images/logo.svg";
// components
import Cart from "../cart";
// context
import { MainContext, UpdateContext } from "../context/MainContext";

function Main() {
	const [bill, setBill] = useState("");
	const [people, setPeople] = useState("");
	const [tip, setTip] = useState(0);
	const [customTip, setCustomTip] = useState(0);

	return (
		<Container>
			<Img>
				<img src={logo} alt='logo' />
			</Img>
			<MainContext.Provider
				value={{ setBill, setPeople, setTip, setCustomTip }}>
				<UpdateContext.Provider value={{ bill, people, tip, customTip }}>
					<Cart />
				</UpdateContext.Provider>
			</MainContext.Provider>
		</Container>
	);
}

export default Main;
