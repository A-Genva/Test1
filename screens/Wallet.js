import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class Wallet extends React.Component {
  static navigationOptions = {
    header: <Text>Wallet</Text>,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>
          This is the Wallet Screen.
        </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
