import './CloneScriptImage.css'

export default function CloneScriptImage({ className = '', alt, ...props }) {
  return (
    <span className="clonescript-image-brand">
      <img {...props} className={className} alt={alt} />
      <span className="clonescript-image-brand__label" aria-hidden="true">CloneScript</span>
    </span>
  )
}
