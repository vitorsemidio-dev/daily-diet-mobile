import { Banner } from '@components/Banner';
import { Title } from '@components/Typography';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

interface Props {
  title: string;
  type?: 'success' | 'danger' | 'light';
}

export function HeaderScreen({ title, type }: Props) {
  const theme = useTheme();
  const navigate = useNavigation();

  const bannerHeight = 132;
  const topIconPosition = bannerHeight / 2 - 12;

  const handleGoBack = () => {
    navigate.goBack();
  };

  return (
    <Banner
      variant={type}
      style={{
        height: bannerHeight,
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
