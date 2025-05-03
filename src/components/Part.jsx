
function Part(props) {
    const parts = props.parts.content
  return (
    <ul>
        {parts.map(part =>
            <li key={part.id}>
                {part.name}
            </li>
            )
        }
    </ul>
  )
}

export default Part