import React from 'react';
import '../App.css';

const Card = ({ workouts }) => {

  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <div>
      {workouts.map((workout) => (
        <div className='card' key={workout.dayOfTheWeek}>
          <h1 id='center__text'>{workout.dayOfTheWeek}</h1>
          <table>
            <tr>
              <th>Workout</th>
              <th>Weight</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Notes</th>
            </tr>
            <tr>
              <td>{workout.exerciseName}</td>
              <td>{workout.weight}</td>
              <td>{workout.reps}</td>
              <td>{workout.sets}</td>
              <td>{workout.other}</td>
            </tr>
          </table>
        </div>
      ))}
      {/* <button>Add/Change Workout</button> */}
    </div>
  );
}

export default Card;
