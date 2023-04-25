import { Home } from '@screens/Home';
import { StatusBar, StyleSheet, View } from 'react-native';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Home />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
