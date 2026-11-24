import { Text, View, StyleSheet, Image } from 'react-native';
import { tavolsag, betumeret } from '../theme.js';
import Gomb from './Gomb';

export default function Bejegyzes({ cim, hely, leiras, kedvenc, onKedvenc, kep, style }) {
  return (
    <View style={[styles.kartya,style, kedvenc && styles.kedvenc]}>
      {kep && (
        <View style={styles.kepkontener}>
          <Image
            source={{ uri: 'https://visiteger.com/uploads/1000x_1623064120DSC07392.jpg' }}
            resizeMode="cover"
            style={styles.kep}
          ></Image>
          {kedvenc && <Text style={styles.csillag}>⭐</Text>}
        </View> 
      )}

      <View style={styles.elrendezes}>
        <Text style={styles.cim}>Cím:{cim}</Text>
        <Gomb
          cim={kedvenc ? 'Kedvenc' : 'Nem kedvenc'}
          onPress={onKedvenc}
          style={({ pressed }) => [styles.gomb, pressed && { opacity: 0.6 }]}
        ></Gomb>
      </View>
      <View style={styles.helyszin}>
        <Text>
          Helyszin: <Text style={{ color: 'gray' }}>{hely}</Text>
        </Text>
      </View>

      {leiras && <Text numberOfLines={2}>Leírás:{leiras}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  kartya: {
    padding: tavolsag.nagy,
    margin: tavolsag.kicsi,
    borderRadius: tavolsag.kozepes,
    borderWidth: 2,
  },
  cim: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: betumeret.nagy,
  },
  helyszin: {
    fontFamily: 'Times New Roman',
  },
  kedvenc: {
    borderLeftColor: 'yellow',
  },
  elrendezes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gomb: {
    padding: tavolsag.kicsi,
    width: 100,
    alignItems: 'center',
  },
  kepkontener:{
    position:'relative',
    marginBottom: tavolsag.kicsi,
  },
  kep:{
    width:'50%',
    height:160,
    borderRadius:tavolsag.kicsi
  },
  csillag:{
    position:'absolute',
    top:tavolsag.kicsi,
    right:tavolsag.kicsi,
    fontSize:betumeret.nagy
  }
});
