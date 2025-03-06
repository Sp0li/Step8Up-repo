import Student from './components/Student'

import './App.css'

var selectedstudent = "None."

const onClickStudent = (name) => {
  setSelectedStudent(name)
}

const setSelectedStudent = (name) => {
  
}

function App() {

  const students = [
    {name: "Jason", age: 50, subject: "react"},
    {name: "Leo", age: 22, subject: "partying"},
    {name: "teenager", age: 18, subject: "none"}
  ]

  return (
    <>
      <div>
        {students.map((student) => (
          <Student key={student.name} student={student} onclick={onClickStudent}/>
        ))}
      </div>
      <div>
        {selectedstudent && <p>Selected student: {selectedstudent}</p>}
      </div>
    </>
  )
}

export default App
