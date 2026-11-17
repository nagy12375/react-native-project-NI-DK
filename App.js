import { StyleSheet, View, TextInput,Text,Pressable } from 'react-native';
import Bejegyzes from './components/Bejegyzes.js';
import { useState } from 'react';
import useBejegyzes from './hooks/useBejegyzesek.js';

export default function App() {
  const { utinaplo, betolt, ujBejegyzes, kedvencValtas } = useBejegyzes();
  const [cim, setCim] = useState('');
  const [hely, setHely] = useState('');
  const [hibas,setHibas] = useState(false);

  function hozzaadas() {
    if(cim === '' || hely === ''){
      setHibas(true);
      return;
    }

    setHibas(false);
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
              <TextInput style={[{ flex: 1 },styles.mezo,hibas && cim === '' && {borderColor:'red'}]} placeholder="cim: " value={cim} onChangeText={setCim} />
              <Pressable onPress={hozzaadas} 
               style={({pressed})=>[
               styles.gomb,pressed && {opacity:0.6}]}
               >
            <Text style={{color:'white'}} >Nyomj meg</Text>
              </Pressable>
            </View>
            <TextInput style={[styles.mezo,hibas && hely === '' && {borderColor:'red'}]} placeholder="hely: " value={hely} onChangeText={setHely} />
          </View>

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
  statisztika: {
    flexDirection: 'row',
    gap: 10,
    width: '80%',
  },
  statdoboz: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    padding: 5,
  },
  keresomezo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  keresoresz: {
    padding: 15,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: '80%',
  },
    gomb:{
    backgroundColor:'blue',
    padding:5,
    width:100,
    alignItems:'center',
    justifyContent:'center'
  },
  mezo:{
    borderWidth:1,
    padding:5,
    borderRadius:12,
    margin:5
  }
});
