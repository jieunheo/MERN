import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const DEMO_GOALS = [
  { id: 'cg1', text: 'Finish the Course' },
  { id: 'cg2', text: 'Learn all about the Course Main Topic' },
  { id: 'cg3', text: 'Help other students in the Course Q&amp;A' },
];

const App = () => {
  const [courseGoals, setCourseGoals] = useState(DEMO_GOALS);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(prevGoals => [...prevGoals, newGoal]);
    setCourseGoals(courseGoals.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
