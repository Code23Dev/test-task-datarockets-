import styled from "styled-components";

export const Container = styled.div`
	padding: 10px 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: var(--font);
`;

export const Left = styled.div`
	color: #ffffff;
	font-size: 1rem;
	padding-right: 40px;

	p {
		font-weight: var(--font-bold);
	}

	span {
		font-size: 0.8rem;
		color: var(--cart-secondary-text);
	}

	@media screen and (max-width: 375px) {
		font-size: 0.9rem;
		padding-right: 20px;

		span {
			font-size: 0.7rem;
		}
	}
`;

export const Right = styled.div`
	color: var(--cart-price-text);

	p {
		font-size: 36px;
		font-weight: var(--font-bold);
		margin-bottom: 0;
		width: 180px;
		text-align: right;
		overflow: auto;
	}

	@media screen and (max-width: 375px) {
		p {
			font-size: 26px;
			width: 120px;
		}
	}
`;
