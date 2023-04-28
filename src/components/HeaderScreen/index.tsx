import { Banner } from '@components/Banner';
import { Title } from '@components/Typography';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

interface Props {
  title: string;
}

export function HeaderScreen({ title }: Props) {
  const theme = useTheme();
  const bannerHeight = 132;
  const topIconPosition = bannerHeight / 2 - 12;

  const navigate = useNavigation();
  const handleGoBack = () => {
    navigate.goBack();
  };

  return (
    <Banner
      style={{
        height: bannerHeight,
        backgroundColor: theme.COLORS.BASE_GRAY_500,
      }}
    >
      <Feather
        name="arrow-left"
        size={24}
        style={{ position: 'absolute', left: 24, top: topIconPosition }}
        onPress={handleGoBack}
      />
      <Title size="sm">{title}</Title>
    </Banner>
  );
}
