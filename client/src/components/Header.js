import {useLocation} from "react-router-dom";
import { Link} from "react-router-dom"
const Header = () => {
    const location = useLocation();

    const {pathname} = location;
    const splitLocation = pathname.split("/");
    return (
        <div className="navBar">


            <ul>
                <li className={splitLocation[1] === "" ? "active" : ""}>
                    
                    <Link to='/'>Home</Link>
                </li>
                <li className={splitLocation[1] === "launches" ? "active" : ""}>
        
                    <Link to='/launches'>Launches</Link>
                    
                </li>
               
            </ul>
        </div>
    )


}

export default Header



  // return (

    //     <div className="navBar">

    //         <ul className="navbar row">
    //             <li>
    //                 <Link to="/" className="hea">Home</Link>
    //             </li>
    //             <li href="#">
    //                 <Link to="/launches" className="hea">
    //                     Launches Details
    //                 </Link>
    //             </li>
    //             <li href="#" className="hea">Contact</li>

    //         </ul>
    //     </div>
    // )