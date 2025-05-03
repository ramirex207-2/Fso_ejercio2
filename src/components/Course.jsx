import Header from './Header'
import Content from './Content'
const Course =({course}) => {
  console.log(course)
  
  return (
    <>
    <Header tittle={course.name}/>
    <Content content = {course.parts}/>
    </>
  )
}

export default Course