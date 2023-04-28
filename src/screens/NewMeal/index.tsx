import { Text, Title } from '@components/Typography';
import {
  Container,
  FormContainer,
  InputRadioWrapper,
  InputWrapper,
} from './styles';
import { HeaderScreen } from '@components/HeaderScreen';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useTheme } from 'styled-components';
import { useState } from 'react';

export function NewMeal() {
  const theme = useTheme();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [isInDiet, setIsInDiet] = useState(false);

  const handleNewMeal = () => {
    console.log({ name, description, date, hour, isInDiet });
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
          <Title size="sm">Está dentro da Dieta?</Title>
          <InputRadioWrapper>
            <Input />
            <Input />
          </InputRadioWrapper>
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
