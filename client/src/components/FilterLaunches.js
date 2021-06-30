
import axios from "axios"
import {useEffect,useState} from "react"
import Loader from "./Loader"
export default function FilterLaunches({setLaunches}) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllLaunches()
    }, [])
    const setDefault = (data) => {
        if(data) {

            setLaunches(data)
        } else {
            setLaunches(getAllLaunches())
        }
    }
    const getUpcomingLaunches = async () => {
        const res = await axios.get(
            'https://api.spacexdata.com/v3/launches/upcoming'
        )
        setDefault(res.data)
        setIsLoading(false)
    }

    const getSuccessaunches = async () => {
        const res = await axios.get(
            'https://api.spacexdata.com/v3/launches/?launch_success=true'
        )
        setDefault(res.data)
        setIsLoading(false)

    }

    const getFailedLaunches = async () => {
        const res = await axios.get(
            'https://api.spacexdata.com/v3/launches/?launch_success=false'
        )
        setDefault(res.data)
        setIsLoading(false)
    }
    const getAllLaunches = async () => {
        const res = await axios.get(
            'https://api.spacexdata.com/v3/launches'
        )
        setDefault(res.data)
        setIsLoading(false)

    }
    return (<>
        {isLoading ? <Loader /> : <div className="filter__launch">

            <button className="launch__btn" onClick={() => (getAllLaunches())}>All Launches</button>
            <button className="launch__btn" onClick={() => getSuccessaunches()}>Success</button>
            <button className="launch__btn" onClick={() => getUpcomingLaunches()}>Upcoming</button>
            <button className="launch__btn" onClick={() => getFailedLaunches()}>Failed</button>

        </div>
        }
    </>)
}
