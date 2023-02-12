import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  color: ${({ theme }) => theme.colors.textDark};
  border-radius: 8px;
  position: relative;
  height: 350px;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  overflow: hidden;

  &::after {
    position: absolute;
    width: 100%;
    content: '';
    height: 5px;
    background: ${({ theme }) => theme.colors.accent};
    top: 0;
    left: 0;
  }
`;

export const CardHeading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 16px;
  line-height: 1.2;
`;

export const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
`;

export const CardDetailsValue = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;

  & > span {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;
