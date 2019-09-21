import React, { useState } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Button,
   TouchableWithoutFeedback,
   Keyboard,
   Alert,
}                          from 'react-native';
import Colors              from '../constants/colors';
import Card                from '../components/Card';
import Input               from '../components/Input';
import NumberContainer     from '../components/NumberContainer';

const StartGameScreen = (props) => {
   const [enteredValue, setEnteredValue] = useState('');
   const [confirmed, setConfirmed] = useState(false);
   const [selectedNumber, setSelectedNumber] = useState(null);

   const numberInputHandler = (inputText) => {
	  //little validation
	  setEnteredValue(inputText.replace(/[^0-9]/g, ''));
   };

   const resetInputHandler = () => {
	  setEnteredValue('');
	  setConfirmed(false);
   };

   const confirmInputHandler = () => {
	  const chosenNumber = parseInt(enteredValue);
	  if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
		 const btnOk = {
			text: 'Okay',
			style: 'destructive',
			onPress: resetInputHandler,
		 };
		 Alert.alert(
			'Invalid number',
			'Number has to be a number between 1 and 99',
			[btnOk]);
	  }
	  setConfirmed(true);
	  setSelectedNumber(chosenNumber);
	  setEnteredValue('');
	  Keyboard.dismiss();

   };

   let confirmedOutput;

   if (confirmed) {
	  confirmedOutput = (
		 <Card style={ styles.summaryContainer }>
			<Text>You selected</Text>
			<NumberContainer>{ selectedNumber }</NumberContainer>
			<Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
		 </Card>
	  );
   }

   return (
	  <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
		 <View style={ styles.screen }>
			<Text style={ styles.title }>Start a New Game!</Text>
			<Card style={ styles.inputContainer }>
			   <Text>Select a number</Text>
			   <Input style={ styles.input }
					  blurOnSubmit
					  autoCapitalize="none"
					  autoCorrect={ false }
					  keyboardType="number-pad"
					  maxLength={ 3 }
					  onChangeText={ numberInputHandler }
					  value={ enteredValue } />
			   <View style={ styles.buttonContainer }>
				  <View style={ styles.button }>
					 <Button title="Reset"
							 color={ Colors.accent }
							 onPress={ resetInputHandler } />
				  </View>
				  <View style={ styles.button }>
					 <Button title="Confirm"
							 color={ Colors.primary }
							 onPress={ confirmInputHandler } />
				  </View>
			   </View>
			</Card>
			{ confirmedOutput }
		 </View>
	  </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   screen: {
	  flex: 1,
	  padding: 10,
	  alignItems: 'center',
   },
   title: {
	  fontSize: 20,
	  marginVertical: 10,

   },
   inputContainer: {
	  width: '80%',
	  alignItems: 'center',
   },
   input: {
	  minWidth: '15%',
	  textAlign: 'center',
   },
   buttonContainer: {
	  flexDirection: 'row',
	  width: '100%',
	  justifyContent: 'space-between',
	  paddingHorizontal: 15,
   },
   button: {
	  width: 100,
   },
   summaryContainer: {
	  marginTop: 20,
	  alignItems: 'center',
   },
});

export default StartGameScreen;
