import React                                        from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ id, title, onDelete }) => {
   return (
	  // I can choose different types of 'Touchable...'
	  <TouchableOpacity
		 activeOpacity={ 0.8 }
		 onPress={ () => onDelete(id) }>
		 <View style={ styles.listItem }>
			<Text>{ title }</Text>
		 </View>
	  </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   listItem: {
	  padding: 10,
	  marginVertical: 10,
	  backgroundColor: '#ccc',
	  borderColor: 'black',
	  borderWidth: 1,
   },
});

export default GoalItem;
