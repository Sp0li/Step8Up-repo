import React from 'react'



const Student = ({student}) => {

  return (
    <div>
      <br></br>
      <div>Name: {student.name} {student.age>21 ? " | Mature" : ""}</div>
      <br></br>
      <button onClick={student.onclick(student.name)}>Select Student</button>
    </div>
  )
}

export default Student
