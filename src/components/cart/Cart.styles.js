import styled from "styled-components";

export const Container = styled.div`
	padding: 32px;
	background: #ffffff;
	border-radius: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 30px;

	@media screen and (max-width: 375px) {
		grid-template-columns: 1fr;
		padding: 32px 15px;
	}
`;
