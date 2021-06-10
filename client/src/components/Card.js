import Modal1 from "./Modal"

const Card = ({e}) => {
    return (

        <div className="card" key={e.id} >
            <h3 className="card__header" >{e.rocket_name}</h3>
            <div className="card__photo">
                <img src={e.flickr_images[1]} alt="" className="pic" />
            </div>
            <h3 className="card__header"  >Country :{e.country}</h3>
            <p className="card__content">{e.description}</p>
            {/* <a href="#" id={`popup${e.id}`}>
                View more..</a> */}
            <Modal1 id={e.id} e={e} />
        </div>

    )
}

export default Card
