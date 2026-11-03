import { Button, Text, View } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras, kedvenc, onKedvenc }) {
  return (
    <View>
      <Text>Cím:{cim}</Text>
      <Text>Hely:{hely}</Text>
      {leiras && <Text>Leírás:{leiras}</Text>}
      <Button title={kedvenc ? 'Kedvenc' : 'Nem kedvenc'} onPress={onKedvenc}></Button>
    </View>
  );
}
