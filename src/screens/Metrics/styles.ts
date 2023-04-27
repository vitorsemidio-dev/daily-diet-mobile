import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const MetricsContainer = styled.View`
  flex: 1;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.COLORS.BASE_GRAY_700};
  margin-top: -24px;
  border-radius: 20px;
`;

export const DataMetricsContainer = styled.View`
  margin-top: 32px;
  gap: 16px;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
