import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.ScrollView`
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
`;

export const MealsContainer = styled.View`
  margin-top: 40px;
`;

export const DayMealContainer = styled.View`
  margin-top: 40px;
  gap: 40px;
`;

export const DayMealGroupList = styled.View`
  gap: 8px;
  margin-bottom: 32px;
`;

export const DayMealList = styled.View`
  gap: 8px;
`;

export const DayMealItem = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BASE_GRAY_500};
  padding: 14px 16px;
  border-radius: 6px;
  gap: 8px;
  align-items: center;
`;

export const Divider = styled.View`
  height: 14px;
  width: 2px;
  background-color: ${({ theme }) => theme.COLORS.BASE_GRAY_400};
`;
