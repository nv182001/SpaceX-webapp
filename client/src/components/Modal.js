import {useState} from "react"
import Modal from "react-modal"
import Carousel1 from "./Carousel"

Modal.setAppElement('#root')
const Modal1 = ({e}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <div className="modal">
            <button onClick={openModal} className="btn">View More...</button>
            <Modal key={e.id}
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // contentLabel="Example Modal"
                ShouldCloseOnOverClick={false}
                style={
                    {
                        overlay: {backgroundColor: 'gray'},
                    }, {
                        content: {
                            display: 'flex',
                            flexWrap: "wrap",
                            margin: 'auto',
                            width: 340,
                            // height: 530,
                            maxHeight: 560,
                            color: 'orange', overflow: 'hidden',
                            alignItems: "center", justifyContent: "center"

                        }
                    }
                }
            >
                <h3 className="modal__header" >{e.rocket_name}</h3>
                <hr />

                <div className="card__photo">
                    <Carousel1 e={e} key={e.id} />
                </div>
                <div className="modal__info">
                    <div className="info__column">
                        <h2>Height</h2>
                        <p >{e.height.feet} feet</p>
                        <h2>Diameter</h2>
                        <p >{e.diameter.feet} feet</p>
                    </div>
                    <div className="info__column">
                        <h2>Mass</h2>
                        <p >{e.mass.kg} tonne</p>
                        <h2>First Flight</h2>
                        <p >{e.first_flight} </p>
                    </div>
                    <div className="info__column">
                        <h2>Active</h2>
                        <p >{e.active ? 'Yes' : 'No'} </p>
                        <h2>Cost/Launch</h2>
                        <p >${e.cost_per_launch / 1000000} Million </p>
                    </div>

                </div>


                <button onClick={closeModal} className="close__btn">close</button>


            </Modal>
        </div >
    )
}

export default Modal1