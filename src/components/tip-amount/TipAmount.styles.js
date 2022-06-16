import styled from "styled-components";

export const Button = styled.button`
	background: var(--tip-input-bg);
	color: var(--tip-input-color);
	cursor: pointer;
	width: 100%;
	border: 2px solid transparent;
	font-family: "Space Mono", monospace;
	font-size: var(--input-font-size);
	border-radius: 5px;
	transition: 0.2s;
	padding: 8px;

	&:hover {
		background: var(--tip-input-hover-bg);
		color: var(--tip-input-hover-color);
		border-color: var(--input-focus-border);
	}

	&.active {
		background: var(--tip-input-hover-bg);
		color: var(--tip-input-hover-color);
		border-color: var(--input-focus-border);
	}
`;
