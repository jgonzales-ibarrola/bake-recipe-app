import Markdown from 'react-markdown'

const AISuggestions = ({suggestions} : {
  suggestions: string;
}) => {
  return (
    <section className="AISuggestions">
     <Markdown>{suggestions}</Markdown>
    </section>
  )
}

export default AISuggestions