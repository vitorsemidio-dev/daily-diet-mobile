import logoImg from '@assets/logo.png';
import { Container, Header, Logo, ProfileImage } from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <ProfileImage
          source={{
            uri: 'https://github.com/vitorsemidio-dev.png',
          }}
        />
      </Header>
    </Container>
  );
}
