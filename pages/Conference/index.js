import { Pressable, View, Text } from 'react-native';

function Conference({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Conference Details</Text>
       <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      <Text>Go to Storfsdyd</Text>
      </Pressable>
    </View>
  );
}

export default Conference;
