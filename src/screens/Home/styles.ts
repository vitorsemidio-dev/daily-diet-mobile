import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE_GRAY_700};
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  height: 40px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 38px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.BASE_GRAY_200};
  border-style: solid;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.BASE_GRAY_200};
`;
