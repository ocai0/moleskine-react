import { useState } from "react";
import Backdrop from "./Backdrop"
import DeleteModal from "./DeleteModal"

function Todo(props) {
    const { id, data } = props.data;
    const [completed, setCompleted] = useState(props.data.completed ?? false)
    const [modalIsVisible, setModalIsVisible] = useState(false)

    const showModal = () => setModalIsVisible(true)
    const hideModal = () => setModalIsVisible(false)
    return (
        <div>
            <section className="todo">
                <h1>{data}</h1>
                <label>
                    <input type="checkbox" onChange={ () => setCompleted(!completed) } checked={completed} />
                    {completed ? 'Completed' : 'Not Completed'}
                </label>
                <p>
                    <button onClick={showModal}>Actions</button>
                </p>
            </section>
            {modalIsVisible && 
                <Backdrop onClick={hideModal}>
                    <DeleteModal onConfirm={hideModal} onCancel={hideModal}/>
                </Backdrop>
            }
        </div>
    );
}
export default Todo;