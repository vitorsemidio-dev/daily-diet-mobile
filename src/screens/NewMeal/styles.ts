import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE_GRAY_700};
`;

export const FormContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE_GRAY_700};
  border-radius: 20px;
  margin-top: -24px;
  padding: 24px;
`;

export const InputWrapper = styled.View`
  gap: 8px;
  margin-bottom: 16px;
  flex: 1;
`;

export const InputRadioWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`;
