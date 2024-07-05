import styled from "styled-components";

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  column-gap: 10rem;

  img {
    max-width: 45%;
  }
`;

export const SearchContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;

    span {
      color: ${({ theme }) => theme.colors.cyan[500]};
    }
  }

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;

    span {
      color: ${({ theme }) => theme.colors.cyan[500]};
      font-weight: bold;
    }
  }
`;

export const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  margin-top: 2rem;
`;
