import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import Bejegyzes from './components/Bejegyzes.js';
import { useState } from 'react';

export default function App() {
  const [b, setB] = useState([{ cim: 'Nivák', hely: 'Eger', kedvenc: false }]);
  const [cim, setCim] = useState('');
  const [hely, setHely] = useState('');

  function kedvencValtas(index) {
    setB((e) =>
      e.map((elem, i) =>
        i === index
          ? {
              ...elem,
              kedvenc: !elem.kedvenc,
            }
          : elem,
      ),
    );
  }

  return (
    <View style={styles.container}>
      <Text>összes bejegyzés: {b.length}</Text>

      <Text>Kedvencek száma: {b.filter((elem) => elem.kedvenc).length}</Text>
      <TextInput placeholder="cim: " value={cim} onChangeText={setCim} />
      <TextInput placeholder="hely: " value={hely} onChangeText={setHely} />
      <Button title="Nyomj meg" onPress={() => setB((e) => [...e, { cim, hely, kedvenc: false }])} />

      {b.map((elem, index) => (
        <Bejegyzes
          key={index}
          cim={elem.cim}
          hely={elem.hely}
          kedvenc={elem.kedvenc}
          onKedvenc={() => kedvencValtas(index)}
        ></Bejegyzes>
      ))}
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
