import React, { useState }                            from 'react';
import { Modal, Button, TextInput, View, StyleSheet } from 'react-native';

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
   const [enteredGoal, setEnteredGoal] = useState('');

   const goalInputHandler = (enteredText) => {
	  setEnteredGoal(enteredText);
   };

   const onAddGoalHandler = () => {
	  onAddGoal(enteredGoal);
	  setEnteredGoal('');
   };

   const onCancelHandler = () => {
	  onCancel();
	  setEnteredGoal('');
   };

   return (
	  <Modal visible={ visible } animationType="slide">
		 <View style={ styles.inputContainer }>
			<TextInput
			   placeholder="Course Goal"
			   style={ styles.input }
			   onChangeText={ goalInputHandler }
			   value={ enteredGoal } />
			<View style={ styles.buttonContainer }>
			   <View style={ styles.button }>
				  <Button title="ADD" onPress={ onAddGoalHandler } />
			   </View>
			   <View style={ styles.button }>
				  <Button title="CANCEL" color="red" onPress={ onCancelHandler } />
			   </View>
			</View>
		 </View>
	  </Modal>
   );
};

const styles = StyleSheet.create({
   inputContainer: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
   },
   input: {
	  width: '80%',
	  borderBottomColor: 'black',
	  borderWidth: 1,
	  padding: 10,
	  marginBottom: 10,
   },
   buttonContainer: {
	  flexDirection: 'row',
	  justifyContent: 'space-around',
	  width: '60%',
   },
   button: {
	  width: '40%',
   },
});

export default GoalInput;
