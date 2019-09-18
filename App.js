import React                      from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {

   return (
	  <View style={ styles.container }>
		 <View style={ styles.red }>
			<Text>1</Text>
		 </View>
		 <View style={ styles.blue }>
			<Text>2</Text>
		 </View>
		 <View style={ styles.green }>
			<Text>3</Text>
		 </View>
	  </View>
   );
};

const styles = StyleSheet.create({
   container: {
	  padding: 50,
	  flexDirection: 'row',
	  width: '80%',
	  height: 300,
	  justifyContent: 'space-around',
	  alignItems: 'stretch',
	  borderWidth: 2,
	  borderColor: 'red'
   },
   red: {
	  backgroundColor: 'red',
	  justifyContent: 'center',
	  alignItems: 'center',
	  flex: 1,
   },
   blue: {
	  backgroundColor: 'blue',
	  justifyContent: 'center',
	  alignItems: 'center',
	  flex: 1,
   },
   green: {
	  backgroundColor: 'green',
	  justifyContent: 'center',
	  alignItems: 'center',
	  flex: 1,
   },
});

export default App;
