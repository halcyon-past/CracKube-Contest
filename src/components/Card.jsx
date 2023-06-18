import "./Card.css"

function Card(props) {
  return (
    <div className = "card">
        <div className = "card-image">
            <img src = {props.img} alt = "card image" />
        </div>
        <div className = "card-content">
            <div className = "card-type">
                <h3>{props.type}</h3>
                <p>{props.time}</p>
            </div>
            <h2><b>{props.title}</b></h2>
            <p>{props.desc}</p>
            <a href="#">{"Read More -> "}</a>
        </div>
    </div>
  )
}

export default Card;