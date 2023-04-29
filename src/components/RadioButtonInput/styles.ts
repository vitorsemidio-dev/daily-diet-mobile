import styled from 'styled-components/native';
import { colors } from '@theme/index';

export const Container = styled.View`
  gap: 8px;
`;

export const ContainerOptions = styled.View`
  flex-direction: row;
  gap: 8px;
`;

type RadioProps = {
  isActive: boolean;
  type?: 'success' | 'danger';
};

export const Radio = styled.Pressable<RadioProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  height: 50px;
  border-radius: 8px;
  border-width: 2px;

  background-color: ${({ theme, isActive, type }) =>
    isActive ? colors[type]['light'] : theme.COLORS.BASE_GRAY_600};

  border-color: ${({ theme, isActive, type }) =>
    isActive ? colors[type || 'success']['dark'] : theme.COLORS.BASE_GRAY_600};
`;
