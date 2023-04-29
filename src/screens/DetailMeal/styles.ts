import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -32px;
  background-color: ${({ theme }) => theme.COLORS.BASE_GRAY_700};
  padding: 24px;
  border-radius: 24px;
  justify-content: space-between;
`;

export const Info = styled.View`
  gap: 24px;
`;

export const MealContainer = styled.View`
  gap: 8px;
`;

export const DateAndTimeContainer = styled.View`
  gap: 8px;
`;

export const Tag = styled.View`
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.BASE_GRAY_600};
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  padding: 8px 16px;
`;

export const Footer = styled.View``;
