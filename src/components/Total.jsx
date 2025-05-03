import React from 'react'

function Total({exercises}) {

    const totalExercises = exercises.reduce((acumulador, parte) => {
        return acumulador + parte.exercises;
      }, 0);
      
    console.log(totalExercises); 
  return (
    <div>Total {totalExercises}</div>
  )
}

export default Total