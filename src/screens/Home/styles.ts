import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

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
`;

export const MealsContainer = styled.View`
  margin-top: 40px;
`;

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

export const DayMealContainer = styled.View`
  margin-top: 40px;
  gap: 40px;
`;

export const DayMealGroupList = styled.View`
  gap: 8px;
`;

export const DayMealList = styled.View`
  gap: 8px;
`;

export const DayMealItem = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BASE_GRAY_500};
  padding: 14px 16px;
  border-radius: 6px;
  gap: 8px;
  align-items: center;
`;

type CircleProps = {
  type?: 'success' | 'danger';
};

export const Circle = styled.View<CircleProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return theme.COLORS.BRAND_GREEN_MID;
      case 'danger':
        return theme.COLORS.BRAND_RED_MID;
      default:
        return theme.COLORS.BRAND_GREEN_MID;
    }
  }};
`;

export const Divider = styled.View`
  height: 14px;
  width: 2px;
  background-color: ${({ theme }) => theme.COLORS.BASE_GRAY_400};
`;
