import styled from "styled-components";

export const Flex = styled.div`
	padding: 40px;
	background: var(--cart-bg);
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 25px;

	@media screen and (max-width: 375px) {
		padding: 20px;
		overflow: hidden;
		border-radius: 10px;
	}
`;

export const Container = styled.div`
	@media screen and (max-width: 375px) {
		width: 100%;
	}
`;
