import React, {useState, useEffect} from 'react'
import axios from "axios"
import Card from "./Card"

import {Fragment} from 'react'
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
    return (<div className="home">
        <h1 className="container__header">SpaceX Rockets 🚀</h1>

        <div className="container">
            {rockets.map((e,) => (
                <Fragment>

                    <Card e={e} key={e.id} />
                </Fragment>
            ))}

        </div>

    </div>
    )
}

export default Home
