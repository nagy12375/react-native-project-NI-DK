import { StyleSheet, View,TextInput, Button } from 'react-native';
import Bejegyzes from './components/Bejegyzes.js';

export default function App() {
  return (
    <View style={styles.container}>
      const [b,setB] = useState([<Bejegyzes cim="Minta" hely="Minta" />]);
      const [cim,setCim] = useState("");
      const [hely,setHely] = useState("");
      <Button onPress={() => setB(s=> s.push(<Bejegyzes cim={cim} hely={hely} />))}/>
      <TextInput onChangeText={setCim}/>
      <TextInput onChangeText={setHely}/>
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
