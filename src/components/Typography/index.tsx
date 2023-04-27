import styled from 'styled-components/native';

type TextProps = {
  size?: 'xs' | 'sm' | 'md';
  align?: 'left' | 'center' | 'right';
};

export const Text = styled.Text<TextProps>`
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'xs':
        return theme.FONT_SIZE.BODY_XS;
      case 'sm':
        return theme.FONT_SIZE.BODY_S;
      case 'md':
        return theme.FONT_SIZE.BODY_M;
      default:
        return theme.FONT_SIZE.BODY_M;
    }
  }}px;
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme }) => theme.COLORS.BASE_GRAY_200};
`;

type TitleProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
};

export const Title = styled.Text<TitleProps>`
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'xs':
        return theme.FONT_SIZE.TITLE_XS;
      case 'sm':
        return theme.FONT_SIZE.TITLE_S;
      case 'md':
        return theme.FONT_SIZE.TITLE_M;
      case 'lg':
        return theme.FONT_SIZE.TITLE_G;
      default:
        return theme.FONT_SIZE.TITLE_M;
    }
  }}px;
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BASE_GRAY_200};
`;
