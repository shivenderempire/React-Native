import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onGoalAdded = goaltile => {
    setCourseGoals(prevstate => [
      ...prevstate,
      {id: Math.random().toString(), value: goaltile},
    ]);
    setIsModalOpen(false);
  };

  const onDeleteHandler = goalid => {
    setCourseGoals(prevstate => {
      return prevstate.filter(filter => filter.id !== goalid);
    });
  };
  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        onPress={() => {
          console.log('Clicked');
          setIsModalOpen(true);
        }}></Button>
      <GoalInput
        onGoalAdded={onGoalAdded}
        visible={isModalOpen}
        onGoalCancelHandler={() => {
          setIsModalOpen(false);
        }}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={onDeleteHandler} item={itemData.item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 50},
});
