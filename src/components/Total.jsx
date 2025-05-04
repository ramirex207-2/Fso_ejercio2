

function Total({exercises}) {

    const totalExercises = exercises.reduce((acumulador, parte) => {
        return acumulador + parte.exercises;
      }, 0);
      
  return (
    <div>
      <h4>
      Total of {totalExercises} exercises
      </h4>
      
    </div>
  )
}

export default Total