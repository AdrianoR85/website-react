import './card.css'

export default function Card({className, children}) {
  return(
    <article className={`card ${className}`}>
      {children}
    </article>
  )
}