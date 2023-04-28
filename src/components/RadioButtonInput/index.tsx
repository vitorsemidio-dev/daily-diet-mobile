import { Circle } from '@components/Circle';
import { Title } from '@components/Typography';
import { useState } from 'react';
import { Container, ContainerOptions, Radio } from './styles';

interface Option {
  labelText: string;
  value: any;
}

interface Props {
  label: string;
  onChange: (value: any) => void;
  options: Option[];
}

export function RadioButtonInput({ label, onChange, options }: Props) {
  const [value, setValue] = useState(undefined);

  const handleChange = (option: Option) => {
    setValue(option.value);
    onChange(option.value);
  };

  return (
    <Container>
      <Title size="sm">{label}</Title>
      <ContainerOptions>
        {options.map((option) => (
          <Radio
            key={option.value}
            isActive={value === option.value}
            type={option.value ? 'success' : 'danger'}
            onPress={() => handleChange(option)}
          >
            <Circle
              type={option.value ? 'success' : 'danger'}
              intensity="dark"
              size={8}
            />
            <Title size="sm">{option.labelText}</Title>
          </Radio>
        ))}
      </ContainerOptions>
    </Container>
  );
}
