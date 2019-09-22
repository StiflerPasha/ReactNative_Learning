import React                                        from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card                                         from '../components/Card';
import NumberContainer                              from '../components/NumberContainer';
import Colors                                       from '../constants/colors';


const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {

   return (
	  <View style={ styles.screen }>
		 <Text style={ styles.gameOver }>Game Over!</Text>
		 <TouchableOpacity onPress={ onRestart } style={ styles.button }>
			<Text>NEW GAME</Text>
		 </TouchableOpacity>
		 <View style={ styles.resultsContainer }>
			<Card style={ styles.results }>
			   <Text>Number of rounds: </Text>
			   <NumberContainer style={ styles.number }>{ roundsNumber }</NumberContainer>
			</Card>
			<Card style={ styles.results }>
			   <Text>Number was: </Text>
			   <NumberContainer style={ styles.number }>{ userNumber }</NumberContainer>
			</Card>
		 </View>
	  </View>
   );
};

const styles = StyleSheet.create({
   screen: {
	  flex: 1,
	  justifyContent: 'space-around',
	  alignItems: 'center',
   },
   gameOver: {
	  color: 'red',
	  fontSize: 42,
   },
   resultsContainer: {
	  flexDirection: 'row',
	  width: '100%',
	  justifyContent: 'space-around',

   },
   results: {
	  padding: 5,
	  width: '35%',
	  justifyContent: 'center',
	  alignItems: 'center',
   },
   button: {
	  justifyContent: 'center',
	  alignItems: 'center',
	  height: 150,
	  width: 150,  //The Width must be the same as the height
	  borderRadius: 300, //Then Make the Border Radius twice the size of width or Height
	  backgroundColor: Colors.accent,
   },
   number: {
	  width: '50%',
	  textAlign: 'center',
   },
});

export default GameOverScreen;
