import styled from 'styled-components/native';
import appTheme from '@theme/index';

type CircleProps = {
  type?: 'success' | 'danger';
  intensity?: 'light' | 'mid' | 'dark';
  size?: number;
};

const colors = {
  success: {
    light: appTheme.COLORS.BRAND_GREEN_LIGHT,
    mid: appTheme.COLORS.BRAND_GREEN_MID,
    dark: appTheme.COLORS.BRAND_GREEN_DARK,
  },
  danger: {
    light: appTheme.COLORS.BRAND_RED_LIGHT,
    mid: appTheme.COLORS.BRAND_RED_MID,
    dark: appTheme.COLORS.BRAND_RED_DARK,
  },
};

export const Circle = styled.View<CircleProps>`
  width: ${({ size }) => size || 14}px;
  height: ${({ size }) => size || 14}px;
  border-radius: ${({ size }) => size / 2 || 14 / 2}px;
  background-color: ${({ theme, type, intensity }) => {
    switch (type) {
      case 'success':
        return colors.success[intensity || 'mid'];
      case 'danger':
        return colors.danger[intensity || 'mid'];
      default:
        return colors.success['mid'];
    }
  }};
`;
