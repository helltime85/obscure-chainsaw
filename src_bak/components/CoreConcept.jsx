function CoreConcept({image, title, description}) {
  return <li>
    <img src={image} className="App-logo-small" alt="logo192" />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </li>
}

export default CoreConcept;