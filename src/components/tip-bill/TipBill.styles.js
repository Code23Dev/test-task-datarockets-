import styled from "styled-components";

export const Container = styled.div`
	label {
		font-size: 0.82rem;
		color: var(--label-color);
		margin-bottom: 10px;
		font-weight: 600;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 15px;

	@media screen and (max-width: 375px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const CustomTip = styled.input`
	max-width: 125px;
	min-width: 125px;
	background: var(--input-bg);
	color: var(--input-text-color);
	font-weight: var(--font-bold);
	border: 2px solid transparent;
	font-family: "Space Mono", monospace;
	font-size: 1.3rem;
	border-radius: 5px;
	padding: 8px;
	transition: 0.2s;
	text-align: center;

	&:hover,
	&:focus {
		border-color: var(--input-focus-border);
		outline: none;
	}

	&.active {
		background: var(--tip-input-hover-bg);
		color: var(--tip-input-hover-color);
		border-color: var(--input-focus-border);
	}

	@media screen and (max-width: 375px) {
		min-width: 125px;
		max-width: 150px;
	}
`;
