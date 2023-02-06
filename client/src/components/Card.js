import React from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';
import {useQuery} from '@apollo/client';
import {QUERY_WORKOUT} from '../utils/queries';

const Card = ({dayOfTheWeek}) => {
  const {loading, data} = useQuery(QUERY_WORKOUT, {
    variables: {dayOfTheWeek},
  });

  const workouts = data?.workout || [];

  // Returns Workout Summary Card Content

  return (
    <div className='card example'>
      <h1 id='center__text'>{dayOfTheWeek}</h1>
      {/* Workout Summary Table */}
      <table class='styled-table'>
        <thead>
          <tr>
            <th>Workout</th>
            <th>Weight</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Barbell back squat</td>
            <td>141 lb</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Dumbbell Lateral Raise</td>
            <td>34 lb</td>
            <td>2</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
      {/* Add / Update Workout Button */}
      <div id='centerButton'>
        <Button variant='primary'>Add / Update Workout</Button>
      </div>
    </div>
  );
};

export default Card;
