import React, {useState, useEffect} from 'react'
import axios from "axios"
import Card from "./Card"
import Filter from "./Filter"
import Loader from './Loader'

import {Fragment} from 'react'
const Home = () => {
    const [selectedHeight, setSelectedHeight] = useState("")
    const [rockets, setRockets] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getrocketData = async () => {
        const res = await axios.get("https://api.spacexdata.com/v3/rockets")
        setRockets(res.data)
        setIsLoading(false)
        const filteredData = []
        res.data.map((e) => {if(e.height.feet >= selectedHeight) filteredData.push(e)})
        setRockets(filteredData)

    }
    useEffect(() => {

        getrocketData()
        // getFilteredData()
    }, [selectedHeight])

    return (
        <div className="home">
            <h1 className="home_title">SpaceX Rockets 🚀 </h1>
            <Filter selectedHeight={selectedHeight} setSelectedHeight={setSelectedHeight} />
            {isLoading ? <Loader /> :(
                <div className="container" >
                    {rockets.map((e) => (
                        <Fragment key={e.id}>
                            <Card e={e} key={e.id} />
                        </Fragment>
                    ))}

                </div>)}

        </div>
    )
}

export default Home
