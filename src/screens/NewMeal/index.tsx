import { Button } from '@components/Button';
import { HeaderScreen } from '@components/HeaderScreen';
import { Input } from '@components/Input';
import { RadioButtonInput } from '@components/RadioButtonInput';
import { Text, Title } from '@components/Typography';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mealCreate } from '@storage/mealCreate';
import { mealGet } from '@storage/mealGet';
import { mealUpdate } from '@storage/mealUpdate';
import { Meal } from '@storage/types';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  FormContainer,
  InputRadioWrapper,
  InputWrapper,
} from './styles';

export type NewMealRouteParams = {
  mealId?: number;
};

export function NewMeal() {
  const navigate = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const [id, setId] = useState<null | number>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [isDiet, setIsDiet] = useState<boolean | undefined>(undefined);

  const params = route.params as NewMealRouteParams;

  useEffect(() => {
    if (!params?.mealId) return;
    mealGet(params?.mealId).then((response) => {
      fillMeal(response);
      console.log('achou meal');
    });
  }, []);

  const fillMeal = (mealData: Meal) => {
    setId(mealData.id);
    setName(mealData.name);
    setDescription(mealData.description);
    setDate(mealData.date);
    setHour(mealData.hour);
    setIsDiet(mealData.isDiet);
  };

  const navigateToFeedbackScreen = () => {
    navigate.navigate('feedbackMeal', {
      dietType: isDiet ? 'on' : 'off',
    });
  };

  const handleSaveMeal = async () => {
    const meal = {
      id,
      name,
      description,
      date,
      hour,
      isDiet,
    };
    if (id) {
      await mealUpdate(meal);
    } else {
      await mealCreate(meal);
    }

    navigateToFeedbackScreen();
  };

  return (
    <Container>
      <HeaderScreen title="Nova Refeição" />
      <FormContainer>
        <InputWrapper>
          <Title size="sm">Nome</Title>
          <Input value={name} onChangeText={setName} />
        </InputWrapper>

        <InputWrapper>
          <Title size="sm">Descrição</Title>
          <Input
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </InputWrapper>

        <InputRadioWrapper>
          <InputWrapper>
            <Title size="sm">Data</Title>
            <Input value={date} onChangeText={setDate} />
          </InputWrapper>

          <InputWrapper>
            <Title size="sm">Hora</Title>
            <Input value={hour} onChangeText={setHour} />
          </InputWrapper>
        </InputRadioWrapper>

        <InputWrapper>
          <RadioButtonInput
            label="Está dentro da Dieta?"
            options={[
              { labelText: 'Sim', value: true },
              { labelText: 'Não', value: false },
            ]}
            value={isDiet}
            onChange={(value) => setIsDiet(value)}
          />
        </InputWrapper>

        <Button onPress={handleSaveMeal}>
          <Text
            style={{
              color: theme.COLORS.BASE_WHITE,
              fontFamily: theme.FONT_FAMILY.BOLD,
            }}
          >
            {id ? 'Salvar Alterações' : 'Cadastrar Refeição'}
          </Text>
        </Button>
      </FormContainer>
    </Container>
  );
}
