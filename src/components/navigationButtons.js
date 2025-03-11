import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NavigationButtons = ({ onPrev, onNext, disablePrev, disableNext }) => {
  return (
    <View style={styles.container}>
      <Button title="Previous" onPress={onPrev} disabled={disablePrev} />
      <Button title="Next" onPress={onNext} disabled={disableNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default NavigationButtons;
