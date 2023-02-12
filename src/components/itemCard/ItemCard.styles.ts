import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.background};
  position: relative;
  max-width: 250px;
  max-height: 300px;

  &::after {
    position: absolute;
  }
`;

export const CardHeading = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 16px;
`;

export const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardDetailsValue = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;

  & > span {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;
