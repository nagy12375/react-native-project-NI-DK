import { StyleSheet, Pressable, Text } from 'react-native';
import { szinek, tavolsag, betumeret } from '../theme.js';

export default function Gomb({ cim, onPress, tipus = 'elsodleges', style = {} }) {
  return (
    <Pressable onPress={onPress} style={[styles.alapgomb, styles[tipus], style]}>
      <Text style={styles.szoveg}>{cim}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  alapgomb: {
    paddingVertical: tavolsag.kicsi,
    paddingHorizontal: tavolsag.kozepes,
    borderRadius: tavolsag.kicsi,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elsodleges: {
    backgroundColor: szinek.elsodleges,
  },
  masodlagos: {
    backgroundColor: szinek.masodlagos,
  },
  veszelyes: {
    backgroundColor: szinek.veszelyes,
  },
  szoveg: {
    color: szinek.feher,
    fontSize: betumeret.kozepes,
  },
});
