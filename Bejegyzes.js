import { Text, View } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras }) {
  return (
    <View>
      <Text>Cím:{cim}</Text>
      <Text>Hely:{hely}</Text>
      {leiras && <Text>Leírás:{leiras}</Text>}
    </View>
  );
}
