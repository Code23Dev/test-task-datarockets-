import styled from "styled-components";

export const Container = styled.div`
	& > * {
		display: block;
		width: 100%;
	}

	label {
		font-size: 0.82rem;
		color: var(--label-color);
		margin-bottom: 5px;
		font-weight: 600;
		display: inline-block;
		width: fit-content;
	}

	div {
		position: relative;
	}

	input {
		padding: 10px 15px;
		padding-left: 50px;
		background: var(--input-bg);
		color: var(--input-text-color);
		font-weight: var(--font-bold);
		border: 2px solid transparent;
		font-size: var(--input-font-size);
		border-radius: 8px;
		text-align: right;
		width: 100%;
		font-family: "Space Mono", monospace;

		&:focus {
			border-color: var(--input-focus-border);
			outline: none;
		}
	}

	span {
		display: inline-block;
		width: 50px;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Error = styled.p`
	display: block;
	position: absolute;
	top: -25px;
	right: 0;
	color: #cd7861;
	font-size: 0.8rem;
	display: ${(props) => (props.value !== 0 ? "none" : "block")};
`;
