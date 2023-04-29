import illustrationDietOffImg from '@assets/illustration-diet-off.png';
import illustrationDietOnImg from '@assets/illustration-diet-on.png';
import { Button } from '@components/Button';
import { Text, Title } from '@components/Typography';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Container, FeedbackIllustration } from './styles';

export type FeedbackRouteParams = {
  dietType: 'on' | 'off';
};

function FeedbackDietOnMeal() {
  const theme = useTheme();
  const navigate = useNavigation();
  const handleGoToHomePage = () => {
    navigate.reset({
      routes: [{ name: 'home' }],
      index: 0,
    });
  };
  return (
    <>
      <Title
        style={{
          color: theme.COLORS.BRAND_GREEN_DARK,
        }}
      >
        Continue assim!
      </Title>
      <Text align="center">
        Você continua{' '}
        <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
          dentro da dieta{' '}
        </Text>{' '}
        muito bem!
      </Text>

      <FeedbackIllustration
        source={illustrationDietOnImg}
        style={{ marginTop: 40 }}
      />

      <Button onPress={handleGoToHomePage} style={{ marginTop: 32 }}>
        <Text
          style={{
            color: theme.COLORS.BASE_GRAY_700,
            fontFamily: theme.FONT_FAMILY.BOLD,
          }}
        >
          Ir para a página inicial
        </Text>
      </Button>
    </>
  );
}

function FeedbackDietOffMeal() {
  const theme = useTheme();
  const navigate = useNavigation();

  const handleGoToHomePage = () => {
    navigate.reset({
      routes: [{ name: 'home' }],
      index: 0,
    });
  };
  return (
    <>
      <Title
        style={{
          color: theme.COLORS.BRAND_RED_DARK,
        }}
      >
        Que Pena!
      </Title>
      <Text align="center">
        Você saiu da{' '}
        <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>dieta dessa </Text>{' '}
        vez, mas continue se esforçando e não desista!
      </Text>

      <FeedbackIllustration
        source={illustrationDietOffImg}
        style={{ marginTop: 40 }}
      />

      <Button onPress={handleGoToHomePage} style={{ marginTop: 32 }}>
        <Text
          style={{
            color: theme.COLORS.BASE_GRAY_700,
            fontFamily: theme.FONT_FAMILY.BOLD,
          }}
        >
          Ir para a página inicial
        </Text>
      </Button>
    </>
  );
}

export function FeedbackMeal() {
  const route = useRoute();
  const { dietType } = route.params as FeedbackRouteParams;
  const isDiet = dietType === 'on';
  return (
    <Container>
      {isDiet ? <FeedbackDietOnMeal /> : <FeedbackDietOffMeal />}
    </Container>
  );
}
