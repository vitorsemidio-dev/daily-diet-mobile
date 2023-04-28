import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled(TouchableOpacity)`
  margin-top: 8px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.COLORS.BASE_GRAY_200};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
