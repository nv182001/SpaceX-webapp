import React, {useState, useEffect, Fragment} from 'react'
import LaunchData from './LaunchData'
import ReactPaginate from 'react-paginate'
import FilterLaunches from './FilterLaunches'

export default function Launches() {
    const [launches, setLaunches] = useState([])
    const [offset, setOffset] = useState(1)
    const [pageData, setPageData] = useState([])
    const [pageCount, setPageCount] = useState(0)

    const perPage = 10

    const getData = async () => {
        const slice = launches?.slice(
            (offset - 1) * 10,
            (offset - 1) * 10 + perPage
        )
        setPageData(slice)
        setPageCount(Math.ceil(launches.length / perPage))
    }
    const handlePageClick = e => {
        const selectedPage = e.selected
        setOffset(selectedPage + 1)
    }
  useEffect(() => {
      if(launches) {
          getData()
    }
      
  }, [offset, launches])
 
    return (
        <Fragment>

            <div className="launches">

                <FilterLaunches setLaunches={setLaunches}/>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Launched (UTC)</th>
                            <th>Location</th>
                            <th>Mission Name</th>
                            <th>Orbit</th>
                            <th>Launch Status</th>
                            <th>Rocket</th>
                        </tr>
                    </thead>
                    <tbody>
                        <LaunchData data={pageData} />
                    </tbody>

                </table>
                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'. . .'}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </Fragment>

    )
}
