import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras, kedvenc, onKedvenc }) {
  return (
    <View style={[styles.kartya, kedvenc && styles.kedvenc]}>
      <View style={styles.elrendezes}>
        <Text style={styles.cim}>Cím:{cim}</Text>
        <Pressable onPress={onKedvenc} style={({ pressed }) => [styles.gomb, pressed && { opacity: 0.6 }]}>
          <Text style={{ color: 'white' }}>{kedvenc ? 'Kedvenc' : 'Nem kedvenc'}</Text>
        </Pressable>
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
    padding: 16,
    margin: 10,
    borderRadius: 12,
    borderWidth: 2,
    width: '80%',
  },
  cim: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
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
    backgroundColor: 'blue',
    padding: 5,
    width: 100,
    alignItems: 'center',
  },
});
