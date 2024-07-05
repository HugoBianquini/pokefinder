import styled from "styled-components";

export const CustomButton = styled.button`
  width: fit-content;
  padding: 12px 32px;
  height: 4rem;
  border: 0;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.yellow[500]};
  color: ${({ theme }) => theme.colors.grey[900]};
  font-size: 1.25rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
