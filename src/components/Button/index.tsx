import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type ButtonProps = {
  type?: 'solid' | 'outline';
};

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.85,
})<ButtonProps>`
  margin-top: 8px;
  padding: 16px 24px;
  border-width: 1px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'solid':
        return theme.COLORS.BASE_GRAY_200;
      case 'outline':
        return 'transparent';
      default:
        return theme.COLORS.BASE_GRAY_200;
    }
  }};

  border-color: ${({ theme, type }) => {
    switch (type) {
      case 'solid':
        return 'transparent';
      case 'outline':
        return theme.COLORS.BASE_GRAY_200;
      default:
        return 'transparent';
    }
  }};
`;
