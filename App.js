import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import Bejegyzes from './components/Bejegyzes.js';
import { useState } from 'react';
import useBejegyzes from './hooks/useBejegyzesek.js';

export default function App() {
  const { utinaplo, betolt, ujBejegyzes, kedvencValtas } = useBejegyzes();
  const [cim, setCim] = useState('');
  const [hely, setHely] = useState('');

  function hozzaadas() {
    ujBejegyzes(cim, hely);
    setCim('');
    setHely('');
  }

  return (
    <View style={styles.container}>
      {betolt ? (
        <Text>Betöltés...</Text>
      ) : (
        <>
          <Text>összes bejegyzés: {utinaplo.length}</Text>

          <Text>Kedvencek száma: {utinaplo.filter((elem) => elem.kedvenc).length}</Text>
          <TextInput placeholder="cim: " value={cim} onChangeText={setCim} />
          <TextInput placeholder="hely: " value={hely} onChangeText={setHely} />
          <Button title="Nyomj meg" onPress={hozzaadas} />

          {utinaplo.map((elem, index) => (
            <Bejegyzes
              key={index}
              cim={elem.cim}
              hely={elem.hely}
              kedvenc={elem.kedvenc}
              onKedvenc={() => kedvencValtas(index)}
            ></Bejegyzes>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
