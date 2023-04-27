import styled from 'styled-components/native';

type BannerProps = {
  variant?: 'success' | 'danger' | 'light';
};

export const Banner = styled.View<BannerProps>`
  padding: 20px 16px;

  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'success':
        return theme.COLORS.BRAND_GREEN_LIGHT;
      case 'danger':
        return theme.COLORS.BRAND_RED_LIGHT;
      case 'light':
        return theme.COLORS.BASE_GRAY_600;
      default:
        return theme.COLORS.BASE_GRAY_600;
    }
  }};

  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
