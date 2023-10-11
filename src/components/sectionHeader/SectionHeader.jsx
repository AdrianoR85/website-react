import './sectionHeader.css'

export default function Programs({icon, title, className}) {
  return (
    <div className={`section__header ${className}` }>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>

  )
}