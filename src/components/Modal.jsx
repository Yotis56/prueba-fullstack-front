import ReactDOM from 'react-dom'
import '../styles/modal.css'

const Modal = ({setViewModal, isEdit, setIsEdit, children}) => {

    const handleClick = (event) => {
        const target = event.target
        if (target.classList.contains('modal-background')) {
            if(isEdit){
                setIsEdit(false)
            }
            setViewModal(false)
        }
    }
    const modalRoot = document.getElementById('modal')
    
    return  (
    ReactDOM.createPortal(
        <div className={`modal-background`} onClick={handleClick}>
            {children} 
        </div>
        , modalRoot )
    )
}

export { Modal }