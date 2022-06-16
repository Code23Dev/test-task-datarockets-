import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	button {
		width: 100%;
		padding: 12px 0;
		background: var(--reset-bg);
		color: var(--reset-color);
		text-align: center;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-weight: var(--font-bold);
		font-size: 17px;
		text-transform: uppercase;
		letter-spacing: 1px;
		transition: 0.2s;

		&:hover {
			background-color: #9fe8df;
		}

		@media screen and (max-width: 375px) {
			padding: 10px 0;
			font-size: 15px;
		}
	}
`;
