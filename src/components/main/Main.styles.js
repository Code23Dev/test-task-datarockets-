import styled from "styled-components";

export const Container = styled.main`
	min-height: 100vh;
	width: 100%;
	background: var(--body-bg);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 70px;

	@media screen and (max-width: 375px) {
		gap: 40px;
		min-height: 100%;
		padding: 30px 10px;
		overflow: hidden;
	}
`;

export const Img = styled.div``;
