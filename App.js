import { StyleSheet, View, TextInput, Text, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import { tavolsag, szinek } from './theme.js';
import Gomb from './components/Gomb.js';
import Bejegyzes from './components/Bejegyzes.js';
import { useState } from 'react';
import useBejegyzes from './hooks/useBejegyzesek.js';

export default function App() {
  const {width} = useWindowDimensions();
  const ketoszlop = width >= 600;
  const { utinaplo, betolt, ujBejegyzes, kedvencValtas } = useBejegyzes();
  const [cim, setCim] = useState('');
  const [hely, setHely] = useState('');
  const [hibas, setHibas] = useState(false);


  function hozzaadas() {
    if (cim === '' || hely === '') {
      setHibas(true);
      return;
    }

    setHibas(false);
    ujBejegyzes(cim, hely);
    setCim('');
    setHely('');
  }

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      {betolt ? (
        <Text>Betöltés...</Text>
      ) : (
        <>
          <Text>{ketoszlop ? 'true' : 'false' }</Text>
          <View style={styles.statisztika}>
            <View style={styles.statdoboz}>
              <Text>összes bejegyzés: {utinaplo.length}</Text>
            </View>
            <View style={styles.statdoboz}>
              <Text>Kedvencek száma: {utinaplo.filter((elem) => elem.kedvenc).length}</Text>
            </View>
          </View>
          <View style={styles.keresoresz}>
            <View style={styles.keresomezo}>
              <TextInput
                style={[{ flex: 1 }, styles.mezo, hibas && cim === '' && { borderColor: 'red' }]}
                placeholder="cim: "
                value={cim}
                onChangeText={setCim}
              />
              <Gomb
                onPress={hozzaadas}
                style={({ pressed }) => [styles.gomb, pressed && { opacity: 0.6 }]}
                cim="Hozzáadás"
              ></Gomb>
            </View>
            <TextInput
              style={[styles.mezo, hibas && hely === '' && { borderColor: 'red' }]}
              placeholder="hely: "
              value={hely}
              onChangeText={setHely}
            />
          </View>

          <ScrollView style={{width:'100%'}} 
          contentContainerStyle={[styles.listatartalom,ketoszlop && styles.ketoszlopkontener]}>
          {utinaplo.map((elem, index) => (
            <Bejegyzes 
              key={index}
              cim={elem.cim}
              hely={elem.hely}
              kedvenc={elem.kedvenc}
              kep
              onKedvenc={() => kedvencValtas(index)}
              style= {ketoszlop ? styles.ketoszlop : styles.egyoszlop}
            ></Bejegyzes>
          ))}
          </ScrollView>
        </>
      )}
      
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: szinek.feher,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statisztika: {
    flexDirection: 'row',
    gap: tavolsag.kozepes,
    width: '80%',
  },
  statdoboz: {
    borderWidth: 1,
    borderColor: szinek.veszelyes,
    borderRadius: tavolsag.kozepes,
    padding: tavolsag.kicsi,
  },
  keresomezo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: tavolsag.kicsi,
  },
  keresoresz: {
    padding: tavolsag.kozepes,
    margin: tavolsag.kicsi,
    borderWidth: 1,
    borderColor: szinek.szovegsotet,
    borderRadius: tavolsag.kozepes,
    width: '80%',
  },
  gomb: {
    padding: tavolsag.kicsi,
    width: 100,
  },
  mezo: {
    borderWidth: 1,
    padding: tavolsag.kicsi,
    borderRadius: tavolsag.kozepes,
    margin: tavolsag.kicsi,
  },
  listatartalom:{
    width:'100%',
    margin:tavolsag.kicsi,
    padding:tavolsag.kozepes, 
    gap:tavolsag.kicsi 
  },
  ketoszlopkontener: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
},
  ketoszlop:{
    width:'48%'
  },
  egyoszlop:{
    width:'100%'
  }
});
