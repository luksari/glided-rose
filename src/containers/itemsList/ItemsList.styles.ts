import styled from 'styled-components';

export const ItemsListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
`;

export const ItemsListWrapper = styled.ul`
  width: 100%;
  padding: 24px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.textDark};
  background: ${({ theme }) => theme.colors.accent};
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 8px 24px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.accentLight};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;
