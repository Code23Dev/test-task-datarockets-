import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;

	@media screen and (max-width: 375px) {
		padding: 0 0;
		overflow: hidden;
	}
`;
