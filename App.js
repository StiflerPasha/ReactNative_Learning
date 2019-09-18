import React, { useState }            from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem                       from './components/GoalItem';
import GoalInput                      from './components/GoalInput';

const App = () => {
   const [courseGoals, setCourseGoals] = useState([]);

   const addGoalHandler = (goalTitle) => {
	  if (goalTitle.trim()) {
		 const newGoal = {
			id: Math.random().toString(),
			value: goalTitle,
		 };
		 setCourseGoals(currentGoals => [...currentGoals, newGoal]);
	  }
	  //setEnteredGoal('');
   };

   const removeGoalHandler = (goalId) => {
	  setCourseGoals(currentGoals => {
		 return currentGoals.filter(goal => goal.id !== goalId);
	  });
   };

   return (
	  <View style={ styles.screen }>
		 <GoalInput onAddGoal={ addGoalHandler } />
		 <FlatList
			//change 'KEY to smth else e.g. ID'
			keyExtractor={ (item) => item.id }
			data={ courseGoals }
			renderItem={ itemData => (
			   <GoalItem
				  id={ itemData.item.id }
				  title={ itemData.item.value }
				  onDelete={ removeGoalHandler } />

			) } />
	  </View>
   );
};

const styles = StyleSheet.create({
   screen: {
	  padding: 50,
   },

   /*goalsList: {
	  height: '50%',
	  borderWidth: 2,
	  borderColor: 'red',
   },*/
});

export default App;
