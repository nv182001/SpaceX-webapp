import React, {useState, useEffect} from 'react'
import axios from "axios"

const Home = () => {
    // const [mission, setMission] = useState([])
    const [rockets, setRockets] = useState([])
    const getData = async () => {
        const res = await axios.get("https://api.spacexdata.com/v3/rockets")
        setRockets(res.data)
        console.log(res.data)

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="container">

            {rockets.map((e) => (
                <div className="card" key={e.id} >
                    <h3 className="card__header" >{e.rocket_name}</h3>
                    <div className="card__photo">
                        <img src={e.flickr_images} alt="" className="pic" />
                    </div>
                    <h3 className="card__header"  >Country :{e.country}</h3>
                    <p className="card__content">{e.description}</p>
                    <a href={e.wikipedia}>Read more..</a>
                </div>
            ))}


        </div>
    )
}

export default Home
