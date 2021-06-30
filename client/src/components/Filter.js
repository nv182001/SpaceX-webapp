const Filter = ({selectedHeight, setSelectedHeight}) => {

    return (
        <div className="filter">
            <select className="select" value={selectedHeight} onChange={(e) => {
                const setHeight = e.target.value
                setSelectedHeight(setHeight)
                console.log(setHeight)
            }}>
                <option value="0" >Select Height</option>
                <option value="100">More than 100</option>
                <option value="200">More than 200</option>
                <option value="300">More than 300</option>
            </select>

        </div>
    )
}

export default Filter
