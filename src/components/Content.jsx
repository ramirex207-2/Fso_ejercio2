import Part from './Part'
import Total from './Total'
function Content({content}) {
   
  return (
    <>
      <Part parts = {content}/>
      <Total exercises={content} /> 
    </>
  )
}

export default Content