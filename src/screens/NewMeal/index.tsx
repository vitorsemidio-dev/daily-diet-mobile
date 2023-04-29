import { Button } from '@components/Button';
import { HeaderScreen } from '@components/HeaderScreen';
import { Input } from '@components/Input';
import { RadioButtonInput } from '@components/RadioButtonInput';
import { Text, Title } from '@components/Typography';
import { useNavigation } from '@react-navigation/native';
import { mealCreate } from '@storage/mealCreate';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  FormContainer,
  InputRadioWrapper,
  InputWrapper,
} from './styles';

export function NewMeal() {
  const theme = useTheme();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [isDiet, setIsDiet] = useState(false);

  const navigate = useNavigation();

  const navigateToFeedbackScreen = () => {
    navigate.navigate('feedbackMeal', {
      dietType: isDiet ? 'on' : 'off',
    });
  };

  const handleNewMeal = async () => {
    await mealCreate({
      name,
      description,
      date,
      hour,
      isDiet,
    });

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
            onChange={(value) => setIsDiet(value)}
          />
        </InputWrapper>

        <Button onPress={handleNewMeal}>
          <Text
            style={{
              color: theme.COLORS.BASE_WHITE,
              fontFamily: theme.FONT_FAMILY.BOLD,
            }}
          >
            Cadastrar Refeição
          </Text>
        </Button>
      </FormContainer>
    </Container>
  );
}
