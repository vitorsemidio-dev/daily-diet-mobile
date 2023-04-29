import styled from 'styled-components/native';
import { colors } from '@theme/index';

type CircleProps = {
  type?: 'success' | 'danger';
  intensity?: 'light' | 'mid' | 'dark';
  size?: number;
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
