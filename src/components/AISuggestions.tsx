import Markdown from 'react-markdown'

const AISuggestions = ({suggestions}) => {
  return (
    <section className="AISuggestions">
     <Markdown>{suggestions}</Markdown>
    </section>
  )
}

export default AISuggestions