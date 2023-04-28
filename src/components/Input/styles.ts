import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    color: ${theme.COLORS.BASE_GRAY_100};
    background-color: ${theme.COLORS.BASE_GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    border-width: 1px;
    border-color: ${theme.COLORS.BASE_GRAY_500};
  `}

  border-radius: 6px;
  padding: 16px;
`;
